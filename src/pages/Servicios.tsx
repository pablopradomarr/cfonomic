import { Section, FadeIn, SectionHeading, BulletList, Divider } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import GoogleReviews from "@/components/GoogleReviews";

const serviciosFaq = [
  { q: "¿Es lo mismo que una gestoría?", a: "No. Tu gestoría hace impuestos. Nosotros: dirección financiera. Son complementarios." },
  { q: "¿Cuánto cuesta?", a: "Depende del alcance. Lo hablamos en 15 minutos. Sin compromiso." },
  { q: "¿Cuánto tarda en verse resultados?", a: "En 30–60 días el primer cierre. En 3–6 meses, sistema completo." },
  { q: "¿Necesito cambiar de gestoría?", a: "No. Trabajamos con la tuya." },
  { q: "¿Qué herramientas usáis?", a: "Las que ya tengas. No te obligamos a cambiar." },
  { q: "¿Solo para empresas grandes?", a: "No. Desde 500K de facturación tiene sentido." },
  { q: "¿Puedo contratar un mes?", a: "Sí, pero el valor está en la continuidad." },
  { q: "¿Hacéis auditorías?", a: "No. Somos tu copiloto financiero operativo." },
];

const Servicios = () => (
  <>
    <SEO
      title="Asesoría financiera para empresas — Servicios CFOnomic"
      description="Departamento financiero externalizado para PYMEs: cierres mensuales, PyG analítica, control de caja, presupuesto y KPIs. Sin contratar equipo."
      canonical="/servicios"
      faq={serviciosFaq}
      breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Departamento financiero externalizado para PYMEs",
          description: "Cierres mensuales, PyG analítica por línea/canal/cliente, control de caja, presupuesto con control de desviaciones, KPIs y acompañamiento en decisiones estratégicas.",
          provider: { "@type": "ProfessionalService", name: "CFOnomic", url: "https://cfonomic.com" },
          serviceType: "Dirección financiera externa",
          areaServed: { "@type": "Country", name: "España" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de dirección financiera",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cierres mensuales", description: "Sabes cada mes dónde estás. Sin esperar al trimestre." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "PyG analítica", description: "Márgenes por línea, canal y cliente." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Control de caja", description: "Cashflow operativo, NOF, plazos de cobro/pago." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Presupuesto", description: "Tu mapa financiero con control de desviaciones." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "KPIs y cuadro de mando", description: "Los 5-8 indicadores que de verdad importan." } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decisiones estratégicas", description: "Precios, estructura, inversión, financiación. Con números." } },
            ],
          },
        },
      ]}
    />
    {/* HERO */}
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Servicios</span>
          <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
            Tu departamento <span className="font-display italic font-normal">financiero</span><span className="text-accent">.</span>
            <br />
            <span className="text-muted-foreground">El de <span className="font-display italic">verdad</span>.</span>
          </p>
          <h1 className="mt-6 max-w-full text-base text-muted-foreground leading-relaxed font-body font-normal">
            Asesoría financiera para empresas que quieren dejar de improvisar. Lo que una multinacional tiene con un equipo de 10, tú lo tienes con uno. Sin contratar, sin complicaciones.
          </h1>
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
        <div className="max-w-full">
          {serviciosFaq.map((faq) => (
            <div key={faq.q} className="border-b border-foreground/5 py-6">
              <h3 className="font-heading font-bold text-sm tracking-tight">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>

    {/* PRUEBA SOCIAL */}
    <Section paper>
      <FadeIn>
        <div className="mb-14 md:mb-20">
          <span className="tag-label mb-5 block">Prueba social</span>
          <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[1.05] tracking-tighter">
            …Qué te voy a contar yo que no te puedan contar mejor <span className="font-display italic font-normal">nuestros clientes</span><span className="text-accent">?</span>
          </p>
        </div>
      </FadeIn>
      <GoogleReviews />
    </Section>

    {/* CTA */}
    <Section dark>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter" role="presentation">
            ¿<span className="font-display italic font-normal">Hablamos</span><span className="text-accent">?</span>
          </p>
          <h2 className="mt-4 text-sm text-surface-dark-foreground/50">
            Pide tu diagnóstico financiero o agenda 15 minutos para hablar de tu empresa.
          </h2>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm buttonText="Envíame info" microcopy="Sin humo. Con números." variant="stacked" dark />
          </div>
          <p className="mt-4">
            <a href="https://tidycal.com/pablocfonomic/nosconocemos" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-[0.1em] text-surface-dark-foreground/40 hover:text-accent transition-colors border-b border-surface-dark-foreground/20 pb-0.5">
              Hablar con un Director Financiero →
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {[
              { label: "Casos reales", path: "/casos-de-exito" },
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

export default Servicios;
