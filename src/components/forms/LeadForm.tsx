import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, Phone, User, MapPin, Package, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { products } from '@/data/products'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  city: z.string().min(2, 'Please enter your city'),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().max(500).optional(),
})

type FormValues = z.infer<typeof schema>

interface LeadFormProps {
  title?: string
  subtitle?: string
  productPreset?: string
  dark?: boolean
  compact?: boolean
  onSuccess?: () => void
}

export const LeadForm = ({
  title = 'Get Free Quote',
  subtitle = 'Fill the form below and our expert will call you within 1 hour.',
  productPreset,
  dark = false,
  compact = false,
  onSuccess,
}: LeadFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: productPreset || '' },
  })

  const onSubmit = async (data: FormValues) => {
    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Lead submitted:', data)
    onSuccess?.()
    reset()
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
    dark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
      : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
  }`

  const errorClass = 'text-red-400 text-xs mt-1'

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-8 text-center ${dark ? 'bg-white/10' : 'bg-green-50 border border-green-100'}`}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
          Thank You! We'll Call You Soon.
        </h3>
        <p className={`text-sm mb-6 ${dark ? 'text-white/70' : 'text-slate-500'}`}>
          Our expert will contact you within 1 hour to discuss your requirements and schedule a free site visit.
        </p>
        <button
          onClick={() => reset()}
          className={`text-sm font-semibold ${dark ? 'text-blue-300' : 'text-blue-600'} hover:underline`}
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <div className={compact ? '' : 'space-y-2'}>
      {!compact && (
        <div className="mb-6">
          <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
          <p className={`text-sm ${dark ? 'text-white/70' : 'text-slate-500'}`}>{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                {...register('name')}
                type="text"
                placeholder="Your Full Name *"
                className={`${inputClass} pl-10`}
                autoComplete="name"
              />
            </div>
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                {...register('phone')}
                type="tel"
                placeholder="Mobile Number * (10 digits)"
                className={`${inputClass} pl-10`}
                autoComplete="tel"
                maxLength={10}
              />
            </div>
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>

          {/* City */}
          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                {...register('city')}
                type="text"
                placeholder="Your City *"
                className={`${inputClass} pl-10`}
                autoComplete="address-level2"
              />
            </div>
            {errors.city && <p className={errorClass}>{errors.city.message}</p>}
          </div>

          {/* Product */}
          <div>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                {...register('product')}
                className={`${inputClass} pl-10 appearance-none cursor-pointer`}
              >
                <option value="">Select Product *</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
                <option value="multiple">Multiple Products</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            {errors.product && <p className={errorClass}>{errors.product.message}</p>}
          </div>
        </div>

        {/* Email (optional) */}
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address (optional)"
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Message */}
        {!compact && (
          <div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
              <textarea
                {...register('message')}
                placeholder="Tell us more about your requirements (optional)"
                rows={3}
                className={`${inputClass} pl-10 resize-none`}
              />
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          iconPosition="right"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Quote Now'}
        </Button>

        <p className={`text-xs text-center ${dark ? 'text-white/50' : 'text-slate-400'}`}>
          🔒 Your information is 100% secure. We never share your data.
        </p>
      </form>
    </div>
  )
}
