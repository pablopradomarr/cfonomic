import { useState } from "react";
import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const glossaryTerms = [
  { term: "EBITDA", def: "Beneficio antes de intereses, impuestos, depreciación y amortización.", example: "Si tu PYME factura 1M € y gasta 800K € en costes operativos, tu EBITDA es 200K €.", error: "Pensar que EBITDA = caja. No lo es.", indicator: "Margen EBITDA (% sobre ventas).", link: "/como-calcular-ebitda-pyme" },
  { term: "Margen bruto", def: "Lo que queda después de restar los costes directos a las ventas.", example: "Vendes a 100 €, cuesta 40 €. Margen bruto: 60 €.", error: "No incluir todos los costes directos.", indicator: "% margen bruto por línea.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Margen neto", def: "Lo que queda después de todos los costes, incluidos impuestos.", example: "Facturas 500K €, costes totales 450K €. Margen neto: 10%.", error: "Confundir margen bruto con neto.", indicator: "% margen neto sobre ventas.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Cashflow", def: "El flujo de dinero real que entra y sale de tu empresa.", example: "Facturas 100K € pero cobras 70K € este mes.", error: "Confundir beneficio con caja.", indicator: "Cashflow operativo mensual.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "PyG analítica", def: "Cuenta de resultados desglosada por líneas, canales o productos.", example: "Tu restaurante: PyG de sala, delivery y catering.", error: "Tener solo una PyG global.", indicator: "Margen por línea.", link: "/servicios" },
  { term: "Presupuesto", def: "Tu mapa financiero: lo que planeas ganar, gastar e invertir.", example: "Prevés 600K € de ventas y 200K € de margen.", error: "No tener presupuesto. O no revisarlo.", indicator: "Desviación real vs presupuesto.", link: "/servicios" },
  { term: "NOF", def: "Necesidades Operativas de Fondos. El dinero que tu negocio necesita para funcionar.", example: "Clientes 50K + Stock 30K – Proveedores 20K = NOF 60K €.", error: "No calcularlas y sorprenderse.", indicator: "NOF en días de venta.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "CAC", def: "Coste de Adquisición de Cliente.", example: "5.000 € en marketing ÷ 50 clientes = CAC 100 €.", error: "Solo contar publicidad.", indicator: "CAC por canal + ratio LTV/CAC.", link: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
  { term: "LTV", def: "Lifetime Value. Valor total que un cliente aporta.", example: "50 €/mes × 24 meses × 60% margen = LTV 720 €.", error: "No medirlo.", indicator: "LTV/CAC > 3x.", link: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
  { term: "Unit economics", def: "Rentabilidad por unidad de negocio.", example: "Cada pedido ingresa 45 € y cuesta 38 €. Margen: 7 €.", error: "Escalar sin saber si cada unidad es rentable.", indicator: "Margen de contribución unitario.", link: "/unit-economics" },
  { term: "Burn rate", def: "Velocidad a la que quemas caja.", example: "Ingresas 20K/mes, gastas 35K/mes. Burn: 15K/mes.", error: "No medirlo.", indicator: "Burn rate + runway.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "Runway", def: "Meses de vida con la caja actual.", example: "90K € en caja ÷ 15K/mes burn = 6 meses.", error: "Descubrirlo demasiado tarde.", indicator: "Meses de runway.", link: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  { term: "Punto muerto", def: "Facturación mínima para cubrir costes fijos.", example: "Fijos 25K/mes, margen 50%. Punto muerto: 50K/mes.", error: "No conocerlo.", indicator: "Ventas vs punto muerto.", link: "/calcular-rentabilidad-mi-empresa" },
  { term: "Coste fijo / variable", def: "Fijos no cambian con ventas. Variables sí.", example: "Alquiler = fijo. Materia prima = variable.", error: "Tratar variables como fijos.", indicator: "% fijos sobre ventas.", link: "/servicios" },
  { term: "CAPEX / OPEX", def: "CAPEX: inversión. OPEX: gasto operativo.", example: "Comprar máquina = CAPEX. Mantenimiento = OPEX.", error: "Confundirlos distorsiona PyG y caja.", indicator: "CAPEX como % de ventas.", link: "/servicios" },
  { term: "Desviaciones", def: "Diferencia entre presupuesto y realidad.", example: "Presupuesto 50K ventas, realidad 42K. Desviación: –16%.", error: "No revisarlas.", indicator: "Desviación % mensual.", link: "/servicios" },
];

const Glosario = () => {
  const [search, setSearch] = useState("");
  const filtered = glossaryTerms.filter(
    (t) => t.term.toLowerCase().includes(search.toLowerCase()) || t.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Glosario financiero para empresas — CFOnomic"
        description="EBITDA, cashflow, NOF, CAC, margen bruto y más. Términos financieros explicados sin jerga para CEOs y dueños de PYME."
        canonical="/glosario"
        breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Glosario", path: "/glosario" }]}
      />
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <FadeIn>
            <span className="tag-label mb-6 block">Glosario</span>
            <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
              Términos que <span className="font-display italic font-normal">necesitas</span><span className="text-accent">.</span>
              <br />
              <span className="text-muted-foreground">Sin jerga.</span>
            </p>
            <h1 className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed font-body font-normal">
              Glosario financiero para empresas: EBITDA, cashflow, NOF, CAC, margen bruto y todos los términos que necesitas para dirigir tu PYME con datos.
            </h1>
            <div className="mt-8 max-w-sm">
              <input
                type="text"
                placeholder="Buscar término..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-b-2 border-foreground/10 bg-transparent px-0 py-3 font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl space-y-0">
          {(search ? filtered : glossaryTerms).map((t) => (
            <FadeIn key={t.term}>
              <div className="border-b border-foreground/5 py-8 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl font-bold tracking-tight">{t.term}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{t.def}</p>
                </div>
                <div className="md:col-span-9 grid sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground block mb-1">Ejemplo</span>
                    <p className="text-foreground/60 leading-relaxed">{t.example}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground block mb-1">Error típico</span>
                    <p className="text-foreground/60 leading-relaxed">{t.error}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground block mb-1">Indicador</span>
                    <p className="text-foreground/60 leading-relaxed">{t.indicator}</p>
                    <Link to={t.link} className="mt-2 inline-block text-[10px] font-mono uppercase tracking-[0.1em] text-foreground/30 hover:text-foreground transition-colors border-b border-foreground/10 pb-0.5">
                      Ver recurso →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section dark>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold tracking-tighter" role="presentation">
              ¿Quieres que estos números sean los tuyos<span className="text-accent">?</span>
            </p>
            <h2 className="mt-4 text-sm text-surface-dark-foreground/50">
              Pide tu diagnóstico financiero gratuito y analiza tus indicadores con un asesor financiero.
            </h2>
            <div className="mt-8 max-w-md mx-auto">
              <EmailCaptureForm buttonText="Quiero mi diagnóstico" microcopy="Sin humo. Con números." variant="stacked" dark />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {[
                { label: "Servicios", path: "/servicios" },
                { label: "Recursos y calculadoras", path: "/recursos" },
                { label: "Diagnóstico gratis", path: "/diagnostico-financiero" },
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

export default Glosario;
