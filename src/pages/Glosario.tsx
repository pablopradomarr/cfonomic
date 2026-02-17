import { useState } from "react";
import { Section, FadeIn, SectionHeading, BulletList } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";

const glossaryTerms = [
  { term: "EBITDA", def: "Beneficio antes de intereses, impuestos, depreciación y amortización.", example: "Si tu PYME factura 1M € y gasta 800K € en costes operativos, tu EBITDA es 200K €.", error: "Pensar que EBITDA = caja. No lo es.", indicator: "Margen EBITDA (% sobre ventas).", link: "/como-calcular-ebitda-pyme" },
  { term: "Margen bruto", def: "Lo que queda después de restar los costes directos a las ventas.", example: "Vendes un producto a 100 € y te cuesta 40 € fabricarlo. Tu margen bruto es 60 €.", error: "No incluir todos los costes directos (envío, packaging, comisiones).", indicator: "% de margen bruto por línea de negocio.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Margen neto", def: "Lo que queda después de todos los costes, incluidos impuestos.", example: "Facturas 500K €, todos tus costes suman 450K €. Tu margen neto es 50K € (10%).", error: "Confundir margen bruto con neto. Son capas diferentes.", indicator: "% de margen neto sobre ventas.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Cashflow", def: "El flujo de dinero real que entra y sale de tu empresa.", example: "Facturas 100K € pero solo cobras 70K € este mes. Tu cashflow de cobros es 70K €.", error: "Confundir beneficio con caja.", indicator: "Cashflow operativo mensual.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "PyG analítica", def: "Cuenta de resultados desglosada por líneas de negocio, canales o productos.", example: "Tu restaurante tiene PyG de sala, delivery y catering. Cada uno con su margen.", error: "Tener solo una PyG global que mezcla todo.", indicator: "Margen por línea de negocio.", link: "/servicios" },
  { term: "Presupuesto", def: "Tu mapa financiero: lo que planeas ganar, gastar e invertir.", example: "Prevés 600K € de ventas, 400K € de costes y 200K € de margen para el año.", error: "No tener presupuesto. O tenerlo y no revisarlo.", indicator: "Desviación real vs presupuesto.", link: "/servicios" },
  { term: "NOF", def: "Necesidades Operativas de Fondos. El dinero que tu negocio necesita para funcionar.", example: "Te deben clientes 50K €, tienes 30K € en stock y debes 20K € a proveedores. NOF = 60K €.", error: "No calcular las NOF y sorprenderse por la falta de caja.", indicator: "NOF en días de venta.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "CAC", def: "Coste de Adquisición de Cliente. Lo que gastas para conseguir un cliente.", example: "Inviertes 5.000 € en marketing y consigues 50 clientes. Tu CAC es 100 €.", error: "Calcular solo el coste de publicidad, sin incluir comerciales ni herramientas.", indicator: "CAC por canal y ratio LTV/CAC.", link: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
  { term: "LTV", def: "Lifetime Value. El valor total que un cliente te aporta durante toda la relación.", example: "Un cliente paga 50 €/mes durante 24 meses con 60% de margen. LTV = 720 €.", error: "No medirlo y no saber si el CAC compensa.", indicator: "LTV/CAC > 3x como referencia.", link: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
  { term: "Unit economics", def: "Análisis de rentabilidad por unidad de negocio (pedido, proyecto, cliente).", example: "Cada pedido de tu ecommerce ingresa 45 € y cuesta 38 € en total. Margen unitario: 7 €.", error: "Escalar sin saber si cada unidad es rentable.", indicator: "Margen de contribución por unidad.", link: "/unit-economics" },
  { term: "Burn rate", def: "Velocidad a la que quemas caja. Cuánto dinero gastas más de lo que ingresas.", example: "Ingresas 20K €/mes y gastas 35K €/mes. Tu burn rate es 15K €/mes.", error: "No medirlo y quedarte sin caja por sorpresa.", indicator: "Burn rate mensual + runway.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "Runway", def: "Meses de vida que te quedan con la caja actual al ritmo actual de gasto.", example: "Tienes 90K € en caja y quemas 15K €/mes. Runway = 6 meses.", error: "No calcularlo y descubrir demasiado tarde que te quedas sin caja.", indicator: "Meses de runway.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "Punto muerto", def: "La facturación mínima para cubrir todos tus costes fijos.", example: "Tus costes fijos son 25K €/mes y tu margen bruto es 50%. Punto muerto = 50K €/mes.", error: "No conocerlo y no saber cuánto necesitas vender para no perder.", indicator: "Ventas vs punto muerto.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Coste fijo / variable", def: "Costes fijos no cambian con las ventas. Variables sí.", example: "Alquiler = fijo. Materia prima = variable. Comercial con comisión = semifijo.", error: "Tratar costes variables como fijos (o al revés).", indicator: "% de costes fijos sobre ventas (apalancamiento operativo).", link: "/servicios" },
  { term: "CAPEX / OPEX", def: "CAPEX: inversión (compras de activos). OPEX: gasto operativo recurrente.", example: "Comprar una máquina = CAPEX. El mantenimiento mensual = OPEX.", error: "Confundirlos distorsiona tu PyG y tu caja.", indicator: "CAPEX como % de ventas.", link: "/servicios" },
  { term: "Desviaciones", def: "La diferencia entre lo que presupuestaste y lo que realmente pasó.", example: "Presupuestaste 50K € de ventas y vendiste 42K €. Desviación: –16%.", error: "No revisarlas. El presupuesto sin control es papel mojado.", indicator: "Desviación % mensual por partida.", link: "/servicios" },
];

const Glosario = () => {
  const [search, setSearch] = useState("");

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.def.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [...new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <>
      <Section>
        <FadeIn>
          <SectionHeading
            title="Glosario financiero"
            subtitle="Los términos que necesitas conocer para entender tus números. Sin jerga. Con ejemplos de PYME."
          />
          <input
            type="text"
            placeholder="Buscar término..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-2 w-full max-w-md rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          />
        </FadeIn>
      </Section>

      {/* LETTER NAV */}
      {!search && (
        <div className="container-wide flex flex-wrap gap-2 pb-8">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm font-heading font-bold text-heading hover:bg-accent/20 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <Section paper>
        <div className="space-y-8 max-w-4xl">
          {(search ? filtered : glossaryTerms).map((t) => (
            <FadeIn key={t.term}>
              <div id={`letter-${t.term[0].toUpperCase()}`} className="card-editorial p-6">
                <h3 className="font-heading text-xl font-bold text-heading">{t.term}</h3>
                <p className="mt-2 text-foreground leading-relaxed">{t.def}</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-heading font-bold text-muted-foreground text-xs uppercase tracking-wider">
                      Ejemplo
                    </span>
                    <p className="mt-1 text-muted-foreground">{t.example}</p>
                  </div>
                  <div>
                    <span className="font-heading font-bold text-muted-foreground text-xs uppercase tracking-wider">
                      Error típico
                    </span>
                    <p className="mt-1 text-muted-foreground">{t.error}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    📊 Indicador: {t.indicator}
                  </span>
                  <Link
                    to={t.link}
                    className="text-xs font-heading font-bold text-heading underline decoration-accent underline-offset-4"
                  >
                    Ver recurso →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              ¿Quieres que estos números sean los de tu empresa?
            </h2>
            <div className="mt-6 max-w-md mx-auto">
              <EmailCaptureForm
                buttonText="Quiero mi diagnóstico"
                microcopy="Sin humo. Con números. Gratis."
                variant="stacked"
              />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default Glosario;
