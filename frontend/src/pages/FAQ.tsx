import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle, Phone, MessageCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

const faqs = [
  {
    category: 'Invisible Grill',
    items: [
      { q: 'What is an invisible grill and how does it work?', a: 'An invisible grill is a safety barrier made of high-tensile SS316 stainless steel wires (2mm diameter) tensioned between powder-coated aluminium channels. The wires are so fine and tensioned so tightly that they are virtually invisible from a distance while providing complete safety for children and pets on balconies and near windows.' },
      { q: 'Are invisible grills safe for children and toddlers?', a: 'Yes, absolutely. Our invisible grills are engineered specifically for child safety. The wire spacing of 5-7cm (standard) or 4-5cm (child-safe option) prevents any child from pushing through, and the tensioning system means the wires cannot be displaced even by significant force. Each wire has a breaking strength of 130 kgf.' },
      { q: 'What is the price of invisible grill per sq ft?', a: 'Invisible grill prices range from ₹150 to ₹350 per sq.ft. installed, depending on the wire grade (SS304 or SS316), channel finish, floor height, and city. Contact us for a free site visit and exact quotation.' },
      { q: 'Do invisible grills require any maintenance?', a: 'No. Invisible grills are virtually maintenance-free. The SS316 wires are completely rust and corrosion-proof. Occasional wiping with a damp cloth is all that\'s needed. There is no painting, oiling, or re-coating ever required.' },
      { q: 'What is the warranty on invisible grills?', a: 'We provide a 15-year product warranty on our SS316 invisible grill wire and a 5-year installation warranty. All warranties are documented and signed.' },
    ],
  },
  {
    category: 'UPVC Windows',
    items: [
      { q: 'What does UPVC stand for and why is it better than aluminium?', a: 'UPVC stands for Unplasticized Polyvinyl Chloride. It\'s superior to aluminium for residential use because it provides much better thermal insulation (multi-chamber profile traps air), better sound reduction (30-38 dB), zero corrosion, zero maintenance, and a longer service life of 40+ years.' },
      { q: 'Do UPVC windows reduce noise significantly?', a: 'Yes, significantly. Our standard UPVC windows achieve an STC rating of 30-32 dB noise reduction. With double glazing (IGU), this increases to 35-38 dB. For homes near busy roads, railway lines, or industrial areas, UPVC windows make a dramatic difference.' },
      { q: 'What is the warranty on UPVC windows?', a: 'We provide a 10-year warranty on UPVC profiles and hardware. Glass carries a 5-year warranty against de-lamination and seal failure for double-glazed units.' },
    ],
  },
  {
    category: 'Glass Railing',
    items: [
      { q: 'Is toughened glass railing safe for balconies?', a: 'Yes. Toughened (tempered) glass is 5 times stronger than regular glass. Our glass panels are IS 2553 certified and tested to withstand the wind loads and fall-protection forces specified in the National Building Code. Even if glass does break (rare), it shatters into small blunt pieces rather than sharp shards.' },
      { q: 'What thickness of glass is used in railings?', a: 'Standard balcony railings use 12mm fully toughened glass. For higher floors (above 6th floor), higher wind zones, or longer spans, we recommend 15mm or 19mm. All glass thickness recommendations are based on engineering calculations.' },
      { q: 'Can glass railings be installed on curved balconies?', a: 'Yes. We can fabricate curved glass panels up to a minimum radius of 1500mm using heat-bent glass technology. Custom shaped panels for uniquely designed balconies are our specialty.' },
    ],
  },
  {
    category: 'General Questions',
    items: [
      { q: 'Do you provide free site visits?', a: 'Yes! We provide completely free site visits with no obligation to purchase. Our expert will visit your location, take accurate measurements, understand your requirements, and provide a detailed written quotation — all at zero cost.' },
      { q: 'How long does installation usually take?', a: 'Most standard installations (invisible grill for 1-2 balconies, mosquito mesh, bird net) are completed in a single day. Larger projects like full-home UPVC windows or glass railings for an entire building may take 3-7 days depending on the scope.' },
      { q: 'What cities do you serve in Maharashtra?', a: 'We serve 50+ cities across Maharashtra including Pune, Mumbai, Thane, Navi Mumbai, Nagpur, Nashik, Aurangabad, Kolhapur, Solapur, Sangli, Satara, Ratnagiri, and many more. Contact us to confirm service availability in your city.' },
      { q: 'Are your products BIS certified?', a: 'Yes. All our products use BIS-certified materials. Our UPVC profiles comply with IS 14856, toughened glass with IS 2553, and stainless steel wire with relevant IS standards. We provide material certifications on request.' },
      { q: 'Do you offer EMI or finance options?', a: 'We offer flexible payment terms for larger projects. For residential customers, we typically work on a 50% advance and 50% on completion model. Discuss payment terms with our team during the quotation stage.' },
    ],
  },
]

export const FAQPage = () => {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (key: string) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap(cat => cat.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))),
  }

  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0)

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions — Invisible Grill, UPVC Windows & More | Ameya Sales"
        description="Find answers to common questions about invisible grills, UPVC windows, glass railings, safety nets, and more. Complete FAQ from Ameya Sales Corporation."
        schema={faqSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'FAQs', url: '/faq' }]}
      />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" /> {faqs.flatMap(c => c.items).length}+ Questions Answered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span></h1>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search FAQs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">No matching questions found. <button onClick={() => setSearch('')} className="text-blue-600 hover:underline">Clear search</button></p>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map(cat => (
                <div key={cat.category}>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-blue-700 rounded-full" />
                    {cat.category}
                  </h2>
                  <div className="space-y-3">
                    {cat.items.map((item, i) => {
                      const key = `${cat.category}-${i}`
                      const isOpen = openItems.has(key)
                      return (
                        <motion.div key={key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                          <button onClick={() => toggle(key)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                            {item.q}
                            <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 ml-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-slate-100">
                                <p className="px-5 py-4 text-slate-600 text-sm leading-relaxed">{item.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <div className="mt-16 bg-blue-700 rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6">Our experts are available to answer any specific questions about your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                <Phone className="w-4 h-4" /> Call {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I have a question about your products.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
