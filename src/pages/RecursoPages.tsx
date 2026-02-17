import { useState } from "react";
import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";

interface RecursoPageProps {
  title: string;
  metaDescription: string;
  canonical?: string;
  intro: string;
  content: React.ReactNode;
  embedUrl: string;
  errores: string[];
  queMirar: string[];
  faq: { q: string; a: string }[];
}

const RecursoPage = ({
  title,
  metaDescription,
  canonical,
  intro,
  content,
  embedUrl,
  errores,
  queMirar,
  faq,
}: RecursoPageProps) => {
  const [emailGiven, setEmailGiven] = useState(false);
  const location = useLocation();

  return (
    <>
      <SEO
        title={`${title} — CFOnomic`}
        description={metaDescription}
        canonical={canonical || location.pathname}
        faq={faq}
      />
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <Link to="/recursos" className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
              ← Recursos
            </Link>
            <h1 className="mt-8 text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl">
              {title}<span className="text-accent">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">{intro}</p>
          </FadeIn>
        </div>
      </section>

      <Section paper>
        <FadeIn>{content}</FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading tag="Calculadora" title="Haz tus números" />
          {!emailGiven ? (
            <div className="card-editorial p-8 md:p-12 text-center max-w-xl mx-auto">
              <p className="font-heading text-xl font-bold text-heading mb-2">
                Deja tu email para usar la calculadora
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Te enviamos los resultados por email. Sin spam.
              </p>
              <EmailCaptureForm
                buttonText="Desbloquear calculadora"
                microcopy="Un solo email. Sin newsletter eterna."
                variant="stacked"
                source="calculadora"
                onSuccess={() => setEmailGiven(true)}
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
                src={embedUrl}
                title="Calculadora CFOnomic"
                loading="lazy"
                className="w-full min-h-[700px]"
              />
            </div>
          )}
        </FadeIn>
      </Section>

      {/* ERRORES + QUÉ MIRAR */}
      <Section paper>
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <SectionHeading title="Errores típicos" />
            <BulletList icon="⚠️" items={errores} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading title="Qué mirar" />
            <BulletList icon="👁" items={queMirar} />
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeIn>
          <SectionHeading tag="FAQ" title="Preguntas frecuentes" />
          <div className="max-w-3xl space-y-5">
            {faq.map((f) => (
              <div key={f.q} className="border-b border-border pb-4">
                <h3 className="font-heading font-bold text-heading">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section paper>
        <FadeIn>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Si quieres que lo aterrice contigo
            </h2>
            <p className="mt-3 text-muted-foreground">15 minutos. Sin compromiso. Con datos.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/diagnostico-financiero"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-heading font-bold text-accent-foreground hover:bg-accent/85 transition-all"
              >
                Diagnóstico gratis
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md border-2 border-border px-6 py-3 font-heading font-semibold text-heading hover:bg-surface-paper transition-all"
              >
                Agendar llamada
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

/* ════════ INDIVIDUAL RESOURCE PAGES ════════ */

export const ValoracionPyme = () => (
  <RecursoPage
    title="¿Cuánto vale mi PYME?"
    canonical="/cuanto-vale-mi-pyme"
    metaDescription="Aprende a valorar tu PYME con múltiplos, EBITDA y caja. Calculadora gratuita incluida."
    intro="La valoración de una empresa no es ciencia exacta. Pero hay métodos probados que te dan un rango realista. Aquí te los explico sin jerga y con una calculadora para que hagas tus números."
    embedUrl="https://valoracion-pyme.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">Valorar tu empresa en 5 minutos</h2>
        <p className="text-muted-foreground leading-relaxed">
          El valor de una PYME depende de 3 cosas: <strong>cuánto beneficio genera</strong> (EBITDA),{" "}
          <strong>cuánto riesgo tiene</strong> y <strong>cuánto crece</strong>. El método más usado es
          aplicar un múltiplo sobre el EBITDA.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Una empresa con 200.000 € de EBITDA y un múltiplo de 4x–6x vale entre 800.000 € y 1.200.000 €.
          El múltiplo depende del sector, la recurrencia de ingresos, la dependencia del dueño y la
          previsibilidad de la caja.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pero cuidado: <strong>EBITDA no es caja</strong>. Si tu empresa genera EBITDA pero quema
          caja (por NOF, por inversión, por plazos de cobro largos), el valor real es menor.
        </p>
      </div>
    }
    errores={[
      "Confundir facturación con valor.",
      "No ajustar el EBITDA (gastos del dueño, extraordinarios).",
      "Ignorar la caja: EBITDA alto pero caja negativa.",
      "Comparar con empresas cotizadas (múltiplos inflados).",
      "No considerar la dependencia del fundador.",
    ]}
    queMirar={[
      "EBITDA normalizado (sin extraordinarios ni gastos personales).",
      "Free Cash Flow: lo que realmente queda.",
      "Recurrencia de ingresos.",
      "Dependencia del dueño.",
      "Barreras de entrada y ventajas competitivas.",
    ]}
    faq={[
      { q: "¿Qué múltiplo aplica a mi sector?", a: "Depende. Servicios: 3–6x. Tecnología/SaaS: 6–15x. Retail: 3–5x. Restauración: 2–4x. Son rangos orientativos." },
      { q: "¿Puedo valorar mi empresa si no tengo EBITDA positivo?", a: "Se puede, pero la valoración será baja o basada en activos. Sin beneficio recurrente, el valor es limitado." },
      { q: "¿Cuándo debería valorar mi empresa?", a: "Cuando quieras vender, buscar inversores, incorporar socios o simplemente saber dónde estás." },
      { q: "¿La valoración es el precio de venta?", a: "No. La valoración es un rango. El precio final depende de la negociación, urgencia y alternativas de ambas partes." },
      { q: "¿Qué diferencia hay entre valor y precio?", a: "El valor es lo que crees que vale. El precio es lo que alguien paga. A veces coinciden, a veces no." },
      { q: "¿Necesito un asesor para valorar mi empresa?", a: "Para una primera aproximación, no. Para una venta real, sí. Es como ir al médico: puedes tomarte la temperatura solo, pero para operar necesitas a un profesional." },
      { q: "¿La calculadora me da un valor exacto?", a: "No. Te da un rango orientativo basado en los datos que introduces. Es un punto de partida, no una tasación oficial." },
      { q: "¿Puedo aumentar el valor de mi empresa?", a: "Sí. Mejorar EBITDA, reducir dependencia del dueño, crear recurrencia y documentar procesos son las palancas principales." },
    ]}
  />
);

export const CalcularCAC = () => (
  <RecursoPage
    title="¿Cuánto me cuesta conseguir un cliente? (CAC)"
    canonical="/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente"
    metaDescription="Calcula tu CAC, payback y su relación con el margen. Calculadora gratis."
    intro="El CAC (Coste de Adquisición de Cliente) es uno de los números más importantes de tu negocio. Si no lo conoces, estás vendiendo a ciegas."
    embedUrl="https://cfo-calculadora-es.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">CAC: el número que nadie mira</h2>
        <p className="text-muted-foreground leading-relaxed">
          El CAC te dice cuánto dinero gastas para conseguir un cliente. Incluye publicidad, comerciales,
          herramientas, tiempo… todo lo que inviertes para que alguien pase de "no te conozco" a "te compro".
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La clave no es solo el CAC, sino su relación con el <strong>LTV</strong> (valor del cliente a lo
          largo de su vida). Si tu CAC es 200 € y tu cliente te deja 2.000 € de margen, perfecto. Si te
          deja 250 €, tienes un problema.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Y el <strong>payback</strong>: ¿cuántos meses tardas en recuperar lo que invertiste en captar
          ese cliente? Si tardas 12 meses y tu caja no lo aguanta, necesitas replantearlo.
        </p>
      </div>
    }
    errores={[
      "No incluir todos los costes (solo contar publicidad).",
      "No diferenciar CAC por canal.",
      "Ignorar el payback (cuándo recuperas la inversión).",
      "Comparar CAC sin margen (un CAC alto puede ser bueno si el margen es alto).",
      "No medir LTV (cuánto vale el cliente en total).",
    ]}
    queMirar={[
      "CAC total y por canal.",
      "Ratio LTV/CAC (debería ser >3x).",
      "Payback period (cuántos meses hasta recuperar).",
      "Tendencia: ¿tu CAC sube o baja?",
      "CAC vs margen bruto por cliente.",
    ]}
    faq={[
      { q: "¿Qué incluyo en el CAC?", a: "Todo lo que gastas para conseguir un cliente: publicidad, comisiones comerciales, herramientas de marketing, eventos, contenido, tiempo del equipo comercial." },
      { q: "¿Cuál es un buen CAC?", a: "Depende de tu margen. Si vendes algo de 50 € con 20 € de margen, un CAC de 15 € es insostenible. Si vendes suscripciones de 500 €/mes, un CAC de 1.000 € puede ser excelente." },
      { q: "¿Cómo bajo mi CAC?", a: "Mejora tu conversión, invierte en canales orgánicos, optimiza el funnel, mejora tu propuesta de valor." },
      { q: "¿CAC y CPA son lo mismo?", a: "No exactamente. CPA (Coste por Adquisición) suele referirse solo al coste publicitario. CAC incluye todo." },
      { q: "¿Cada cuánto debo medir el CAC?", a: "Mensualmente. Y por canal. Un promedio anual esconde demasiado." },
      { q: "¿Qué pasa si mi LTV/CAC es menor que 1?", a: "Que pierdes dinero con cada cliente que captas. Urgente: revisa precios, costes de captación y retención." },
      { q: "¿El CAC aplica a negocios offline?", a: "Sí. Un comercial que cobra 3.000 €/mes y cierra 5 clientes tiene un CAC de 600 €. Más los costes de desplazamiento, herramientas, etc." },
      { q: "¿Cómo afecta el CAC a mi caja?", a: "El CAC es dinero que gastas HOY para generar ingresos MAÑANA. Si el payback es largo, tu caja sufre." },
    ]}
  />
);

export const CajaNegogio = () => (
  <RecursoPage
    title="¿Cuánta caja genera (o pierde) mi negocio?"
    canonical="/cuanta-caja-genera-o-pierde-mi-negocio"
    metaDescription="Entiende tu cashflow operativo, inversión y NOF. Con calculadora gratuita."
    intro="La caja es la sangre de tu empresa. Puedes tener beneficio y estar seco. Aquí entiendes por qué y cómo controlarlo."
    embedUrl="https://cash-love-calc.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">Beneficio ≠ caja</h2>
        <p className="text-muted-foreground leading-relaxed">
          La confusión más común (y más peligrosa) en una PYME: "Si gano dinero, ¿por qué no tengo caja?"
          Porque el beneficio contable no es dinero en el banco. Los plazos de cobro, el stock, las
          inversiones y los impuestos crean un desfase entre lo que "ganas" y lo que tienes.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          El cashflow operativo te dice cuánto dinero genera tu operación. Las NOF (Necesidades Operativas
          de Fondos) te dicen cuánto dinero necesita tu negocio para funcionar cada día. La diferencia es
          tu caja libre.
        </p>
      </div>
    }
    errores={[
      "Confundir beneficio con caja.",
      "No prever los picos de necesidad de caja (IVA, nóminas extra, stock estacional).",
      "No negociar plazos de cobro/pago.",
      "Invertir sin calcular el impacto en caja.",
      "No tener un cashflow forecast.",
    ]}
    queMirar={[
      "Cashflow operativo mensual.",
      "NOF: Clientes + Stock – Proveedores.",
      "DSO (días de cobro) y DPO (días de pago).",
      "Runway: meses de caja disponible.",
      "Caja libre después de inversiones.",
    ]}
    faq={[
      { q: "¿Qué son las NOF?", a: "Necesidades Operativas de Fondos. Es el dinero que tu negocio necesita para funcionar: lo que te deben los clientes + el stock – lo que debes a proveedores." },
      { q: "¿Por qué tengo beneficio pero no caja?", a: "Porque cobras tarde, pagas pronto, tienes stock parado o has invertido. El beneficio es contable; la caja es real." },
      { q: "¿Cómo mejoro mi caja sin vender más?", a: "Cobra antes, paga después, reduce stock, controla inversiones y revisa costes fijos." },
      { q: "¿Qué es el runway?", a: "Los meses que puedes aguantar sin ingresos con la caja actual. Si tienes 60.000 € y gastas 20.000 €/mes, tienes 3 meses de runway." },
      { q: "¿Cada cuánto debo revisar la caja?", a: "Semanalmente el saldo. Mensualmente el cashflow completo. Trimestralmente el forecast." },
      { q: "¿El cashflow incluye impuestos?", a: "Sí. El IVA y los impuestos afectan directamente a tu caja, aunque no al beneficio operativo." },
      { q: "¿Qué hago si mi caja es negativa?", a: "Analiza las causas: ¿es por cobros? ¿por stock? ¿por inversión? Cada causa tiene una solución diferente." },
      { q: "¿Puedo tener caja negativa y beneficio positivo?", a: "Sí. Es más común de lo que crees. Y es peligroso si no lo controlas." },
    ]}
  />
);

export const RentabilidadEmpresa = () => (
  <RecursoPage
    title="¿Es rentable mi empresa?"
    canonical="/calcular-rentabilidad-mi-empresa"
    metaDescription="Calcula la rentabilidad real de tu empresa con ejemplos y calculadora."
    intro="Rentabilidad no es facturación. Muchas empresas venden mucho y ganan poco. Aquí aprendes a medir lo que importa."
    embedUrl="https://cfonomic-rentabilidadporunidadadenegocio-56.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">Medir rentabilidad de verdad</h2>
        <p className="text-muted-foreground leading-relaxed">
          La rentabilidad se mide en capas: margen bruto (lo que queda después de costes directos),
          margen operativo (después de costes fijos) y margen neto (después de impuestos y financieros).
          Cada capa te cuenta una historia diferente.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Si tu margen bruto es bajo, tienes un problema de precios o de costes directos. Si tu margen
          bruto es bueno pero el operativo es bajo, tienes un problema de estructura. La clave es medirlo
          por línea de negocio, no solo en total.
        </p>
      </div>
    }
    errores={[
      "Mirar solo la facturación.",
      "No desglosar por línea/producto/canal.",
      "Ignorar los costes indirectos.",
      "No medir mensualmente.",
      "Confundir margen bruto con margen neto.",
    ]}
    queMirar={[
      "Margen bruto por línea de negocio.",
      "Margen operativo (EBIT o EBITDA).",
      "Margen neto final.",
      "Evolución mensual.",
      "Comparativa con presupuesto.",
    ]}
    faq={[
      { q: "¿Qué margen es 'bueno'?", a: "Depende del sector. Servicios: 50–70% bruto. Retail: 30–50%. Restauración: 60–70% en comida, 25–35% operativo. Lo importante es que cubra tus costes fijos con margen." },
      { q: "¿Cómo sé si un producto es rentable?", a: "Calcula su margen bruto y luego asígnale la parte proporcional de costes fijos. Si después de todo sigue positivo, es rentable." },
      { q: "¿Puedo ser rentable y no tener caja?", a: "Sí. Rentabilidad y caja son cosas diferentes. Puedes ganar y estar seco por plazos de cobro, inversiones o stock." },
      { q: "¿Debo medir la rentabilidad por cliente?", a: "Idealmente sí, al menos para los top 10–20 clientes. Muchas veces descubres que tu mejor cliente en volumen es el peor en rentabilidad." },
      { q: "¿Cada cuánto debo revisar la rentabilidad?", a: "Mensualmente. Sin excusas. Si esperas al cierre anual, llegas tarde." },
      { q: "¿Cómo mejoro la rentabilidad?", a: "Tres palancas: subir precios, bajar costes o cambiar el mix (vender más de lo que deja más margen)." },
      { q: "¿Qué es el punto muerto?", a: "La facturación mínima para cubrir todos tus costes fijos. Por debajo, pierdes. Por encima, ganas." },
      { q: "¿Rentabilidad y ROI son lo mismo?", a: "No. Rentabilidad mide márgenes sobre ventas. ROI mide retorno sobre la inversión realizada." },
    ]}
  />
);

export const UnitEconomics = () => (
  <RecursoPage
    title="Unit Economics para PYMEs"
    canonical="/unit-economics"
    metaDescription="Cuánto ganas o pierdes por unidad de negocio. Con calculadora."
    intro="¿Cuánto ganas (o pierdes) cada vez que vendes algo? Los unit economics te dan la respuesta. Imprescindible antes de escalar."
    embedUrl="https://cfonomic-rentabilidadporunidadadenegocio-56.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">Cada unidad cuenta</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los unit economics analizan tu negocio unidad por unidad: por pedido, por cliente, por proyecto,
          por plato, por habitación. Es el microscopio de tu rentabilidad.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Si cada pedido te deja 5 € de margen después de costes directos, necesitas saber cuántos pedidos
          necesitas para cubrir tus costes fijos. Y si ese pedido incluye delivery con comisión del 30%, la
          historia cambia completamente.
        </p>
      </div>
    }
    errores={[
      "No calcular el coste completo de servir un pedido/proyecto.",
      "Ignorar costes ocultos (packaging, envío, devoluciones).",
      "Escalar un modelo con unit economics negativos.",
      "No diferenciar por canal o tipo de cliente.",
      "Calcular solo ingresos, no margen por unidad.",
    ]}
    queMirar={[
      "Ingreso por unidad.",
      "Coste directo por unidad.",
      "Margen de contribución por unidad.",
      "Unidades necesarias para cubrir costes fijos.",
      "Diferencias por canal/segmento.",
    ]}
    faq={[
      { q: "¿Qué es una 'unidad de negocio'?", a: "La unidad mínima que vendes: un pedido, un proyecto, un plato, una suscripción, una habitación-noche, un servicio." },
      { q: "¿Por qué importan los unit economics?", a: "Porque si cada unidad pierde dinero, vender más solo te hace perder más rápido. Es la base antes de escalar." },
      { q: "¿Cómo los calculo?", a: "Ingreso por unidad – todos los costes directos asociados a esa unidad = margen de contribución unitario." },
      { q: "¿Qué pasa si mis unit economics son negativos?", a: "Que cada venta te cuesta dinero. Tienes que subir precios, bajar costes o cambiar el modelo antes de crecer." },
      { q: "¿Aplica a servicios?", a: "Sí. Un proyecto de consultoría tiene unit economics: ingresos del proyecto – horas dedicadas × coste hora – costes directos." },
      { q: "¿Y en ecommerce?", a: "Un pedido tiene: precio de venta – coste del producto – envío – packaging – devoluciones – comisiones = margen real." },
      { q: "¿Debo medirlo por canal?", a: "Sí. Muchas veces un canal (ej: marketplace) tiene unit economics muy diferentes a tu venta directa." },
      { q: "¿Cada cuánto revisar?", a: "Mensualmente si los costes varían. Al menos trimestralmente." },
    ]}
  />
);

