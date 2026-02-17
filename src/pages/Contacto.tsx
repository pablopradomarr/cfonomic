import { useState } from "react";
import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "", email: "", empresa: "", facturacion: "", mensaje: "", privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Oye, ¿cómo te llamas?";
    if (!formData.email || !formData.email.includes("@")) newErrors.email = "Necesito un email válido.";
    if (!formData.privacidad) newErrors.privacidad = "Necesito que aceptes la privacidad.";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
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
          <div className="max-w-lg mx-auto text-center py-20">
            <span className="number-display">✓</span>
            <h1 className="mt-6 text-3xl font-heading font-bold tracking-tight">Recibido</h1>
            <p className="mt-3 text-sm text-muted-foreground">Te respondo en menos de 24 horas.</p>
            <Link to="/" className="mt-6 inline-block text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground border-b border-foreground/20 pb-0.5">
              ← Volver al inicio
            </Link>
          </div>
        </FadeIn>
      </Section>
    );
  }

  const inputClass = "w-full border-b-2 border-foreground/10 bg-transparent px-0 py-3 text-sm font-body focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground";

  return (
    <>
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <span className="tag-label mb-6 block">Contacto</span>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-3xl">
              Cuéntame qué te <span className="font-display italic font-normal">preocupa</span><span className="text-accent">.</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Sin formularios de 20 campos ni respuestas automáticas.</p>
          </FadeIn>
        </div>
      </section>

      <Section paper>
        <div className="grid md:grid-cols-12 gap-16">
          <FadeIn className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Nombre *</label>
                <input type="text" value={formData.nombre} onChange={(e) => handleChange("nombre", e.target.value)} className={inputClass} placeholder="Tu nombre" />
                {errors.nombre && <p className="mt-1 text-xs text-destructive font-mono">{errors.nombre}</p>}
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass} placeholder="tu@email.com" />
                {errors.email && <p className="mt-1 text-xs text-destructive font-mono">{errors.email}</p>}
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Empresa</label>
                <input type="text" value={formData.empresa} onChange={(e) => handleChange("empresa", e.target.value)} className={inputClass} placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Facturación anual</label>
                <select value={formData.facturacion} onChange={(e) => handleChange("facturacion", e.target.value)} className={`${inputClass} cursor-pointer`}>
                  <option value="">Selecciona un rango</option>
                  <option value="<300K">{"< 300K €"}</option>
                  <option value="300K-1M">300K – 1M €</option>
                  <option value="1M-3M">1M – 3M €</option>
                  <option value="3M-10M">3M – 10M €</option>
                  <option value=">10M">{"> 10M €"}</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">¿Qué te preocupa?</label>
                <textarea value={formData.mensaje} onChange={(e) => handleChange("mensaje", e.target.value)} rows={4} className={`${inputClass} resize-none border-b-2`} placeholder="Cuéntame brevemente" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={formData.privacidad} onChange={(e) => handleChange("privacidad", e.target.checked)} className="mt-1 h-4 w-4 accent-accent" id="privacidad" />
                <label htmlFor="privacidad" className="text-[11px] text-muted-foreground leading-relaxed">
                  Acepto la política de privacidad. No vendo tu email. Lo odio tanto como tú.
                </label>
              </div>
              {errors.privacidad && <p className="text-xs text-destructive font-mono">{errors.privacidad}</p>}
              <Button type="submit" variant="accent" size="lg" className="w-full">Envíame esto</Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-5">
            <div className="space-y-6">
              <div className="border border-foreground/10 p-6 md:p-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">Alternativa</p>
                <h3 className="font-heading text-lg font-bold tracking-tight">Agenda 15 min</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Hablamos de tu situación. Sin compromiso. Sin PowerPoint.
                </p>
              </div>
              <div className="border border-foreground/10 p-6 md:p-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">No sabes por dónde empezar</p>
                <h3 className="font-heading text-lg font-bold tracking-tight">Diagnóstico gratis</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  5 minutos. Claridad inmediata.
                </p>
                <Link to="/diagnostico-financiero" className="mt-4 inline-flex bg-foreground text-background px-5 py-2 text-[11px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-foreground/85 transition-colors">
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
