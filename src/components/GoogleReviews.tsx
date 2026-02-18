import { FadeIn } from "@/components/Editorial";

const GOOGLE_MAPS_URL = "https://www.google.com/search?q=Asesor%C3%ADa+financiera+CFOnomic+Jerez+de+la+Frontera";

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
    text: "Llevamos trabajando con Pablo en CFOnomic más de un año. Lo recomiendo 100%. Además de ayudarnos a entender los números de nuestra empresa, nos ha abierto los ojos con la rentabilidad real de nuestros servicios. Entre Pablo y nuestra gestoría, estamos al día y con total control de nuestro negocio.",
  },
  {
    name: "Joaquín Rivas",
    badge: "6 reseñas",
    stars: 5,
    text: "Muy recomendable. Pablo es un gran profesional: cercano, claro y muy comprometido. Me ayuda a entender mejor la parte financiera de mi proyecto y a tomar decisiones con confianza. Su apoyo ha sido clave para avanzar con seguridad.",
  },
  {
    name: "Jesús Sánchez Alcaide",
    badge: "5 reseñas",
    stars: 5,
    text: "Servicio y calidad inmejorables, atienden tu consulta (si es importante) hasta en fin de semana. Tienen un gran compromiso con sus clientes. Respecto a la calidad, poco que decir. Gracias a ellos controlo hasta el último céntimo que entra y sale de mi negocio de restauración. Si lo que quieres es controlar tus finanzas, sin duda recomiendo esta empresa.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const GoogleReviews = ({ dark = false }: { dark?: boolean }) => {
  const textColor = dark ? "text-surface-dark-foreground" : "text-foreground";
  const mutedColor = dark ? "text-surface-dark-foreground/50" : "text-muted-foreground";
  const borderColor = dark ? "border-surface-dark-foreground/10" : "border-foreground/10";
  const cardBg = dark ? "bg-surface-dark-foreground/5" : "bg-background";

  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto">
        {/* Rating badge */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 group mb-10"
        >
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-heading text-3xl font-bold ${textColor}`}>5,0</span>
                <Stars count={5} />
              </div>
              <p className={`text-[10px] font-mono uppercase tracking-[0.15em] ${mutedColor}`}>
                30 reseñas en Google Maps
              </p>
            </div>
          </div>
          <span className={`text-[11px] font-mono uppercase tracking-[0.1em] ${mutedColor} group-hover:${dark ? 'text-accent' : 'text-foreground'} transition-colors border-b ${borderColor} pb-0.5 ml-2`}>
            Ver todas →
          </span>
        </a>

        {/* Review cards */}
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.1}>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block border ${borderColor} ${cardBg} p-6 md:p-8 hover:border-accent/30 transition-colors`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-heading font-bold ${textColor}`}>
                        {review.name[0]}
                      </div>
                      <div>
                        <p className={`text-sm font-heading font-bold ${textColor}`}>{review.name}</p>
                        <p className={`text-[10px] font-mono ${mutedColor}`}>{review.badge}</p>
                      </div>
                    </div>
                  </div>
                  <Stars count={review.stars} />
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${dark ? 'text-surface-dark-foreground/70' : 'text-foreground/70'}`}>
                  "{review.text}"
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default GoogleReviews;
