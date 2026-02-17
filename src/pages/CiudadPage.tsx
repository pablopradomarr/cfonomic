import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

interface CityPageProps {
  city: string;
}

const cityData: Record<string, { intro: string; problem: string }> = {
  Madrid: {
    intro: "Madrid concentra miles de PYMEs que compiten en un mercado exigente. La presión de costes, la velocidad del mercado y la competencia hacen que el control financiero no sea opcional: es supervivencia.",
    problem: "En Madrid, los costes fijos (alquiler, personal, logística) son altos. Si no tienes visibilidad sobre tus márgenes reales y tu caja, estás compitiendo a ciegas en una de las plazas más caras de España.",
  },
  Barcelona: {
    intro: "Barcelona es un polo de startups, comercio y servicios. Muchas empresas crecen rápido pero sin la estructura financiera necesaria. El resultado: facturación bonita y caja bajo presión.",
    problem: "El ecosistema barcelonés premia la velocidad. Pero crecer sin control financiero es como acelerar sin frenos. Necesitas datos para decidir, no solo velocidad para ejecutar.",
  },
  Valencia: {
    intro: "Valencia combina industria, comercio y turismo. Muchas PYMEs valencianas tienen márgenes ajustados que requieren un control fino para mantener la rentabilidad.",
    problem: "En un mercado con márgenes estrechos, cada decisión de precio, cada coste oculto y cada día de cobro retrasado impacta directamente en la caja.",
  },
  Sevilla: {
    intro: "Sevilla es el motor económico del sur. PYMEs de servicios, construcción, turismo y agroalimentación que necesitan estructura financiera para crecer de forma sostenible.",
    problem: "Muchas empresas sevillanas crecen por inercia del mercado, pero sin estructura financiera. Cuando el mercado se frena, la falta de control se nota.",
  },
  Málaga: {
    intro: "Málaga vive un boom tecnológico y turístico. Startups, hostelería y servicios que crecen rápido necesitan un CFO que les ponga los pies en la tierra.",
    problem: "El crecimiento rápido de Málaga atrae inversión y negocio, pero también competencia. Sin control financiero, crecer puede ser el camino más rápido a tener problemas.",
  },
  Bilbao: {
    intro: "Bilbao y el País Vasco tienen un tejido industrial y de servicios sólido. PYMEs con tradición que necesitan modernizar su gestión financiera para competir.",
    problem: "La industria vasca tiene márgenes que dependen de la eficiencia. Sin un cierre mensual estructurado y un cuadro de mando, las decisiones llegan tarde.",
  },
  Zaragoza: {
    intro: "Zaragoza es un nudo logístico y empresarial. PYMEs de industria, logística y servicios que necesitan estructura para gestionar márgenes y caja.",
    problem: "La posición estratégica de Zaragoza genera oportunidades, pero también complejidad logística y financiera que requiere control.",
  },
  Valladolid: {
    intro: "Valladolid combina industria del automóvil, agroalimentación y servicios. PYMEs que necesitan pasar de la gestión intuitiva a la gestión con datos.",
    problem: "En un mercado con márgenes industriales, cada punto porcentual cuenta. Sin analítica por línea, decides a ojo.",
  },
  Alicante: {
    intro: "Alicante vive del turismo, el comercio y los servicios. PYMEs con estacionalidad fuerte que necesitan prever la caja y controlar los costes fijos.",
    problem: "La estacionalidad es un desafío financiero. Si no previenes los meses flojos y no controlas la caja en temporada alta, los problemas llegan en invierno.",
  },
  Murcia: {
    intro: "Murcia es referencia en agroalimentación, logística y servicios. PYMEs que manejan márgenes estrechos y necesitan control financiero fino.",
    problem: "En sectores con márgenes ajustados como la agroalimentación, un error de pricing o de control de costes puede borrar el beneficio de todo un trimestre.",
  },
};

const CiudadPage = ({ city }: CityPageProps) => {
  const data = cityData[city] || cityData["Madrid"];

  return (
    <>
      <Section>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight max-w-4xl">
            CFO externo en {city}{" "}
            <span className="highlight-text">para PYMEs que quieren control y caja</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {data.intro}
          </p>
        </FadeIn>
      </Section>

      <Section paper>
        <FadeIn>
          <SectionHeading tag={city} title="El problema" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{data.problem}</p>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading title="Qué soluciono" />
          <BulletList
            icon="✓"
            items={[
              "Cierre mensual estructurado con reporting accionable.",
              "PyG analítica: márgenes reales por línea, canal y cliente.",
              "Control de caja y previsión (cashflow + NOF).",
              "Presupuesto + control de desviaciones.",
              "Cuadro de mando con KPIs que entiendes de un vistazo.",
              "Acompañamiento en decisiones de precio, estructura y crecimiento.",
            ]}
          />
        </FadeIn>
      </Section>

      <Section paper>
        <FadeIn>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              ¿Tienes una PYME en {city}?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Haz el diagnóstico financiero gratis o agenda 15 minutos conmigo.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <EmailCaptureForm
                buttonText="Diagnóstico gratis"
                microcopy={`CFO externo en ${city}. Sin humo. Con números.`}
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

      {/* FAQ LOCAL */}
      <Section>
        <FadeIn>
          <SectionHeading tag="FAQ" title={`Preguntas sobre CFO externo en ${city}`} />
          <div className="max-w-3xl space-y-5">
            {[
              { q: `¿Necesito un CFO externo en ${city}?`, a: `Si tienes una PYME en ${city} con más de 300K–500K € de facturación y no tienes un cierre mensual estructurado, probablemente sí.` },
              { q: "¿Es presencial o remoto?", a: "Ambos. El día a día es remoto (reporting, análisis, reuniones por videollamada). Si necesitas reuniones presenciales, las hacemos." },
              { q: "¿Cuánto cuesta?", a: "Depende del alcance. Lo hablamos en 15 minutos. Sin compromiso." },
              { q: "¿Sustituye a mi gestoría?", a: "No. Trabajamos con tu gestoría actual. Nosotros hacemos dirección financiera; ellos hacen impuestos y contabilidad obligatoria." },
              { q: "¿Cuánto tardo en ver resultados?", a: "En 30–60 días tienes el primer cierre mensual estructurado. En 3 meses tienes un sistema completo." },
              { q: "¿Trabajas con mi sector?", a: "Sí. El método se adapta. He trabajado con servicios, ecommerce, restauración, turismo, industria y startups." },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-border pb-4">
                <h3 className="font-heading font-bold text-heading">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* INTERLINKING */}
      <Section paper>
        <FadeIn>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/servicios" className="text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4">
              Ver servicios →
            </Link>
            <Link to="/casos-de-exito" className="text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4">
              Casos de éxito →
            </Link>
            <Link to="/recursos" className="text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4">
              Recursos →
            </Link>
            <Link to="/diagnostico-financiero" className="text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4">
              Diagnóstico financiero →
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default CiudadPage;
