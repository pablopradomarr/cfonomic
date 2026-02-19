import { Section, FadeIn } from "@/components/Editorial";
import SEO from "@/components/SEO";

const PoliticaCookies = () => (
  <>
    <SEO
      title="Política de Cookies — CFOnomic"
      description="Política de cookies de CFOnomic. Qué cookies utilizamos, para qué y cómo gestionarlas."
      canonical="/politica-de-cookies"
    />
    <section className="py-24 md:py-36">
      <div className="container-wide">
        <FadeIn>
          <span className="tag-label mb-6 block">Legal</span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[0.95] tracking-tighter max-w-4xl">
            Política de Cookies<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero de 2026</p>
        </FadeIn>
      </div>
    </section>

    <Section paper>
      <FadeIn>
        <div className="max-w-3xl space-y-10 text-sm text-foreground/80 leading-relaxed">

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas
              un sitio web. Se utilizan para permitir el funcionamiento de la web, recordar preferencias
              y, en su caso, analizar el uso del sitio para mejorarlo.
            </p>
            <p className="mt-3">
              Además de cookies, este sitio web puede utilizar tecnologías similares (por ejemplo,
              identificadores o píxeles) con finalidades equivalentes. A efectos de esta política,
              todas ellas se denominan "cookies".
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. ¿Qué tipos de cookies utilizamos?</h2>
            <p>En este sitio web podemos utilizar las siguientes categorías:</p>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li>
                <strong>Cookies técnicas o necesarias:</strong> permiten el funcionamiento básico del sitio
                (por ejemplo, gestión de sesión, seguridad, o guardar tus preferencias de consentimiento).
                Estas cookies no requieren consentimiento.
              </li>
              <li>
                <strong>Cookies analíticas (medición):</strong> nos ayudan a entender cómo se usa el sitio
                (por ejemplo, páginas visitadas, tiempo de permanencia) para mejorar su funcionamiento.
                Estas cookies solo se instalarán con tu consentimiento previo.
              </li>
            </ul>
            <p className="mt-4 p-3 border border-accent/30 bg-accent/5 text-foreground/80 text-xs">
              <strong>Importante:</strong> las cookies analíticas estarán desactivadas por defecto y solo
              se activarán si las aceptas en el banner o panel de configuración de cookies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Cookies concretas y duración</h2>
            <p className="mb-4">
              A continuación, se describen las categorías de cookies que pueden utilizarse. El detalle
              actualizado de cookies concretas (nombre, proveedor, finalidad y duración) puede consultarse
              y gestionarse en el panel de configuración de cookies.
            </p>
            <div className="border border-foreground/10 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
                    <th className="text-left p-3 font-heading font-bold">Tipo</th>
                    <th className="text-left p-3 font-heading font-bold">Finalidad</th>
                    <th className="text-left p-3 font-heading font-bold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  <tr>
                    <td className="p-3 font-mono">Técnicas</td>
                    <td className="p-3">Necesarias para el funcionamiento básico del sitio y para guardar tus preferencias de cookies.</td>
                    <td className="p-3">Sesión / hasta 1 año</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Analíticas</td>
                    <td className="p-3">Medición agregada del uso del sitio para mejorar contenidos y rendimiento.</td>
                    <td className="p-3">Hasta 24 meses (según configuración/proveedor)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              En la actualidad, este sitio web <strong>no utiliza cookies publicitarias</strong> para mostrar
              anuncios personalizados. En caso de incorporar en el futuro cookies de personalización/publicidad
              o de terceros con dichas finalidades, se informará y se solicitará el consentimiento correspondiente.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. Base jurídica</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Cookies técnicas:</strong> se instalan sin necesidad de consentimiento por ser
                estrictamente necesarias para el funcionamiento del sitio (art. 22.2 LSSI).
              </li>
              <li>
                <strong>Cookies analíticas:</strong> se instalan únicamente si otorgas tu consentimiento
                mediante el banner/panel de configuración, pudiendo retirarlo en cualquier momento.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. ¿Cómo puedes configurar o desactivar las cookies?</h2>
            <p>
              Puedes gestionar tus preferencias y <strong>retirar tu consentimiento en cualquier momento</strong> desde
              el panel de configuración de cookies, accesible desde el banner inicial y/o desde el enlace{" "}
              <button
                onClick={() => {
                  localStorage.removeItem("cfonomic_cookies_consent");
                  window.location.reload();
                }}
                className="border-b border-foreground/20 hover:border-foreground transition-colors font-bold cursor-pointer"
              >
                Configuración de cookies
              </button>{" "}
              en la parte inferior de cualquier página.
            </p>
            <p className="mt-3">
              Adicionalmente, puedes configurar tu navegador para bloquear o eliminar cookies.
              Ten en cuenta que, si bloqueas algunas cookies técnicas, el sitio podría no funcionar correctamente.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Microsoft Edge</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">6. Responsable</h2>
            <ul className="space-y-1">
              <li><strong>Razón social:</strong> GREAT REAL FOOD SL</li>
              <li><strong>NIF:</strong> B02859189</li>
              <li><strong>Email:</strong> hola@cfonomic.com</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default PoliticaCookies;
