import { Helmet } from "react-helmet-async";

interface FAQItem {
  q: string;
  a: string;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  faq?: FAQItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://cfonomic.com";
const SITE_NAME = "CFOnomic";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

const SEO = ({ title, description, canonical, ogType = "website", ogImage, faq, jsonLd, breadcrumbs }: SEOProps) => {
  const fullTitle = title.includes("CFOnomic") ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const image = ogImage || DEFAULT_OG_IMAGE;

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

  const breadcrumbSchema = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }
    : null;

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
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Organization schema — always present */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* Custom JSON-LD schemas */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
