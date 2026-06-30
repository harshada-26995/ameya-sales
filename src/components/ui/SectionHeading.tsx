import { motion } from 'framer-motion'

interface SectionHeadingProps {
  tag?: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export const SectionHeading = ({
  tag,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) => {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center mx-auto' : ''} max-w-3xl`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-2 ${light ? 'text-blue-300' : 'text-blue-600'} font-semibold text-sm uppercase tracking-widest mb-3`}>
          <span className={`w-8 h-0.5 ${light ? 'bg-blue-300' : 'bg-blue-600'}`} />
          {tag}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {highlight ? (
          <>
            {parts[0]}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              {highlight}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
