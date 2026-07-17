import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react'
import { getUpcomingEvents } from '@/data/events'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { formatDateShort } from '@/lib/utils'

const categoryStyle: Record<string, string> = {
  cultural: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  religious: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
  business: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  education: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  social: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  sports: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
}

export function EventsSection() {
  const events = getUpcomingEvents(5)

  return (
    <section className="py-20 bg-temple-weave relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionTitle
            eyebrow="Upcoming Events"
            title="Gather. Celebrate. Connect."
            align="left"
          />
          <Link
            to="/events"
            className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold text-sm hover:underline shrink-0"
          >
            All Events <ArrowRight size={15} />
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => {
            const dateObj = new Date(event.date)
            const month = dateObj.toLocaleString('en-IN', { month: 'short' }).toUpperCase()
            const day = dateObj.getDate()

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to="/events"
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 rounded-xl border border-cream-400/60 dark:border-ink-600 hover:border-gold-500/60 dark:hover:border-gold-500/40 hover:shadow-gold transition-all duration-300 bg-white dark:bg-ink-900"
                >
                  {/* Date block */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:w-16 sm:text-center flex-shrink-0">
                    <div className="w-14 sm:w-16 bg-gold-500/10 dark:bg-gold-500/15 rounded-xl px-2 py-2 text-center">
                      <div className="text-gold-600 dark:text-gold-400 text-[10px] font-bold tracking-widest uppercase">
                        {month}
                      </div>
                      <div className="font-display text-2xl font-bold text-ink-800 dark:text-cream-100 leading-none">
                        {day}
                      </div>
                    </div>
                    {event.isFree && (
                      <span className="sm:mt-2 text-[10px] font-bold tracking-wide text-peacock-600 dark:text-peacock-400 uppercase">
                        Free
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${categoryStyle[event.category] ?? categoryStyle.social}`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base text-ink-800 dark:text-cream-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-2 leading-snug">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400 dark:text-cream-500">
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {event.time.split('(')[0].trim()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {event.venue}, {event.address.split(',')[1]?.trim()}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center">
                    <ArrowRight
                      size={18}
                      className="text-cream-400 dark:text-ink-500 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
