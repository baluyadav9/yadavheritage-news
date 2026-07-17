import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { achievements } from '@/data/achievements'
import { Trophy } from 'lucide-react'

const significanceColor: Record<string, string> = {
  landmark: 'border-l-gold-500',
  major: 'border-l-peacock-500',
  notable: 'border-l-saffron-500',
}

const categoryColors: Record<string, string> = {
  education: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  politics: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
  sports: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  arts: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  business: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  social: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
  awards: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
}

export default function Achievements() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Community Achievements"
        title="Pride of Our People"
        subtitle="Milestones reached, records broken, and lives changed — a chronicle of what our community has accomplished."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Milestones"
            title="What We've Built Together"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`card-heritage p-6 border-l-4 ${significanceColor[item.significance]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Trophy size={18} className="text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-tight">
                        {item.title}
                      </h3>
                      <span className="font-display text-2xl font-bold text-gold-500/60 tabular flex-shrink-0">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      {item.personName && (
                        <span className="text-xs text-ink-400 dark:text-cream-600">
                          — {item.personName}
                        </span>
                      )}
                      {item.significance === 'landmark' && (
                        <span className="text-[10px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
                          ★ Landmark
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

