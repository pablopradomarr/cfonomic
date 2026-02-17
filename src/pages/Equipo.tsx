import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const Equipo = () => (
  <>
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <span className="tag-label mb-6 block">Quién está detrás</span>
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-heading font-bold leading-[0.92] tracking-tighter">
                Pablo <span className="font-display italic font-normal">Prado</span>
                <br />
                Marrón<span className="text-accent">.</span>
              </h1>
              <p className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-[0.15em]">
                Pablo CFOnomic
              </p>
              <p className="mt-8 max-w-md text-base text-muted-foreground leading-relaxed">
                Dirijo las finanzas de PYMEs y Startups que quieren dejar de improvisar.
                Les monto el departamento financiero que necesitan, sin contratar a un equipo entero.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[3/4] bg-surface-paper border border-foreground/5 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-5xl mb-2">📸</div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em]">Foto de Pablo</p>
                </div>
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
            Sino porque no tenían información financiera útil, a tiempo y que sirviera para decidir.
          </p>
          <p>
            La contabilidad obligatoria te dice "qué pasó" tres meses después. Tú necesitas saber
            "qué hago ahora" y "qué viene".
          </p>
          <p>
            Por eso creé CFOnomic.
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
    </Section>

    <Section paper>
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter">
            ¿<span className="font-display italic font-normal">Hablamos</span><span className="text-accent">?</span>
          </h2>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm buttonText="Quiero el diagnóstico" microcopy="Sin compromiso." variant="stacked" />
          </div>
          <p className="mt-4">
            <Link to="/contacto" className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/20 pb-0.5">
              Agendar una llamada →
            </Link>
          </p>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default Equipo;
