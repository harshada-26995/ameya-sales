import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'

const productLinks = [
  { name: 'Invisible Grill', href: '/products/invisible-grill' },
  { name: 'UPVC Windows', href: '/products/upvc-windows' },
  { name: 'Aluminium Windows', href: '/products/aluminium-windows' },
  { name: 'Glass Railing', href: '/products/glass-railing' },
  { name: 'SS Railing', href: '/products/ss-railing' },
  { name: 'Mosquito Mesh', href: '/products/mosquito-mesh' },
  { name: 'Bird Net', href: '/products/bird-net' },
  { name: 'Safety Net', href: '/products/safety-net' },
  { name: 'ACP Cladding', href: '/products/acp-cladding' },
  { name: 'Pergola Systems', href: '/products/pergola' },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Career', href: '/career' },
  { name: 'Dealer Registration', href: '/dealer-registration' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Get Free Quote', href: '/contact#quote' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Cookies Policy', href: '/cookies-policy' },
  { name: 'Sitemap', href: '/sitemap' },
]

const cities = [
  { name: 'Pune', href: '/invisible-grill/pune' },
  { name: 'Mumbai', href: '/invisible-grill/mumbai' },
  { name: 'Nagpur', href: '/invisible-grill/nagpur' },
  { name: 'Nashik', href: '/invisible-grill/nashik' },
  { name: 'Thane', href: '/invisible-grill/thane' },
  { name: 'Aurangabad', href: '/invisible-grill/aurangabad' },
  { name: 'Kolhapur', href: '/invisible-grill/kolhapur' },
  { name: 'Navi Mumbai', href: '/invisible-grill/navi-mumbai' },
]

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Get a Free Site Visit & Quotation
              </h2>
              <p className="text-blue-100">
                Our expert team visits your site, takes measurements, and provides a detailed quotation — completely free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I'd like to book a free site visit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">Ameya Sales Corporation</div>
                <div className="text-xs text-slate-400">Premium Architectural Safety Solutions</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Maharashtra's leading manufacturer and installer of invisible grills, UPVC windows, glass railings, safety nets, and premium architectural solutions. Serving 8,000+ happy customers since {SITE_CONFIG.established}.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-slate-800 group-hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-slate-800 group-hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div>Mon–Fri: {SITE_CONFIG.businessHours.weekdays}</div>
                  <div>Sat: {SITE_CONFIG.businessHours.saturday}</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'Facebook', href: SITE_CONFIG.socialLinks.facebook, abbr: 'fb' },
                { label: 'Instagram', href: SITE_CONFIG.socialLinks.instagram, abbr: 'ig' },
                { label: 'YouTube', href: SITE_CONFIG.socialLinks.youtube, abbr: 'yt' },
                { label: 'LinkedIn', href: SITE_CONFIG.socialLinks.linkedin, abbr: 'in' },
              ].map(({ href, label, abbr }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-slate-300"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">We Serve</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link to={city.href} className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-xs hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved. GST: {SITE_CONFIG.gst}
          </p>
          <p className="text-xs text-slate-600">
            Designed & Developed for Maximum Performance & SEO
          </p>
        </div>
      </div>
    </footer>
  )
}
