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
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero de 2026</p>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="max-w-full space-y-10 text-sm text-foreground/80 leading-relaxed">

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">1. Información general y datos identificativos (LSSI-CE)</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos
              del titular de este sitio web:
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong>Titular / Responsable:</strong> GREAT REAL FOOD SL</li>
              <li><strong>NIF:</strong> B02859189</li>
              <li><strong>Domicilio social:</strong> Avenida El Altillo, Polígono Industrial Proxinave, nave 6, 11405, Jerez de la Frontera (Cádiz), España</li>
              <li><strong>Correo electrónico:</strong> hola@cfonomic.com</li>
              <li><strong>Actividad:</strong> servicios de asesoría, consultoría y dirección financiera para PYMEs (bajo la marca CFOnomic)</li>
              <li><strong>Datos registrales:</strong> inscrita en el Registro Mercantil de Asturias (Oviedo), Tomo 4421, Folio 143, Hoja AS-57060, Inscripción 1.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web, así como las
              responsabilidades derivadas de la utilización de sus contenidos (textos, imágenes,
              calculadoras, glosarios y otros recursos).
            </p>
            <p className="mt-3">
              El sitio web tiene por objeto facilitar información sobre los servicios prestados por
              GREAT REAL FOOD SL bajo la marca CFOnomic y poner a disposición de las personas
              usuarias herramientas y recursos financieros.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Condiciones de uso</h2>
            <p>
              La persona usuaria se compromete a utilizar el sitio web de forma diligente, lícita y
              conforme a la buena fe, la legislación vigente y el presente Aviso Legal.
            </p>
            <p className="mt-3">En particular, se obliga a:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>No utilizar el sitio con fines ilícitos o contrarios al orden público.</li>
              <li>No introducir o difundir virus, código malicioso o cualquier sistema susceptible de causar daños en el sitio web o en terceros.</li>
              <li>No intentar acceder sin autorización a áreas, sistemas o datos restringidos.</li>
              <li>Facilitar información veraz cuando contacte con el titular a través de los medios habilitados.</li>
            </ul>
            <p className="mt-3">
              El titular se reserva el derecho a denegar o retirar el acceso al sitio web, sin necesidad
              de preaviso, a quienes incumplan estas condiciones.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. Contenidos, herramientas y exención de asesoramiento</h2>
            <p>
              Los contenidos del sitio web tienen carácter informativo y/o divulgativo.
            </p>
            <p className="mt-3">
              Las calculadoras y herramientas ofrecidas proporcionan estimaciones orientativas basadas
              en los datos introducidos por la persona usuaria y en supuestos generales. No constituyen
              asesoramiento financiero, contable, fiscal ni legal personalizado, ni sustituyen el análisis
              profesional adaptado a cada caso concreto. GREAT REAL FOOD SL no se responsabiliza de
              decisiones adoptadas por la persona usuaria a partir de resultados estimativos o de la
              interpretación de los contenidos.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web (incluyendo, a título enunciativo, textos, fotografías,
              gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente), así
              como los signos distintivos, marcas y nombres comerciales (incluida la marca CFOnomic)
              son titularidad de GREAT REAL FOOD SL o de terceros que han autorizado su uso, y están
              protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o
              cualquier forma de explotación, total o parcial, de los contenidos sin autorización expresa
              del titular o del legítimo titular de los derechos, salvo en los casos legalmente permitidos.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">6. Exclusión de responsabilidad</h2>
            <p>
              GREAT REAL FOOD SL no garantiza la disponibilidad, continuidad ni infalibilidad del
              funcionamiento del sitio web, que podrá verse interrumpido por labores de mantenimiento,
              incidencias técnicas, causas ajenas al titular o supuestos de fuerza mayor.
            </p>
            <p className="mt-3">El titular no se responsabiliza de:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>Los daños o perjuicios derivados del uso indebido del sitio web por parte de la persona usuaria.</li>
              <li>La existencia de errores u omisiones en los contenidos o la falta de actualización puntual.</li>
              <li>Los contenidos, servicios o políticas de privacidad de sitios web de terceros a los que se pueda acceder mediante enlaces, sobre los que no ejerce control.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">7. Enlaces a terceros</h2>
            <p>
              Los enlaces a sitios de terceros se facilitan únicamente con finalidad informativa.
              GREAT REAL FOOD SL no controla ni aprueba sus contenidos y no asume responsabilidad
              por los mismos ni por los resultados que puedan derivarse del acceso.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">8. Modificaciones</h2>
            <p>
              GREAT REAL FOOD SL se reserva el derecho a modificar el presente Aviso Legal, así como
              los contenidos y servicios del sitio web, en cualquier momento y sin necesidad de preaviso.
              La versión vigente será la publicada en el sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">9. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente Aviso Legal se rige por la legislación española. Para la resolución de
              cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y
              Tribunales de Jerez de la Frontera (Cádiz), salvo que la persona usuaria tenga la
              condición de consumidor/a, en cuyo caso serán competentes los juzgados y tribunales
              que correspondan conforme a la normativa aplicable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">10. Protección de datos y cookies</h2>
            <p>
              Para más información sobre el tratamiento de datos personales, consulta nuestra{" "}
              <Link to="/politica-de-privacidad" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Política de Privacidad
              </Link>
              . Para información sobre el uso de cookies y tecnologías similares, consulta nuestra{" "}
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
