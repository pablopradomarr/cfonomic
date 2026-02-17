import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const CasoTuricleta = () => (
  <>
    <SEO
      title="Caso Turicleta: control financiero para crecer sin caos — CFOnomic"
      description="Cómo una empresa de turismo activo pasó de crecer sin control a tener reporting mensual, cashflow y KPIs. Caso real de gestión financiera."
      canonical="/casos-de-exito/turicleta"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <Link to="/casos-de-exito" className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
            ← Casos
          </Link>
          <div className="mt-8">
            <span className="tag-label mb-4 block">Turismo activo</span>
            <h1 className="tag-label mb-4 block">Caso Turicleta: control financiero para crecer</h1>
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
              Turicleta<span className="text-accent">.</span>
              <br />
              <span className="text-muted-foreground">Control para crecer sin caos.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="tag-label">El problema</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-base text-foreground/70 leading-relaxed max-w-2xl">
              Turicleta estaba en plena expansión: nueva flota, nuevas rutas, más personal. La inversión crecía, la facturación también… pero la caja no acompañaba. Las decisiones de CAPEX se tomaban sin modelo financiero.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="tag-label block mb-4">El caos</span>
            <BulletList icon="—" items={[
              "No sabían su margen real por ruta.",
              "La caja se gestionaba 'mirando el banco'.",
              "Decisiones de inversión por intuición.",
              "Sin presupuesto ni forecast.",
              "Equipo sin KPIs claros.",
            ]} />
          </div>
          <div>
            <span className="tag-label block mb-4">Lo que montamos</span>
            <BulletList icon="→" items={[
              "Reporting mensual con PyG por actividad.",
              "Presupuesto anual con revisión trimestral.",
              "Cashflow con previsión a 12 meses.",
              "Cuadro de mando con KPIs.",
              "Modelo para evaluar inversiones.",
            ]} />
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section dark>
      <FadeIn>
        <div className="max-w-3xl">
          <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40 block mb-6">Resultado</span>
          <p className="text-2xl md:text-4xl font-heading font-bold leading-[1.05] tracking-tight">
            Ahora saben dónde están, qué viene y qué decidir<span className="text-accent">.</span> Cada mes.
          </p>
          <div className="mt-10">
            <EmailCaptureForm buttonText="Quiero lo mismo" microcopy="Sin compromiso." variant="stacked" dark />
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

const CasoImpasto = () => (
  <>
    <SEO
      title="Caso Impasto: rentabilidad real por canal y menú — CFOnomic"
      description="Cómo un restaurante descubrió qué canal ganaba y cuál perdía. Caso real de asesoría financiera en restauración."
      canonical="/casos-de-exito/impasto"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <Link to="/casos-de-exito" className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
            ← Casos
          </Link>
          <div className="mt-8">
            <span className="tag-label mb-4 block">Restauración</span>
            <h1 className="tag-label mb-4 block">Caso Impasto: rentabilidad por canal en restauración</h1>
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
              Impasto<span className="text-accent">.</span>
              <br />
              <span className="text-muted-foreground">Rentabilidad real por canal y menú.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4"><span className="tag-label">El problema</span></div>
          <div className="md:col-span-8">
            <p className="text-base text-foreground/70 leading-relaxed max-w-2xl">
              Impasto vendía bien. Sala llena, delivery a tope. Pero nadie sabía qué canal era rentable. Costes de delivery, mermas y promociones se comían el margen sin control.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="tag-label block mb-4">Lo que nadie veía</span>
            <BulletList icon="—" items={[
              "Margen diferente por canal.",
              "Costes de delivery no imputados.",
              "Platos vendidos sin margen.",
              "Promociones sin medir retorno.",
              "Mermas sin control.",
            ]} />
          </div>
          <div>
            <span className="tag-label block mb-4">Lo que montamos</span>
            <BulletList icon="→" items={[
              "PyG analítica por canal.",
              "Margen por plato/familia.",
              "Unit economics por pedido.",
              "Control de mermas medible.",
              "Cuadro de mando mensual.",
            ]} />
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section dark>
      <FadeIn>
        <div className="max-w-3xl">
          <span className="tag-label border-surface-dark-foreground/20 text-surface-dark-foreground/40 block mb-6">Resultado</span>
          <p className="text-2xl md:text-4xl font-heading font-bold leading-[1.05] tracking-tight">
            Dejaron de adivinar<span className="text-accent">.</span> Ahora saben qué canal, qué plato y qué decisión les da dinero.
          </p>
          <div className="mt-10">
            <EmailCaptureForm buttonText="Quiero analizar así mi negocio" microcopy="Primer diagnóstico gratis." variant="stacked" dark />
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export { CasoTuricleta, CasoImpasto };
