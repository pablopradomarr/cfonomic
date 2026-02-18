import { FadeIn } from "@/components/Editorial";
import { useRef, useState, useEffect } from "react";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/CFOnomic";
const GOOGLE_SEARCH_URL = "https://www.google.com/maps/place/CFOnomic/@36.6816,-6.1268,15z/data=!4m6!3m5!1s0xdd1a6c9e3bcc28d:0x5a2c1f0a0e6c0f0a!8m2!3d36.6816!4d-6.1268!16s";

// Fallback: direct search that reliably resolves
const REVIEW_URL = "https://www.google.com/maps/search/CFOnomic+Jerez+de+la+Frontera";

const reviews = [
  {
    name: "Xavier Colomés",
    badge: "Local Guide · 211 reseñas",
    stars: 5,
    text: "En Localboss llevamos un año con Pablo y estamos encantados con su implicación y flexibilidad para adaptarse a nuestras necesidades.",
  },
  {
    name: "Daniel R",
    badge: "Local Guide · 85 reseñas",
    stars: 5,
    text: "Llevamos trabajando con Pablo en CFOnomic más de un año. Lo recomiendo 100%. Además de ayudarnos a entender los números de nuestra empresa, nos ha abierto los ojos con la rentabilidad real de nuestros servicios.",
  },
  {
    name: "Joaquín Rivas",
    badge: "6 reseñas",
    stars: 5,
    text: "Muy recomendable. Pablo es un gran profesional: cercano, claro y muy comprometido. Me ayuda a entender mejor la parte financiera de mi proyecto y a tomar decisiones con confianza.",
  },
  {
    name: "Jesús Sánchez Alcaide",
    badge: "5 reseñas",
    stars: 5,
    text: "Servicio y calidad inmejorables, atienden tu consulta hasta en fin de semana. Gracias a ellos controlo hasta el último céntimo que entra y sale de mi negocio de restauración.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GoogleReviews = ({ dark = false }: { dark?: boolean }) => {
  const textColor = dark ? "text-surface-dark-foreground" : "text-foreground";
  const mutedColor = dark ? "text-surface-dark-foreground/50" : "text-muted-foreground";
  const borderColor = dark ? "border-surface-dark-foreground/10" : "border-foreground/10";
  const cardBg = dark ? "bg-surface-dark-foreground/5" : "bg-background";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <FadeIn>
      <div className="max-w-4xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <GoogleIcon />
            <div className="flex items-center gap-2">
              <span className={`font-heading text-2xl font-bold ${textColor}`}>5,0</span>
              <Stars count={5} />
            </div>
            <span className={`text-[10px] font-mono uppercase tracking-[0.12em] ${mutedColor} group-hover:text-accent transition-colors border-b ${borderColor} pb-0.5`}>
              30 reseñas →
            </span>
          </a>

          {/* Arrows */}
          <div className="hidden md:flex gap-1">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className={`w-8 h-8 flex items-center justify-center border ${borderColor} ${textColor} disabled:opacity-20 hover:border-accent/40 transition-colors`}
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className={`w-8 h-8 flex items-center justify-center border ${borderColor} ${textColor} disabled:opacity-20 hover:border-accent/40 transition-colors`}
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-1 px-1 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review) => (
            <a
              key={review.name}
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 w-[280px] md:w-[300px] snap-start border ${borderColor} ${cardBg} p-5 hover:border-accent/30 transition-colors block`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-[11px] font-heading font-bold ${textColor}`}>
                  {review.name[0]}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-heading font-bold ${textColor} truncate`}>{review.name}</p>
                  <p className={`text-[9px] font-mono ${mutedColor}`}>{review.badge}</p>
                </div>
                <div className="ml-auto shrink-0"><Stars count={review.stars} /></div>
              </div>
              <p className={`text-xs leading-relaxed line-clamp-4 ${dark ? 'text-surface-dark-foreground/70' : 'text-foreground/70'}`}>
                "{review.text}"
              </p>
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default GoogleReviews;
