import { useEffect, useMemo, useState } from "react";
import { createClient, type Session } from "@supabase/supabase-js";
import { Helmet } from "react-helmet-async";

const SUPABASE_URL = "https://kexbdrprepqvzwnzibzl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_d7vKw2-2Gm6U9rHJStZvPw_pDvBmeFJ";

const ResetPassword = () => {
  const supabase = useMemo(
    () =>
      createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
        auth: {
          detectSessionInUrl: true,
          persistSession: false,
          autoRefreshToken: false,
        },
      }),
    []
  );

  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let mounted = true;

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) return;
      if (nextSession) {
        setSession(nextSession);
        setChecking(false);
      }
    });

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setChecking(false);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const savePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 10) {
      setError("La contraseña debe tener al menos 10 caracteres.");
      return;
    }
    if (password !== repeat) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (!session) {
      setError("El enlace de recuperación no es válido o ha caducado.");
      return;
    }

    setSaving(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSaving(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    await supabase.auth.signOut();
    setPassword("");
    setRepeat("");
    setMessage("Contraseña actualizada correctamente. Ya puedes volver al portal CFOnomic e iniciar sesión.");
  };

  return (
    <>
      <Helmet>
        <title>Restablecer contraseña | CFOnomic</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <section className="w-full max-w-md rounded-2xl border border-border bg-background p-7 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">CFOnomic</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Nueva contraseña</h1>

          {checking ? (
            <p className="mt-5 text-muted-foreground">Comprobando el enlace de recuperación…</p>
          ) : message ? (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              {message}
            </div>
          ) : !session ? (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              Este enlace de recuperación no es válido o ha caducado. Solicita uno nuevo desde el portal.
            </div>
          ) : (
            <form onSubmit={savePassword} className="mt-6 space-y-4">
              <label className="block text-sm font-semibold">
                Nueva contraseña
                <input
                  type="password"
                  autoComplete="new-password"
                  minLength={10}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5"
                />
              </label>

              <label className="block text-sm font-semibold">
                Repetir contraseña
                <input
                  type="password"
                  autoComplete="new-password"
                  minLength={10}
                  required
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5"
                />
              </label>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-lg bg-foreground px-4 py-3 font-bold text-background disabled:opacity-60"
              >
                {saving ? "Guardando…" : "Guardar nueva contraseña"}
              </button>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Mínimo 10 caracteres. CFOnomic no puede ver ni recuperar tu contraseña.
              </p>
            </form>
          )}
        </section>
      </main>
    </>
  );
};

export default ResetPassword;
