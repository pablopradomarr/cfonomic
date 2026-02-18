import { Section, FadeIn } from "@/components/Editorial";
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
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero 2026</p>
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
              <li><strong>CIF:</strong> B02859189</li>
              <li><strong>Domicilio:</strong> Avenida El Altillo, P.L. Proxinave nave 6, 11405, Jerez de la Frontera, Cádiz</li>
              <li><strong>Email de contacto:</strong> hola@cfonomic.com</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. Datos que recogemos</h2>
            <p>Recogemos únicamente los datos que nos facilitas voluntariamente:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Formulario de contacto:</strong> nombre, email, empresa, facturación y mensaje.</li>
              <li><strong>Captación de email (diagnóstico/recursos):</strong> dirección de correo electrónico.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Finalidad del tratamiento</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Responder a tus consultas y solicitudes.</li>
              <li>Enviarte el diagnóstico financiero o recurso solicitado.</li>
              <li>Enviarte comunicaciones comerciales relacionadas con nuestros servicios (solo si lo has solicitado).</li>
              <li>Gestionar la relación contractual, si se formaliza.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. Base jurídica</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Consentimiento:</strong> al enviarnos tus datos a través de nuestros formularios.</li>
              <li><strong>Interés legítimo:</strong> para la gestión de consultas y la relación comercial.</li>
              <li><strong>Ejecución de contrato:</strong> si se formaliza una relación de servicio.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. Conservación de datos</h2>
            <p>
              Conservamos tus datos mientras sean necesarios para la finalidad para la que fueron recogidos
              y mientras no ejerzas tu derecho de supresión. Los datos de clientes se conservan durante el
              plazo legal exigido (mínimo 5 años según la normativa fiscal y mercantil).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">6. Cesión de datos</h2>
            <p>
              No cedemos tus datos a terceros salvo obligación legal. Utilizamos los siguientes encargados
              de tratamiento:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Proveedor de email marketing:</strong> para el envío de comunicaciones (servidores en la UE o con garantías adecuadas).</li>
              <li><strong>Proveedor de hosting/infraestructura:</strong> para el alojamiento de la web y la base de datos.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">7. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Acceso:</strong> saber qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
              <li><strong>Supresión:</strong> solicitar que borremos tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento.</li>
              <li><strong>Limitación:</strong> restringir el tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbenos a <strong>hola@cfonomic.com</strong> con el asunto
              "Protección de datos" e indicando tu nombre y el derecho que deseas ejercer.
            </p>
            <p className="mt-3">
              También puedes presentar una reclamación ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">8. Seguridad</h2>
            <p>
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad
              de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default PoliticaPrivacidad;
