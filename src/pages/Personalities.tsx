import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { personalities } from '@/data/personalities'
import { Badge } from '@/components/ui/badge'
import { Quote, Award } from 'lucide-react'
import { getInitials } from '@/lib/utils'

const fields = ['all', 'politics', 'business', 'arts', 'sports', 'education', 'social', 'spiritual']

export default function Personalities() {
  const [activeField, setActiveField] = useState('all')

  const filtered = activeField === 'all'
    ? personalities
    : personalities.filter((p) => p.field === activeField)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Great Personalities"
        title="Faces of Our Legacy"
        subtitle="Men and women from our community who have distinguished themselves and made us proud."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {fields.map((f) => (
              <button
                key={f}
                onClick={() => setActiveField(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                  activeField === f
                    ? 'bg-gold-500 text-ink-900'
                    : 'bg-white dark:bg-ink-800 text-ink-500 dark:text-cream-400 border border-cream-400/60 dark:border-ink-700 hover:border-gold-500/60'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((person, i) => (
              <motion.article
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="card-heritage overflow-hidden"
              >
                <div className="flex gap-5 p-6">
                  {/* Portrait */}
                  <div className="relative w-24 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-ink-700 to-peacock-900">
                    <img
                      src={person.imageUrl}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0">
                      <span className="font-display text-2xl font-bold text-gold-400">
                        {getInitials(person.name)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-tight">
                        {person.name}
                      </h3>
                      <Badge variant="gold" className="capitalize shrink-0">{person.field}</Badge>
                    </div>
                    <p className="text-gold-600 dark:text-gold-400 text-xs font-semibold mb-2">
                      {person.title}
                    </p>
                    <p className="text-ink-500 dark:text-cream-500 text-xs leading-relaxed line-clamp-3 mb-3">
                      {person.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1">
                      {person.achievements.slice(0, 2).map((a) => (
                        <li key={a} className="flex items-start gap-1.5 text-xs text-ink-400 dark:text-cream-600">
                          <Award size={11} className="text-gold-500 flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quote */}
                {person.quote && (
                  <div className="px-6 pb-5 flex gap-2 border-t border-cream-400/40 dark:border-ink-700 pt-4">
                    <Quote size={12} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-ink-400 dark:text-cream-600 text-xs italic leading-relaxed">
                      {person.quote}
                    </p>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

