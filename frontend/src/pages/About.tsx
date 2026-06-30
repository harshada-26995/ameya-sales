import { motion } from 'framer-motion'
import { Shield, Award, Users, CheckCircle, Target, Eye, Heart, Phone, MessageCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/StatCard'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'

const team = [
  {
    name: 'Ameya Joshi',
    role: 'Founder & CEO',
    experience: '20+ years in architectural safety',
    bio: 'Pioneered invisible grill technology adoption in Maharashtra. Certified structural safety consultant with expertise in European safety standards.',
  },
  {
    name: 'Rahul Patil',
    role: 'Technical Director',
    experience: '15+ years in fabrication',
    bio: 'Leads our in-house fabrication team. Expert in aluminium and stainless steel systems with BIS certification.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Design',
    experience: '12+ years in interior design',
    bio: 'Bridges architecture and safety — ensuring every installation enhances the aesthetic value of the space.',
  },
  {
    name: 'Vikram Nair',
    role: 'Operations Head',
    experience: '10+ years in project management',
    bio: 'Ensures every project is delivered on time, within budget, and to the highest quality standards.',
  },
]

const milestones = [
  { year: '2010', title: 'Foundation', desc: 'Ameya Sales Corporation established in Pune with a vision to provide affordable safety solutions.' },
  { year: '2013', title: 'First 500 Projects', desc: 'Completed 500 installations across Pune and surrounding areas. Expanded team to 25 members.' },
  { year: '2016', title: 'UPVC & Glass Division', desc: 'Launched UPVC windows and glass railing divisions. Partnered with European profile manufacturers.' },
  { year: '2018', title: 'Maharashtra Expansion', desc: 'Expanded services to Nashik, Nagpur, and Aurangabad. Crossed 2,000 successful projects.' },
  { year: '2021', title: 'Digital Transformation', desc: 'Launched online quote system, virtual site visits, and dealer management platform.' },
  { year: '2024', title: '5,000+ Projects', desc: 'Milestone of 5,000+ completed projects. Serving 50+ cities with a 200-member team across Maharashtra.' },
]

const values = [
  { icon: Shield, title: 'Safety First', desc: 'Every product and installation is engineered with structural safety as the non-negotiable foundation.' },
  { icon: Award, title: 'Quality Without Compromise', desc: 'We use only certified materials and proven installation techniques validated by structural engineers.' },
  { icon: Heart, title: 'Customer Delight', desc: 'We measure success by the satisfaction and peace of mind we deliver to every customer.' },
  { icon: Target, title: 'Innovation Always', desc: 'Continuously adopting new technologies and techniques to deliver better solutions at better value.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear pricing, honest timelines, and complete documentation — no hidden costs, ever.' },
  { icon: Users, title: 'Community Responsibility', desc: 'Committed to safe construction practices, fair employment, and positive community impact.' },
]

const certifications = [
  'ISO 9001:2015 Quality Management System',
  'BIS Certified Products (Bureau of Indian Standards)',
  'IS 2553 Toughened Glass Certified',
  'IS 14856 UPVC Window Profiles',
  'SS316 Marine Grade Certification',
  'EN 13200-3 Safety Standards Compliance',
  'OSHA Safety Training Certified Team',
  'GST Registered: 27XXXXX0000X1ZX',
]

export const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Ameya Sales Corporation | 14+ Years of Safety Excellence in Maharashtra"
        description="Learn about Ameya Sales Corporation — Maharashtra's most trusted architectural safety solutions company with 14+ years of experience, 5,000+ projects, and 8,000+ happy customers. ISO 9001:2015 certified."
        keywords={['about ameya sales corporation', 'invisible grill company pune', 'safety solutions company maharashtra', 'UPVC window manufacturer pune']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,...')]" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Established 2010 · ISO 9001:2015 Certified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Ameya Sales
                </span>{' '}
                Corporation
              </h1>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                For over 14 years, Ameya Sales Corporation has been Maharashtra's most trusted name in architectural safety and glass solutions. From our humble beginnings in Pune to serving 50+ cities across Maharashtra, our commitment has never wavered: deliver premium quality, professional installation, and lasting peace of mind to every customer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                  <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="grid grid-cols-2 gap-4">
              {[
                { value: 14, suffix: '+', label: 'Years Experience' },
                { value: 5000, suffix: '+', label: 'Projects Done' },
                { value: 8000, suffix: '+', label: 'Happy Customers' },
                { value: 50, suffix: '+', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
                  <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.1} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To make every Indian home and commercial space safer, more beautiful, and more functional through premium architectural safety solutions — delivered with integrity, excellence, and customer-first values at every step of the process.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 rounded-3xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-blue-100/80 leading-relaxed">
                To be India's most trusted and preferred architectural safety company — recognized for our uncompromising quality, technological innovation, and the trust we build with every installation. We envision a Maharashtra where every home is protected by world-class safety solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="Our Story" title="14 Years of " highlight="Building Trust" subtitle="From a single workshop in Pune to Maharashtra's most trusted safety solutions company." center />
          <div className="mt-12 space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{m.year.slice(2)}</div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-blue-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-semibold text-blue-600 mb-1">{m.year}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-slate-500">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Core Values" title="What Drives " highlight="Everything We Do" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="luxury-card p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Our Team" title="Meet the People Behind " highlight="Our Excellence" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="luxury-card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-blue-600 mb-1">{member.role}</div>
                <div className="text-xs text-slate-400 mb-3">{member.experience}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Certifications & Compliance" title="Quality You Can " highlight="Trust & Verify" center />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Work With Maharashtra's Most Trusted Safety Company</h2>
              <p className="text-blue-100 mb-6">Get a free site visit and consultation from our certified experts. No obligation, completely free.</p>
              <div className="flex gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 px-5 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <LeadForm title="Get Free Consultation" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
