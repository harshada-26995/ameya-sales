import { Link } from 'react-router-dom'
import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'
import { products } from '@/data/products'
import { maharashtraCities } from '@/data/cities/maharashtra'

export const SitemapPage = () => {
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Projects & Gallery', href: '/projects' },
    { name: 'Customer Testimonials', href: '/testimonials' },
    { name: 'Blog & Articles', href: '/blog' },
    { name: 'Cost Calculator', href: '/calculator' },
    { name: 'Frequently Asked Questions (FAQ)', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cookies Policy', href: '/cookies-policy' },
  ]

  return (
    <>
      <SEOHead 
        title="Sitemap | Ameya Sales Corporation" 
        description="Navigate to any page on Ameya Sales Corporation's website, including safety products, UPVC windows, railings, and locations served." 
        noIndex 
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Find and navigate quickly to any section of the {SITE_CONFIG.name} website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">Main Sections</h2>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 pt-6">Legal</h2>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">Products & Services</h2>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.slug}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors block">
                    {product.name}
                    <span className="block text-xs text-slate-400 font-normal">{product.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">Cities Served</h2>
            <div className="grid grid-cols-2 gap-3">
              {maharashtraCities.map((city) => (
                <div key={city.id} className="space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{city.name}</div>
                  <ul className="space-y-1">
                    {['invisible-grill', 'upvc-windows'].map((prodSlug) => (
                      <li key={prodSlug}>
                        <Link 
                          to={`/${prodSlug}/${city.slug}`} 
                          className="text-xs text-slate-500 hover:text-blue-600 transition-colors block"
                        >
                          {prodSlug === 'invisible-grill' ? 'Invisible Grills' : 'UPVC Windows'}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
