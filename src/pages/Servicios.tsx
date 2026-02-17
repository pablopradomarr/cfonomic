import { Section, FadeIn, SectionHeading, BulletList, PullQuote } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const Servicios = () => (
  <>
    {/* HERO */}
    <Section>
      <FadeIn>
        <SectionHeading
          title="Tu departamento financiero. El de verdad."
          subtitle="Lo que una multinacional tiene con un equipo de 10, tú lo tienes con uno. Sin contratar, sin complicaciones, sin humo."
        />
      </FadeIn>
    </Section>

    {/* GESTORÍA VS DIRECCIÓN FINANCIERA */}
    <Section paper>
      <FadeIn>
        <SectionHeading tag="La diferencia" title="Gestoría vs. Dirección financiera" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-editorial p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-heading mb-4">Tu gestoría</h3>
            <BulletList
              icon="—"
              items={[
                "Te hace los impuestos (obligatorio).",
                "Te da la contabilidad… 3 meses después.",
                "No te dice qué producto gana o pierde.",
                "No te ayuda a decidir precios.",
                "No te prevé la caja.",
                "No te monta un presupuesto.",
              ]}
            />
            <p className="mt-4 text-sm text-muted-foreground italic">
              Necesario. Pero no suficiente.
            </p>
          </div>
          <div className="card-editorial p-6 md:p-8 border-accent border-2">
            <h3 className="font-heading text-xl font-bold text-heading mb-4">CFOnomic</h3>
            <BulletList
              icon="✓"
              items={[
                "Cierre mensual con reporting accionable.",
                "PyG analítica por línea, canal, cliente.",
                "Cashflow y previsión de caja.",
                "Presupuesto + control de desviaciones.",
                "Cuadro de mando con KPIs que entiendes.",
                "Acompañamiento en decisiones estratégicas.",
              ]}
            />
            <p className="mt-4 text-sm font-semibold text-heading">
              Tu brújula financiera. Cada mes.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>

    {/* QUÉ HACEMOS */}
    <Section>
      <FadeIn>
        <SectionHeading tag="Qué hacemos" title="Qué hacemos exactamente" />
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Cierres mensuales + Reporting", desc: "Sabes cada mes dónde estás. Sin esperar al trimestre. Sin sorpresas." },
          { title: "PyG analítica", desc: "Márgenes por línea, canal y cliente. Ves qué gana y qué sangra." },
          { title: "Control de caja", desc: "Cashflow operativo, NOF, plazos de cobro/pago. Sabes cuánta caja generas (o quemas)." },
          { title: "Presupuesto y previsión", desc: "Tu mapa financiero. Sabes si vas por el camino o te has desviado." },
          { title: "KPIs + Cuadro de mando", desc: "Tu brújula. Los 5–8 indicadores que de verdad importan." },
          { title: "Decisiones estratégicas", desc: "Precios, estructura, inversión, financiación. Con números, no con corazonadas." },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.05}>
            <div className="card-editorial p-6 h-full">
              <h3 className="font-heading text-lg font-bold text-heading">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>

    {/* CÓMO TRABAJAMOS */}
    <Section paper>
      <FadeIn>
        <SectionHeading tag="Método" title="Cómo trabajamos" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start">
          {["Ponemos orden", "Creamos sistema", "Medimos lo que importa", "Tomamos decisiones", "Repetimos cada mes"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3 md:flex-1">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-heading font-bold text-accent-foreground text-sm">
                  {i + 1}
                </span>
                <span className="font-heading font-semibold text-heading text-sm">{step}</span>
                {i < 4 && <span className="hidden md:block text-muted-foreground ml-auto mr-3">→</span>}
              </div>
            )
          )}
        </div>
      </FadeIn>
    </Section>

    {/* PARA QUIÉN */}
    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading title="Para quién es" />
            <BulletList
              icon="✓"
              items={[
                "PYMEs con 500K–10M € de facturación.",
                "Startups que necesitan reporting para inversores.",
                "CEOs que quieren tomar decisiones con datos.",
                "Empresas en crecimiento que necesitan estructura.",
                "Negocios que quieren dejar de improvisar.",
              ]}
            />
          </div>
          <div>
            <SectionHeading title="Para quién NO es" />
            <BulletList
              icon="✕"
              items={[
                "Si buscas una gestoría (no lo somos).",
                "Si quieres un PDF bonito para guardarlo en un cajón.",
                "Si no quieres mirar los números.",
                "Si esperas milagros sin hacer cambios.",
                "Si tu empresa factura menos de 300K y no tiene estructura básica.",
              ]}
            />
          </div>
        </div>
      </FadeIn>
    </Section>

    {/* FAQ */}
    <Section paper>
      <FadeIn>
        <SectionHeading tag="FAQ" title="Preguntas frecuentes" />
        <div className="max-w-3xl space-y-6">
          {[
            { q: "¿Es lo mismo que una gestoría?", a: "No. Tu gestoría hace impuestos y contabilidad obligatoria. Nosotros te damos dirección financiera: reporting, análisis, previsión y acompañamiento en decisiones. Son complementarios." },
            { q: "¿Cuánto cuesta?", a: "Depende del alcance. Tenemos 3 niveles. Lo hablamos en una llamada de 15 minutos. Sin compromiso." },
            { q: "¿Cuánto tarda en verse resultados?", a: "En 30–60 días tienes el primer cierre mensual estructurado y empiezas a ver con claridad. En 3–6 meses tienes un sistema completo." },
            { q: "¿Necesito cambiar de gestoría?", a: "No. Trabajamos con tu gestoría actual. Les pedimos los datos, nosotros hacemos el análisis." },
            { q: "¿Qué herramientas usáis?", a: "Las que ya tengas. Excel, Google Sheets, o herramientas específicas. No te obligamos a cambiar nada." },
            { q: "¿Es solo para empresas grandes?", a: "No. Es para PYMEs que quieren crecer con control. Desde 500K de facturación tiene sentido." },
            { q: "¿Puedo contratar solo un mes?", a: "Sí, pero no tiene mucho sentido. El valor está en la continuidad. El primer mes es montar el sistema; a partir del segundo empiezas a sacarle partido." },
            { q: "¿Hacéis auditorías?", a: "No. No somos auditores. Somos tu copiloto financiero operativo." },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-border pb-5">
              <h3 className="font-heading font-bold text-heading">{faq.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>

    {/* CTA */}
    <Section>
      <FadeIn>
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">¿Hablamos?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Deja tu email o agenda 15 minutos.</p>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm
              buttonText="Envíame info"
              microcopy="Te lo dejo claro en tu bandeja. Sin humo."
              variant="stacked"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              to="/contacto"
              className="underline decoration-accent underline-offset-4 hover:text-heading transition-colors"
            >
              Prefiero agendar una llamada →
            </Link>
          </p>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default Servicios;
