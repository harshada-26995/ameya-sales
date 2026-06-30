import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Phone, MessageCircle, CheckCircle, MapPin, Star, ChevronRight } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'
import { getCityBySlug, maharashtraCities } from '@/data/cities/maharashtra'
import { getProductBySlug, products } from '@/data/products'

const dynamicFAQs = (productName: string, cityName: string) => [
  {
    q: `What is the price of ${productName} in ${cityName}?`,
    a: `${productName} price in ${cityName} ranges based on the area, material grade, and installation complexity. Contact Ameya Sales Corporation for a free site visit and transparent quotation. Prices typically range from ₹150–₹350 per sq.ft. installed.`,
  },
  {
    q: `How long does ${productName} installation take in ${cityName}?`,
    a: `Most standard ${productName} installations in ${cityName} are completed within 1 working day. Larger projects may take 2–3 days. Our team provides a clear timeline before beginning work.`,
  },
  {
    q: `Is Ameya Sales Corporation available in ${cityName}?`,
    a: `Yes! Ameya Sales Corporation serves ${cityName} and all surrounding areas. We provide free site visits, professional installation, and after-sales service in ${cityName}. Call or WhatsApp us to schedule a visit.`,
  },
  {
    q: `Do you provide warranty for ${productName} in ${cityName}?`,
    a: `Yes, all our ${productName} installations in ${cityName} come with a product warranty of up to 15 years and an installation warranty. We provide a signed warranty certificate after completion.`,
  },
  {
    q: `How do I get a free quotation for ${productName} in ${cityName}?`,
    a: `Simply call us at ${SITE_CONFIG.phoneDisplay} or WhatsApp us. Our expert will schedule a free site visit in ${cityName} within 24 hours, take accurate measurements, and provide a detailed written quotation.`,
  },
]

