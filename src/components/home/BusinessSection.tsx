import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Users } from 'lucide-react'
import { getFeaturedBusinesses } from '@/data/businesses'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Badge } from '@/components/ui/badge'

const categoryIcon: Record<string, string> = {
  dairy: '🐄',
  it: '💻',
  construction: '🏗️',
  hospitality: '🍽️',
  agriculture: '🌾',
  textiles: '🧵',
  healthcare: '🏥',
  finance: '📈',
  education: '📚',
  retail: '🛍️',
}

export function BusinessSection() {
  const businesses = getFeaturedBusinesses()

  return (
    <section className="py-20 bg-temple-weave relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionTitle
            eyebrow="Business Directory"
            title="Enterprise of Our Community"
            subtitle="Trusted businesses built by Yadav entrepreneurs, serving Hyderabad and beyond."
            align="left"
          />
          <Link
            to="/business-directory"
            className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold text-sm hover:underline shrink-0"
          >
            Full Directory <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group card-heritage overflow-hidden"
            >
              <Link to="/business-directory" className="block">
                {/* Image */}
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-cream-300 to-cream-400 dark:from-ink-700 dark:to-ink-800">
                  <img
                    src={biz.imageUrl}
                    alt={biz.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Category icon */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 dark:bg-ink-800/90 flex items-center justify-center text-lg shadow">
                    {categoryIcon[biz.category] ?? '🏢'}
                  </div>

                  {biz.verified && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-peacock-500 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">✓</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-sm text-ink-800 dark:text-cream-100 leading-snug mb-0.5 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {biz.name}
                  </h3>
                  <p className="text-ink-400 dark:text-cream-500 text-xs mb-2">{biz.owner}</p>
                  <p className="text-ink-500 dark:text-cream-500 text-xs line-clamp-2 leading-relaxed">
                    {biz.tagline}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-ink-400 dark:text-cream-600">
                      <Users size={11} />
                      {biz.employees ?? 'N/A'}
                    </div>
                    <Badge variant="peacock" className="capitalize text-[9px]">
                      {biz.category}
                    </Badge>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/business-directory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dashed border-gold-500/50 text-gold-600 dark:text-gold-400 text-sm font-semibold hover:bg-gold-500/5 transition-colors"
          >
            <ExternalLink size={15} />
            Register Your Business
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
