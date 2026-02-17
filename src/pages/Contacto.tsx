import { useState } from "react";
import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    facturacion: "",
    mensaje: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Oye, ¿cómo te llamas?";
    if (!formData.email || !formData.email.includes("@")) newErrors.email = "Necesito un email válido.";
    if (!formData.privacidad) newErrors.privacidad = "Necesito que aceptes la política de privacidad.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <Section>
        <FadeIn>
          <div className="container-narrow mx-auto text-center py-16">
            <h1 className="text-4xl font-heading font-bold text-heading">✓ Recibido</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Te respondo en menos de 24 horas. Si no ves nada, mira en spam.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4"
            >
              ← Volver al inicio
            </Link>
          </div>
        </FadeIn>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <FadeIn>
          <SectionHeading
            title="Contacto"
            subtitle="Cuéntame qué te preocupa. Sin formularios de 20 campos ni respuestas automáticas."
          />
        </FadeIn>
      </Section>

      <Section paper>
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
              <div>
                <label className="block text-sm font-heading font-semibold text-heading mb-1">Nombre *</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Tu nombre"
                />
                {errors.nombre && <p className="mt-1 text-sm text-destructive">{errors.nombre}</p>}
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-heading mb-1">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-heading mb-1">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-heading mb-1">Facturación anual</label>
                <select
                  value={formData.facturacion}
                  onChange={(e) => handleChange("facturacion", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="<300K">Menos de 300.000 €</option>
                  <option value="300K-1M">300.000 € – 1M €</option>
                  <option value="1M-3M">1M € – 3M €</option>
                  <option value="3M-10M">3M € – 10M €</option>
                  <option value=">10M">Más de 10M €</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-heading mb-1">¿Qué te preocupa?</label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Cuéntame brevemente tu situación"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.privacidad}
                  onChange={(e) => handleChange("privacidad", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-input accent-accent"
                  id="privacidad"
                />
                <label htmlFor="privacidad" className="text-xs text-muted-foreground leading-relaxed">
                  Acepto la política de privacidad. No vendo tu email. Lo odio tanto como tú.
                </label>
              </div>
              {errors.privacidad && <p className="text-sm text-destructive">{errors.privacidad}</p>}

              <Button type="submit" variant="accent" size="lg" className="w-full">
                Envíame esto
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="card-editorial p-6">
                <h3 className="font-heading text-lg font-bold text-heading">Si prefieres, agenda 15 min</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Hablamos de tu situación, te cuento cómo trabajo y vemos si encajamos. Sin
                  compromiso. Sin PowerPoint de 47 slides.
                </p>
                <Link
                  to="/diagnostico-financiero"
                  className="mt-4 inline-flex items-center justify-center rounded-md border-2 border-border px-5 py-2.5 text-sm font-heading font-semibold text-heading hover:bg-surface-paper transition-all"
                >
                  Agendar llamada →
                </Link>
              </div>

              <div className="card-editorial p-6">
                <h3 className="font-heading text-lg font-bold text-heading">Diagnóstico gratis</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Si no tienes claro por dónde empezar, haz el diagnóstico financiero. En 5 minutos
                  tienes claridad.
                </p>
                <Link
                  to="/diagnostico-financiero"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-heading font-bold text-accent-foreground hover:bg-accent/85 transition-all"
                >
                  Hacer diagnóstico →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};

export default Contacto;
