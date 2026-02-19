import { Section, FadeIn, SectionHeading, Divider } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import pabloCfonomicBg from "@/assets/pablo-cfonomic-bg.jpg";
import manuelEstevez from "@/assets/manuel-estevez.webp";

const Equipo = () => (
  <>
    <SEO
      title="Pablo Prado Marrón — Asesor financiero para PYMEs"
      description="Dirijo las finanzas de PYMEs y Startups que quieren dejar de improvisar. Departamento financiero sin contratar equipo."
      canonical="/equipo"
      breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Equipo", path: "/equipo" }]}
    />

    {/* ── Hero ── */}
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <span className="tag-label mb-6 block">Quién está detrás</span>
              <p className="text-[clamp(3rem,7vw,6rem)] font-heading font-bold leading-[0.92] tracking-tighter" role="presentation">
                Pablo <span className="font-display italic font-normal">Prado</span>
                <br />
                Marrón<span className="text-accent">.</span>
              </p>
              <p className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-[0.15em]">
                CFOnomic
              </p>
              <h1 className="mt-8 max-w-full text-base text-muted-foreground leading-relaxed font-body font-normal">
                <span className="font-display italic">Director Financiero</span> externo para PYMEs y Startups. Me encargo de que tu empresa crezca de manera rentable — sin que tengas que contratar un departamento entero.
              </h1>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={pabloCfonomicBg}
                  alt="Pablo Prado Marrón — Asesor financiero para PYMEs, fundador de CFOnomic"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── La historia ── */}
    <Section dark>
      <FadeIn>
        <SectionHeading tag="La historia" title="Por qué dejé una multinacional para montar CFOnomic" />
        <div className="max-w-full space-y-6 text-base text-surface-dark-foreground/70 leading-relaxed">
          <p className="text-lg md:text-xl text-surface-dark-foreground/90 font-body">
            Primavera de 2024. Era <span className="text-accent font-semibold">Finance & Controlling Manager</span> en Asturias. 
            Multinacional. Más de 15 delegaciones. 100 millones de euros en facturación.
          </p>
          <p>
            En mayo lo dejé todo. Monté CFOnomic. Me vine a vivir a Jerez con mi novia.
          </p>
          <p className="text-lg md:text-xl text-surface-dark-foreground font-heading font-bold tracking-tight">
            Te cuento cómo pasó todo esto<span className="text-accent">.</span>
          </p>
        </div>
      </FadeIn>
    </Section>

    {/* ── Trayectoria ── */}
    <Section>
      <FadeIn>
        <SectionHeading tag="Trayectoria" title="Los puestos clave que me trajeron aquí" />
        <p className="max-w-full text-base text-foreground/70 leading-relaxed mb-10">
          Antes de montar CFOnomic trabajé en los departamentos financieros de grandes empresas. 
          Cada puesto me enseñó algo distinto. Todos me prepararon para lo mismo: entender las finanzas de un negocio de arriba a abajo.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { role: "Auditor Financiero", company: "PwC", detail: "Big4" },
            { role: "Controller Financiero", company: "Schindler", detail: "Multinacional industrial" },
            { role: "FP&A Analyst", company: "Técnicas Reunidas", detail: "Ingeniería global" },
            { role: "Finance & Controlling Manager", company: "TK Airport Solutions", detail: "Multinacional aeroportuaria" },
          ].map((item) => (
            <div key={item.company} className="card-editorial group">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">{item.detail}</p>
              <p className="font-heading font-bold text-lg tracking-tight">{item.role}</p>
              <p className="text-sm text-foreground/60 mt-1">{item.company}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <Divider accent />
        <p className="text-xl md:text-2xl font-heading font-bold tracking-tight max-w-3xl">
          También he emprendido. Y gracias a ello aprendí algo que cambia todo: una gran empresa <span className="font-display italic">no es lo mismo</span> que una PYME o Start-up<span className="text-accent">.</span>
        </p>
        <p className="mt-4 text-base text-foreground/70 leading-relaxed max-w-3xl">
          Así descubrí cómo puedo ayudar a las empresas pequeñas a crecer de manera rentable: 
          con <span className="font-display italic">Control de Negocio</span> y de sus finanzas.
        </p>
      </FadeIn>
    </Section>

    {/* ── Qué hacemos ── */}
    <Section paper>
      <FadeIn>
        <SectionHeading tag="Qué hacemos" title="Todo lo que necesita tu PYME para tener el control" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-full">
          {[
            {
              title: "Contabilidad financiera y analítica al día",
              text: "Sin sustos de última hora cuando lleguen los cierres trimestrales o anuales. Orden y control desde el minuto uno.",
            },
            {
              title: "Control y análisis de negocio",
              text: "Sabrás qué productos, servicios, líneas de negocio y clientes son más rentables. Dónde invertir para crecer. Dónde recortar.",
            },
            {
              title: "Métricas y KPIs relevantes",
              text: "Controlaremos y analizaremos los números que de verdad hacen crecer tu negocio de manera rentable.",
            },
            {
              title: "Cuenta de resultados analítica y flujo de efectivo mensual",
              text: "Como las grandes empresas. Decisiones basadas en información de negocio, no en intuiciones.",
            },
            {
              title: "Presupuesto y plan de negocio",
              text: "Se acabó improvisar. Se acabaron los sustos. En todo momento sabrás cómo vas con respecto a tu presupuesto y tus planes dinámicos.",
            },
            {
              title: "Control de caja",
              text: "Para evitar sustos. Siempre sabrás cuánto dinero entra, cuánto sale y cuánto te queda.",
            },
            {
              title: "Financiación dilutiva y no dilutiva",
              text: "Le hablaremos al banco de tú a tú, a los inversores, y sacaremos dinero hasta de las piedras.",
            },
            {
              title: "Optimización de procesos",
              text: "Trabajar menos, hacer más. Así de simple.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-[3px] border-accent pl-5 py-3">
              <p className="font-heading font-bold text-sm md:text-base tracking-tight">{item.title}</p>
              <p className="text-sm text-foreground/60 mt-1 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>

    {/* ── La verdad ── */}
    <Section dark>
      <FadeIn>
        <div className="max-w-3xl">
          <p className="text-2xl md:text-4xl font-heading font-bold leading-[1.1] tracking-tight text-surface-dark-foreground">
            Tener un buen <span className="font-display italic">Control de Negocio</span> no es tener un gestor que te presenta el trimestral del IVA y sociedades<span className="text-accent">.</span>
          </p>
          <Divider accent />
          <p className="text-base md:text-lg text-surface-dark-foreground/70 leading-relaxed">
            En 2025, para crecer de manera rentable tienes que entender y analizar las claves financieras y las métricas relevantes de tu negocio.
          </p>
        </div>
      </FadeIn>
    </Section>

    {/* ── Manuel Estevez — toque editorial ── */}
    <Section>
      <FadeIn>
        <div className="flex items-end gap-6 max-w-md">
          <img
            src={manuelEstevez}
            alt="Manuel Estévez, arqueólogo con casco corintio"
            className="w-20 h-20 md:w-24 md:h-24 object-cover grayscale"
            loading="lazy"
          />
          <p className="text-[10px] font-mono text-muted-foreground leading-relaxed uppercase tracking-[0.1em]">
            "Hay que excavar para encontrar lo que importa."
            <br />
            <span className="text-foreground/30">— Manuel Estévez, arqueólogo.</span>
          </p>
        </div>
      </FadeIn>
    </Section>

    {/* ── CTA final ── */}
    <Section paper>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter leading-[1.05]" role="presentation">
            Si eres el CEO de una PYME o Startup y quieres crecer de manera rentable<span className="text-accent">,</span>
            <br />
            <span className="font-display italic font-normal">hablamos</span><span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-[0.15em]">
            — Pablo
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://tidycal.com/pablocfonomic/nosconocemos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm uppercase tracking-[0.06em] px-8 py-3.5 hover:bg-accent/85 transition-all"
            >
              Reserva una llamada con Pablo →
            </a>
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground mb-3">
              O recibe un email con un consejo financiero
            </p>
            <EmailCaptureForm buttonText="Quiero el diagnóstico" microcopy="Sin compromiso." variant="stacked" />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {[
              { label: "Servicios", path: "/servicios" },
              { label: "Casos reales", path: "/casos-de-exito" },
              { label: "Recursos", path: "/recursos" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-[11px] font-mono uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default Equipo;