export const CuantoDineroGano = () => (
  <RecursoPage
    title="¿Cuánto dinero gano con mi empresa?"
    canonical="/cuanto-dinero-gano-con-mi-empresa"
    metaDescription="La diferencia entre ganar y tener caja. Con calculadora."
    intro="Ganar dinero y tener dinero no es lo mismo. Aquí te explico la diferencia con ejemplos reales y una calculadora para que lo veas con tus números."
    embedUrl="https://cfonomic-rentabilidadporunidadadenegocio-56.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">"Gano" vs "Tengo"</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cuando dices "gano 10.000 € al mes", ¿te refieres a la facturación? ¿Al beneficio? ¿A lo que
          te quedas en el bolsillo? Son tres números muy diferentes.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Facturación – costes directos = margen bruto. Margen bruto – costes fijos = beneficio operativo.
          Beneficio – impuestos – inversiones – devoluciones de préstamos = lo que de verdad te queda.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Muchos CEOs de PYME descubren que trabajan 60 horas a la semana para un sueldo efectivo menor
          del que tendrían como empleados. No porque su negocio sea malo, sino porque no miden bien.
        </p>
      </div>
    }
    errores={[
      "Confundir facturación con beneficio.",
      "No descontarse un sueldo de mercado como coste.",
      "Ignorar la amortización de inversiones.",
      "No separar caja personal de caja de empresa.",
      "No medir el retorno real sobre tu tiempo.",
    ]}
    queMirar={[
      "Beneficio neto real (después de tu sueldo imputado).",
      "Retorno sobre tu tiempo (€/hora real).",
      "Dividendos vs reinversión.",
      "Caja libre disponible después de todo.",
      "Tendencia: ¿mejora o empeora?",
    ]}
    faq={[
      { q: "¿Debería ponerme un sueldo?", a: "Sí. Siempre. Si no te pones un sueldo de mercado como coste, tu beneficio es falso. Estás subvencionando tu empresa con tu trabajo." },
      { q: "¿Cuánto debería ganar un CEO de PYME?", a: "Lo que costaría contratar a alguien que hiciera tu trabajo. Si tú haces de gerente, comercial y financiero, suma los tres sueldos." },
      { q: "¿Beneficio y dividendo son lo mismo?", a: "No. El beneficio es contable. El dividendo es lo que sacas (después de impuestos y reservas). Y depende de la caja." },
      { q: "¿Puedo sacar todo el beneficio?", a: "Técnicamente sí (tras impuestos). Pero si no reinviertes nada, tu empresa se deteriora." },
      { q: "¿Cómo sé si mi empresa es un 'buen negocio'?", a: "Si después de pagarte un sueldo de mercado sigue dando beneficio. Si no, tienes un autoempleo caro." },
      { q: "¿Qué pasa con los impuestos?", a: "El Impuesto de Sociedades se aplica sobre el beneficio. Los dividendos pagan otro impuesto. Calcula el neto final." },
      { q: "¿Debería reinvertir o sacar dividendos?", a: "Depende del retorno de la reinversión. Si cada euro reinvertido genera más de 1 € de valor, reinvierte. Si no, saca dividendos." },
      { q: "¿Cómo comparo mi empresa con otras?", a: "Mira los ratios de tu sector: margen neto, rentabilidad sobre fondos propios, retorno sobre activos." },
    ]}
  />
);

