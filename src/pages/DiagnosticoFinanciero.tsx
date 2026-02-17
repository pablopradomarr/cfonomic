import { useState } from "react";
import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const DiagnosticoFinanciero = () => {
  const [emailGiven, setEmailGiven] = useState(false);

  return (
    <>
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <span className="tag-label mb-6 block">Diagnóstico</span>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-5xl">
              Descubre dónde se te
              <br />
              escapa la <span className="font-display italic font-normal">caja</span><span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed">
              En 5 minutos tienes claridad de por dónde empezar. Sin compromiso. Sin humo.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section paper>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">Qué recibes</p>
              <div className="space-y-3 text-sm text-foreground/70">
                {[
                  "Resumen por email con tu situación.",
                  "Principales palancas: margen, caja, estructura.",
                  "Próximos pasos concretos (no genéricos).",
                  "Comparativa con empresas similares.",
                  "15 min para comentarlo si quieres.",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3">
                    <span className="text-accent font-mono text-xs mt-1">✓</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              {!emailGiven ? (
                <div className="border border-foreground/10 p-10 md:p-16 text-center">
                  <p className="font-heading text-xl md:text-2xl font-bold tracking-tight mb-2">
                    Primero, tu email<span className="text-accent">.</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Te enviamos el resultado completo. Sin vender humo.
                  </p>
                  <div className="max-w-sm mx-auto">
                    <EmailCaptureForm
                      buttonText="Empezar diagnóstico"
                      microcopy="Te mando el diagnóstico y 3 mejoras rápidas."
                      variant="stacked"
                    />
                  </div>
                  <button onClick={() => setEmailGiven(true)} className="mt-4 text-[10px] font-mono text-muted-foreground underline">
                    (demo: saltar)
                  </button>
                </div>
              ) : (
                <div className="iframe-container">
                  <iframe src="https://diagnostico-financiero.lovable.app" title="Diagnóstico" loading="lazy" className="w-full min-h-[800px]" />
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section dark>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold tracking-tighter">
              ¿Prefieres que lo veamos <span className="font-display italic font-normal">juntos</span><span className="text-accent">?</span>
            </h2>
            <p className="mt-3 text-sm text-surface-dark-foreground/50">15 minutos. Tú con tus dudas, yo con mis números.</p>
            <div className="mt-6">
              <Link to="/contacto" className="inline-flex bg-accent text-accent-foreground px-6 py-3 text-[12px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-accent/85 transition-colors">
                Agendar llamada →
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default DiagnosticoFinanciero;
