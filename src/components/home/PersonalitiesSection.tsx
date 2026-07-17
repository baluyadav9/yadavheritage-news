import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { getFeaturedPersonalities } from '@/data/personalities'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { getInitials } from '@/lib/utils'

export function PersonalitiesSection() {
  const people = getFeaturedPersonalities().slice(0, 4)

  return (
    <section className="py-20 bg-mandala-dots relative" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionTitle
            eyebrow="Great Personalities"
            title="Faces of Our Legacy"
            subtitle="Members who have brought honour to our community through their life's work."
            align="left"
          />
          <Link
            to="/personalities"
            className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold text-sm hover:underline shrink-0"
          >
            All Personalities <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((person, i) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group card-heritage overflow-hidden"
            >
              <Link to="/personalities">
                {/* Portrait */}
                <div className="relative h-52 bg-gradient-to-br from-ink-800 to-peacock-900 overflow-hidden">
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                    loading="lazy"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.style.display = 'none'
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0">
                    <span className="font-display text-4xl font-bold text-gold-400">
                      {getInitials(person.name)}
                    </span>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />

                  {/* Field badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 capitalize">
                    {person.field}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-tight mb-0.5 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-gold-600 dark:text-gold-400 text-xs font-semibold mb-3 leading-snug">
                    {person.title}
                  </p>
                  <p className="text-ink-500 dark:text-cream-500 text-xs leading-relaxed line-clamp-3">
                    {person.description}
                  </p>

                  {/* Quote teaser */}
                  {person.quote && (
                    <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Quote size={12} className="text-gold-500 flex-shrink-0 mt-0.5" />
                      <p className="text-ink-400 dark:text-cream-600 text-xs italic line-clamp-2">
                        {person.quote}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
