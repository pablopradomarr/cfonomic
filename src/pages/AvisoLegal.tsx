import { Section, FadeIn } from "@/components/Editorial";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const AvisoLegal = () => (
  <>
    <SEO
      title="Aviso Legal — CFOnomic"
      description="Aviso legal y condiciones de uso de CFOnomic (GREAT REAL FOOD SL). Información legal conforme a la LSSI-CE."
      canonical="/aviso-legal"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Legal</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl">
            Aviso Legal<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero 2026</p>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="max-w-3xl space-y-10 text-sm text-foreground/80 leading-relaxed">

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">1. Datos identificativos (LSSI-CE)</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong>Titular:</strong> GREAT REAL FOOD SL</li>
              <li><strong>CIF:</strong> B02859189</li>
              <li><strong>Domicilio social:</strong> Avenida El Altillo, P.L. Proxinave nave 6, 11405, Jerez de la Frontera, Cádiz</li>
              <li><strong>Email:</strong> hola@cfonomic.com</li>
              <li><strong>Actividad:</strong> asesoría y dirección financiera para PYMEs</li>
              <li><strong>Datos registrales:</strong> inscrita en el Registro Mercantil de Cádiz</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. Objeto</h2>
            <p>
              Este sitio web tiene por objeto facilitar información sobre los servicios de asesoría
              financiera prestados por GREAT REAL FOOD SL bajo la marca CFOnomic, así como poner
              a disposición del usuario herramientas y recursos financieros.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Condiciones de uso</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>El usuario se compromete a hacer un uso adecuado y lícito del sitio web.</li>
              <li>Los contenidos de este sitio web (textos, imágenes, calculadoras, glosarios) son propiedad de GREAT REAL FOOD SL o de sus respectivos autores.</li>
              <li>Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa.</li>
              <li>Las calculadoras y herramientas ofrecidas proporcionan estimaciones orientativas y no constituyen asesoramiento financiero profesional personalizado.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes,
              iconos, tecnología, software, así como el diseño gráfico y códigos fuente, son propiedad
              de GREAT REAL FOOD SL o de terceros que han autorizado su uso.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. Exclusión de responsabilidad</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>GREAT REAL FOOD SL no garantiza la disponibilidad ininterrumpida del sitio web.</li>
              <li>No se responsabiliza de los daños derivados del uso incorrecto del sitio.</li>
              <li>Los resultados de las calculadoras son meramente orientativos y no sustituyen el asesoramiento profesional.</li>
              <li>Los enlaces a sitios de terceros son meramente informativos.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">6. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de
              cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y
              Tribunales de Jerez de la Frontera (Cádiz), salvo disposición legal imperativa en contrario.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">7. Protección de datos y cookies</h2>
            <p>
              Para más información sobre el tratamiento de datos personales, consulta nuestra{" "}
              <Link to="/politica-de-privacidad" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Política de Privacidad
              </Link>
              . Para información sobre cookies, consulta nuestra{" "}
              <Link to="/politica-de-cookies" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Política de Cookies
              </Link>.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default AvisoLegal;
