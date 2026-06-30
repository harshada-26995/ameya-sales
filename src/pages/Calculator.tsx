import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, MessageCircle, Phone, RefreshCw, CheckCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

const PRICING = {
  'invisible-grill': { base: 180, installation: 30, gstRate: 0.18, unit: 'sq.ft.' },
  'upvc-windows': { base: 650, installation: 80, gstRate: 0.18, unit: 'sq.ft.' },
  'aluminium-windows': { base: 550, installation: 70, gstRate: 0.18, unit: 'sq.ft.' },
  'glass-railing': { base: 1200, installation: 150, gstRate: 0.18, unit: 'rft' },
  'ss-railing': { base: 900, installation: 120, gstRate: 0.18, unit: 'rft' },
  'mosquito-mesh': { base: 150, installation: 25, gstRate: 0.18, unit: 'sq.ft.' },
  'bird-net': { base: 35, installation: 10, gstRate: 0.18, unit: 'sq.ft.' },
  'safety-net': { base: 45, installation: 12, gstRate: 0.18, unit: 'sq.ft.' },
}

const CITY_FACTORS: Record<string, number> = {
  pune: 1.0, mumbai: 1.15, thane: 1.1, 'navi-mumbai': 1.1,
  nagpur: 0.95, nashik: 0.95, aurangabad: 0.93, kolhapur: 0.92,
  default: 0.9,
}

const FLOOR_FACTORS: Record<string, number> = {
  '0': 1.0, '1': 1.0, '2': 1.02, '3': 1.03, '4': 1.05, '5': 1.07,
  '6': 1.09, '7': 1.11, '8': 1.13, '9': 1.15, '10+': 1.20,
}

