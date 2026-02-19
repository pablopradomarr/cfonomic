import { Section, FadeIn } from "@/components/Editorial";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const PoliticaPrivacidad = () => (
  <>
    <SEO
      title="Política de Privacidad — CFOnomic"
      description="Política de privacidad de CFOnomic (GREAT REAL FOOD SL). Cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD."
      canonical="/politica-de-privacidad"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Legal</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl">
            Política de Privacidad<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero de 2026</p>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="max-w-3xl space-y-10 text-sm text-foreground/80 leading-relaxed">

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">1. Responsable del tratamiento</h2>
            <ul className="space-y-1">
              <li><strong>Razón social:</strong> GREAT REAL FOOD SL</li>
              <li><strong>NIF:</strong> B02859189</li>
              <li><strong>Domicilio:</strong> Avenida El Altillo, Polígono Industrial Proxinave, nave 6, 11405, Jerez de la Frontera (Cádiz), España</li>
              <li><strong>Email de contacto:</strong> hola@cfonomic.com</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. Datos personales que tratamos</h2>
            <p>Tratamos únicamente los datos que nos facilitas de forma voluntaria a través de los medios habilitados en el sitio web, así como, en su caso, datos técnicos de navegación:</p>

            <h3 className="font-heading font-bold text-sm tracking-tight mt-5 mb-2">a) Formulario de contacto / solicitud de información</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>Nombre</li>
              <li>Email</li>
              <li>Empresa</li>
              <li>Facturación (si se solicita, se utilizará únicamente para dimensionar y personalizar la respuesta/diagnóstico)</li>
              <li>Mensaje</li>
            </ul>

            <h3 className="font-heading font-bold text-sm tracking-tight mt-5 mb-2">b) Captación de email (diagnóstico/recursos)</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>Dirección de correo electrónico</li>
              <li>Y, si procede, datos mínimos necesarios para enviarte el recurso solicitado</li>
            </ul>

            <h3 className="font-heading font-bold text-sm tracking-tight mt-5 mb-2">c) Datos de navegación (si aplica)</h3>
            <p>
              Dirección IP, identificadores del dispositivo y datos de uso del sitio (por ejemplo, mediante cookies/tecnologías similares), conforme a lo indicado en la{" "}
              <Link to="/politica-de-cookies" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Política de Cookies
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Finalidades del tratamiento</h2>
            <p>Tratamos tus datos con las siguientes finalidades:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Atender consultas y solicitudes realizadas a través de formularios o correo electrónico.</li>
              <li>Enviarte el diagnóstico financiero o recurso solicitado y gestionar la entrega del contenido.</li>
              <li>Enviarte comunicaciones comerciales relacionadas con nuestros servicios solo si lo has solicitado o consentido (por ejemplo, newsletter o emails informativos).</li>
              <li>Gestionar la relación precontractual o contractual, en caso de que se formalice la prestación de servicios, incluyendo gestiones administrativas, facturación y cumplimiento de obligaciones legales.</li>
              <li>Mejorar el sitio web y medir su uso, cuando lo permitas a través de cookies no necesarias (si aplica).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. Base jurídica del tratamiento</h2>
            <p>La base legal depende del tipo de tratamiento:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Medidas precontractuales y/o ejecución de un contrato (art. 6.1.b RGPD):</strong> gestión de solicitudes, preparación de propuestas y prestación de servicios cuando proceda.</li>
              <li><strong>Consentimiento (art. 6.1.a RGPD):</strong> envío de comunicaciones comerciales/newsletter y uso de cookies no necesarias, cuando corresponda. Puedes retirarlo en cualquier momento.</li>
              <li><strong>Obligación legal (art. 6.1.c RGPD):</strong> cumplimiento de obligaciones fiscales, contables o administrativas derivadas de una relación contractual.</li>
              <li><strong>Interés legítimo (art. 6.1.f RGPD):</strong> seguridad del sitio web, prevención del fraude y atención básica de comunicaciones cuando sea necesario, siempre con la debida ponderación de tus derechos.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. Plazos de conservación</h2>
            <p>Conservaremos los datos:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Consultas y solicitudes:</strong> durante el tiempo necesario para atenderlas y realizar el seguimiento, y posteriormente durante los plazos de prescripción aplicables en caso de posibles responsabilidades.</li>
              <li><strong>Envío de recursos/diagnósticos:</strong> mientras sea necesario para gestionar la entrega y el soporte asociado.</li>
              <li><strong>Comunicaciones comerciales:</strong> hasta que solicites la baja o retires tu consentimiento.</li>
              <li><strong>Datos de clientes:</strong> durante la relación contractual y, tras su finalización, durante los plazos legalmente exigibles en materia fiscal, mercantil y/o administrativa.</li>
              <li>
                <strong>Cookies:</strong> según los plazos indicados en la{" "}
                <Link to="/politica-de-cookies" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                  Política de Cookies
                </Link>.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">6. Destinatarios y encargados del tratamiento</h2>
            <p>
              No cedemos tus datos personales a terceros salvo obligación legal.
            </p>
            <p className="mt-3">
              Para poder prestar el servicio, podemos utilizar proveedores que actúan como encargados del tratamiento (por ejemplo, hosting/infraestructura y herramientas de email marketing), con los que se formalizan los correspondientes contratos y garantías exigidas por el RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">7. Transferencias internacionales</h2>
            <p>
              En caso de que alguno de nuestros proveedores trate datos fuera del Espacio Económico Europeo, se adoptarán las garantías adecuadas exigidas por el RGPD (por ejemplo, Cláusulas Contractuales Tipo u otros mecanismos válidos), informando cuando sea aplicable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">8. Derechos de las personas usuarias</h2>
            <p>Puedes ejercer los derechos de:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Acceso, rectificación, supresión, oposición, limitación y portabilidad.</li>
              <li>Retirar el consentimiento en cualquier momento cuando el tratamiento se base en él (sin que ello afecte a la licitud del tratamiento previo).</li>
            </ul>
            <p className="mt-3">
              Para ejercerlos, envía un email a <strong>hola@cfonomic.com</strong> con el asunto "Protección de datos", indicando tu nombre, el derecho que deseas ejercer y la información necesaria para gestionar tu solicitud. En caso necesario, podremos solicitarte información adicional para verificar tu identidad.
            </p>
            <p className="mt-3">
              Asimismo, puedes presentar una reclamación ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">9. Seguridad</h2>
            <p>
              Adoptamos medidas técnicas y organizativas razonables para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">10. Menores</h2>
            <p>
              Este sitio web no está dirigido a menores de edad. Si eres menor, no envíes datos personales a través de este sitio web.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default PoliticaPrivacidad;
