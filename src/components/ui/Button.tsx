import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl border border-transparent',
  secondary: 'bg-white hover:bg-slate-50 text-blue-700 border-2 border-blue-700',
  outline: 'bg-transparent hover:bg-blue-50 text-blue-700 border-2 border-blue-700',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 border border-transparent',
  whatsapp: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl border border-transparent',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg border border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2',
  xl: 'px-10 py-5 text-lg rounded-2xl gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, icon, iconPosition = 'left', fullWidth = false, children, disabled, className = '', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

    return (
      <button
        ref={ref}
        className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          iconPosition === 'left' && icon && <span className="shrink-0">{icon}</span>
        )}
        {children}
        {!loading && iconPosition === 'right' && icon && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
