import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { historyMilestones } from '@/data/index'

export default function Timeline() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Hyderabad Yadav Timeline"
        title="Our Journey in Hyderabad"
        subtitle="Tracing the Yadav community's presence, growth, and contributions to Hyderabad across centuries."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container max-w-4xl mx-auto">
          <div className="space-y-6">
            {historyMilestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 group"
              >
                {/* Year column */}
                <div className="flex-shrink-0 w-28 text-right">
                  <span className="font-display text-xl font-bold text-gold-500 group-hover:text-gold-400 transition-colors">
                    {m.year}
                  </span>
                </div>

                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  {i < historyMilestones.length - 1 && (
                    <div className="w-0.5 flex-1 mt-1 bg-cream-400 dark:bg-ink-700" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="card-heritage p-5">
                    <h3 className="font-display text-xl font-bold text-ink-800 dark:text-cream-100 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed">
                      {m.description}
                    </p>
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