export const CalculatorPage = () => {
  const [form, setForm] = useState({
    product: 'invisible-grill',
    width: '',
    height: '',
    qty: '1',
    floor: '0',
    city: 'pune',
    includeInstallation: true,
  })
  const [result, setResult] = useState<null | {
    area: number; materialCost: number; installCost: number; subtotal: number; gst: number; total: number; perUnit: number
  }>(null)

  const calculate = () => {
    const pricing = PRICING[form.product as keyof typeof PRICING]
    if (!pricing || !form.width || !form.height) return

    const area = parseFloat(form.width) * parseFloat(form.height) * parseInt(form.qty)
    const cityF = CITY_FACTORS[form.city] || CITY_FACTORS.default
    const floorF = FLOOR_FACTORS[form.floor] || 1.0

    const materialCost = Math.round(area * pricing.base * cityF)
    const installCost = form.includeInstallation ? Math.round(area * pricing.installation * cityF * floorF) : 0
    const subtotal = materialCost + installCost
    const gst = Math.round(subtotal * pricing.gstRate)
    const total = subtotal + gst
    const perUnit = area > 0 ? Math.round(total / area) : 0

    setResult({ area: Math.round(area * 10) / 10, materialCost, installCost, subtotal, gst, total, perUnit })
  }

  const reset = () => { setResult(null); setForm(f => ({ ...f, width: '', height: '' })) }

  const whatsappText = result
    ? `Hello! I used your calculator. I need ${form.product.replace(/-/g, ' ')} for ${result.area} sq.ft. Estimated cost: ₹${result.total.toLocaleString('en-IN')}. Please confirm and schedule a free site visit.`
    : ''

  return (
    <>
      <SEOHead
        title="Free Quote Calculator — Invisible Grill, UPVC Windows, Glass Railing Price Estimator"
        description="Instantly estimate the cost of invisible grills, UPVC windows, glass railings, and more with our free online calculator. Get an accurate quote in seconds. No registration required."
        keywords={['invisible grill price calculator', 'UPVC window cost estimator', 'glass railing quote calculator']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Quote Calculator', url: '/calculator' }]}
      />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" /> Instant Price Estimation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free Quote <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-blue-100/80 text-lg">Get an instant cost estimate for your safety solution project. Enter your dimensions and get a ballpark figure in seconds.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="luxury-card p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-700" /> Enter Your Requirements
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Product Type</label>
                  <select value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option value="invisible-grill">Invisible Grill</option>
                    <option value="upvc-windows">UPVC Windows</option>
                    <option value="aluminium-windows">Aluminium Windows</option>
                    <option value="glass-railing">Glass Railing</option>
                    <option value="ss-railing">SS Railing</option>
                    <option value="mosquito-mesh">Mosquito Mesh</option>
                    <option value="bird-net">Bird Net</option>
                    <option value="safety-net">Safety Net</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Width (feet)</label>
                    <input type="number" min="1" placeholder="e.g. 10" value={form.width} onChange={e => setForm(f => ({ ...f, width: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Height (feet)</label>
                    <input type="number" min="1" placeholder="e.g. 8" value={form.height} onChange={e => setForm(f => ({ ...f, height: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Quantity (units)</label>
                    <input type="number" min="1" value={form.qty} onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Floor Number</label>
                    <select value={form.floor} onChange={e => setForm(f => ({ ...f, floor: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                      {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map(n => <option key={n} value={n}>{n === '0' ? 'Ground Floor' : `${n}${n === '10+' ? '' : 'th'} Floor`}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">City</label>
                  <select value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white">
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="thane">Thane</option>
                    <option value="navi-mumbai">Navi Mumbai</option>
                    <option value="nagpur">Nagpur</option>
                    <option value="nashik">Nashik</option>
                    <option value="aurangabad">Aurangabad</option>
                    <option value="kolhapur">Kolhapur</option>
                    <option value="default">Other City</option>
                  </select>
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.includeInstallation} onChange={e => setForm(f => ({ ...f, includeInstallation: e.target.checked }))} className="w-4 h-4 text-blue-700 rounded focus:ring-blue-500" />
                  <span className="text-sm text-slate-700 font-medium">Include Professional Installation Cost</span>
                </label>

                <div className="flex gap-3">
                  <button onClick={calculate} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg">
                    <Calculator className="w-4 h-4" /> Calculate Now
                  </button>
                  <button onClick={reset} className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors" title="Reset">
                    <RefreshCw className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Result */}
            <div>
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="luxury-card p-8 h-full flex flex-col items-center justify-center text-center">
                    <Calculator className="w-16 h-16 text-blue-200 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Enter Your Dimensions</h3>
                    <p className="text-slate-500 text-sm">Fill in the form and click Calculate to get an instant cost estimate for your project.</p>
                    <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
                      {['Instant estimation', 'All prices include GST', 'Free site visit for exact quote'].map(item => (
                        <div key={item} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />{item}</div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="luxury-card p-8 space-y-6">
                    <div className="text-center pb-6 border-b border-slate-100">
                      <div className="text-sm text-slate-500 mb-1">Estimated Total Cost</div>
                      <div className="text-4xl font-bold text-blue-700">₹{result.total.toLocaleString('en-IN')}</div>
                      <div className="text-sm text-slate-400 mt-1">for {result.area} sq.ft. (incl. 18% GST)</div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: 'Total Area', value: `${result.area} sq.ft.` },
                        { label: 'Material Cost', value: `₹${result.materialCost.toLocaleString('en-IN')}` },
                        { label: 'Installation Cost', value: `₹${result.installCost.toLocaleString('en-IN')}` },
                        { label: 'Subtotal (ex-GST)', value: `₹${result.subtotal.toLocaleString('en-IN')}` },
                        { label: 'GST @ 18%', value: `₹${result.gst.toLocaleString('en-IN')}` },
                        { label: 'Rate per sq.ft.', value: `₹${result.perUnit}/sq.ft.` },
                      ].map(row => (
                        <div key={row.label} className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">{row.label}</span>
                          <span className="font-semibold text-slate-900">{row.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-xs text-yellow-800">
                      ⚠️ This is an approximate estimate only. Actual prices may vary based on site conditions, exact specifications, and local factors. Get a free site visit for an accurate quotation.
                    </div>

                    <div className="flex flex-col gap-3">
                      <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all text-sm">
                        <Phone className="w-4 h-4" /> Call for Exact Quote
                      </a>
                      <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all text-sm">
                        <MessageCircle className="w-4 h-4" /> Send Estimate on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">About This Calculator</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              This calculator provides approximate cost estimates based on average market prices for {new Date().getFullYear()}. Actual prices depend on material grade, specific product model, site conditions, floor height, accessibility, and current market rates. All estimates are inclusive of 18% GST. For an accurate, binding quotation — <strong>book a free site visit</strong> with our certified experts who will measure your site precisely and provide a detailed written quotation with no hidden charges.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
