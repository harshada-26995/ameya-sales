import { products } from '@/data/products'
import { maharashtraCities } from '@/data/cities/maharashtra'
import { SITE_CONFIG } from '@/config/site'

interface SitemapURL {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export const generateSitemapURLs = (): SitemapURL[] => {
  const today = new Date().toISOString().split('T')[0]
  const urls: SitemapURL[] = []

  // Static pages
  const staticPages: SitemapURL[] = [
    { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: today },
    { loc: '/about', changefreq: 'monthly', priority: 0.8 },
    { loc: '/products', changefreq: 'weekly', priority: 0.9 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
    { loc: '/testimonials', changefreq: 'weekly', priority: 0.7 },
    { loc: '/blog', changefreq: 'daily', priority: 0.8 },
    { loc: '/calculator', changefreq: 'monthly', priority: 0.7 },
    { loc: '/faq', changefreq: 'monthly', priority: 0.7 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.7 },
    { loc: '/gallery', changefreq: 'weekly', priority: 0.6 },
    { loc: '/career', changefreq: 'monthly', priority: 0.5 },
    { loc: '/dealer-registration', changefreq: 'monthly', priority: 0.6 },
    { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { loc: '/terms', changefreq: 'yearly', priority: 0.3 },
  ]
  urls.push(...staticPages)

  // Product pages
  products.forEach(product => {
    urls.push({
      loc: `/products/${product.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: today,
    })
  })

  // Programmatic SEO: product × city pages
  const primaryProducts = ['invisible-grill', 'upvc-windows', 'aluminium-windows', 'glass-railing', 'ss-railing', 'mosquito-mesh', 'bird-net', 'safety-net']

  maharashtraCities.forEach(city => {
    primaryProducts.forEach(productSlug => {
      const priority = city.tier === 'tier1' ? 0.85 : city.tier === 'tier2' ? 0.75 : 0.65
      urls.push({
        loc: `/${productSlug}/${city.slug}`,
        changefreq: 'monthly',
        priority,
        lastmod: today,
      })
    })
  })

  return urls
}

export const generateSitemapXML = (): string => {
  const urls = generateSitemapURLs()
  const base = SITE_CONFIG.url

  const entries = urls.map(url => `  <url>
    <loc>${base}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>`
}
