import { Helmet } from 'react-helmet-async'
import { SITE_CONFIG } from '@/config/site'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
  schema?: Record<string, unknown> | Record<string, unknown>[]
  breadcrumbs?: { name: string; url: string }[]
}

export const SEOHead = ({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  ogImage = `${SITE_CONFIG.url}/og-image.jpg`,
  canonical,
  noIndex = false,
  schema,
  breadcrumbs,
}: SEOHeadProps) => {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`

  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_CONFIG.url)

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: Object.values(SITE_CONFIG.socialLinks),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = breadcrumbs && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }

  const schemas = [
    organizationSchema,
    websiteSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
  ]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional */}
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Schema.org JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
