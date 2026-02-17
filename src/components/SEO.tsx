import { Helmet } from "react-helmet-async";

interface FAQItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  faq?: FAQItem[];
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://cfonomic.com";
const SITE_NAME = "CFOnomic";

const SEO = ({ title, description, canonical, ogType = "website", faq, jsonLd }: SEOProps) => {
  const fullTitle = title.includes("CFOnomic") ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  const faqSchema = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CFOnomic",
    description: "Asesoría financiera para PYMEs y Startups. Control financiero, caja, márgenes y decisiones con datos.",
    url: SITE_URL,
    founder: {
      "@type": "Person",
      name: "Pablo Prado Marrón",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: "Asesoría financiera para empresas",
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Organization schema (only on pages that don't have custom jsonLd) */}
      {!jsonLd && (
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      )}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
