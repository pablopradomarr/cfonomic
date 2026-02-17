import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/90 backdrop-blur-md">
        <nav className="container-wide flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight">
            CFO<span className="text-accent">nomic</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-[13px] font-mono uppercase tracking-[0.08em] transition-colors hover:text-foreground ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground"
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
              className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile fullscreen menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col"
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
                      className={`block py-4 font-heading text-3xl font-bold border-b border-foreground/5 transition-colors ${
                        location.pathname === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
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
                  className="block w-full bg-foreground text-background py-4 text-center text-sm font-mono uppercase tracking-[0.1em] font-bold"
                >
                  Diagnóstico gratis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══ MAIN ═══ */}
      <main className="flex-1">{children}</main>

      {/* ═══ FOOTER ═══ */}
      <footer className="section-dark">
        <div className="container-wide py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground">
                CFO<span className="text-accent">nomic</span>
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
                  <Link
                    to="/diagnostico-financiero"
                    className="text-sm text-surface-dark-foreground/60 hover:text-accent transition-colors font-body"
                  >
                    Diagnóstico financiero
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipo"
                    className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body"
                  >
                    Quién soy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors font-body"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-surface-dark-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[11px] font-mono text-surface-dark-foreground/25">
              © {new Date().getFullYear()} CFOnomic — Pablo Prado Marrón
            </p>
            <p className="text-[11px] font-mono text-surface-dark-foreground/25">
              No vendo tu email. Lo odio tanto como tú.
            </p>
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
