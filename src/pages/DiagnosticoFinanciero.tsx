import { useState } from "react";
import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const DiagnosticoFinanciero = () => {
  const [emailGiven, setEmailGiven] = useState(false);

  return (
    <>
      <Section>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl">
            Diagnóstico financiero:{" "}
            <span className="highlight-text">descubre dónde se te escapa la caja.</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            En 5 minutos tienes claridad de por dónde empezar. Sin compromiso. Sin humo. Con números.
          </p>
        </FadeIn>
      </Section>

      <Section paper>
        <FadeIn>
          <SectionHeading title="¿Qué recibes?" />
          <BulletList
            icon="✓"
            items={[
              "Resumen por email con tu situación financiera.",
              "Principales palancas: margen, caja, estructura.",
              "Próximos pasos concretos (no genéricos).",
              "Comparativa con empresas similares.",
              "Si quieres, 15 minutos para comentarlo conmigo.",
            ]}
          />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading tag="Tu diagnóstico" title="Responde las preguntas y descubre tu situación" />
          {!emailGiven ? (
            <div className="card-editorial p-8 md:p-12 text-center max-w-xl mx-auto">
              <p className="font-heading text-xl font-bold text-heading mb-2">
                Primero, deja tu email
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Te enviamos el resultado completo. Sin vender humo.
              </p>
              <EmailCaptureForm
                buttonText="Empezar diagnóstico"
                microcopy="Te mando el diagnóstico y 3 mejoras rápidas."
                variant="stacked"
              />
              <button
                onClick={() => setEmailGiven(true)}
                className="mt-3 text-xs text-muted-foreground underline"
              >
                (demo: saltar email)
              </button>
            </div>
          ) : (
            <div className="iframe-container">
              <iframe
                src="https://diagnostico-financiero.lovable.app"
                title="Diagnóstico Financiero CFOnomic"
                loading="lazy"
                className="w-full min-h-[800px]"
              />
            </div>
          )}
        </FadeIn>
      </Section>

      <Section paper>
        <FadeIn>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              ¿Prefieres que lo veamos juntos?
            </h2>
            <p className="mt-3 text-muted-foreground">
              15 minutos. Tú con tus dudas, yo con mis números.
            </p>
            <div className="mt-6">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md border-2 border-border px-6 py-3 font-heading font-semibold text-heading hover:bg-surface-paper transition-all"
              >
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
