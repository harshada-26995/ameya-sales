import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone, MessageCircle, CheckCircle, Star, ArrowRight, Shield } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { testimonials } from '@/data/testimonials'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <details className="group border border-slate-200 rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
        {question}
        <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
      </summary>
      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
        <div className="pt-4">{answer}</div>
      </div>
    </details>
  )
}

export const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')

  if (!product) return <Navigate to="/products" replace />

  const related = getRelatedProducts(product.id)
  const productTestimonials = testimonials.filter(t =>
    t.product.toLowerCase().includes(product.shortName.toLowerCase()) ||
    t.product === 'Multiple Products'
  ).slice(0, 3)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: SITE_CONFIG.name },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: product.priceRange.split('–')[0].replace(/[^0-9]/g, ''),
      highPrice: product.priceRange.split('–')[1]?.replace(/[^0-9]/g, '') || '',
      offerCount: 1,
      seller: { '@type': 'Organization', name: SITE_CONFIG.name },
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <SEOHead
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        schema={[productSchema, ...(product.faqs.length ? [faqSchema] : [])]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-blue-700">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-4">
                <Shield className="w-4 h-4" /> {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{product.name}</h1>
              <p className="text-xl text-blue-300 font-medium mb-4">{product.tagline}</p>
              <p className="text-blue-100/80 leading-relaxed mb-6">{product.description}</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
                  <div className="text-xs text-blue-300 mb-1">Starting Price</div>
                  <div className="text-2xl font-bold text-white">{product.priceRange}</div>
                  <div className="text-xs text-blue-300">{product.priceUnit}</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
                  <div className="text-xs text-blue-300 mb-1">Warranty</div>
                  <div className="text-lg font-bold text-white">{product.specifications['Warranty'] || '5 Years'}</div>
                  <div className="text-xs text-blue-300">Product Warranty</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                  <Phone className="w-4 h-4" /> Call: {SITE_CONFIG.phoneDisplay}
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I'm interested in ${product.name}. Please share details.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp for Price
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl p-8 shadow-2xl">
              <LeadForm title={`Get ${product.name} Quote`} subtitle="Free site visit included. Get quote within 24 hours." productPreset={product.id} />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits of {product.name}</h2>
              <div className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Long Description */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About {product.name}</h2>
              <div className="prose prose-slate max-w-none">
                {product.longDescription.split('\n\n').map((para, i) => {
                  if (para.startsWith('**')) {
                    const headingText = para.replace(/\*\*(.*?)\*\*/g, '$1')
                    return <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">{headingText.split(':')[0]}</h3>
                  }
                  return <p key={i} className="text-slate-600 leading-relaxed mb-4">{para.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
                })}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="px-5 py-3 font-semibold text-slate-700 w-1/2 border-r border-slate-200">{key}</td>
                        <td className="px-5 py-3 text-slate-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Applications & Use Cases</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                    <span className="text-sm text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            {product.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {product.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials */}
            {productTestimonials.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Customer Reviews</h2>
                <div className="space-y-4">
                  {productTestimonials.map(t => (
                    <div key={t.id} className="luxury-card p-6">
                      <div className="flex items-center gap-1 text-yellow-400 mb-3">
                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-slate-600 mb-4">"{t.review}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">{t.name[0]}</div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                          <div className="text-xs text-slate-400">{t.location}</div>
                        </div>
                        {t.verified && <div className="ml-auto flex items-center gap-1 text-xs text-green-600"><CheckCircle className="w-4 h-4" /> Verified</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sticky Quote */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <LeadForm title="Get Free Quote" compact productPreset={product.id} />
              </div>

              {/* Contact Methods */}
              <div className="luxury-card p-6 space-y-4">
                <h3 className="font-bold text-slate-900">Contact Us Directly</h3>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-blue-700" />
                  <div>
                    <div className="text-xs text-slate-500">Call Us Now</div>
                    <div className="font-semibold text-slate-900 text-sm">{SITE_CONFIG.phoneDisplay}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I need ${product.name} price and availability.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-xs text-slate-500">WhatsApp Us</div>
                    <div className="font-semibold text-slate-900 text-sm">+91 98765 43210</div>
                  </div>
                </a>
              </div>

              {/* Related Products */}
              {related.length > 0 && (
                <div className="luxury-card p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Related Products</h3>
                  <div className="space-y-3">
                    {related.map(p => (
                      <Link key={p.id} to={`/products/${p.slug}`} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                          <Shield className="w-5 h-5 text-blue-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-900 text-sm group-hover:text-blue-700 transition-colors truncate">{p.name}</div>
                          <div className="text-xs text-slate-400">{p.priceRange}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* City links */}
              <div className="luxury-card p-6">
                <h3 className="font-bold text-slate-900 mb-4">{product.name} in Maharashtra</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pune', 'Mumbai', 'Nashik', 'Nagpur', 'Thane', 'Aurangabad', 'Kolhapur'].map(city => (
                    <Link key={city} to={`/${product.slug}/${city.toLowerCase()}`} className="text-xs px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors font-medium">
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Install {product.name}?</h2>
          <p className="text-blue-100 mb-8">Get a free site visit, accurate measurement, and detailed quotation. Same-day response guaranteed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl">
              <Phone className="w-5 h-5" /> Call {SITE_CONFIG.phoneDisplay}
            </a>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I'd like a free site visit for ${product.name}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-xl">
              <MessageCircle className="w-5 h-5" /> Book Free Site Visit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
