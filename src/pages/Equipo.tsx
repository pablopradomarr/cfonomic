import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
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
              <h1 className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed font-body font-normal">
                Asesor financiero para PYMEs y Startups. Dirijo las finanzas de empresas que quieren dejar de improvisar — les monto el departamento financiero que necesitan, sin contratar a un equipo entero.
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

    <Section dark>
      <FadeIn>
        <SectionHeading tag="Por qué" title="Por qué hago esto" />
        <div className="max-w-2xl space-y-5 text-base text-surface-dark-foreground/70 leading-relaxed">
          <p>
            Porque he visto demasiadas empresas buenas tomar decisiones malas. No por falta de talento.
            Sino porque no tenían la asesoría financiera que necesitaban: información útil, a tiempo y que sirviera para decidir.
          </p>
          <p>
            La contabilidad obligatoria te dice "qué pasó" tres meses después. Tú necesitas control financiero real:
            "qué hago ahora" y "qué viene". Por eso creé CFOnomic.
          </p>
        </div>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading tag="Método" title="Cómo trabajo" />
            <div className="space-y-4 text-sm text-foreground/70">
              {[
                "Directo. No te cuento lo que quieres oír.",
                "Con datos. Cada reunión tiene números y conclusiones.",
                "Mensual. Control mensual, como un CFO de verdad.",
                "Adaptado. Me adapto a lo que ya tienes.",
                "Disponible. No desaparezco entre reuniones.",
              ].map((item) => (
                <p key={item} className="border-l border-foreground/10 pl-4 py-1">{item}</p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading tag="Encaje" title="Con quién encajo" />
            <BulletList icon="→" items={[
              "CEOs que quieren decidir con datos.",
              "Startups que necesitan reporting.",
              "Empresas en crecimiento sin estructura financiera.",
              "Negocios rentables que quieren serlo más.",
              "Equipos que necesitan un copiloto financiero.",
            ]} />
          </div>
        </div>
      </FadeIn>

      {/* Manuel Estevez — toque editorial */}
      <FadeIn delay={0.2}>
        <div className="mt-20 flex items-end gap-6 max-w-md">
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

    <Section paper>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter" role="presentation">
            ¿<span className="font-display italic font-normal">Hablamos</span><span className="text-accent">?</span>
          </p>
          <h2 className="mt-4 text-sm text-muted-foreground">
            Pide tu diagnóstico financiero gratuito o agenda una llamada para hablar de tu empresa.
          </h2>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm buttonText="Quiero el diagnóstico" microcopy="Sin compromiso." variant="stacked" />
          </div>
          <p className="mt-4">
            <a href="https://tidycal.com/pablocfonomic/nosconocemos" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/20 pb-0.5">
              Hablar con un Director Financiero →
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
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
