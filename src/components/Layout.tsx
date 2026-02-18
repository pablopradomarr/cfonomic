import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoCfonomic from "@/assets/logo-cfonomic.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Casos", path: "/casos-de-exito" },
  { label: "Recursos", path: "/recursos" },
  { label: "Glosario", path: "/glosario" },
  { label: "Diagnóstico", path: "/diagnostico-financiero" },
  { label: "Contacto", path: "/contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ═══ NAV ═══ */}
      <header className={`sticky top-0 z-50 border-b border-foreground/5 backdrop-blur-md ${mobileOpen ? 'bg-[hsl(var(--surface-dark))]' : 'bg-background/90'}`}>
        <nav className="container-wide flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoCfonomic} alt="CFOnomic" className={`h-8 md:h-9 w-auto ${mobileOpen ? 'brightness-0 invert' : ''}`} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-[13px] font-mono uppercase tracking-[0.08em] transition-all px-3 py-1.5 ${
                    location.pathname === item.path
                      ? "text-foreground bg-foreground/[0.06] font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/diagnostico-financiero"
            className="hidden lg:inline-flex bg-foreground text-background px-5 py-2 text-[12px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-foreground/85 transition-colors"
          >
            Diagnóstico gratis
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menú"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px] bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px] bg-white" : "bg-foreground"
              }`}
            />
          </button>
        </nav>

      </header>

      {/* Mobile fullscreen menu — OUTSIDE header for proper z-stacking */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 z-[60] flex flex-col overflow-y-auto"
            style={{ backgroundColor: "hsl(0 0% 4%)" }}
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-4 font-heading text-3xl font-bold border-b border-white/10 transition-colors ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12">
              <Link
                to="/diagnostico-financiero"
                className="block w-full bg-accent text-accent-foreground py-4 text-center text-sm font-mono uppercase tracking-[0.1em] font-bold"
              >
                Diagnóstico gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ MAIN ═══ */}
      <main className="flex-1">{children}</main>

      {/* ═══ FOOTER ═══ */}
      <footer className="section-dark">
        <div className="container-wide py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground">
                CFO<span className="font-display italic font-normal text-accent">nomic</span>
              </p>
              <p className="mt-4 max-w-sm text-sm text-surface-dark-foreground/50 leading-relaxed font-body">
                Dirección financiera para PYMEs que quieren dejar de improvisar.
                Control. Caja. Decisiones con datos.
              </p>
              <div className="divider-accent mt-6" />
            </div>

            <div className="md:col-span-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-surface-dark-foreground/30 mb-4">
                Mapa
              </p>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-surface-dark-foreground/30 mb-4">
                Empieza
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/diagnostico-financiero" className="text-sm text-surface-dark-foreground/60 hover:text-accent transition-colors font-body">
                    Diagnóstico financiero
                  </Link>
                </li>
                <li>
                  <Link to="/equipo" className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body">
                    Quién soy
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body">
                    Contacto
                  </Link>
                </li>
              </ul>

              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-surface-dark-foreground/30 mb-4 mt-8">
                Director financiero externo
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {[
                  { label: "Madrid", path: "/director-financiero-externo-madrid" },
                  { label: "Barcelona", path: "/director-financiero-externo-barcelona" },
                  { label: "Valencia", path: "/director-financiero-externo-valencia" },
                  { label: "Sevilla", path: "/director-financiero-externo-sevilla" },
                  { label: "Málaga", path: "/director-financiero-externo-malaga" },
                  { label: "Bilbao", path: "/director-financiero-externo-bilbao" },
                  { label: "Zaragoza", path: "/director-financiero-externo-zaragoza" },
                  { label: "Valladolid", path: "/director-financiero-externo-valladolid" },
                  { label: "Alicante", path: "/director-financiero-externo-alicante" },
                  { label: "Murcia", path: "/director-financiero-externo-murcia" },
                ].map((c) => (
                  <li key={c.path}>
                    <Link to={c.path} className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-surface-dark-foreground/10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
              <Link to="/aviso-legal" className="text-[10px] font-mono text-surface-dark-foreground/30 hover:text-surface-dark-foreground/60 transition-colors">
                Aviso legal
              </Link>
              <Link to="/politica-de-privacidad" className="text-[10px] font-mono text-surface-dark-foreground/30 hover:text-surface-dark-foreground/60 transition-colors">
                Política de privacidad
              </Link>
              <Link to="/politica-de-cookies" className="text-[10px] font-mono text-surface-dark-foreground/30 hover:text-surface-dark-foreground/60 transition-colors">
                Política de cookies
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("cfonomic_cookies_consent");
                  window.location.reload();
                }}
                className="text-[10px] font-mono text-surface-dark-foreground/30 hover:text-surface-dark-foreground/60 transition-colors cursor-pointer"
              >
                Configuración de cookies
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <p className="text-[11px] font-mono text-surface-dark-foreground/25">
                © {new Date().getFullYear()} CFOnomic — GREAT REAL FOOD SL · CIF B02859189
              </p>
              <p className="text-[11px] font-mono text-surface-dark-foreground/25">
                No vendo tu email. Lo odio tanto como tú.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="cta-sticky">
        <Link
          to="/diagnostico-financiero"
          className="block w-full bg-accent py-2.5 text-center text-[12px] font-mono uppercase tracking-[0.1em] font-bold text-accent-foreground"
        >
          Diagnóstico gratis
        </Link>
      </div>
    </div>
  );
};

export default Layout;
