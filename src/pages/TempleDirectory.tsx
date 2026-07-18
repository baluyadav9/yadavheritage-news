import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { temples } from '@/data/temples'
import { MapPin, Clock, Phone as PhoneIcon } from 'lucide-react'

export default function TempleDirectory() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Temple Directory"
        title="Sacred Spaces"
        subtitle="Krishna temples across Hyderabad that form the spiritual heart of our community."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Hyderabad"
            title="Krishna Mandirs in Our City"
            subtitle="Places of worship where the community gathers in devotion, celebration, and service."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temples.map((temple, i) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-heritage overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-cream-300 dark:bg-ink-700">
                  <img
                    src={temple.imageUrl}
                    alt={temple.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-display text-xl font-bold text-white">{temple.name}</h3>
                    <p className="text-gold-300 text-xs">{temple.deity}</p>
                  </div>
                  {temple.established && (
                    <div className="absolute top-3 right-3 bg-gold-500/90 text-ink-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Est. {temple.established}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed mb-4">
                    {temple.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-ink-400 dark:text-cream-500">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      <span>{temple.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div>Morning: {temple.timings.morning}</div>
                        <div>Evening: {temple.timings.evening}</div>
                        {temple.timings.special && (
                          <div className="text-saffron-600 dark:text-saffron-400 text-xs mt-0.5">{temple.timings.special}</div>
                        )}
                      </div>
                    </div>
                    {temple.phone && (
                      <div className="flex items-center gap-2">
                        <PhoneIcon size={14} className="text-gold-500 flex-shrink-0" />
                        <a href={`tel:${temple.phone}`} className="hover:text-gold-600 dark:hover:text-gold-400">{temple.phone}</a>
                      </div>
                    )}
                  </div>

                  {/* Special events */}
                  {temple.specialEvents && temple.specialEvents.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-cream-400/40 dark:border-ink-700">
                      <p className="text-xs font-semibold text-ink-500 dark:text-cream-500 mb-2">Special Events:</p>
                      <div className="flex flex-wrap gap-1">
                        {temple.specialEvents.map((ev) => (
                          <span key={ev} className="text-[10px] px-2 py-0.5 rounded-full bg-saffron-100 dark:bg-saffron-900/20 text-saffron-700 dark:text-saffron-400">
                            {ev}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

