import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  icon?: React.ReactNode
  delay?: number
}

export const StatCard = ({ value, suffix = '', prefix = '', label, icon, delay = 0 }: StatCardProps) => {
  const { ref, inView } = useInView()
  const count = useCounter(value, 2000, 0, inView)

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      {icon && (
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700">
            {icon}
          </div>
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-slate-500 font-medium">{label}</div>
    </motion.div>
  )
}
