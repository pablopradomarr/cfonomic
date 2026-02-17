import { Section, FadeIn, SectionHeading } from "@/components/Editorial";
import { Link } from "react-router-dom";

const recursos = [
  {
    category: "Valoración",
    items: [
      { title: "¿Cuánto vale mi PYME?", desc: "Entiende los múltiplos, el EBITDA y lo que de verdad determina el precio de tu empresa.", path: "/cuanto-vale-mi-pyme" },
    ],
  },
  {
    category: "Caja",
    items: [
      { title: "¿Cuánta caja genera (o pierde) mi negocio?", desc: "Cashflow operativo, inversión, financiación y NOF explicados con ejemplos.", path: "/cuanta-caja-genera-o-pierde-mi-negocio" },
    ],
  },
  {
    category: "Adquisición",
    items: [
      { title: "¿Cuánto me cuesta conseguir un cliente? (CAC)", desc: "CAC, payback, relación con margen y las trampas típicas.", path: "/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" },
    ],
  },
  {
    category: "Rentabilidad",
    items: [
      { title: "¿Es rentable mi empresa?", desc: "Rentabilidad real con ejemplos de diferentes sectores.", path: "/calcular-rentabilidad-mi-empresa" },
      { title: "¿Cuánto dinero gano con mi empresa?", desc: "La diferencia entre 'ganar' y 'tener caja'. Con calculadora.", path: "/cuanto-dinero-gano-con-mi-empresa" },
    ],
  },
  {
    category: "Unit Economics",
    items: [
      { title: "Unit Economics para PYMEs", desc: "Cuánto ganas (o pierdes) por unidad de negocio.", path: "/unit-economics" },
    ],
  },
  {
    category: "Análisis",
    items: [
      { title: "Cómo calcular el EBITDA de tu PYME", desc: "Qué es, qué no es y para qué sirve.", path: "/como-calcular-ebitda-pyme" },
    ],
  },
];

const Recursos = () => (
  <>
    <Section>
      <FadeIn>
        <SectionHeading
          title="Recursos"
          subtitle="Aquí tienes recursos para entender tus números sin volverte loco. Cada uno con calculadora, ejemplos y errores típicos."
        />
      </FadeIn>
    </Section>

    {recursos.map((cat, ci) => (
      <Section key={cat.category} paper={ci % 2 === 1}>
        <FadeIn>
          <h3 className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
            {cat.category}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cat.items.map((item) => (
              <Link key={item.path} to={item.path} className="card-editorial p-6 block hover:border-accent transition-colors">
                <h4 className="font-heading text-lg font-bold text-heading">{item.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <span className="mt-3 inline-block text-sm font-heading font-bold text-heading underline decoration-accent underline-offset-4">
                  Ver recurso →
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Section>
    ))}
  </>
);

export default Recursos;
