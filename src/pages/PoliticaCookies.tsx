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
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: febrero 2026</p>
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
              un sitio web. Se utilizan para recordar preferencias, analizar el uso del sitio y mejorar
              la experiencia del usuario.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">2. ¿Qué cookies utilizamos?</h2>
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
                    <td className="p-3">Necesarias para el funcionamiento básico del sitio (sesión, preferencias de cookies).</td>
                    <td className="p-3">Sesión / 1 año</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">Analíticas</td>
                    <td className="p-3">Nos permiten entender cómo se usa el sitio para mejorarlo (páginas visitadas, tiempo de permanencia).</td>
                    <td className="p-3">Hasta 2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Actualmente <strong>no utilizamos cookies de terceros con fines publicitarios</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">3. Base jurídica</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Cookies técnicas:</strong> se instalan sin necesidad de consentimiento por ser estrictamente necesarias.</li>
              <li><strong>Cookies analíticas:</strong> se instalan solo con tu consentimiento previo, que puedes otorgar o revocar a través del banner de cookies.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">4. ¿Cómo gestionar las cookies?</h2>
            <p>
              Puedes gestionar tus preferencias de cookies en cualquier momento a través del banner
              de cookies que aparece en la primera visita.
            </p>
            <p className="mt-3">
              También puedes configurar tu navegador para bloquear o eliminar cookies:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="border-b border-foreground/20 hover:border-foreground transition-colors">Microsoft Edge</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight mb-4">5. Responsable</h2>
            <ul className="space-y-1">
              <li><strong>Razón social:</strong> GREAT REAL FOOD SL</li>
              <li><strong>CIF:</strong> B02859189</li>
              <li><strong>Email:</strong> hola@cfonomic.com</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  </>
);

export default PoliticaCookies;
