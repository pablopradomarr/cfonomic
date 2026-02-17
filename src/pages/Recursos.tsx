import { Section, FadeIn } from "@/components/Editorial";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const recursos = [
  { category: "Valoración", items: [
    { title: "¿Cuánto vale mi PYME?", desc: "Múltiplos, EBITDA y precio real.", path: "/cuanto-vale-mi-pyme" },
  ]},
  { category: "Caja", items: [
    { title: "¿Cuánta caja genera mi negocio?", desc: "Cashflow operativo, inversión y NOF.", path: "/cuanta-caja-genera-o-pierde-mi-negocio" },
  ]},
  { category: "Adquisición", items: [
    { title: "¿Cuánto cuesta un cliente? (CAC)", desc: "CAC, payback y trampas típicas.", path: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
  ]},
  { category: "Rentabilidad", items: [
    { title: "¿Es rentable mi empresa?", desc: "Rentabilidad real con ejemplos.", path: "/calcular-rentabilidad-mi-empresa" },
    { title: "¿Cuánto dinero gano?", desc: "'Ganar' vs 'tener caja'.", path: "/cuanto-dinero-gano-con-mi-empresa" },
  ]},
  { category: "Unit Economics", items: [
    { title: "Unit Economics", desc: "Cuánto ganas por unidad de negocio.", path: "/unit-economics" },
  ]},
  { category: "Análisis", items: [
    { title: "Cómo calcular el EBITDA", desc: "Qué es, qué no es, para qué sirve.", path: "/como-calcular-ebitda-pyme" },
  ]},
];

const Recursos = () => (
  <>
    <SEO
      title="Recursos financieros para PYMEs — Calculadoras y guías | CFOnomic"
      description="Calculadoras, guías y recursos para entender tus números: valoración, CAC, caja, rentabilidad, unit economics y EBITDA. Sin jerga."
      canonical="/recursos"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Recursos</span>
          <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl" role="presentation">
            Entiende tus <span className="font-display italic font-normal">números</span><span className="text-accent">.</span>
            <br />
            <span className="text-muted-foreground">Sin volverte loco.</span>
          </p>
          <h1 className="mt-6 max-w-lg text-sm text-muted-foreground leading-relaxed font-body font-normal">
            Recursos financieros para PYMEs: calculadoras, guías y ejemplos prácticos para entender tu rentabilidad, caja, CAC, EBITDA y más.
          </h1>
        </FadeIn>
      </div>
    </section>

    {recursos.map((cat, ci) => (
      <div key={cat.category} className={`py-12 ${ci % 2 === 0 ? "" : "bg-surface-paper"}`}>
        <div className="container-wide">
          <FadeIn>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">{cat.category}</p>
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {cat.items.map((item) => (
                <Link key={item.path} to={item.path} className="block bg-background p-8 group hover:bg-surface-paper transition-colors">
                  <h3 className="font-heading text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <span className="mt-4 inline-block text-[11px] font-mono uppercase tracking-[0.1em] text-foreground/30 group-hover:text-foreground transition-colors">
                    Ver recurso →
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    ))}
  </>
);

export default Recursos;
