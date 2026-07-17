import { motion } from 'framer-motion'
import { Users, Building2, MapPin, Calendar, GraduationCap, Star } from 'lucide-react'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'

const stats = [
  {
    icon: Users,
    value: 250000,
    suffix: '+',
    label: 'Community Members',
    description: 'Registered across Telangana',
  },
  {
    icon: Building2,
    value: 500,
    suffix: '+',
    label: 'Registered Businesses',
    description: 'Across all sectors',
  },
  {
    icon: MapPin,
    value: 24,
    suffix: '',
    label: 'Mandals Covered',
    description: 'Across Greater Hyderabad',
  },
  {
    icon: Calendar,
    value: 38,
    suffix: '+',
    label: 'Years of Service',
    description: 'Building community since 1987',
  },
  {
    icon: GraduationCap,
    value: 5000,
    suffix: '+',
    label: 'Scholarships Awarded',
    description: 'Students supported in their dreams',
  },
  {
    icon: Star,
    value: 50,
    suffix: '+',
    label: 'Annual Events',
    description: 'Cultural, social & religious',
  },
]

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-mandala-dots" style={{ background: 'linear-gradient(160deg, #0A1A3C 0%, #071228 100%)' }}>
      {/* Mandala dots overlay */}
      <div className="absolute inset-0 bg-mandala-dots pointer-events-none opacity-100" />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(194,128,16,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.35em] uppercase block mb-3" style={{ color: '#E8A020' }}
          >
            Community in Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-cream-100"
          >
            Our Strength, Our Story
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-6 transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(194,128,16,0.2)',
                borderRadius: '2px',
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Icon size={20} className="text-gold-400" />
              </div>

              {/* Counter */}
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400 tabular mb-1">
                <AnimatedCounter target={value} suffix={suffix} duration={1800} />
              </div>

              {/* Label */}
              <div className="text-cream-200 font-semibold text-sm mb-1">{label}</div>
              <div className="text-cream-600 text-xs">{description}</div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r from-gold-500 to-peacock-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
