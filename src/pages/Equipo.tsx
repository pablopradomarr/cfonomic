import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const Equipo = () => (
  <>
    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">
              Quién está detrás
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-heading font-bold leading-tight">
              Pablo Prado Marrón
            </h1>
            <p className="mt-1 text-lg text-muted-foreground font-heading">Pablo CFOnomic</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dirijo las finanzas de PYMEs y Startups que quieren dejar de improvisar. Les monto el
              departamento financiero que necesitan, sin contratar a un equipo entero. Y lo hago cada
              mes, no una vez al año.
            </p>
          </div>
          <div className="bg-surface-paper rounded-lg aspect-[4/5] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-3">📸</div>
              <p className="text-sm">Foto de Pablo</p>
              <p className="text-xs">(placeholder)</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="Por qué" title="Por qué hago esto" />
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Porque he visto demasiadas empresas buenas tomar decisiones malas. No por falta de talento
            ni de esfuerzo. Sino porque no tenían información financiera útil, a tiempo y en un formato
            que sirviera para decidir.
          </p>
          <p>
            La contabilidad obligatoria no te dice lo que necesitas saber. Te dice "qué pasó" tres
            meses después. Tú necesitas saber "qué hago ahora" y "qué viene".
          </p>
          <p>
            Por eso creé CFOnomic: para que las PYMEs tengan el mismo nivel de información financiera
            que una multinacional, adaptado a su tamaño y su ritmo.
          </p>
        </div>
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <SectionHeading tag="Cómo" title="Cómo trabajo" />
        <BulletList
          items={[
            "Directo. No te cuento lo que quieres oír, te cuento lo que necesitas saber.",
            "Con datos. Cada reunión tiene números, gráficos y conclusiones claras.",
            "Mensual. No hago auditorías anuales. Hacemos control mensual, como un CFO de verdad.",
            "Adaptado. No impongo herramientas ni procesos. Me adapto a lo que ya tienes.",
            "Disponible. No desaparezco entre reuniones. Estoy ahí cuando surge la duda.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section paper>
      <FadeIn>
        <SectionHeading tag="Para quién" title="Con quién encajo" />
        <BulletList
          icon="✓"
          items={[
            "CEOs de PYME que quieren tomar decisiones con datos.",
            "Startups que necesitan reporting para inversores y para sí mismos.",
            "Empresas en crecimiento que sienten que la estructura se les queda pequeña.",
            "Negocios rentables que quieren serlo más (o no saben si lo son).",
            "Equipos directivos que necesitan un 'copiloto financiero' sin el coste de un CFO a tiempo completo.",
          ]}
        />
      </FadeIn>
    </Section>

    <Section>
      <FadeIn>
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">¿Hablamos?</h2>
          <p className="mt-4 text-muted-foreground">
            Deja tu email y te mando un diagnóstico rápido. O si lo prefieres, agendamos 15 minutos.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCaptureForm
              buttonText="Quiero el diagnóstico"
              microcopy="Te lo mando por email. Sin compromiso."
              variant="stacked"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              to="/contacto"
              className="underline decoration-accent underline-offset-4 hover:text-heading transition-colors"
            >
              Prefiero agendar una llamada →
            </Link>
          </p>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default Equipo;
