import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, MessageCircle, Menu, X, ChevronDown,
  Shield, Home, Grid3X3, FolderOpen, Star, FileText, Mail
} from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'

const products = [
  { name: 'Invisible Grill', href: '/products/invisible-grill' },
  { name: 'UPVC Windows', href: '/products/upvc-windows' },
  { name: 'Aluminium Windows', href: '/products/aluminium-windows' },
  { name: 'Sliding Windows', href: '/products/sliding-windows' },
  { name: 'Glass Railing', href: '/products/glass-railing' },
  { name: 'SS Railing', href: '/products/ss-railing' },
  { name: 'Mosquito Mesh', href: '/products/mosquito-mesh' },
  { name: 'Bird Net', href: '/products/bird-net' },
  { name: 'Safety Net', href: '/products/safety-net' },
  { name: 'ACP Cladding', href: '/products/acp-cladding' },
  { name: 'Pergola Systems', href: '/products/pergola' },
  { name: 'Shower Partition', href: '/products/shower-partition' },
  { name: 'Office Glass Partition', href: '/products/office-glass-partition' },
  { name: 'Glass Canopy', href: '/products/glass-canopy' },
]

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Shield },
  { label: 'Products', href: '/products', icon: Grid3X3, hasDropdown: true },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
  { label: 'Testimonials', href: '/testimonials', icon: Star },
  { label: 'Blog', href: '/blog', icon: FileText },
  { label: 'Contact', href: '/contact', icon: Mail },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              Maharashtra's Most Trusted Safety Solution Provider
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              {SITE_CONFIG.businessHours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello, I'd like to know more about your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full text-white transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900 leading-tight text-lg">
                  Ameya Sales
                </div>
                <div className="text-xs text-slate-500 leading-none">
                  Corporation
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductDropdown(true)}
                    onMouseLeave={() => setProductDropdown(false)}
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${productDropdown ? 'rotate-180' : ''}`}
                      />
                    </NavLink>

                    <AnimatePresence>
                      {productDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                        >
                          <div className="p-2">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
                              All Products
                            </div>
                            <div className="grid grid-cols-1 gap-0.5">
                              {products.map((p) => (
                                <Link
                                  key={p.href}
                                  to={p.href}
                                  className="px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-100 px-3 pb-2">
                              <Link
                                to="/products"
                                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                              >
                                View All Products →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-xl text-sm font-semibold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-3 flex gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-blue-700 text-blue-700 rounded-xl text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl text-sm font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
