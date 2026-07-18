import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { communityLeaders } from '@/data/leaders'
import { Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react'
import { getInitials } from '@/lib/utils'

export default function Leaders() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Community Leadership"
        title="Our Leaders"
        subtitle="The elected representatives of the Hyderabad Yadav Mahasabha — serving with dedication and integrity."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="2025–2029 Executive"
            title="Current Leadership"
            subtitle="Elected by delegates from 24 mandals, they represent the aspirations of our entire community."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityLeaders.map((leader, i) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-heritage overflow-hidden"
              >
                {/* Header bar */}
                <div className="h-2 bg-gradient-to-r from-gold-500 to-peacock-500" />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        src={leader.imageUrl}
                        alt={leader.name}
                        className="w-16 h-16 rounded-xl object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.style.display = 'none'
                        }}
                      />
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-500/20 to-peacock-500/20 flex items-center justify-center absolute inset-0">
                        <span className="font-display text-lg font-bold text-gold-500">
                          {getInitials(leader.name)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-gold-600 dark:text-gold-400 text-sm font-semibold mt-0.5">
                        {leader.designation}
                      </p>
                      <p className="text-ink-400 dark:text-cream-500 text-xs">
                        {leader.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {leader.bio}
                  </p>

                  {leader.term && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-peacock-600 dark:text-peacock-400">
                        Term:
                      </span>
                      <span className="text-xs text-ink-500 dark:text-cream-500">{leader.term}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5 pt-3 border-t border-cream-400/40 dark:border-ink-700">
                    {leader.phone && (
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center gap-2 text-xs text-ink-400 dark:text-cream-500 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        <PhoneIcon size={12} /> {leader.phone}
                      </a>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center gap-2 text-xs text-ink-400 dark:text-cream-500 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        <MailIcon size={12} /> {leader.email}
                      </a>
                    )}
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

