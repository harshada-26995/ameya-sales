import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Award, Users, CheckCircle, ArrowRight, Star,
  Phone, MessageCircle, ChevronRight, Zap, Clock, ThumbsUp,
  Home as HomeIcon, Building2, Factory
} from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/StatCard'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'
import { products } from '@/data/products'
import { testimonials } from '@/data/testimonials'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE_CONFIG.coordinates.lat,
    longitude: SITE_CONFIG.coordinates.lng,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '847',
    bestRating: '5',
  },
  openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-17:00'],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  areaServed: 'Maharashtra, India',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Safety & Glass Solutions',
    itemListElement: products.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: p.name,
        description: p.description,
      },
    })),
  },
}

const customerTypes = [
  { icon: HomeIcon, label: 'Homeowners', desc: 'Apartments, Villas, Bungalows' },
  { icon: Building2, label: 'Builders & Developers', desc: 'Bulk Orders for Projects' },
  { icon: Users, label: 'Architects & Designers', desc: 'Premium Design Solutions' },
  { icon: Factory, label: 'Commercial & Industrial', desc: 'Offices, Hotels, Factories' },
]

const whyChooseUs = [
  {
    icon: Award,
    title: '14+ Years of Excellence',
    desc: 'Established in 2010, we have completed 5,000+ installations with zero safety incidents.',
  },
  {
    icon: Shield,
    title: 'Certified & Warranted',
    desc: 'All products carry manufacturer certification and up to 15-year product warranty.',
  },
  {
    icon: Zap,
    title: 'Quick Installation',
    desc: 'Most installations completed in a single day with zero mess and zero damage.',
  },
  {
    icon: CheckCircle,
    title: 'Free Site Visit',
    desc: 'Our experts visit your site, take accurate measurements, and provide a detailed quote — free.',
  },
  {
    icon: ThumbsUp,
    title: '8,000+ Happy Customers',
    desc: 'Trusted by homeowners, builders, architects, and corporate clients across Maharashtra.',
  },
  {
    icon: Clock,
    title: '24/7 After-Sales Support',
    desc: 'Dedicated customer support and on-call technicians for any post-installation queries.',
  },
]

const processSteps = [
  { step: '01', title: 'Contact Us', desc: 'Call, WhatsApp, or fill the form. Tell us your requirement.' },
  { step: '02', title: 'Free Site Visit', desc: 'Our expert visits your site and takes accurate measurements.' },
  { step: '03', title: 'Get Quotation', desc: 'Receive a detailed, transparent quotation within 24 hours.' },
  { step: '04', title: 'Confirm & Schedule', desc: 'Approve the quote and schedule your installation date.' },
  { step: '05', title: 'Professional Installation', desc: 'Our certified team installs your product with precision.' },
  { step: '06', title: 'Handover & Warranty', desc: 'Final inspection, documentation, and warranty certificate.' },
]

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Invisible Grill, UPVC Windows, Glass Railing Manufacturer in Pune"
        description="Ameya Sales Corporation — Maharashtra's leading supplier of invisible grills, UPVC windows, aluminium windows, glass railings, SS railings, safety nets, and bird nets. Free site visit. Call +91 98765 43210."
        schema={homeSchema}
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                {...fadeUp}
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6"
              >
                <Shield className="w-4 h-4" />
                Maharashtra's #1 Safety Solution Provider
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Premium{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Safety Solutions
                </span>{' '}
                for Your Home & Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-xl"
              >
                Invisible Grills • UPVC Windows • Glass Railings • Safety Nets • Bird Nets • ACP Cladding and 15+ more premium architectural safety solutions across Maharashtra.
              </motion.p>

              {/* USP Bullets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                {[
                  '✓ 14+ Years Experience',
                  '✓ 5,000+ Projects Done',
                  '✓ Free Site Visit',
                  '✓ 15-Year Warranty',
                  '✓ Same-Day Quote',
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call: {SITE_CONFIG.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I need a free quote for your products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-xl text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex -space-x-2">
                  {['P', 'R', 'A', 'S', 'M'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-white/70 text-sm">Rated 4.9/5 by 847+ customers</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <LeadForm
                title="Get Free Quote Today"
                subtitle="Fill the form below. Our expert will call you within 1 hour."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-100" aria-label="Statistics">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard value={14} suffix="+" label="Years of Experience" delay={0} />
            <StatCard value={5000} suffix="+" label="Projects Completed" delay={0.1} />
            <StatCard value={8000} suffix="+" label="Happy Customers" delay={0.2} />
            <StatCard value={50} suffix="+" label="Cities Served" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-label="Our products">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            tag="Our Products"
            title="Premium Safety & Glass "
            highlight="Solutions"
            subtitle="From invisible grills to UPVC windows, glass railings to bird nets — we offer 15+ architectural safety products with guaranteed quality and professional installation."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block luxury-card p-6 h-full"
                >
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-700 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {product.priceRange}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-50" aria-label="Customer types">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            tag="Who We Serve"
            title="Solutions for Every "
            highlight="Customer Type"
            subtitle="Whether you're a homeowner, builder, architect, or corporate client — we have tailored solutions for your specific requirements."
            center
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {customerTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card p-6 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{type.label}</h3>
                <p className="text-sm text-slate-500">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="Why Choose Us"
                title="Maharashtra's Most Trusted "
                highlight="Safety Partner"
                subtitle="For 14+ years, Ameya Sales Corporation has been the preferred choice of homeowners, builders, and corporates across Maharashtra."
              />
              <div className="mt-10 space-y-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-0.5">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Callback</h3>
              <LeadForm compact />
              <div className="mt-6 pt-6 border-t border-blue-100">
                <p className="text-sm text-slate-500 mb-4">Or reach us directly:</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 text-slate-700 font-medium hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-700 font-medium hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    WhatsApp: +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900" aria-label="Our process">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            tag="How It Works"
            title="Simple "
            highlight="6-Step Process"
            subtitle="From your first call to final installation and warranty handover — our process is transparent, professional, and hassle-free."
            center
            light
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700"
              >
                <div className="text-4xl font-black text-blue-800/50 mb-4">{step.step}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-label="Customer testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            tag="Customer Reviews"
            title="What Our "
            highlight="8,000+ Customers"
            subtitle="Say About Us"
            center
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card p-6"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.location} · {t.product}</div>
                  </div>
                  {t.verified && (
                    <div className="ml-auto">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITY SEO ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50" aria-label="Service areas">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            tag="Service Areas"
            title="Invisible Grill Installation Across "
            highlight="Maharashtra"
            subtitle="We provide professional installation services in 50+ cities and towns across Maharashtra."
            center
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Pune', 'Mumbai', 'Thane', 'Navi Mumbai', 'Nagpur', 'Nashik', 'Aurangabad',
              'Kolhapur', 'Solapur', 'Sangli', 'Satara', 'Ratnagiri', 'Jalgaon', 'Ahmednagar',
              'Lonavala', 'Hinjewadi', 'Wakad', 'Baner', 'Kothrud', 'Hadapsar',
            ].map((city) => (
              <Link
                key={city}
                to={`/invisible-grill/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white hover:bg-blue-700 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-700 rounded-full text-sm font-medium transition-all duration-300"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 bg-gradient-to-r from-blue-800 to-blue-600"
        aria-label="Call to action"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Free Site Visit — No Obligation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Make Your Home Safer & More Beautiful?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free site visit and detailed quotation from Maharashtra's most trusted safety solution provider. No hidden charges. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I'd like to book a free site visit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Site Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
