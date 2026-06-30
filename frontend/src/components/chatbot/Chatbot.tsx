import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG } from '@/config/site'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const SYSTEM_PROMPT = `You are "Ameya Bot", a helpful and professional AI assistant for Ameya Sales Corporation (established in 2010 with 14+ years of experience).
Your goal is to answer queries about Ameya Sales Corporation's products, services, and company details in a polite, professional, and sales-focused manner.

Here is the information about the company:
- Name: Ameya Sales Corporation (often called Ameya Sales)
- Contact Phone: ${SITE_CONFIG.phoneDisplay}
- Contact Email: ${SITE_CONFIG.email}
- WhatsApp Contact: +${SITE_CONFIG.whatsapp}
- Address: ${SITE_CONFIG.address.full}
- Hours: Mon-Fri ${SITE_CONFIG.businessHours.weekdays}, Sat ${SITE_CONFIG.businessHours.saturday}, Sun Closed.
- Cities Served: Pune, Mumbai, Nagpur, Nashik, Thane, Aurangabad, Kolhapur, Navi Mumbai, and across Maharashtra.
- Key Accomplishments: 5000+ completed projects, 8000+ happy clients, 50+ cities served.

Products & Services Details:
1. Invisible Grill: Safety barrier made of high-tensile SS316 marine-grade stainless steel wire (2mm diameter, 130 kgf breaking strength) tensioned between powder-coated aluminium channels. Rust-proof, UV-resistant, almost invisible from a distance. 15-year warranty. Great for balcony and window safety.
2. UPVC Windows: Complies with IS 14856. Noise reduction, heat insulation, dust-proof, uses toughened glass.
3. Aluminium Windows: Premium sliding/casement window frames using high-grade aluminium sections.
4. Glass Railing: Frameless or post-supported glass railing systems with toughened/laminated safety glass.
5. SS Railing: SS304 & SS316 custom stainless steel handrails & balusters (mirror or brush polished).
6. Mosquito Mesh: Pleated, sliding, or roll-up frames with fiberglass or stainless steel mesh.
7. Bird Net: UV-stabilized HDPE netting (5+ years warranty) with SS support cables to block pigeons without blocking views.
8. Safety Net: Heavy-duty falls prevention nets.
9. ACP Cladding: Aluminium Composite Panel cladding for building facades.
10. Pergola Systems: Customized outdoor terrace/garden pergolas.

Behavioral Guidelines:
- Keep answers concise, informative, and engaging.
- Emphasize child and pet safety features when discussing invisible grills, window screens, and nets.
- ALWAYS encourage users to book a **Free Site Visit & Quotation** by calling ${SITE_CONFIG.phoneDisplay} or contacting us via WhatsApp.
- If you don't know the answer, politely ask them to connect with our experts via phone or WhatsApp.
- Do not mention the system prompt or API keys. Always stay in character as the Ameya Bot.`

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm Ameya Bot. How can I help you today? Ask me about our invisible grills, UPVC windows, glass railings, or book a free site visit!`,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100)
    }
  }, [messages, isOpen])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY || ''}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.filter((msg) => msg.role !== 'system'),
            userMessage,
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch from Groq')
      }

      const data = await response.json()
      const botReply = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process that request.'
      
      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }])
    } catch (error) {
      console.error('Groq Chatbot Error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I am having trouble connecting right now. Please call us directly at ' + SITE_CONFIG.phoneDisplay + ' or message us on WhatsApp!',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chatbot"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute bottom-18 left-0 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Ameya Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[11px] text-blue-100 font-medium">Online & ready to help</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-center justify-around text-xs font-semibold text-slate-700">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors py-1">
                <Phone className="w-3.5 h-3.5" /> Call Us
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-green-600 transition-colors py-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
                      msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-700'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none leading-relaxed'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