export const ComoCalcularEBITDA = () => (
  <RecursoPage
    title="Cómo calcular el EBITDA de tu PYME"
    canonical="/como-calcular-ebitda-pyme"
    metaDescription="Qué es el EBITDA, qué no es y para qué sirve. Explicado para CEOs de PYME."
    intro="El EBITDA es el indicador financiero más usado y más mal interpretado. Aquí te explico qué es, qué no es y cuándo fiarte (y cuándo no)."
    embedUrl="https://valoracion-pyme.lovable.app/"
    content={
      <div className="space-y-6 max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-heading">EBITDA sin misterio</h2>
        <p className="text-muted-foreground leading-relaxed">
          EBITDA = Beneficio antes de Intereses, Impuestos, Depreciación y Amortización. Es una medida
          de la capacidad de generar beneficio operativo de tu negocio, sin contar cómo lo financias ni
          cómo amortizas las inversiones.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Es útil para comparar empresas, para valoraciones y para ver la evolución operativa. Pero tiene
          límites: no te dice nada sobre la caja, ni sobre las inversiones necesarias, ni sobre los
          impuestos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Cuidado con el "EBITDA ajustado": si ajustas demasiado, te estás engañando. Los gastos
          "extraordinarios" que se repiten cada año no son extraordinarios.
        </p>
      </div>
    }
    errores={[
      "Pensar que EBITDA = caja (no lo es).",
      "Ajustar demasiado (eliminar gastos 'extraordinarios' recurrentes).",
      "Ignorar las inversiones necesarias (CAPEX de mantenimiento).",
      "Usar EBITDA como única métrica de valoración.",
      "No normalizar el sueldo del dueño.",
    ]}
    queMirar={[
      "EBITDA normalizado (con sueldo de mercado del dueño).",
      "Margen EBITDA (% sobre ventas).",
      "Evolución mensual y tendencia.",
      "EBITDA vs Free Cash Flow (la diferencia importa).",
      "EBITDA por línea de negocio.",
    ]}
    faq={[
      { q: "¿Cómo calculo el EBITDA?", a: "Beneficio neto + Intereses + Impuestos + Depreciación + Amortización. O más fácil: Ventas – Costes operativos (sin contar intereses, impuestos ni amortizaciones)." },
      { q: "¿Qué es un buen margen EBITDA?", a: "Depende del sector. Servicios: 15–30%. SaaS: 20–40%. Retail: 5–15%. Restauración: 10–20%. Industria: 8–15%." },
      { q: "¿EBITDA y cashflow son lo mismo?", a: "No. El EBITDA no incluye variaciones de circulante (cobros, pagos, stock), inversiones ni financiación. La caja sí." },
      { q: "¿Para qué sirve el EBITDA?", a: "Para comparar rendimiento operativo entre empresas, para valoraciones (múltiplos) y para ver la evolución sin distorsiones financieras o fiscales." },
      { q: "¿Qué es el EBITDA normalizado?", a: "El EBITDA después de ajustar gastos personales del dueño, extraordinarios reales y poner un sueldo de mercado. Es el que se usa en valoraciones." },
      { q: "¿Debería usar EBITDA o beneficio neto?", a: "Ambos. EBITDA para comparar y valorar. Beneficio neto para saber lo que realmente queda. Son complementarios." },
      { q: "¿Puedo tener EBITDA positivo y pérdidas?", a: "Sí. Si tus amortizaciones, intereses o impuestos son mayores que tu EBITDA. Es una señal de alerta." },
      { q: "¿El EBITDA es manipulable?", a: "Sí. Con 'ajustes creativos' puedes inflar el EBITDA. Por eso es importante ver qué se ajusta y por qué." },
    ]}
  />
);
