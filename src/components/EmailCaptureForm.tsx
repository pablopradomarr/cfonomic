import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface EmailCaptureFormProps {
  buttonText?: string;
  buttonClassName?: string;
  microcopy?: string;
  className?: string;
  variant?: "inline" | "stacked" | "compact";
  dark?: boolean;
  source?: string;
  onSuccess?: () => void;
}

const EmailCaptureForm = ({
  buttonText = "Envíame el diagnóstico",
  buttonClassName = "",
  microcopy = "Te lo mando por email. Sin spam. Si no te aporta, te borras.",
  className = "",
  variant = "inline",
  dark = false,
  source = "web",
  onSuccess,
}: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [privacidadError, setPrivacidadError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!email || !email.includes("@")) {
      setError("Oye, aquí falta un email válido.");
      hasError = true;
    } else {
      setError("");
    }
    if (!privacidad) {
      setPrivacidadError("Necesito que aceptes la política de privacidad.");
      hasError = true;
    } else {
      setPrivacidadError("");
    }
    if (hasError) return;

    setLoading(true);

    try {
      const { error: fnError } = await supabase.functions.invoke("capture-lead", {
        body: { email, source },
      });

      if (fnError) {
        console.error("capture-lead error:", fnError);
      }
    } catch (err) {
      console.error("Network error:", err);
    }

    setLoading(false);
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className={`border border-foreground/10 p-6 ${className}`}>
        <p className="font-heading text-lg font-bold">✓ Listo. Revisa tu bandeja.</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Si no lo ves, mira en spam.
        </p>
      </div>
    );
  }

  const textColor = dark ? "text-surface-dark-foreground" : "text-foreground";
  const mutedColor = dark ? "text-surface-dark-foreground/40" : "text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} ${
        variant === "inline"
          ? "flex flex-col sm:flex-row flex-wrap gap-3 items-start"
          : "flex flex-col gap-3"
      }`}
    >
      <div className={variant === "inline" ? "flex-1 w-full sm:w-auto" : "w-full"}>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={`w-full border-b-2 bg-transparent px-0 py-3 font-mono text-sm 
                     placeholder:text-muted-foreground focus:outline-none transition-colors
                     ${dark
                       ? "border-surface-dark-foreground/30 focus:border-accent text-surface-dark-foreground"
                       : "border-foreground/20 focus:border-accent text-foreground"
                     }`}
          required
          disabled={loading}
        />
        {error && <p className="mt-1 text-xs text-destructive font-mono">{error}</p>}
      </div>

      <div className="w-full flex items-start gap-3 mt-1">
        <input
          type="checkbox"
          checked={privacidad}
          onChange={(e) => {
            setPrivacidad(e.target.checked);
            if (privacidadError) setPrivacidadError("");
          }}
          className="mt-0.5 h-4 w-4 accent-accent shrink-0"
          id={`privacidad-${source}`}
        />
        <label htmlFor={`privacidad-${source}`} className={`text-[11px] leading-relaxed ${mutedColor}`}>
          Acepto la{" "}
          <Link to="/politica-de-privacidad" className={`border-b ${dark ? "border-surface-dark-foreground/20 hover:border-surface-dark-foreground" : "border-foreground/20 hover:border-foreground"} transition-colors`}>
            política de privacidad
          </Link>{" "}
          y la{" "}
          <Link to="/politica-de-cookies" className={`border-b ${dark ? "border-surface-dark-foreground/20 hover:border-surface-dark-foreground" : "border-foreground/20 hover:border-foreground"} transition-colors`}>
            política de cookies
          </Link>.
        </label>
      </div>
      {privacidadError && <p className="w-full text-xs text-destructive font-mono">{privacidadError}</p>}

      <Button type="submit" variant="accent" size="lg" className={`w-full sm:w-auto whitespace-nowrap text-sm ${buttonClassName}`} disabled={loading}>
        {loading ? "Enviando..." : buttonText}
      </Button>
      {microcopy && (
        <p className={`text-[11px] w-full font-mono ${mutedColor}`}>
          {microcopy}
        </p>
      )}
    </form>
  );
};

export default EmailCaptureForm;
