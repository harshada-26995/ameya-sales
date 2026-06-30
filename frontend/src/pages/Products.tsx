import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ChevronRight, Search, Phone, MessageCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'
import { products } from '@/data/products'

const categories = ['All', 'Safety Solutions', 'Windows', 'Railings', 'Nets & Mesh']

export const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.tagline.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <SEOHead
        title="All Products — Invisible Grill, UPVC Windows, Glass Railing & More"
        description="Explore Ameya Sales Corporation's complete range of architectural safety products: invisible grills, UPVC windows, aluminium windows, glass railings, SS railings, mosquito mesh, bird nets, safety nets, ACP cladding, and more."
        keywords={['safety products pune', 'invisible grill UPVC windows glass railing', 'architectural safety solutions']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Products', url: '/products' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> 15+ Premium Safety Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Complete Product Range</span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              From invisible grills to UPVC windows, glass railings to bird nets — every product is manufactured to the highest quality standards with professional installation included.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-blue-700 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-slate-400 text-lg">No products found matching your search.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/products/${product.slug}`} className="group block luxury-card overflow-hidden h-full">
                    <div className="bg-gradient-to-br from-blue-50 to-slate-100 h-48 flex items-center justify-center relative">
                      <Shield className="w-20 h-20 text-blue-200 group-hover:text-blue-300 transition-colors" />
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-semibold bg-blue-700 text-white px-2.5 py-1 rounded-full">{product.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="font-bold text-slate-900 text-base mb-1 group-hover:text-blue-700 transition-colors">{product.name}</h2>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{product.tagline}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                          <div className="text-xs text-slate-400">Starting from</div>
                          <div className="font-bold text-blue-700 text-sm">{product.priceRange}</div>
                          <div className="text-xs text-slate-400">{product.priceUnit}</div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                          Know More <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-slate-500 mb-6">We offer custom solutions for unique requirements. Contact our experts for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all">
              <Phone className="w-4 h-4" /> Call an Expert
            </a>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
