import { Section, FadeIn, SectionHeading, BulletList, PullQuote } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const CasoTuricleta = () => (
  <>
    <Section>
      <FadeIn>
        <Link to="/casos-de-exito" className="text-sm text-muted-foreground hover:text-heading transition-colors">
          ← Volver a casos de éxito
        </Link>
        <div className="mt-6">
          <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
            Turismo activo
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-heading font-bold leading-tight">
            Turicleta: control para crecer sin caos
          </h1>
        </div>
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="El problema" title="Crecimiento sin visibilidad" />
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Turicleta estaba en plena expansión: nueva flota, nuevas rutas, más personal. La
          inversión crecía, la facturación también… pero la caja no acompañaba. Las decisiones de
          CAPEX se tomaban sin un modelo financiero claro. No había cierre mensual ni reporting
          estructurado.
        </p>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <SectionHeading tag="El caos típico" title="Decisiones sin panel" />
        <BulletList
          icon="🔴"
          items={[
            "No sabían su margen real por ruta/actividad.",
            "La caja se gestionaba 'mirando el banco'.",
            "Las decisiones de inversión se tomaban por intuición.",
            "No había presupuesto ni forecast.",
            "El equipo no tenía KPIs claros.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="Lo que montamos" title="Sistema de control financiero" />
        <BulletList
          icon="→"
          items={[
            "Reporting mensual con PyG analítica por actividad.",
            "Presupuesto anual con revisión trimestral.",
            "Cashflow directo con previsión a 12 meses.",
            "Cuadro de mando con KPIs operativos y financieros.",
            "Modelo financiero para evaluar nuevas inversiones.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <SectionHeading tag="Resultado" title="Claridad para decidir" />
        <PullQuote>
          Ahora saben dónde están, qué viene y qué decisiones tomar. Cada mes.
        </PullQuote>
        <BulletList
          icon="✓"
          items={[
            "Visibilidad total sobre márgenes y caja.",
            "Decisiones de inversión con modelo financiero.",
            "Priorización clara: qué hacer primero y qué esperar.",
            "Negociación con bancos con datos reales.",
            "Equipo alineado con KPIs claros.",
          ]}
        />
        <div className="mt-10">
          <EmailCaptureForm
            buttonText="Quiero lo mismo para mi empresa"
            microcopy="Te mando el diagnóstico sin compromiso."
            variant="stacked"
            className="max-w-md"
          />
        </div>
      </FadeIn>
    </Section>
  </>
);

const CasoImpasto = () => (
  <>
    <Section>
      <FadeIn>
        <Link to="/casos-de-exito" className="text-sm text-muted-foreground hover:text-heading transition-colors">
          ← Volver a casos de éxito
        </Link>
        <div className="mt-6">
          <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
            Restauración
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-heading font-bold leading-tight">
            Impasto: rentabilidad real por canal y menú
          </h1>
        </div>
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="El problema" title="Vendes mucho, ¿pero ganas?" />
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Impasto vendía bien. Sala llena, delivery a tope, catering creciendo. Pero nadie sabía
          qué canal era rentable y cuál era un sumidero. Los costes de delivery, las mermas y las
          promociones se comían el margen sin que nadie lo midiera.
        </p>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <SectionHeading tag="Lo que nadie veía" title="Costes ocultos" />
        <BulletList
          icon="🔴"
          items={[
            "Margen por canal: sala, delivery, take away, catering. Cada uno diferente.",
            "Costes de delivery (comisiones, packaging, mermas) no se imputaban.",
            "Menú con platos que vendían mucho pero no dejaban margen.",
            "Promociones sin medir retorno.",
            "Mermas sin control ni medición.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="Lo que montamos" title="PyG analítica + Unit economics" />
        <BulletList
          icon="→"
          items={[
            "PyG analítica por canal (sala, delivery, catering).",
            "Análisis de margen por plato / familia.",
            "Unit economics: coste real de servir un pedido por canal.",
            "Control de mermas con sistema de medición.",
            "Cuadro de mando mensual con decisiones claras.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <SectionHeading tag="Resultado" title="Decisiones con datos" />
        <PullQuote>
          Dejaron de adivinar. Ahora saben qué canal, qué plato y qué decisión les da dinero.
        </PullQuote>
        <BulletList
          icon="✓"
          items={[
            "Decisiones de menú basadas en margen, no en intuición.",
            "Renegociación de condiciones de delivery con datos reales.",
            "Reducción de mermas medible y controlada.",
            "Foco en los canales que realmente generan valor.",
          ]}
        />
        <div className="mt-10">
          <EmailCaptureForm
            buttonText="Quiero analizar mi negocio así"
            microcopy="Te mando el primer diagnóstico gratis."
            variant="stacked"
            className="max-w-md"
          />
        </div>
      </FadeIn>
    </Section>
  </>
);

export { CasoTuricleta, CasoImpasto };