export const CityLandingPage = () => {
  const { productSlug, citySlug } = useParams<{ productSlug: string; citySlug: string }>()

  const city = getCityBySlug(citySlug || '')
  const product = getProductBySlug(productSlug || 'invisible-grill')

  if (!city || !product) return <Navigate to="/" replace />

  const faqs = dynamicFAQs(product.name, city.name)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_CONFIG.name} — ${product.name} in ${city.name}`,
    description: `Professional ${product.name} installation in ${city.name}, ${city.state}. ${SITE_CONFIG.yearsExperience}+ years experience, ${SITE_CONFIG.projectsCompleted}+ projects completed.`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: `${SITE_CONFIG.url}/${product.slug}/${city.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'City', name: city.name },
    priceRange: product.priceRange,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const nearbyProducts = products.filter(p => p.id !== product.id).slice(0, 4)
  const nearbyCities = maharashtraCities.filter(c => c.tier === city.tier && c.id !== city.id).slice(0, 8)

  return (
    <>
      <SEOHead
        title={`${product.name} in ${city.name} | Price, Installation & Dealers | Ameya Sales`}
        description={`Best ${product.name} in ${city.name} — Professional installation, ${product.priceRange} per sq.ft., ${SITE_CONFIG.yearsExperience}+ years experience. Free site visit. Call ${SITE_CONFIG.phoneDisplay}. Ameya Sales Corporation.`}
        keywords={[
          `${product.name.toLowerCase()} in ${city.name.toLowerCase()}`,
          `${product.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${product.name.toLowerCase()} price ${city.name.toLowerCase()}`,
          `${product.name.toLowerCase()} installation ${city.name.toLowerCase()}`,
          `${product.name.toLowerCase()} dealer ${city.name.toLowerCase()}`,
          `${product.name.toLowerCase()} near ${city.name.toLowerCase()}`,
        ]}
        schema={[localBusinessSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: product.name, url: `/products/${product.slug}` },
          { name: city.name, url: `/${product.slug}/${city.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/products/${product.slug}`} className="hover:text-blue-700">{product.name}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">{city.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" /> Serving {city.name}, {city.district} District
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {product.name} in{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{city.name}</span>
              </h1>
              <p className="text-xl text-blue-300 font-medium mb-4">
                Professional {product.name} Installation in {city.name} — Free Site Visit
              </p>
              <p className="text-blue-100/80 leading-relaxed mb-6">
                Ameya Sales Corporation provides premium {product.name} installation services in {city.name} and surrounding areas. With {SITE_CONFIG.yearsExperience}+ years of experience, {SITE_CONFIG.projectsCompleted}+ completed projects, and a 5-star rating from satisfied customers, we are {city.name}'s most trusted {product.name.toLowerCase()} provider.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: `${product.priceRange}`, label: `per sq.ft in ${city.name}` },
                  { value: '1 Day', label: 'Installation Time' },
                  { value: product.specifications['Warranty'] || '5 Years', label: 'Warranty' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                    <div className="font-bold text-white text-sm">{stat.value}</div>
                    <div className="text-xs text-blue-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                  <Phone className="w-4 h-4" /> Call: {SITE_CONFIG.phoneDisplay}
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I need ${product.name} in ${city.name}. Please share price and availability.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp for Price
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl p-8 shadow-2xl">
              <LeadForm
                title={`Get ${product.name} Quote in ${city.name}`}
                subtitle={`Free site visit in ${city.name}. Get detailed quote within 24 hours.`}
                productPreset={product.id}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">

            {/* Why choose for this city */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Ameya Sales for {product.name} in {city.name}?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  `${SITE_CONFIG.yearsExperience}+ years serving ${city.name} customers`,
                  `100+ successful ${product.name.toLowerCase()} installations in ${city.name}`,
                  'Free site visit and measurement in ' + city.name,
                  'Same-day or next-day installation available',
                  product.specifications['Warranty'] || '5-year' + ' warranty on all products',
                  'ISO 9001:2015 certified company',
                  'BIS certified materials only',
                  '24/7 after-sales support in ' + city.name,
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Product features in context of city */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{product.name} Features & Specifications</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.slice(0, 8).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl">
                    <Shield className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Price section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{product.name} Price in {city.name}</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  The price of {product.name.toLowerCase()} in {city.name} typically ranges from <strong>{product.priceRange} {product.priceUnit}</strong>. The final price depends on several factors including the total area, floor height, material grade selected, installation complexity, and number of units.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  To get an accurate price for your specific requirements in {city.name}, we recommend booking a <strong>free site visit</strong>. Our expert will visit your location in {city.name}, take precise measurements, understand your requirements, and provide a detailed, transparent quotation with no hidden charges.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold">Configuration</th>
                      <th className="px-5 py-3 text-left font-semibold">Price Range (Installed)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Standard Grade', `${product.priceRange.split('–')[0]} – ₹200/sq.ft.`],
                      ['Premium Grade', `₹200 – ₹280/sq.ft.`],
                      ['Ultra Premium', `₹280 – ${product.priceRange.split('–')[1] || '₹350'}/sq.ft.`],
                    ].map(([config, price], i) => (
                      <tr key={config} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="px-5 py-3 text-slate-700 border-r border-slate-200">{config}</td>
                        <td className="px-5 py-3 text-slate-700">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-3">* Prices are indicative and subject to site inspection. GST extra.</p>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQs — {product.name} in {city.name}</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-slate-200 rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-800 hover:bg-slate-50">
                      {faq.q}
                      <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{faq.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Nearby cities */}
            {nearbyCities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{product.name} in Nearby Cities</h2>
                <div className="flex flex-wrap gap-3">
                  {nearbyCities.map(c => (
                    <Link key={c.id} to={`/${product.slug}/${c.slug}`} className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-colors border border-blue-100">
                      {product.name} in {c.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Quick Form */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-4">Get Free Quote in {city.name}</h3>
                <LeadForm compact productPreset={product.id} />
              </div>

              {/* Contact */}
              <div className="luxury-card p-6 space-y-3">
                <h3 className="font-bold text-slate-900">Call or WhatsApp</h3>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-blue-700" />
                  <div>
                    <div className="text-xs text-slate-500">Call Expert in {city.name}</div>
                    <div className="font-semibold text-slate-900 text-sm">{SITE_CONFIG.phoneDisplay}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I need ${product.name} in ${city.name}.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-xs text-slate-500">WhatsApp for Price</div>
                    <div className="font-semibold text-slate-900 text-sm">+91 98765 43210</div>
                  </div>
                </a>
              </div>

              {/* Rating */}
              <div className="luxury-card p-6 text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">4.9/5</div>
                <div className="text-slate-500 text-sm">Based on 847+ customer reviews</div>
                <Link to="/testimonials" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">Read All Reviews →</Link>
              </div>

              {/* Other products in this city */}
              <div className="luxury-card p-6">
                <h3 className="font-bold text-slate-900 mb-4">Other Products in {city.name}</h3>
                <div className="space-y-2">
                  {nearbyProducts.map(p => (
                    <Link key={p.id} to={`/${p.slug}/${city.slug}`} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-700 hover:text-blue-700 transition-colors">
                      {p.name} in {city.name}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Get {product.name} Installed in {city.name} Today</h2>
          <p className="text-blue-100 mb-8">Free site visit · Transparent pricing · Professional installation · {product.specifications['Warranty'] || '5-year'} warranty</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl">
              <Phone className="w-5 h-5" /> Call {SITE_CONFIG.phoneDisplay}
            </a>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I want ${product.name} in ${city.name}. Free site visit please.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-xl">
              <MessageCircle className="w-5 h-5" /> Book Free Site Visit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
