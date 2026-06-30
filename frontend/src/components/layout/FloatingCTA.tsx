import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/config/site'

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello! I'm interested in your products. Please share details.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </span>
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:${SITE_CONFIG.phone}`}
        aria-label="Call us"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
