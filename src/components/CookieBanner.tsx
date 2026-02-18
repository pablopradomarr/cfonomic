import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cfonomic_cookies_consent";

export type CookieConsent = "all" | "necessary" | null;

/** Returns current cookie consent status */
export const getCookieConsent = (): CookieConsent => {
  const value = localStorage.getItem(COOKIE_KEY);
  if (value === "all" || value === "necessary") return value;
  return null;
};

/** Check if analytics cookies are allowed */
export const analyticsAllowed = (): boolean => getCookieConsent() === "all";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for consent reset (from cookie settings link)
  useEffect(() => {
    const handler = () => {
      const consent = getCookieConsent();
      if (!consent) setVisible(true);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "all");
    setVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem(COOKIE_KEY, "necessary");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-6 md:left-6 md:right-auto md:max-w-md"
        >
          <div className="bg-foreground text-background p-5 md:p-6 border border-foreground/20 shadow-2xl">
            <p className="text-xs font-body leading-relaxed">
              Utilizamos cookies técnicas (necesarias) y, con tu consentimiento, cookies analíticas
              para mejorar el sitio. Las analíticas están <strong>desactivadas por defecto</strong>.
              Puedes aceptar todas, solo las necesarias o consultar nuestra{" "}
              <Link
                to="/politica-de-cookies"
                className="border-b border-background/40 hover:border-background transition-colors"
              >
                política de cookies
              </Link>.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-accent text-accent-foreground py-2 text-[11px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-accent/85 transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleNecessaryOnly}
                className="flex-1 border border-background/30 text-background py-2 text-[11px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-background/10 transition-colors"
              >
                Solo necesarias
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
