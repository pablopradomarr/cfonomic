import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section, FadeIn, SectionHeading, Divider } from "@/components/Editorial";
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
        description="Planificación, control y dirección financiera para PYMEs y Startups. Somos tu departamento financiero para crecer de manera rentable con tranquilidad."
        canonical="/"
        breadcrumbs={[{ name: "Inicio", path: "/" }]}
        faq={[
          { q: "¿Esto es una gestoría?", a: "No. Tu gestoría hace impuestos. Nosotros hacemos que entiendas tus números y tomes decisiones con datos." },
          { q: "¿Cuánto cuesta un director financiero externo?", a: "Depende de lo que necesites. Hablamos 15 minutos, entendemos tu situación y te damos un precio cerrado. Sin sorpresas." },
          { q: "Ya tengo contable, ¿para qué necesito esto?", a: "Tu contable registra. Nosotros interpretamos y te decimos qué hacer con lo que viene." },
          { q: "¿Funciona para mi sector?", a: "Si tienes una PYME que factura, tiene costes y necesita tomar decisiones… sí." },
          { q: "¿Cuánto tardo en ver resultados?", a: "En 30-60 días tienes tu primer cierre mensual y empiezas a ver con claridad." },
        ]}
      />

      {/* ═══ A) HERO — LA CITA ═══ */}
      <section className="relative min-h-[90vh] flex items-center py-24 md:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-heading font-bold leading-[0.92] tracking-tighter"
            role="presentation"
          >
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
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-base md:text-lg text-muted-foreground leading-relaxed font-body font-normal">
              ¿Te imaginas tener un mapa, una brújula y un rumbo claro para crecer con
              <span className="font-semibold text-foreground"> claridad</span>,
              <span className="font-semibold text-foreground"> rentabilidad</span> y
              <span className="font-semibold text-foreground"> tranquilidad</span>?
              <br className="hidden md:block" />
              Eso es lo que hacemos en CFOnomic con <span className="font-display italic">planificación</span>, <span className="font-display italic">control</span> y <span className="font-display italic">dirección financiera</span>.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-sm md:text-base text-muted-foreground/80 font-body max-w-xl leading-relaxed">
              Sigue leyendo si tienes una PYME y quieres saber si podemos ayudarte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["Mapa", "Brújula", "Rumbo", "Rentabilidad", "Tranquilidad"].map((w) => (
              <span
                key={w}
                className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground border-b border-foreground/10 pb-1"
              >
                {w}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <div className="border border-foreground/10 bg-background p-6 md:p-10">
              <p className="font-heading text-lg md:text-xl font-bold tracking-tight leading-snug max-w-2xl">
                Cada semana mando <span className="font-display italic font-normal">un email con un consejo financiero</span>{" "}
                que puedes aplicar ese mismo día en tu PYME<span className="text-accent">.</span>
              </p>
              <div className="mt-6 max-w-lg">
                <EmailCaptureForm
                  buttonText="Quiero esos emails"
                  microcopy="Te apuntas hoy. Si mañana no te aporta, te borras en un clic. Sin rencores."
                  source="home-hero"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-8 md:right-16 bottom-12 md:bottom-16 pointer-events-none select-none hidden md:block">
          <span className="font-heading text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tighter text-foreground/[0.03]">
            01
          </span>
        </div>
      </section>

      {/* ═══ MARQUEE DIVIDER ═══ */}
      <div className="border-y-2 border-foreground/20 bg-surface-dark py-5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, j) => (
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
                "Reporting de valor",
              ].map((w, i) => (
                <span
                  key={`${j}-${i}`}
                  className="whitespace-nowrap text-xs font-heading font-bold uppercase tracking-[0.15em] text-surface-dark-foreground"
                >
                  {w} <span className="text-accent ml-10">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ B) ¿QUÉ HACÉIS EXACTAMENTE? ═══ */}
      <Section>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <FadeIn className="md:col-span-4">
            <span className="number-display">02</span>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-8">
            <p className="text-sm text-muted-foreground font-body mb-4">
              En CFOnomic ayudamos a CEOs de PYMEs y Startups a tener planificación y control de su empresa para crecer de manera rentable con tranquilidad.
            </p>
            <p className="font-heading text-3xl md:text-5xl font-bold leading-[1.05] tracking-tighter">
              Vale, pero <span className="font-display italic font-normal">¿qué hacéis exactamente?</span>
            </p>
            <p className="mt-3 text-xs text-muted-foreground/60 font-display italic">
              — me decía un cliente.
            </p>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <p className="border-l-2 border-accent pl-6">
                Somos el departamento financiero que <span className="font-semibold text-foreground">genera y transforma la contabilidad en información</span> con la que tomes decisiones.
              </p>
              <p className="border-l-2 border-accent pl-6">
                Somos el departamento financiero que pueden tener empresas como <span className="font-semibold text-foreground">Inditex o Mercadona</span> y tú no podrías pagar.
              </p>
              <p className="border-l-2 border-accent pl-6">
                Somos todo eso siendo <span className="font-semibold text-foreground">parte de tu equipo</span> pero sin que contrates a nadie.
              </p>
            </div>
            <Divider accent />
            <p className="font-heading text-xl md:text-2xl font-bold tracking-tight leading-snug">
              Como <span className="font-display italic font-normal">Director Financiero</span>, seré tu mano derecha para que tomes decisiones con <span className="highlight-text">información objetiva</span> de tu negocio y no solo con tu intuición<span className="text-accent">.</span>
            </p>
            <div className="mt-6 space-y-3 text-sm text-foreground/70">
              <p className="flex items-start gap-3">
                <span className="text-accent font-mono text-xs mt-1">→</span>
                <span>Te liberamos de pegarte con gestoría, bancos, asesores fiscales, inversores.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent font-mono text-xs mt-1">→</span>
                <span>Somos el almirante que todo capitán de barco necesita. Con nuestro mapa. Nuestra brújula.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ C) RESULTADOS REALES ═══ */}
      <Section dark>
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
                Resultados reales
              </span>
              <p className="mt-6 text-[clamp(2rem,5vw,4.5rem)] font-heading font-bold leading-[1.05] tracking-tighter" role="presentation">
                PYMEs que han crecido de <span className="text-accent">50 mil</span> a <span className="text-accent">2 millones</span> en un año<span className="text-accent">.</span>
              </p>
              <h2 className="mt-4 text-sm text-surface-dark-foreground/50 leading-relaxed max-w-md">
                Y siguen vivas por el camino. Porque crecer sin control es la forma más rápida de hundirse.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-surface-dark-foreground/70 text-base md:text-lg leading-relaxed">
              <p>
                Ayudamos a mejorar la financiación con bancos para financiar el circulante.
                <span className="text-surface-dark-foreground font-semibold"> El colchón para aguantar cuando el cliente se retrasa y el proveedor aprieta.</span>
              </p>
              <p>
                Le hablamos al banco de tú a tú, a los inversores les presentamos números que entienden, y sacamos financiación hasta de las piedras.
              </p>
              <div className="pt-4">
                <p className="font-heading text-xl md:text-2xl font-bold text-surface-dark-foreground leading-tight">
                  Gestionar una empresa sin control financiero es como capitanear un barco sin mapa ni brújula: avanzas, sí… pero no sabes hacia dónde ni si estás más cerca del destino o de la <span className="text-accent">tormenta</span>.
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
                    { label: "Beneficio operativo", value: "5.000 €", accent: true },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-baseline pb-3 ${i < 4 ? "border-b border-foreground/5" : ""}`}
                    >
                      <span className={row.accent ? "font-heading font-bold" : "text-muted-foreground"}>
                        {row.label}
                      </span>
                      <span className={`font-mono ${row.accent ? "font-bold text-lg" : ""}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
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
                "Retenciones",
              ].map((item) => (
                <div key={item} className="border border-foreground/10 px-5 py-4">
                  <span className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
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
                loading="lazy"
              />
              <div>
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-heading font-bold leading-[1] tracking-tighter" role="presentation">
                  Pablo <span className="font-display italic font-normal">Prado</span>
                  <br />
                  Marrón<span className="text-accent">.</span>
                </p>
                <h2 className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-[0.15em]">
                  Director Financiero externo · CFOnomic
                </h2>
              </div>
            </div>
            <Divider accent />
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              +10 años de experiencia en la mejor empresa de auditoría del mundo y multinacionales que seguramente usabas a diario.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { role: "Auditor", company: "PwC" },
                { role: "Controller", company: "Schindler" },
                { role: "FP&A", company: "Técnicas Reunidas" },
                { role: "Finance Manager", company: "Thyssenkrupp" },
              ].map((exp) => (
                <div key={exp.company} className="border border-foreground/10 px-4 py-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground block">{exp.role}</span>
                  <span className="text-sm font-heading font-bold">{exp.company}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/equipo">
                <Button variant="accentOutline" size="lg">
                  Mi historia completa →
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-6">
            <div className="border border-foreground/10 p-8 md:p-10 bg-background">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                El enemigo real
              </p>
              <p className="font-heading text-xl md:text-2xl font-bold tracking-tight leading-snug mb-6">
                Pagar a una gestoría que <span className="font-display italic font-normal">no asesora</span> y a un contable que no te da visibilidad real sobre tu negocio<span className="text-accent">.</span>
              </p>
              <div className="space-y-5 text-sm text-foreground/70">
                {[
                  "Cuando la gestoría te trae los impuestos sin haber visto tus números antes, es como que te traigan la cuenta de un chuletón que ni siquiera te has comido.",
                  "Tener un buen control de negocio no es tener un gestor que te presenta el trimestral del IVA y sociedades.",
                  "En 2025, para crecer de manera rentable tienes que entender y analizar las claves financieras y las métricas relevantes de tu negocio.",
                ].map((item) => (
                  <p key={item} className="border-l-2 border-accent/40 pl-4">
                    {item}
                  </p>
                ))}
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
              <div className="space-y-6">
                {/* Balas narrativas */}
                <div className="border border-foreground/10 p-6 md:p-8 bg-surface-paper">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-display italic">
                    "Gestionar una empresa sin control financiero es como capitanear un barco sin mapa ni brújula: avanzas, sí… pero no sabes hacia dónde ni si estás más cerca del destino o de la tormenta."
                  </p>
                </div>
                <div className="border border-foreground/10 p-6 md:p-8 bg-surface-paper">
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-display italic">
                    "El 80% de los CEOs que llegan a CFOnomic se enteran de cómo va su empresa solo cuando el banco les dice que no. Igual que un colega que iba desaliñado y no entendía por qué siempre escuchaba: 'no eres tú, soy yo'."
                  </p>
                </div>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Te enteras tarde: cuando ya te ha explotado.",
                  "La contabilidad te dice 'lo que pasó', pero tú necesitas 'qué hago ahora'.",
                  "No sabes qué cliente te compensa.",
                  "No sabes tu margen real por canal.",
                  "Vas con miedo al día 25.",
                  "Pagas impuestos a ciegas.",
                  "Crecer te quita el sueño.",
                  "El Excel tiene 47 pestañas y ninguna dice la verdad.",
                  "Tomas decisiones de 50.000 € con la misma info que para pedir una pizza.",
                  "Cada trimestre es una sorpresa (mala).",
                ].map((item, i) => (
                  <p key={i} className="border-l border-foreground/10 pl-4 py-2">
                    {item}
                  </p>
                ))}
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
              </p>
              <div className="mt-6">
                <EmailCaptureForm
                  buttonText="Apúntame"
                  microcopy="Un email. Una idea. Si no te gusta, te das de baja y aquí no ha pasado nada."
                  source="home-post-dolor"
                  variant="stacked"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CURIOSIDAD + INFORMACIÓN */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn>
            <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
              Curiosidad
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Preguntas incómodas<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-4">
              <div className="border border-surface-dark-foreground/10 p-5 md:p-6">
                <p className="text-sm text-surface-dark-foreground/80 leading-relaxed font-display italic">
                  "Hay una métrica que me dice si tu barco está preparado para una tormenta o si va a hacer agua en tres meses. Casi ningún CEO la mira… pero cuando la ve entiende todo."
                </p>
              </div>
              <div className="border border-surface-dark-foreground/10 p-5 md:p-6">
                <p className="text-sm text-surface-dark-foreground/80 leading-relaxed font-display italic">
                  "¿Sabes cuál fue el punto exacto que permitió a un CEO dejar de dedicar los sábados por la mañana a sus 4 Excels malos… y empezar a ir a ver a su hijo jugar al fútbol?"
                </p>
              </div>
              {[
                "¿Qué producto te hace perder dinero sin que lo notes?",
                "¿Qué pasa si subes precios un 3%?",
                "¿Cuántos meses de runway tienes?",
                "¿Sabrías decir ahora mismo tu margen neto?",
              ].map((item, i) => (
                <p key={i} className="text-sm text-surface-dark-foreground/60 border-l border-accent/30 pl-4 py-1">
                  {item}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40">
              Información
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Lo que necesitas saber<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-4">
              <div className="border border-surface-dark-foreground/10 p-5 md:p-6">
                <p className="text-sm text-surface-dark-foreground/80 leading-relaxed font-display italic">
                  "Un administrativo sin control de negocio es una planta: la riegas, crece… pero no da frutos. Con analítica financiera se convierte en un árbol que alimenta decisiones."
                </p>
              </div>
              {[
                "Facturar no es ganar.",
                "Beneficio ≠ caja.",
                "Si no cierras mes, estás jugando sin marcador.",
                "Un Excel sin método es un diario, no un sistema.",
                "El margen bruto engaña si no mides los costes ocultos.",
                "La caja no miente, pero hay que saber leerla.",
                "Tu gestor te hace los impuestos, no te dirige las finanzas.",
              ].map((item, i) => (
                <p key={i} className="text-sm text-surface-dark-foreground/60 border-l border-surface-dark-foreground/10 pl-4 py-1">
                  {item}
                </p>
              ))}
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
            <div className="mt-8 space-y-4">
              <div className="border border-foreground/10 p-5 md:p-6 bg-surface-paper">
                <p className="text-sm text-foreground/80 leading-relaxed font-display italic">
                  "Tener la contabilidad analítica y el cuadro de mando CFOnomic es como navegar con mapa y brújula: decides antes, corriges antes y llegas antes. Todo con menos mareo."
                </p>
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 bg-surface-paper">
                <p className="text-sm text-foreground/80 leading-relaxed font-display italic">
                  "Cuando pones orden financiero, el banco deja de tratarte como un desconocido desaliñado y empieza a verte como un capitán serio con un barco sólido."
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-foreground/70">
              {[
                "Márgenes claros por línea, cliente y canal.",
                "Caja prevista con escenarios.",
                "Decisiones con datos, no con corazonadas.",
                "Presupuesto realista + control mensual.",
                "Tranquilidad: sabes dónde estás y qué viene.",
                "Cuadro de mando que entiendes de un vistazo.",
                "Dejar de improvisar.",
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-1">✓</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="tag-label">Errores</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold leading-tight tracking-tighter">
              Lo que te cuesta dinero<span className="text-accent">.</span>
            </h3>
            <div className="mt-8 space-y-4">
              <div className="border border-foreground/10 p-5 md:p-6 bg-surface-paper">
                <p className="text-sm text-foreground/80 leading-relaxed font-display italic">
                  "El error más caro de un CEO: creer que navegar más rápido garantiza llegar mejor. No. El barco se hunde por dentro, no por la velocidad."
                </p>
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 bg-surface-paper">
                <p className="text-sm text-foreground/80 leading-relaxed font-display italic">
                  "Muchos quieren vender su empresa sin profesionalizarla antes: es como intentar vender un barco sin brújula, sin mapa y con goteras… y esperar precio de yate."
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-foreground/70">
              {[
                "Confundir 'mucho trabajo' con 'buen negocio'.",
                "No tener presupuesto (mapa).",
                "No medir CAC/LTV.",
                "Bajar precios para 'vender más' (y ganar menos).",
                "Contratar sin saber si la estructura lo aguanta.",
                "Invertir antes de tener visibilidad.",
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-3">
                  <span className="text-foreground/20 font-mono text-xs mt-1">⚠</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ OBJECIÓN DE PRECIO ═══ */}
      <Section dark>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[1.05] tracking-tighter" role="presentation">
              Vale, pero un director financiero y un departamento financiero al completo, será <span className="font-display italic font-normal">muy caro</span><span className="text-accent">.</span>
            </p>
            <div className="mt-8 space-y-6 text-base md:text-lg text-surface-dark-foreground/70 leading-relaxed">
              <p>
                Si crees eso, seguramente tengas razón y no seamos para ti.
              </p>
              <p>
                Pero como decimos siempre: <span className="text-surface-dark-foreground font-semibold">lo caro es no saber dónde va tu dinero.</span>
              </p>
              <p>
                Lo caro es tomar decisiones de 50.000 € con la misma información que para pedir una pizza.
              </p>
              <p>
                Lo caro es que tu empresa crezca y tú no puedas dormir.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://tidycal.com/pablocfonomic/nosconocemos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="lg">
                  Hablar con un Director Financiero
                </Button>
              </a>
              <Link to="/diagnostico-financiero">
                <Button variant="accentOutline" size="lg">
                  Diagnóstico Financiero gratuito
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ G) SERVICIOS ═══ */}
      <Section paper>
        <FadeIn>
          <SectionHeading
            tag="Servicios"
            title="Tu departamento financiero."
            subtitle="Lo que una multinacional tiene con 10 personas, tú lo tienes con una."
            large
          />
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
                "Reunión mensual de revisión",
              ],
              result: "En 30–60 días empiezas a ver con claridad.",
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
                "Soporte a decisiones de precio",
              ],
              result: "Decisiones con datos, no con intuición.",
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
                "Interlocución con bancos",
              ],
              result: "Director financiero sin el coste fijo de uno.",
            },
          ].map((pkg, i) => (
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
                  {pkg.includes.map((item) => (
                    <p key={item} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-accent font-mono text-[10px] mt-1">→</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-foreground/5">
                  <p className="text-xs font-heading font-bold">{pkg.result}</p>
                </div>
              </div>
            </FadeIn>
          ))}
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
              path: "/casos-de-exito/turicleta",
            },
            {
              tag: "Restauración",
              name: "Impasto",
              line: "Rentabilidad real por canal y menú.",
              path: "/casos-de-exito/impasto",
            },
          ].map((c, i) => (
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
          ))}
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
                  source="home-post-casos"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ PRUEBA SOCIAL — GOOGLE REVIEWS ═══ */}
      <Section paper>
        <FadeIn>
          <div className="mb-14 md:mb-20">
            <span className="tag-label mb-5 block">Prueba social</span>
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[1.05] tracking-tighter">
              …Qué te voy a contar yo que no te puedan contar mejor <span className="font-display italic font-normal">nuestros clientes</span><span className="text-accent">?</span>
            </p>
          </div>
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
          <div className="max-w-4xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "¿Esto es una gestoría?",
                  a: "No. Tu gestoría hace impuestos. Yo hago que entiendas tus números y tomes decisiones con datos. Son cosas muy distintas. Una te dice lo que pasó; yo te digo qué hacer con lo que viene.",
                },
                {
                  q: "¿Cuánto cuesta?",
                  a: "Depende de lo que necesites. No es lo mismo montar un cierre mensual desde cero que acompañarte como CFO externo. Hablamos 15 minutos, entiendo tu situación y te digo un precio cerrado. Sin sorpresas.",
                },
                {
                  q: "Ya tengo contable, ¿para qué necesito esto?",
                  a: "Tu contable registra. Yo interpreto. Tu contable te dice que has facturado 80.000 €. Yo te digo que el 40% de esa facturación te está costando dinero y que tienes un problema de caja en 45 días si no haces nada.",
                },
                {
                  q: "¿Funciona para mi sector?",
                  a: "Si tienes una PYME que factura, tiene costes y necesita tomar decisiones… sí. He trabajado con hostelería, turismo, alimentación, servicios, ecommerce, industria. Los números hablan el mismo idioma en todos los sectores.",
                },
                {
                  q: "¿Cuánto tardo en ver resultados?",
                  a: "En 30-60 días tienes tu primer cierre mensual y empiezas a ver con claridad. No es magia: es método. A los 3 meses ya estás tomando decisiones que antes no podías.",
                },
                {
                  q: "¿Y si mi empresa es muy pequeña?",
                  a: "Precisamente las empresas pequeñas son las que más lo necesitan. Una multinacional se puede permitir perder 50.000 € por un error de pricing. Tú no. Cuanto más pequeño eres, más necesitas controlar cada euro.",
                },
                {
                  q: "¿Qué pasa con los emails que mandas?",
                  a: "Un email a la semana. Un consejo financiero corto y aplicable. Sin vender humo, sin webinars de 3 horas, sin PDFs interminables. Si no te aporta, te das de baja en un clic y aquí paz y después gloria.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base md:text-lg font-bold tracking-tight">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
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
                source="home-cierre"
              />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default Index;
