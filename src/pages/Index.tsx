import { Link } from "react-router-dom";
import { Section, FadeIn, SectionHeading, PullQuote, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Button } from "@/components/ui/button";

/* ───────── HOME — LANDING ISRA BRAVO ───────── */

const Index = () => {
  return (
    <>
      {/* ═══ A) HERO ═══ */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container-wide">
          <FadeIn>
            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] tracking-tight">
              Ningún viento es favorable para quien{" "}
              <span className="highlight-text">no sabe a dónde va.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Muchas PYMEs facturan, pero no saben si ganan. La contabilidad llega tarde, la caja no
              cuadra y cada decisión se toma por intuición. CFOnomic te da el panel de control que
              necesitas.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Caja", "Márgenes", "Control", "Decisiones", "Tranquilidad"].map((w) => (
                <span
                  key={w}
                  className="rounded-full border border-border bg-surface-paper px-4 py-1.5 text-sm font-heading font-semibold text-heading"
                >
                  {w}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 max-w-xl">
              <EmailCaptureForm
                buttonText="Envíame el diagnóstico"
                microcopy="Te lo mando por email. Sin spam. Si no te aporta, te borras."
              />
              <p className="mt-4 text-sm text-muted-foreground">
                <Link
                  to="/contacto"
                  className="underline decoration-accent underline-offset-4 hover:text-heading transition-colors"
                >
                  Prefiero hablar 15 min →
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ B) CONEXIÓN DIRECTA ═══ */}
      <Section paper>
        <FadeIn>
          <div className="container-narrow mx-auto">
            <p className="font-heading text-2xl md:text-3xl font-bold text-heading leading-snug">
              Si tienes una PYME, te pasa una de estas:
            </p>
            <div className="mt-8 space-y-4 text-lg md:text-xl leading-relaxed">
              <p>Facturas… pero no sabes si ganas.</p>
              <p>Ganas… pero no tienes caja.</p>
              <p>Creces… y cada mes estás más justo.</p>
            </div>
            <p className="mt-8 font-heading text-xl md:text-2xl font-bold text-heading">
              No es falta de esfuerzo. Es falta de <span className="highlight-text">panel de control.</span>
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ C) HISTORIA PRESTADA — MERCADONA ═══ */}
      <Section>
        <FadeIn>
          <div className="container-narrow mx-auto">
            <SectionHeading tag="Historia prestada" title="Lo que hace Mercadona (y tú no)" />
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Juan Roig no adivina. Cada referencia de su supermercado tiene un margen medido. Cada
                tienda cierra mes con un cuadro de mando. Cada decisión de precio, de surtido, de
                inversión… pasa por un modelo financiero.
              </p>
              <p>
                No es magia. Es <strong>disciplina</strong>: miden, ajustan y repiten. Todos los meses.
              </p>
              <p>
                Mercadona no empezó siendo Mercadona. Empezó siendo una pequeña PYME. La diferencia es que
                desde el principio sabían sus números.
              </p>
            </div>
            <PullQuote>
              Una PYME no necesita un comité de 30 personas. Necesita el mismo sistema, en pequeño.
            </PullQuote>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ D) ATERRIZAJE CON DATOS ═══ */}
      <Section paper>
        <FadeIn>
          <SectionHeading
            tag="Ejemplo de servilleta"
            title="La servilleta que te cambia la cabeza"
            subtitle="No necesitas un MBA. Necesitas estos 5 números cada mes."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl">
            <div className="card-editorial p-6 md:p-8">
              <p className="font-heading text-lg font-bold text-heading mb-4">
                Ejemplo: empresa de servicios con 50.000 €/mes de ventas
              </p>
              <div className="space-y-3 font-body">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span>Ventas</span>
                  <span className="font-semibold">50.000 €</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span>Coste directo (40%)</span>
                  <span className="font-semibold">–20.000 €</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="font-semibold">Margen bruto</span>
                  <span className="font-semibold text-heading">30.000 €</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span>Costes fijos</span>
                  <span className="font-semibold">–25.000 €</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-heading font-bold text-heading">Beneficio operativo</span>
                  <span className="font-heading font-bold text-heading">5.000 €</span>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Ahora pregúntate: ¿qué pasa si subes precios un 3%? Tu beneficio pasa de 5.000 € a
                6.500 €. Un <strong>+30%</strong> en el resultado con un cambio que casi nadie nota.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <p className="font-heading text-xl font-bold text-heading mb-4">
              Lo que casi nadie mira y es lo que manda:
            </p>
            <BulletList
              items={[
                "Caja operativa: lo que entra y sale de verdad.",
                "NOF: el dinero que tu negocio necesita para funcionar cada día.",
                "Plazos de cobro vs plazos de pago: quién financia a quién.",
                "Inventario inmovilizado: dinero dormido.",
                "Costes que no ves: comisiones, suscripciones, retenciones.",
              ]}
            />
          </div>
        </FadeIn>
      </Section>

      {/* ═══ E) AUTORIDAD ═══ */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <FadeIn>
            <SectionHeading tag="Quién soy" title="Pablo Prado Marrón" subtitle="Pablo CFOnomic" />
            <BulletList
              items={[
                "Te monto el departamento financiero sin contratar a 3 personas.",
                "Cierres mensuales y reporting accionable.",
                "Cuenta de resultados analítica: sabes qué gana y qué sangra.",
                "Cashflow y previsión: controlas la caja.",
                "Acompaño decisiones: precios, estructura, crecimiento, financiación.",
              ]}
            />
            <div className="mt-8">
              <Link to="/equipo">
                <Button variant="outline" size="lg">
                  Conoce más sobre mí →
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="card-editorial p-6 md:p-8">
              <p className="font-heading text-lg font-bold text-heading mb-4">Lo que NO soy</p>
              <BulletList
                icon="✕"
                items={[
                  "No soy gestoría.",
                  "No te mando un PDF para que lo guardes.",
                  "No te hablo en jerga para parecer listo.",
                  "No te digo lo que quieres oír.",
                  "No te prometo milagros en 7 días.",
                ]}
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ F) BALAS DE VENTA ═══ */}

      {/* F1: DOLOR */}
      <Section paper>
        <FadeIn>
          <SectionHeading tag="Dolor" title="¿Te suena alguna de estas?" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            <BulletList
              icon="🔴"
              items={[
                "Te enteras tarde: cuando ya te ha explotado.",
                "La contabilidad te dice 'lo que pasó', pero tú necesitas 'qué hago ahora'.",
                "No sabes qué cliente te compensa.",
                "No sabes tu margen real por canal.",
                "Vas con miedo al día 25 de cada mes.",
                "Pagas impuestos a ciegas.",
                "Crecer te quita el sueño.",
              ]}
            />
            <BulletList
              icon="🔴"
              items={[
                "El Excel tiene 47 pestañas y ninguna te dice la verdad.",
                "No sabes cuánto te cuesta servir un pedido.",
                "Tu socio y tú no veis lo mismo.",
                "No tienes presupuesto. Ni mapa.",
                "Tomas decisiones de 50.000 € con la misma info que para pedir una pizza.",
                "Cada trimestre es una sorpresa (mala).",
                "Quieres delegar pero no puedes porque 'nadie entiende los números'.",
              ]}
            />
          </div>
        </FadeIn>
      </Section>

      {/* F2: INFORMACIÓN */}
      <Section>
        <FadeIn>
          <SectionHeading tag="Información" title="Lo que necesitas saber (y nadie te explica)" />
          <BulletList
            icon="📌"
            items={[
              "Facturar no es ganar.",
              "Beneficio ≠ caja.",
              "Si no cierras mes, estás jugando sin marcador.",
              "Un Excel sin método es un diario, no un sistema.",
              "Sin analítica por línea, decides a ojo.",
              "El margen bruto engaña si no mides los costes ocultos.",
              "La caja no miente, pero hay que saber leerla.",
              "Tu gestor te hace los impuestos, no te dirige las finanzas.",
            ]}
          />
        </FadeIn>
      </Section>

      {/* F3: CURIOSIDAD */}
      <Section paper>
        <FadeIn>
          <SectionHeading tag="Curiosidad" title="Preguntas que deberían quitarte el sueño" />
          <BulletList
            icon="❓"
            items={[
              "¿Qué producto te hace perder dinero sin que lo notes?",
              "¿Qué pasa si subes precios un 3%?",
              "¿Qué canal vende mucho pero te deja seco?",
              "¿Cuánto te cuesta de verdad un cliente?",
              "¿Cuánto 'paga' tu estructura cada mes?",
              "¿Cuántos meses de runway tienes?",
              "¿Cuánto dinero tienes dormido en inventario o cuentas por cobrar?",
              "¿Sabrías decir hoy, ahora mismo, tu margen neto?",
            ]}
          />
        </FadeIn>
      </Section>

      {/* F4: BENEFICIOS */}
      <Section>
        <FadeIn>
          <SectionHeading tag="Beneficios" title="Lo que consigues con un CFO externo" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            <BulletList
              icon="✓"
              items={[
                "Márgenes claros por línea, cliente y canal.",
                "Caja prevista con escenarios.",
                "Decisiones con datos, no con corazonadas.",
                "Presupuesto realista + control mensual.",
                "Tranquilidad: sabes dónde estás y qué viene.",
                "Crecimiento rentable (o controlado, pero consciente).",
                "Reunión mensual con tu 'brújula financiera'.",
              ]}
            />
            <BulletList
              icon="✓"
              items={[
                "Cuadro de mando que entiendes de un vistazo.",
                "Alertas antes de que sea tarde.",
                "Negociación con bancos con datos reales.",
                "Saber exactamente qué te cuesta cada euro de venta.",
                "Dormir sabiendo que alguien mira los números por ti.",
                "Tener un 'copiloto financiero' que habla tu idioma.",
                "Dejar de improvisar.",
              ]}
            />
          </div>
        </FadeIn>
      </Section>

      {/* F5: ERRORES */}
      <Section paper>
        <FadeIn>
          <SectionHeading tag="Errores" title="Errores que te cuestan dinero" />
          <BulletList
            icon="⚠️"
            items={[
              "Confundir 'mucho trabajo' con 'buen negocio'.",
              "No tener presupuesto (mapa).",
              "No medir CAC/LTV.",
              "No saber qué te cuesta servir un pedido/proyecto.",
              "No revisar desviaciones cada mes.",
              "No tener un cuadro de mando.",
              "Mezclar caja personal y caja de empresa.",
              "Bajar precios para 'vender más' (y ganar menos).",
              "Contratar sin saber si la estructura lo aguanta.",
              "Invertir antes de tener visibilidad.",
            ]}
          />
        </FadeIn>
      </Section>

      {/* ═══ G) OFERTA — SERVICIOS ═══ */}
      <Section>
        <FadeIn>
          <SectionHeading
            tag="Servicios"
            title="Tu departamento financiero. Sin contratar a un equipo entero."
            subtitle="Lo que una multinacional tiene con 10 personas, tú lo tienes con una. El mismo rigor, adaptado a tu tamaño."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "Control y Orden",
              subtitle: "Fundación",
              forWhom: "PYMEs que no cierran mes y van a ciegas.",
              includes: [
                "Cierre mensual estructurado",
                "PyG básica vs presupuesto",
                "Cashflow directo",
                "Reunión mensual de revisión",
              ],
              result: "En 30–60 días empiezas a ver con claridad.",
            },
            {
              name: "Rentabilidad y Decisiones",
              subtitle: "Analítica",
              forWhom: "PYMEs que facturan pero no saben si ganan por línea.",
              includes: [
                "PyG analítica (por canal/producto)",
                "Unit economics",
                "Cuadro de mando con KPIs",
                "Análisis de desviaciones",
                "Soporte a decisiones de precio y estructura",
              ],
              result: "Empiezas a tomar decisiones con datos, no con intuición.",
            },
            {
              name: "CFO Partner",
              subtitle: "Planificación + estrategia",
              forWhom: "PYMEs en crecimiento que necesitan un copiloto financiero.",
              includes: [
                "Todo lo anterior +",
                "Planificación financiera (budget + forecast)",
                "Gestión de caja y NOF",
                "Análisis de inversión y financiación",
                "Acompañamiento en decisiones estratégicas",
                "Interlocución con bancos e inversores",
              ],
              result: "Tienes un director financiero sin el coste fijo de uno.",
            },
          ].map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.1}>
              <div className={`card-editorial p-6 md:p-8 h-full flex flex-col ${i === 2 ? "border-accent border-2" : ""}`}>
                <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
                  {pkg.subtitle}
                </span>
                <h3 className="mt-2 text-xl md:text-2xl font-heading font-bold text-heading">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{pkg.forWhom}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-accent font-bold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-heading border-t border-border pt-4">
                  {pkg.result}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link to="/servicios">
              <Button variant="outline" size="lg">
                Ver todos los servicios →
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ H) PRUEBA SOCIAL ═══ */}
      <Section paper>
        <FadeIn>
          <SectionHeading
            tag="Casos de éxito"
            title="Empresas que ya miden, ajustan y repiten"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="card-editorial p-6 md:p-8">
              <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
                Turismo activo
              </span>
              <h3 className="mt-2 text-xl font-heading font-bold text-heading">Turicleta</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Control para crecer sin caos. Reporting mensual, presupuesto y gestión de caja para
                una empresa en expansión.
              </p>
              <Link
                to="/casos-de-exito/turicleta"
                className="mt-4 inline-block text-sm font-semibold text-heading underline decoration-accent underline-offset-4"
              >
                Ver caso completo →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-editorial p-6 md:p-8">
              <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
                Restauración
              </span>
              <h3 className="mt-2 text-xl font-heading font-bold text-heading">Impasto</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Rentabilidad real por canal y menú. PyG analítica, unit economics y decisiones
                basadas en datos.
              </p>
              <Link
                to="/casos-de-exito/impasto"
                className="mt-4 inline-block text-sm font-semibold text-heading underline decoration-accent underline-offset-4"
              >
                Ver caso completo →
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12 text-center">
            <EmailCaptureForm
              buttonText="Quiero mi diagnóstico"
              microcopy="Sin humo. Con números."
              className="max-w-md mx-auto"
              variant="stacked"
            />
          </div>
        </FadeIn>
      </Section>

      {/* ═══ I) CIERRE ISRA ═══ */}
      <Section>
        <FadeIn>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Si quieres seguir a ciegas, no hagas nada.
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
              Si quieres control y dormir mejor,{" "}
              <span className="highlight-text">deja tu email.</span>
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <EmailCaptureForm
                buttonText="Quiero ver mis números"
                microcopy="Te lo dejo claro en tu bandeja de entrada."
                variant="stacked"
              />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default Index;
