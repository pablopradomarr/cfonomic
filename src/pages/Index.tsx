import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section, FadeIn, SectionHeading, PullQuote, BulletList, Divider } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import GoogleReviews from "@/components/GoogleReviews";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import pabloBurbuja from "@/assets/pablo-burbuja.png";

const Index = () => {
  return (
    <>
      <SEO
        title="Asesoría financiera para PYMEs — CFOnomic"
        description="Tu departamento financiero sin contratar a un equipo entero. Control financiero, caja, márgenes y decisiones con datos para PYMEs y Startups."
        canonical="/"
        breadcrumbs={[{ name: "Inicio", path: "/" }]} />

      {/* ═══ A) HERO — MASSIVE TYPOGRAPHY ═══ */}
      <section className="relative min-h-[90vh] flex items-center py-24 md:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>

            
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-heading font-bold leading-[0.92] tracking-tighter"
            role="presentation">

            Ningún viento es <span className="font-display italic font-normal">favorable</span>
            <br />
            para quien <span className="highlight-text">no sabe</span>
            <br />
            a <span className="font-display italic font-normal">dónde va</span><span className="text-accent">.</span>

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-lg">

            <h1 className="text-base md:text-lg text-muted-foreground leading-relaxed font-body font-normal">
              Asesoría Financiera para PYMEs que quieren tomar decisiones con instinto analítico.  Somos el equipo financiero d para Control de caja, márgenes reales y decisiones con datos — sin contratar un equipo entero.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex flex-wrap gap-2">

            {["Caja", "Márgenes", "Control", "Decisiones", "Tranquilidad"].map((w) =>
            <span
              key={w}
              className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground border-b border-foreground/10 pb-1">

                {w}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12">

            <div className="border border-foreground/10 bg-background p-6 md:p-10">
              <p className="font-heading text-lg md:text-xl font-bold tracking-tight leading-snug max-w-2xl">
                Cada semana mando <span className="font-display italic font-normal">un email con un consejo financiero</span>{" "} 
                que puedes aplicar ese mismo día en tu PYME<span className="text-accent">.</span>
              </p>
              <div className="mt-6 max-w-lg">
                <EmailCaptureForm
                  buttonText="Quiero esos emails"
                  microcopy="Te apuntas hoy. Si mañana no te aporta, te borras en un clic. Sin resentimientos."
                  source="home-hero" />

              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative number */}
        <div className="absolute right-8 md:right-16 bottom-12 md:bottom-16 pointer-events-none select-none hidden md:block">
          <span className="font-heading text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tighter text-foreground/[0.03]">
            01
          </span>
        </div>
      </section>

      {/* ═══ MARQUEE DIVIDER ═══ */}
      <div className="border-y-2 border-foreground/20 bg-surface-dark py-5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, j) =>
          <div key={j} className="flex items-center gap-10 px-4">
              {[
            "Tu Departamento Financiero",
            "Dirección Financiera",
            "Contabilidad & Controlling",
            "Asesoría fiscal",
            "Control de negocio",
            "Planificación y Control de Tesorería",
            "Planificación y Presupuestos",
            "Análisis de negocio y operativo",
            "Métricas y KPIs",
            "Reporting de valor"].
            map((w, i) =>
            <span
              key={`${j}-${i}`}
              className="whitespace-nowrap text-xs font-heading font-bold uppercase tracking-[0.15em] text-surface-dark-foreground">

                  {w} <span className="text-accent ml-10">●</span>
                </span>
            )}
            </div>
          )}
        </div>
      </div>

      {/* ═══ B) CONEXIÓN — PUNCH ═══ */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <FadeIn className="md:col-span-4">
            <span className="number-display">02</span>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8">
            <p className="font-heading text-3xl md:text-5xl font-bold leading-[1.05] tracking-tighter">
              Si tienes una PYME, te pasa <span className="font-display italic font-normal">una de estas</span>:
            </p>
            <div className="mt-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/70 border-l-2 border-accent pl-6">
              <p>Facturas… pero no sabes si ganas.</p>
              <p>Ganas… pero no tienes caja.</p>
              <p>Creces… y cada mes estás más justo.</p>
            </div>
            <Divider accent />
            <p className="font-heading text-xl md:text-2xl font-bold tracking-tight">
              No es falta de <span className="font-display italic font-normal">esfuerzo</span>.
              <br />
              Es falta de <span className="highlight-text">panel de control</span><span className="text-accent">.</span>
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ C) HISTORIA — MERCADONA ═══ */}
      <Section dark>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
                Historia prestada
              </span>
              <p className="mt-6 text-[clamp(2rem,5vw,4.5rem)] font-heading font-bold leading-[1.05] tracking-tighter" role="presentation">
                Lo que hace <span className="font-display italic font-normal">Mercadona</span><span className="text-accent">.</span>
                <br />
                <span className="text-surface-dark-foreground/40">Y tú <span className="font-display italic">no</span>.</span>
              </p>
              <h2 className="mt-4 text-sm text-surface-dark-foreground/50 leading-relaxed max-w-md">
                El control financiero que aplican las grandes empresas, adaptado a tu PYME.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-surface-dark-foreground/70 text-base md:text-lg leading-relaxed">
              <p>
                Juan Roig no adivina. Cada referencia tiene un margen medido. Cada tienda cierra mes
                con un cuadro de mando. Cada decisión de precio, de surtido, de inversión…
                pasa por un modelo financiero.
              </p>
              <p>
                No es magia. Es <strong className="text-surface-dark-foreground">disciplina</strong>:
                miden, ajustan y repiten. Todos los meses.
              </p>
              <p>
                Mercadona no empezó siendo Mercadona. Empezó siendo una pequeña PYME.
                La diferencia es que desde el principio sabían sus números.
              </p>
              <div className="pt-4">
                <p className="font-heading text-xl md:text-2xl font-bold text-surface-dark-foreground leading-tight">
                  Una PYME no necesita un comité de 30 personas.
                  <br />
                  Necesita el mismo sistema, <span className="text-accent">en pequeño</span>.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ D) SERVILLETA — DATOS ═══ */}
      <Section>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="number-display">03</span>
              <p className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-heading font-bold leading-tight tracking-tighter" role="presentation">
                La servilleta que te cambia la cabeza<span className="text-accent">.</span>
              </p>
              <h2 className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Los 5 indicadores financieros que toda PYME debería revisar cada mes. Sin MBA, sin complicaciones.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="border border-foreground/10 p-6 md:p-10">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Ejemplo — Empresa de servicios · 50K €/mes
                </p>
                <div className="space-y-4 font-body text-sm">
                  {[
                  { label: "Ventas", value: "50.000 €", accent: false },
                  { label: "Coste directo (40%)", value: "–20.000 €", accent: false },
                  { label: "Margen bruto", value: "30.000 €", accent: true },
                  { label: "Costes fijos", value: "–25.000 €", accent: false },
                  { label: "Beneficio operativo", value: "5.000 €", accent: true }].
                  map((row, i) =>
                  <div
                    key={i}
                    className={`flex justify-between items-baseline pb-3 ${
                    i < 4 ? "border-b border-foreground/5" : ""}`
                    }>

                      <span className={row.accent ? "font-heading font-bold" : "text-muted-foreground"}>
                        {row.label}
                      </span>
                      <span className={`font-mono ${row.accent ? "font-bold text-lg" : ""}`}>
                        {row.value}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-8 border-t border-foreground/5 pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ¿Qué pasa si subes precios un 3%? Tu beneficio pasa de 5.000 € a 6.500 €.
                    <br />
                    Un <span className="font-heading font-bold text-foreground">+30%</span> en el
                    resultado con un cambio que casi nadie nota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 md:mt-24">
            <p className="font-heading text-lg font-bold tracking-tight mb-6">
              Lo que casi nadie mira y es lo que manda<span className="text-accent">.</span>
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
              "Caja operativa",
              "NOF",
              "Plazos de cobro vs pago",
              "Inventario inmovilizado",
              "Costes ocultos",
              "Retenciones"].
              map((item) =>
              <div key={item} className="border border-foreground/10 px-5 py-4">
                  <span className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    {item}
                  </span>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ E) AUTORIDAD ═══ */}
      <Section paper>
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <FadeIn className="md:col-span-6">
            <span className="tag-label mb-6 block">Quién soy</span>
            <div className="flex items-start gap-6 mb-6">
              <img
                src={pabloBurbuja}
                alt="Pablo Prado Marrón"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shrink-0"
                loading="lazy" />

              <div>
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-heading font-bold leading-[1] tracking-tighter" role="presentation">
                  Pablo <span className="font-display italic font-normal">Prado</span>
                  <br />
                  Marrón<span className="text-accent">.</span>
                </p>
                <h2 className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-[0.15em]">
                  Asesor financiero para PYMEs · CFOnomic
                </h2>
              </div>
            </div>
            <Divider accent />
            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
              <p>→ Te monto el departamento financiero sin contratar a 3 personas.</p>
              <p>→ Cierres mensuales y reporting accionable.</p>
              <p>→ Cuenta de resultados analítica: sabes qué gana y qué sangra.</p>
              <p>→ Cashflow y previsión: controlas la caja.</p>
              <p>→ Acompaño decisiones: precios, estructura, crecimiento, financiación.</p>
            </div>
            <div className="mt-8">
              <Link to="/equipo">
                <Button variant="accentOutline" size="lg">
                  Más sobre mí →
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-6">
            <div className="border border-foreground/10 p-8 md:p-10 bg-background">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Lo que no soy
              </p>
              <div className="space-y-5 text-sm text-foreground/70">
                {[
                "No soy gestoría.",
                "No te mando un PDF para que lo guardes.",
                "No te hablo en jerga para parecer listo.",
                "No te digo lo que quieres oír.",
                "No te prometo milagros en 7 días."].
                map((item) =>
                <p key={item} className="flex items-start gap-3">
                    <span className="text-accent font-mono font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ F) BALAS DE VENTA ═══ */}

      {/* DOLOR */}
      <Section>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="number-display text-foreground/5">04</span>
              <span className="tag-label block mt-4">Dolor</span>
              <p className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-heading font-bold leading-tight tracking-tighter" role="presentation">
                ¿Te suena?
              </p>
              <h2 className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Problemas financieros que vemos en 9 de cada 10 PYMEs sin control financiero.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-foreground/70 leading-relaxed">
                {[
                "Te enteras tarde: cuando ya te ha explotado.",
                "La contabilidad te dice 'lo que pasó', pero tú necesitas 'qué hago ahora'.",
                "No sabes qué cliente te compensa.",
                "No sabes tu margen real por canal.",
                "Vas con miedo al día 25.",
                "Pagas impuestos a ciegas.",
                "Crecer te quita el sueño.",
                "El Excel tiene 47 pestañas y ninguna dice la verdad.",
                "No sabes cuánto te cuesta servir un pedido.",
                "Tu socio y tú no veis lo mismo.",
                "No tienes presupuesto. Ni mapa.",
                "Tomas decisiones de 50.000 € con la misma info que para pedir una pizza.",
                "Cada trimestre es una sorpresa (mala).",
                "Quieres delegar pero 'nadie entiende los números'."].
                map((item, i) =>
                <p key={i} className="border-l border-foreground/10 pl-4 py-2">
                    {item}
                  </p>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ EMAIL CAPTURE — POST DOLOR ═══ */}
      <Section paper>
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="border border-foreground/10 bg-background p-8 md:p-12">
              <span className="tag-label mb-4 block">Gratis · Cada semana</span>
              <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                Si has llegado hasta aquí, es porque algo de esto te <span className="font-display italic font-normal">suena</span><span className="text-accent">.</span>
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Mando un email semanal con un consejo financiero corto, directo y aplicable. 
                El tipo de cosas que nadie te cuenta porque no le interesa que las sepas.
                Sin vender cursos, sin webinars de 3 horas, sin PDF de 47 páginas.
              </p>
              <div className="mt-6">
                <EmailCaptureForm
                  buttonText="Apúntame"
                  microcopy="Un email. Una idea. Si no te gusta, te das de baja y aquí no ha pasado nada."
                  source="home-post-dolor"
                  variant="stacked" />

              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* INFORMACIÓN + CURIOSIDAD */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn>
            <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
              Información
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Lo que necesitas saber<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-4 text-sm text-surface-dark-foreground/60 leading-relaxed">
              {[
              "Facturar no es ganar.",
              "Beneficio ≠ caja.",
              "Si no cierras mes, estás jugando sin marcador.",
              "Un Excel sin método es un diario, no un sistema.",
              "Sin analítica por línea, decides a ojo.",
              "El margen bruto engaña si no mides los costes ocultos.",
              "La caja no miente, pero hay que saber leerla.",
              "Tu gestor te hace los impuestos, no te dirige las finanzas."].
              map((item, i) =>
              <p key={i} className="border-l border-surface-dark-foreground/10 pl-4 py-1">
                  {item}
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
              Curiosidad
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Preguntas incómodas<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-4 text-sm text-surface-dark-foreground/60 leading-relaxed">
              {[
              "¿Qué producto te hace perder dinero sin que lo notes?",
              "¿Qué pasa si subes precios un 3%?",
              "¿Qué canal vende mucho pero te deja seco?",
              "¿Cuánto te cuesta de verdad un cliente?",
              "¿Cuánto 'paga' tu estructura cada mes?",
              "¿Cuántos meses de runway tienes?",
              "¿Cuánto dinero tienes dormido?",
              "¿Sabrías decir ahora mismo tu margen neto?"].
              map((item, i) =>
              <p key={i} className="border-l border-accent/30 pl-4 py-1">
                  {item}
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* BENEFICIOS + ERRORES */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn>
            <span className="tag-label">Beneficios</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Lo que consigues<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-3 text-sm text-foreground/70">
              {[
              "Márgenes claros por línea, cliente y canal.",
              "Caja prevista con escenarios.",
              "Decisiones con datos, no con corazonadas.",
              "Presupuesto realista + control mensual.",
              "Tranquilidad: sabes dónde estás y qué viene.",
              "Crecimiento rentable (o controlado, pero consciente).",
              "Reunión mensual con tu 'brújula financiera'.",
              "Cuadro de mando que entiendes de un vistazo.",
              "Alertas antes de que sea tarde.",
              "Dejar de improvisar."].
              map((item, i) =>
              <p key={i} className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-1">✓</span>
                  <span>{item}</span>
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="tag-label">Errores</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Lo que te cuesta dinero<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-3 text-sm text-foreground/70">
              {[
              "Confundir 'mucho trabajo' con 'buen negocio'.",
              "No tener presupuesto (mapa).",
              "No medir CAC/LTV.",
              "No saber qué te cuesta servir un pedido.",
              "No revisar desviaciones cada mes.",
              "No tener un cuadro de mando.",
              "Mezclar caja personal y de empresa.",
              "Bajar precios para 'vender más' (y ganar menos).",
              "Contratar sin saber si la estructura lo aguanta.",
              "Invertir antes de tener visibilidad."].
              map((item, i) =>
              <p key={i} className="flex items-start gap-3">
                  <span className="text-foreground/20 font-mono text-xs mt-1">⚠</span>
                  <span>{item}</span>
                </p>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ G) SERVICIOS ═══ */}
      <Section paper>
        <FadeIn>
          <SectionHeading
            tag="Servicios"
            title="Tu departamento financiero."
            subtitle="Lo que una multinacional tiene con 10 personas, tú lo tienes con una."
            large />

        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mt-12">
          {[
          {
            num: "01",
            name: "Control y Orden",
            subtitle: "Fundación",
            forWhom: "PYMEs que no cierran mes y van a ciegas.",
            includes: [
            "Cierre mensual estructurado",
            "PyG básica vs presupuesto",
            "Cashflow directo",
            "Reunión mensual de revisión"],

            result: "En 30–60 días empiezas a ver con claridad."
          },
          {
            num: "02",
            name: "Rentabilidad",
            subtitle: "Analítica",
            forWhom: "PYMEs que facturan pero no saben si ganan por línea.",
            includes: [
            "PyG analítica por canal/producto",
            "Unit economics",
            "Cuadro de mando con KPIs",
            "Análisis de desviaciones",
            "Soporte a decisiones de precio"],

            result: "Decisiones con datos, no con intuición."
          },
          {
            num: "03",
            name: "CFO Partner",
            subtitle: "Estrategia",
            forWhom: "PYMEs en crecimiento que necesitan un copiloto financiero.",
            includes: [
            "Todo lo anterior",
            "Planificación financiera",
            "Gestión de caja y NOF",
            "Análisis de inversión",
            "Interlocución con bancos"],

            result: "Director financiero sin el coste fijo de uno."
          }].
          map((pkg, i) =>
          <FadeIn key={pkg.name} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-10 h-full flex flex-col">
                <span className="font-heading text-5xl font-bold text-foreground/5">{pkg.num}</span>
                <span className="mt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {pkg.subtitle}
                </span>
                <h3 className="mt-2 text-xl md:text-2xl font-heading font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-xs text-muted-foreground">{pkg.forWhom}</p>
                <div className="mt-6 flex-1 space-y-2">
                  {pkg.includes.map((item) =>
                <p key={item} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-accent font-mono text-[10px] mt-1">→</span>
                      <span>{item}</span>
                    </p>
                )}
                </div>
                <div className="mt-8 pt-6 border-t border-foreground/5">
                  <p className="text-xs font-heading font-bold">{pkg.result}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link to="/servicios">
              <Button variant="accentOutline" size="lg">
                Ver todos los servicios →
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ H) CASOS ═══ */}
      <Section>
        <FadeIn>
          <SectionHeading tag="Casos" title="Medir. Ajustar. Repetir." />
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {[
          {
            tag: "Turismo activo",
            name: "Turicleta",
            line: "Control para crecer sin caos.",
            path: "/casos-de-exito/turicleta"
          },
          {
            tag: "Restauración",
            name: "Impasto",
            line: "Rentabilidad real por canal y menú.",
            path: "/casos-de-exito/impasto"
          }].
          map((c, i) =>
          <FadeIn key={c.name} delay={i * 0.1}>
              <Link to={c.path} className="block bg-background p-8 md:p-12 group h-full">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {c.tag}
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-heading font-bold tracking-tight group-hover:text-accent transition-colors">
                  {c.name}<span className="text-accent">.</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.line}</p>
                <span className="mt-6 inline-block text-[11px] font-mono uppercase tracking-[0.1em] text-foreground/40 group-hover:text-foreground transition-colors">
                  Ver caso →
                </span>
              </Link>
            </FadeIn>
          )}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-16 max-w-lg mx-auto">
            <div className="border border-foreground/10 p-6 md:p-8">
              <p className="font-heading text-lg font-bold tracking-tight">
                ¿Quieres consejos así cada semana en tu bandeja?
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Sin teoría de MBA. Solo lo que funciona en PYMEs de verdad.
              </p>
              <div className="mt-4">
                <EmailCaptureForm
                  buttonText="Me apunto"
                  microcopy="Un email semanal. Sin compromisos. Sin dramas."
                  variant="stacked"
                  source="home-post-casos" />

              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ PRUEBA SOCIAL — GOOGLE REVIEWS ═══ */}
      <Section paper>
        <FadeIn>
          <SectionHeading tag="Prueba social" title="Lo que dicen nuestros clientes." />
        </FadeIn>
        <GoogleReviews />
      </Section>

      {/* ═══ FAQs ═══ */}
      <Section>
        <FadeIn>
          <div className="mb-14 md:mb-20">
            <span className="sr-only">FAQs</span>
            <p className="text-[clamp(2rem,5vw,4.5rem)] font-heading font-bold leading-[1.05] tracking-tighter" role="presentation">
              Algunas dudas frecuentes que quizá tengas<span className="text-accent">.</span>
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {[
              {
                q: "¿Esto es una gestoría?",
                a: "No. Tu gestoría hace impuestos. Yo hago que entiendas tus números y tomes decisiones con datos. Son cosas muy distintas. Una te dice lo que pasó; yo te digo qué hacer con lo que viene."
              },
              {
                q: "¿Cuánto cuesta?",
                a: "Depende de lo que necesites. No es lo mismo montar un cierre mensual desde cero que acompañarte como CFO externo. Hablamos 15 minutos, entiendo tu situación y te digo un precio cerrado. Sin sorpresas."
              },
              {
                q: "Ya tengo contable, ¿para qué necesito esto?",
                a: "Tu contable registra. Yo interpreto. Tu contable te dice que has facturado 80.000 €. Yo te digo que el 40% de esa facturación te está costando dinero y que tienes un problema de caja en 45 días si no haces nada."
              },
              {
                q: "¿Funciona para mi sector?",
                a: "Si tienes una PYME que factura, tiene costes y necesita tomar decisiones… sí. He trabajado con hostelería, turismo, alimentación, servicios, ecommerce, industria. Los números hablan el mismo idioma en todos los sectores."
              },
              {
                q: "¿Cuánto tardo en ver resultados?",
                a: "En 30-60 días tienes tu primer cierre mensual y empiezas a ver con claridad. No es magia: es método. A los 3 meses ya estás tomando decisiones que antes no podías."
              },
              {
                q: "¿Y si mi empresa es muy pequeña?",
                a: "Precisamente las empresas pequeñas son las que más lo necesitan. Una multinacional se puede permitir perder 50.000 € por un error de pricing. Tú no. Cuanto más pequeño eres, más necesitas controlar cada euro."
              },
              {
                q: "¿Qué pasa con los emails que mandas?",
                a: "Un email a la semana. Un consejo financiero corto y aplicable. Sin vender humo, sin webinars de 3 horas, sin PDFs interminables. Si no te aporta, te das de baja en un clic y aquí paz y después gloria."
              }].
              map((faq, i) =>
              <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base md:text-lg font-bold tracking-tight">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ I) CIERRE ═══ */}
      <Section dark>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="sr-only">Recibe consejos financieros semanales para tu PYME</h2>
            <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[1.02] tracking-tighter" role="presentation">
              Si quieres seguir
              <br />
              a <span className="font-display italic font-normal">ciegas</span>, no hagas nada<span className="text-accent">.</span>
            </p>
            <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/50">
              Pero si prefieres abrir el email cada semana y pensar «joder, esto lo aplico hoy»… déjame tu correo.
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <EmailCaptureForm
                buttonText="Quiero esos consejos"
                microcopy="Un email semanal. Sin compromiso. Te borras cuando quieras."
                variant="stacked"
                dark
                source="home-cierre" />

            </div>
          </div>
        </FadeIn>
      </Section>
    </>);

};

export default Index;