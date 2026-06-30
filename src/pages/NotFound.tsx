import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Phone, MessageCircle, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

export const NotFoundPage = () => (
  <>
    <SEOHead title="404 — Page Not Found" description="The page you're looking for doesn't exist." noIndex />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
        <div className="text-8xl font-black text-blue-700/30 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-blue-100/70 mb-8">The page you're looking for doesn't exist or has been moved. Let us help you find what you need.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all">
            <Phone className="w-4 h-4" /> Call Us
          </a>
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
        <Link to="/products" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Browse Our Products
        </Link>
      </motion.div>
    </div>
  </>
)
