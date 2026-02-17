import { Section, FadeIn, SectionHeading, BulletList, Divider } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Servicios = () => (
  <>
    {/* HERO */}
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Servicios</span>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl">
            Tu departamento <span className="font-display italic font-normal">financiero</span><span className="text-accent">.</span>
            <br />
            <span className="text-muted-foreground">El de <span className="font-display italic">verdad</span>.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            Lo que una multinacional tiene con un equipo de 10, tú lo tienes con uno.
            Sin contratar, sin complicaciones, sin humo.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* GESTORÍA VS CFO */}
    <Section>
      <FadeIn>
        <SectionHeading tag="La diferencia" title="Gestoría vs. Dirección financiera" />
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">Tu gestoría</p>
            <div className="space-y-3 text-sm text-foreground/60">
              {[
                "Te hace los impuestos (obligatorio).",
                "Te da la contabilidad… 3 meses después.",
                "No te dice qué producto gana o pierde.",
                "No te ayuda a decidir precios.",
                "No te prevé la caja.",
                "No te monta un presupuesto.",
              ].map((item) => (
                <p key={item} className="border-l border-foreground/10 pl-4 py-1">{item}</p>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic">Necesario. Pero no suficiente.</p>
          </div>
          <div className="bg-surface-dark text-surface-dark-foreground p-8 md:p-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-surface-dark-foreground/40 mb-6">CFOnomic</p>
            <div className="space-y-3 text-sm text-surface-dark-foreground/70">
              {[
                "Cierre mensual con reporting accionable.",
                "PyG analítica por línea, canal, cliente.",
                "Cashflow y previsión de caja.",
                "Presupuesto + control de desviaciones.",
                "Cuadro de mando con KPIs que entiendes.",
                "Acompañamiento en decisiones estratégicas.",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-1">→</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <p className="mt-6 text-xs font-heading font-bold text-accent">Tu brújula financiera. Cada mes.</p>
          </div>
        </div>
      </FadeIn>
    </Section>

    {/* QUÉ HACEMOS */}
    <Section paper>
      <FadeIn>
        <SectionHeading tag="Qué hacemos" title="Exactamente esto" />
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
        {[
          { title: "Cierres mensuales", desc: "Sabes cada mes dónde estás. Sin esperar al trimestre." },
          { title: "PyG analítica", desc: "Márgenes por línea, canal y cliente. Ves qué gana y qué sangra." },
          { title: "Control de caja", desc: "Cashflow operativo, NOF, plazos de cobro/pago." },
          { title: "Presupuesto", desc: "Tu mapa financiero. Sabes si vas por el camino o te has desviado." },
          { title: "KPIs", desc: "Tu brújula. Los 5–8 indicadores que de verdad importan." },
          { title: "Decisiones", desc: "Precios, estructura, inversión, financiación. Con números." },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.05}>
            <div className="bg-background p-6 md:p-8 h-full">
              <h3 className="font-heading text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>

    {/* MÉTODO */}
    <Section>
      <FadeIn>
        <SectionHeading tag="Método" title="Cómo trabajamos" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-foreground/10 border border-foreground/10">
          {["Ponemos orden", "Creamos sistema", "Medimos", "Decidimos", "Repetimos"].map(
            (step, i) => (
              <div key={step} className="bg-background p-6 text-center">
                <span className="font-heading text-3xl font-bold text-foreground/5">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-xs font-heading font-bold tracking-tight">{step}</p>
              </div>
            )
          )}
        </div>
      </FadeIn>
    </Section>

    {/* PARA QUIÉN */}
    <Section paper>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Para quién es" />
            <BulletList icon="✓" items={[
              "PYMEs con 500K–10M € de facturación.",
              "Startups que necesitan reporting.",
              "CEOs que quieren decidir con datos.",
              "Empresas en crecimiento que necesitan estructura.",
              "Negocios que quieren dejar de improvisar.",
            ]} />
          </div>
          <div>
            <SectionHeading title="Para quién NO" />
            <BulletList icon="✕" items={[
              "Si buscas una gestoría.",
              "Si quieres un PDF bonito para un cajón.",
              "Si no quieres mirar los números.",
              "Si esperas milagros sin cambios.",
              "Si facturas menos de 300K sin estructura.",
            ]} />
          </div>
        </div>
      </FadeIn>
    </Section>

    {/* FAQ */}
    <Section>
      <FadeIn>
        <SectionHeading tag="FAQ" title="Preguntas frecuentes" />
        <div className="max-w-3xl">
          {[
            { q: "¿Es lo mismo que una gestoría?", a: "No. Tu gestoría hace impuestos. Nosotros: dirección financiera. Son complementarios." },
            { q: "¿Cuánto cuesta?", a: "Depende del alcance. Lo hablamos en 15 minutos. Sin compromiso." },
            { q: "¿Cuánto tarda en verse resultados?", a: "En 30–60 días el primer cierre. En 3–6 meses, sistema completo." },
            { q: "¿Necesito cambiar de gestoría?", a: "No. Trabajamos con la tuya." },
            { q: "¿Qué herramientas usáis?", a: "Las que ya tengas. No te obligamos a cambiar." },
            { q: "¿Solo para empresas grandes?", a: "No. Desde 500K de facturación tiene sentido." },
            { q: "¿Puedo contratar un mes?", a: "Sí, pero el valor está en la continuidad." },
            { q: "¿Hacéis auditorías?", a: "No. Somos tu copiloto financiero operativo." },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-foreground/5 py-6">
              <h3 className="font-heading font-bold text-sm tracking-tight">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>

    {/* CTA */}
    <Section dark>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter">
            ¿<span className="font-display italic font-normal">Hablamos</span><span className="text-accent">?</span>
          </h2>
          <p className="mt-4 text-sm text-surface-dark-foreground/50">Deja tu email o agenda 15 minutos.</p>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm buttonText="Envíame info" microcopy="Sin humo. Con números." variant="stacked" dark />
          </div>
          <p className="mt-4">
            <Link to="/contacto" className="text-[11px] font-mono uppercase tracking-[0.1em] text-surface-dark-foreground/40 hover:text-accent transition-colors border-b border-surface-dark-foreground/20 pb-0.5">
              Agendar una llamada →
            </Link>
          </p>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default Servicios;
