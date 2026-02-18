import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const CasosDeExito = () => (
  <>
    <SEO
      title="Casos prácticos de gestión financiera — CFOnomic"
      description="Empresas reales que pasaron de decidir por intuición a decidir con datos. Resultados de asesoría financiera para PYMEs."
      canonical="/casos-de-exito"
      breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Casos de éxito", path: "/casos-de-exito" }]}
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Casos</span>
          <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
            <span className="font-display italic font-normal">Medir</span><span className="text-accent">.</span> Ajustar<span className="text-accent">.</span> <span className="font-display italic font-normal">Repetir</span><span className="text-accent">.</span>
          </p>
          <h1 className="mt-6 max-w-full text-base text-muted-foreground leading-relaxed font-body font-normal">
            Casos prácticos de gestión financiera: empresas reales que pasaron de decidir por intuición a tener control financiero con datos.
          </h1>
        </FadeIn>
      </div>
    </section>

    <div className="container-wide">
      <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {[
          { tag: "Turismo activo", name: "Turicleta", line: "Control para crecer sin caos", desc: "Empresa en expansión con inversión fuerte, crecimiento rápido y caja comprometida.", path: "/casos-de-exito/turicleta" },
          { tag: "Restauración", name: "Impasto", line: "Rentabilidad real por canal y menú", desc: "Vendían mucho pero no sabían por qué canal ganaban y por cuál perdían.", path: "/casos-de-exito/impasto" },
        ].map((c, i) => (
          <FadeIn key={c.name} delay={i * 0.1}>
            <Link to={c.path} className="block bg-background p-10 md:p-16 group h-full">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{c.tag}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold tracking-tighter group-hover:text-accent transition-colors">
                {c.name}<span className="text-accent">.</span>
              </h2>
              <p className="mt-1 text-sm font-heading font-semibold text-foreground/50">{c.line}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">{c.desc}</p>
              <span className="mt-8 inline-block text-[11px] font-mono uppercase tracking-[0.1em] text-foreground/30 group-hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
                Ver caso →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>

    <Section dark>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter" role="presentation">
            ¿Quieres ser el <span className="font-display italic font-normal">próximo</span><span className="text-accent">?</span>
          </p>
          <h2 className="mt-4 text-sm text-surface-dark-foreground/50">
            Solicita tu diagnóstico financiero gratuito y descubre las palancas de mejora de tu empresa.
          </h2>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm buttonText="Quiero mi diagnóstico" microcopy="Te mando el diagnóstico y 3 mejoras rápidas." variant="stacked" dark />
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {[
              { label: "Servicios", path: "/servicios" },
              { label: "Diagnóstico Financiero", path: "/diagnostico-financiero" },
              { label: "Recursos", path: "/recursos" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-[11px] font-mono uppercase tracking-[0.1em] text-surface-dark-foreground/30 hover:text-accent transition-colors border-b border-surface-dark-foreground/10 pb-0.5">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default CasosDeExito;
