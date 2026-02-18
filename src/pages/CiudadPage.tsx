import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

interface CityPageProps {
  city: string;
}

const cityData: Record<string, { intro: string; problem: string }> = {
  Madrid: { intro: "Madrid concentra miles de PYMEs que compiten en un mercado exigente. La presión de costes hace que el control financiero no sea opcional.", problem: "Costes fijos altos. Sin visibilidad sobre márgenes y caja, compites a ciegas en una de las plazas más caras." },
  Barcelona: { intro: "Polo de startups, comercio y servicios. Muchas empresas crecen rápido sin estructura financiera.", problem: "El ecosistema premia la velocidad. Pero crecer sin control es acelerar sin frenos." },
  Valencia: { intro: "Industria, comercio y turismo. Márgenes ajustados que requieren control fino.", problem: "Márgenes estrechos: cada decisión de precio y cada día de cobro retrasado impacta en caja." },
  Sevilla: { intro: "Motor económico del sur. Servicios, construcción, turismo, agroalimentación.", problem: "Muchas empresas crecen por inercia. Cuando el mercado se frena, la falta de control se nota." },
  Málaga: { intro: "Boom tecnológico y turístico. Startups y hostelería que crecen rápido.", problem: "Crecimiento rápido sin control: el camino más rápido a problemas." },
  Bilbao: { intro: "Tejido industrial sólido. PYMEs con tradición que necesitan modernizar su gestión.", problem: "Márgenes industriales que dependen de eficiencia. Sin cierre mensual, las decisiones llegan tarde." },
  Zaragoza: { intro: "Nudo logístico y empresarial. Industria, logística y servicios.", problem: "Oportunidades + complejidad logística = necesidad de control financiero." },
  Valladolid: { intro: "Industria del automóvil, agroalimentación y servicios.", problem: "Márgenes industriales: cada punto porcentual cuenta." },
  Alicante: { intro: "Turismo, comercio y servicios con estacionalidad fuerte.", problem: "Sin prever los meses flojos, los problemas llegan en invierno." },
  Murcia: { intro: "Agroalimentación, logística y servicios. Márgenes estrechos.", problem: "Un error de pricing puede borrar el beneficio de un trimestre." },
};

const getCitySlug = (city: string) =>
  city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const CiudadPage = ({ city }: CityPageProps) => {
  const data = cityData[city] || cityData["Madrid"];
  const citySlug = getCitySlug(city);

  const cityFaq = [
    { q: `¿Necesito un director financiero externo en ${city}?`, a: `Si facturas más de 300K–500K € y no tienes cierre mensual estructurado, probablemente sí. Un director financiero externo te da control sin el coste de un directivo a jornada completa.` },
    { q: "¿Presencial o remoto?", a: "El día a día es remoto. Reuniones presenciales si las necesitas." },
    { q: "¿Cuánto cuesta un director financiero externo?", a: "Depende del alcance. Lo hablamos en 15 minutos." },
    { q: "¿Sustituye a mi gestoría?", a: "No. Son complementarios. La gestoría cumple obligaciones; el director financiero toma decisiones con datos." },
    { q: "¿Cuánto tardo en ver resultados?", a: "En 30–60 días el primer cierre. En 3 meses, sistema completo." },
    { q: "¿Trabajas con mi sector?", a: "Sí. Servicios, ecommerce, restauración, turismo, industria, startups." },
  ];

  return (
    <>
      <SEO
        title={`Director financiero externo en ${city} para PYMEs — CFOnomic`}
        description={`Director financiero externo en ${city}. ${data.intro} Control de caja, márgenes y decisiones con datos para tu PYME.`}
        canonical={`/director-financiero-externo-${citySlug}`}
        faq={cityFaq}
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
          { name: `Director financiero externo ${city}`, path: `/director-financiero-externo-${citySlug}` },
        ]}
      />
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <span className="tag-label mb-6 block">{city}</span>
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-5xl" role="presentation">
              Director financiero externo en {city}<span className="text-accent">.</span>
              <br />
              <span className="text-muted-foreground">Para PYMEs que quieren control y caja.</span>
            </p>
            <h1 className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed font-body font-normal">
              Director financiero externo en {city} para PYMEs. {data.intro} Asesoría financiera con control de caja, márgenes y decisiones con datos.
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section paper>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4"><span className="tag-label">El problema</span></div>
            <div className="md:col-span-8">
              <p className="text-base text-foreground/70 leading-relaxed max-w-2xl">{data.problem}</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading title="Qué soluciono como tu director financiero" />
          <BulletList icon="→" items={[
            "Cierre mensual estructurado con reporting.",
            "PyG analítica por línea, canal, cliente.",
            "Control de caja y previsión de tesorería.",
            "Presupuesto + desviaciones.",
            "Cuadro de mando con KPIs financieros.",
            "Acompañamiento en decisiones estratégicas.",
          ]} />
        </FadeIn>
      </Section>

      <Section dark>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-tighter">
              ¿Necesitas un director financiero externo en {city}<span className="text-accent">?</span>
            </h2>
            <div className="mt-8 max-w-md mx-auto">
              <EmailCaptureForm buttonText="Diagnóstico gratis" microcopy={`Director financiero externo en ${city}. Sin humo.`} variant="stacked" dark />
            </div>
            <p className="mt-4">
              <Link to="/contacto" className="text-[11px] font-mono uppercase tracking-[0.1em] text-surface-dark-foreground/40 hover:text-accent transition-colors border-b border-surface-dark-foreground/20 pb-0.5">
                Agendar llamada →
              </Link>
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading tag="FAQ" title={`Director financiero externo en ${city}`} />
          <div className="max-w-3xl">
            {cityFaq.map((faq) => (
              <div key={faq.q} className="border-b border-foreground/5 py-6">
                <h3 className="font-heading font-bold text-sm tracking-tight">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <div className="container-wide py-12 flex flex-wrap gap-6 justify-center">
        {[
          { label: "Servicios", path: "/servicios" },
          { label: "Casos", path: "/casos-de-exito" },
          { label: "Recursos", path: "/recursos" },
          { label: "Diagnóstico", path: "/diagnostico-financiero" },
        ].map((l) => (
          <Link key={l.path} to={l.path} className="text-[11px] font-mono uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
            {l.label} →
          </Link>
        ))}
      </div>
    </>
  );
};

export default CiudadPage;
