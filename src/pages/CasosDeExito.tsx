import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const CasosDeExito = () => (
  <>
    <Section>
      <FadeIn>
        <SectionHeading
          title="Casos de éxito"
          subtitle="Empresas reales que pasaron de decidir por intuición a decidir con datos."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn>
          <div className="card-editorial p-6 md:p-8 h-full flex flex-col">
            <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
              Turismo activo
            </span>
            <h3 className="mt-2 text-2xl font-heading font-bold text-heading">Turicleta</h3>
            <p className="mt-1 text-sm font-heading font-semibold text-accent-foreground bg-accent/20 inline-block px-2 py-0.5 rounded w-fit">
              Control para crecer sin caos
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
              Empresa en expansión con inversión fuerte (CAPEX), crecimiento rápido y caja
              comprometida. Necesitaban visibilidad total para tomar decisiones de inversión y
              financiación.
            </p>
            <Link
              to="/casos-de-exito/turicleta"
              className="mt-5 inline-block text-sm font-heading font-bold text-heading underline decoration-accent decoration-2 underline-offset-4"
            >
              Ver caso completo →
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="card-editorial p-6 md:p-8 h-full flex flex-col">
            <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
              Restauración
            </span>
            <h3 className="mt-2 text-2xl font-heading font-bold text-heading">Impasto</h3>
            <p className="mt-1 text-sm font-heading font-semibold text-accent-foreground bg-accent/20 inline-block px-2 py-0.5 rounded w-fit">
              Rentabilidad real por canal y menú
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
              Vendían mucho pero no sabían por qué canal ganaban y por cuál perdían. Costes ocultos
              en delivery, mermas y promociones sin control.
            </p>
            <Link
              to="/casos-de-exito/impasto"
              className="mt-5 inline-block text-sm font-heading font-bold text-heading underline decoration-accent decoration-2 underline-offset-4"
            >
              Ver caso completo →
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>

    <Section paper>
      <FadeIn>
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            ¿Quieres ser el próximo caso de éxito?
          </h2>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm
              buttonText="Quiero mi diagnóstico"
              microcopy="Te mando el diagnóstico y 3 mejoras rápidas."
              variant="stacked"
            />
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default CasosDeExito;
