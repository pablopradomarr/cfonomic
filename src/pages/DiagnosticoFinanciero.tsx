import { useState } from "react";
import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const diagnosticoFaq = [
  {
    q: "¿Qué es un diagnóstico financiero para empresas?",
    a: "Un diagnóstico financiero es un análisis rápido de la salud financiera de tu empresa: caja, márgenes, estructura de costes y capacidad de generar beneficio. Te permite identificar en minutos los puntos críticos donde actuar para mejorar el control de tu negocio.",
  },
  {
    q: "¿A quién va dirigido este diagnóstico financiero?",
    a: "A PYMEs y Start-ups que facturan entre 300K y 10M €, que sienten que les falta visibilidad financiera, que toman decisiones sin datos claros o que quieren profesionalizar su departamento financiero sin contratar un equipo entero.",
  },
  {
    q: "¿Cuánto cuesta el diagnóstico financiero?",
    a: "Es completamente gratuito y sin compromiso. Lo hacemos porque es la mejor forma de que veas dónde estás y entiendas si podemos ayudarte. No hay letra pequeña.",
  },
  {
    q: "¿Qué información necesito para completar el diagnóstico?",
    a: "Solo necesitas responder unas preguntas sobre tu empresa: facturación, márgenes, cómo gestionas la caja y qué herramientas usas para controlar tus finanzas. No necesitas preparar nada. En 5 minutos lo tienes.",
  },
  {
    q: "¿Qué diferencia hay entre una gestoría y una dirección financiera externa?",
    a: "Una gestoría se encarga de la contabilidad obligatoria y los impuestos. Una dirección financiera externa (CFO externo) analiza tu negocio, te da visibilidad sobre márgenes, caja y rentabilidad, y te ayuda a tomar decisiones estratégicas con datos. Son complementarios.",
  },
  {
    q: "¿Qué es un CFO externo o director financiero externo?",
    a: "Es un profesional financiero que trabaja con tu empresa sin formar parte de la plantilla. Te aporta la misma capacidad analítica y estratégica que tienen las grandes empresas, pero adaptada al tamaño y necesidades de tu PYME o Start-up.",
  },
  {
    q: "¿Cómo me ayuda el control financiero a tomar mejores decisiones?",
    a: "Con información financiera actualizada y bien estructurada puedes ver qué productos o servicios son más rentables, dónde se te escapa la caja, qué clientes te cuestan dinero y si vas en la dirección correcta. Decides con datos + olfato, no con intuición a ciegas.",
  },
  {
    q: "¿Qué pasa después de completar el diagnóstico?",
    a: "Recibes por email un resumen con tu situación financiera, las principales palancas de mejora y próximos pasos concretos. Si quieres, agendamos 15 minutos para comentarlo juntos. Sin presión, sin compromiso.",
  },
  {
    q: "¿Puedo hacer el diagnóstico si mi empresa es muy pequeña?",
    a: "Sí. El diagnóstico está pensado para empresas desde 300K € de facturación. Si facturas menos, el diagnóstico te dará igualmente claridad, aunque nuestros servicios de dirección financiera se adaptan mejor a empresas con cierta estructura.",
  },
  {
    q: "¿Qué incluye el servicio de asesoría financiera para PYMEs de CFOnomic?",
    a: "Dirección financiera, contabilidad & controlling, asesoría fiscal, control de caja, planificación y presupuestos, análisis de negocio y operativo, métricas y KPIs, y reporting de valor. Todo lo que necesitas para tener el control de tu empresa como lo hacen en las grandes compañías.",
  },
];

const DiagnosticoFinanciero = () => {
  const [emailGiven, setEmailGiven] = useState(false);

  return (
    <>
      <SEO
        title="Diagnóstico financiero gratis para empresas — CFOnomic"
        description="¿Tienes control de negocio y dirección financiera? En menos de 5 minutos obtén un diagnóstico financiero con recomendaciones para implementar hoy mismo."
        canonical="/diagnostico-financiero"
        breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Diagnóstico financiero", path: "/diagnostico-financiero" }]}
        faq={diagnosticoFaq}
      />
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <span className="tag-label mb-6 block">Diagnóstico</span>
            <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-5xl" role="presentation">
              ¿Tienes Control de negocio
              <br />
              y Dirección <span className="font-display italic font-normal">Financiera</span><span className="text-accent">?</span>
            </p>
            <h1 className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-body font-normal">
              En menos de 5 minutos obtén un diagnóstico sobre el control financiero y de negocio en tu empresa, obtendrás recomendaciones para implementar hoy mismo.
            </h1>

            {/* CTA prominente */}
            <div className="mt-10">
              {!emailGiven ? (
                <div className="max-w-lg">
                  <EmailCaptureForm
                    buttonText="Empezar Diagnóstico Financiero"
                    microcopy="Te enviamos el resultado completo por email. Sin compromiso."
                    variant="stacked"
                    source="diagnostico"
                    onSuccess={() => setEmailGiven(true)}
                  />
                </div>
              ) : (
                <div className="border-2 border-accent p-3 inline-block">
                  <a
                    href="#diagnostico-herramienta"
                    className="inline-flex bg-accent text-accent-foreground px-10 py-5 text-[14px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-accent/85 transition-colors"
                  >
                    Empezar Diagnóstico Financiero →
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {emailGiven && (
        <Section paper id="diagnostico-herramienta">
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
                <div className="iframe-container">
                  <iframe src="https://diagnostico-financiero.lovable.app" title="Diagnóstico Financiero" loading="lazy" className="w-full min-h-[800px]" />
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* FAQ para SEO */}
      <Section>
        <FadeIn>
          <SectionHeading tag="FAQ" title="Preguntas frecuentes sobre diagnóstico financiero" />
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {diagnosticoFaq.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading font-bold text-sm tracking-tight hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Section>

      <Section dark>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold tracking-tighter" role="presentation">
              ¿Prefieres que lo veamos <span className="font-display italic font-normal">juntos</span><span className="text-accent">?</span>
            </p>
            <h2 className="mt-3 text-sm text-surface-dark-foreground/50">
              Nos conocemos, me cuentas más sobre tu PYME o Start-up y vemos si os puedo ayudar.
            </h2>
            <div className="mt-6">
              <a href="https://tidycal.com/pablocfonomic/nosconocemos" target="_blank" rel="noopener noreferrer" className="inline-flex bg-accent text-accent-foreground px-6 py-3 text-[12px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-accent/85 transition-colors">
                Hablar con un Director Financiero →
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {[
                { label: "Servicios", path: "/servicios" },
                { label: "Casos reales", path: "/casos-de-exito" },
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
};

export default DiagnosticoFinanciero;
