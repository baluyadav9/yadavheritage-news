import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { events } from '@/data/events'
import { CalendarDays, MapPin, Clock, Users, Phone } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function Events() {
  const upcoming = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Events"
        title="Gather & Celebrate"
        subtitle="From grand religious festivals to community meetings and business expos — here's what's happening."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container max-w-5xl mx-auto">
          <div className="space-y-6">
            {upcoming.map((event, i) => {
              const dateObj = new Date(event.date)
              const month = dateObj.toLocaleString('en-IN', { month: 'long' })
              const day = dateObj.getDate()
              const year = dateObj.getFullYear()

              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="card-heritage overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-56 h-44 sm:h-auto bg-cream-300 dark:bg-ink-700 overflow-hidden flex-shrink-0">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 capitalize">
                          {event.category}
                        </span>
                        {event.isFree && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-peacock-100 dark:bg-peacock-900/30 text-peacock-700 dark:text-peacock-300">
                            Free Entry
                          </span>
                        )}
                        {event.isFeatured && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-300">
                            Featured
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl font-bold text-ink-800 dark:text-cream-100 mb-2">
                        {event.title}
                      </h2>
                      <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ink-400 dark:text-cream-500">
                        <div className="flex items-start gap-2">
                          <CalendarDays size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <span>{month} {day}, {year}{event.endDate ? ` – ${formatDate(event.endDate)}` : ''}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                          <span>{event.venue}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center gap-2">
                            <Users size={14} className="text-gold-500 flex-shrink-0" />
                            <span>Capacity: {event.capacity.toLocaleString('en-IN')}</span>
                          </div>
                        )}
                      </div>

                      {event.organizer && (
                        <div className="mt-3 pt-3 border-t border-cream-400/40 dark:border-ink-700 text-xs text-ink-400 dark:text-cream-600">
                          Organised by: <span className="font-semibold">{event.organizer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

