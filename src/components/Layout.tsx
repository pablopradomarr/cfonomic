import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Casos de éxito", path: "/casos-de-exito" },
  { label: "Recursos", path: "/recursos" },
  { label: "Glosario", path: "/glosario" },
  { label: "Diagnóstico", path: "/diagnostico-financiero" },
  { label: "Contacto", path: "/contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <nav className="container-wide flex items-center justify-between py-4">
          <Link to="/" className="font-heading text-2xl font-bold text-heading tracking-tight">
            CFO<span className="text-accent">nomic</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-body transition-colors hover:text-heading ${
                    location.pathname === item.path
                      ? "text-heading font-semibold"
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
            className="hidden lg:inline-flex rounded-md bg-accent px-4 py-2 text-sm font-heading font-bold text-accent-foreground hover:bg-accent/85 transition-all"
          >
            Diagnóstico gratis
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-heading"
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
            <ul className="space-y-1 pt-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-body transition-colors ${
                      location.pathname === item.path
                        ? "bg-surface-paper text-heading font-semibold"
                        : "text-muted-foreground hover:bg-surface-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/diagnostico-financiero"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-heading font-bold text-accent-foreground"
            >
              Diagnóstico gratis
            </Link>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="container-wide py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-heading text-2xl font-bold">
                CFO<span className="text-accent">nomic</span>
              </p>
              <p className="mt-3 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
                Dirección financiera externa para PYMEs y Startups. Control, caja, márgenes y
                decisiones con datos. Sin humo. Con números.
              </p>
            </div>
            <div>
              <p className="font-heading font-bold text-sm mb-3 uppercase tracking-wider text-primary-foreground/50">
                Páginas
              </p>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-heading font-bold text-sm mb-3 uppercase tracking-wider text-primary-foreground/50">
                Contacto
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Escríbeme
                  </Link>
                </li>
                <li>
                  <Link
                    to="/diagnostico-financiero"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Diagnóstico financiero
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipo"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Quién soy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} CFOnomic — Pablo Prado Marrón. No vendo tu email. Lo odio
              tanto como tú.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="cta-sticky">
        <Link
          to="/diagnostico-financiero"
          className="block w-full rounded-md bg-accent py-2.5 text-center text-sm font-heading font-bold text-accent-foreground"
        >
          Diagnóstico financiero gratis
        </Link>
      </div>
    </div>
  );
};

export default Layout;
