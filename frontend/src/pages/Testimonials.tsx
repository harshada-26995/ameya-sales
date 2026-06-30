import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, Phone, MessageCircle, Quote } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE_CONFIG } from '@/config/site'
import { testimonials } from '@/data/testimonials'
import { LeadForm } from '@/components/forms/LeadForm'

export const TestimonialsPage = () => {
  const [filter, setFilter] = useState('All')
  const products = ['All', ...Array.from(new Set(testimonials.map(t => t.product)))]
  const filtered = filter === 'All' ? testimonials : testimonials.filter(t => t.product === filter)

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
    },
    review: testimonials.slice(0, 5).map(t => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: t.rating.toString() },
      author: { '@type': 'Person', name: t.name },
      datePublished: t.date,
      reviewBody: t.review,
    })),
  }

  return (
    <>
      <SEOHead
        title="Customer Reviews & Testimonials | Ameya Sales Corporation"
        description={`Read ${testimonials.length}+ genuine customer reviews for Ameya Sales Corporation. 4.9/5 rating. Real experiences with invisible grills, UPVC windows, glass railings and more.`}
        schema={reviewSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">8,000+ Customers</span> Say
            </h1>
            <div className="flex items-center justify-center gap-6 mt-6">
              {[
                { label: 'Average Rating', value: '4.9/5' },
                { label: 'Total Reviews', value: '847+' },
                { label: 'Verified Reviews', value: '100%' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 overflow-x-auto">
          {products.map(p => (
            <button key={p} onClick={() => setFilter(p)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === p ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="luxury-card p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  <span className="text-slate-400 text-xs ml-1">{t.rating}.0</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.location}</div>
                    <div className="text-xs text-blue-600 font-medium">{t.product}</div>
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1 text-xs text-green-600 shrink-0">
                      <CheckCircle className="w-4 h-4" /> Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading tag="Join 8,000+ Happy Customers" title="Experience the " highlight="Ameya Difference" subtitle="Get a free site visit and see why Maharashtra trusts us for all their safety needs." />
              <div className="mt-8 flex gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 px-5 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
