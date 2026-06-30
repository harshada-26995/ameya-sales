import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Shield, CheckCircle } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact Ameya Sales Corporation | Free Site Visit & Quote"
        description={`Contact Ameya Sales Corporation for invisible grills, UPVC windows, glass railings, and more in Maharashtra. Call ${SITE_CONFIG.phoneDisplay} or WhatsApp for a free site visit and quotation.`}
        keywords={['contact ameya sales corporation', 'invisible grill contact pune', 'free site visit pune', 'UPVC windows contact']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> Free Site Visit · No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ameya Sales</span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Get in touch for a free site visit, product consultation, or quotation. Our team responds within 1 hour during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                primary: SITE_CONFIG.phoneDisplay,
                secondary: 'Mon–Fri 9AM–7PM, Sat 9AM–5PM',
                href: `tel:${SITE_CONFIG.phone}`,
                color: 'blue',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                primary: '+91 98765 43210',
                secondary: 'Available 24/7 for messages',
                href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
                color: 'green',
              },
              {
                icon: Mail,
                title: 'Email Us',
                primary: SITE_CONFIG.email,
                secondary: 'Response within 4 business hours',
                href: `mailto:${SITE_CONFIG.email}`,
                color: 'purple',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                primary: 'Shivaji Nagar, Pune',
                secondary: SITE_CONFIG.address.full,
                href: SITE_CONFIG.socialLinks.googleMaps,
                color: 'orange',
              },
            ].map((method, i) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card p-6 text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${method.color === 'blue' ? 'bg-blue-100 text-blue-700' : method.color === 'green' ? 'bg-green-100 text-green-700' : method.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'} group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{method.title}</h3>
                <div className="font-semibold text-slate-800 text-sm mb-1">{method.primary}</div>
                <div className="text-xs text-slate-400">{method.secondary}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 mb-8">Fill the form and our expert will call you back within 1 hour to discuss your requirements and schedule a free site visit.</p>
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <LeadForm title="Get Free Quote & Site Visit" subtitle="No obligation. Completely free." />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Office Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Registered Office</div>
                      <div className="text-slate-600 text-sm">{SITE_CONFIG.address.full}</div>
                      <a href={SITE_CONFIG.socialLinks.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline mt-1 inline-block">
                        Get Directions on Google Maps →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">Business Hours</div>
                      <div className="space-y-1 text-sm text-slate-600">
                        <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium">{SITE_CONFIG.businessHours.weekdays}</span></div>
                        <div className="flex justify-between"><span>Saturday</span><span className="font-medium">{SITE_CONFIG.businessHours.saturday}</span></div>
                        <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-red-500">{SITE_CONFIG.businessHours.sunday}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why contact us */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">What Happens After You Contact Us?</h3>
                <div className="space-y-3">
                  {[
                    'Our expert calls you within 1 hour of receiving your enquiry',
                    'We schedule a free site visit at your convenience',
                    'On-site inspection, accurate measurement, and product discussion',
                    'Receive a detailed, transparent written quotation within 24 hours',
                    'Approve quote and schedule installation at your preferred date',
                    'Professional installation with same-day handover in most cases',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-sm text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Verified & Certified</h3>
                <div className="space-y-2">
                  {['ISO 9001:2015 Quality Management', 'BIS Certified Products', 'GST Registered: ' + SITE_CONFIG.gst, 'MSME Registered'].map(cert => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-slate-100 h-80 flex items-center justify-center border-t border-slate-200">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-3" />
          <p className="text-slate-600 font-medium">Google Maps Embed</p>
          <p className="text-slate-400 text-sm">{SITE_CONFIG.address.full}</p>
          <a href={SITE_CONFIG.socialLinks.googleMaps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-blue-700 font-semibold text-sm hover:underline">
            Open in Google Maps →
          </a>
        </div>
      </section>
    </>
  )
}
