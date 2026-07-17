import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, MapPin, Clock, ChevronRight, Newspaper } from 'lucide-react'
import { events } from '@/data/events'
import { newsItems } from '@/data/news'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { formatDate } from '@/lib/utils'

const categoryColors: Record<string, { bg: string; text: string; bar: string }> = {
  religious: { bg: 'rgba(194,128,16,0.12)', text: '#C28010', bar: '#C28010' },
  cultural:  { bg: 'rgba(10,107,84,0.12)',  text: '#0A6B54', bar: '#0A6B54' },
  social:    { bg: 'rgba(30,61,143,0.12)',  text: '#1E3D8F', bar: '#1E3D8F' },
  business:  { bg: 'rgba(192,56,120,0.12)', text: '#C03878', bar: '#C03878' },
  education: { bg: 'rgba(224,96,16,0.12)',  text: '#E06010', bar: '#E06010' },
  sports:    { bg: 'rgba(122,58,143,0.12)', text: '#7A3A8F', bar: '#7A3A8F' },
  community: { bg: 'rgba(10,107,84,0.12)',  text: '#0A6B54', bar: '#0A6B54' },
  culture:   { bg: 'rgba(194,128,16,0.12)', text: '#C28010', bar: '#C28010' },
  politics:  { bg: 'rgba(30,61,143,0.12)',  text: '#1E3D8F', bar: '#1E3D8F' },
}

function timeAgo(dateStr: string) {
  const d = new Date(dateStr)
  const now = new Date()
  const days = Math.floor((now.getTime() - d.getTime()) / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days} days ago`
  if (days < 365) return `${Math.floor(days / 30)} months ago`
  return `${Math.floor(days / 365)} years ago`
}

const featuredEvent = events.find(e => e.isFeatured) ?? events[0]
const nextEvents = events.filter(e => e.isFeatured && e.id !== featuredEvent.id).slice(0, 3)
const feedNews = newsItems.slice(0, 5)

const activityCards = [
  { type: 'news', item: newsItems[0] },
  { type: 'news', item: newsItems[1] },
  { type: 'event', item: events[1] },
  { type: 'news', item: newsItems[5] },
]

export function ActivityFeed() {
  return (
    <section className="py-20 relative overflow-hidden bg-mandala-dots" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="section-container">
        {/* Section header */}
        <div className="mb-12">
          <SectionTitle
            eyebrow="Community Pulse"
            title="What's Happening"
            subtitle="Stay connected with the latest activities, news, and upcoming events from our community."
            align="center"
          />
        </div>

        {/* ── Main grid: Featured Event + Activity Stream ── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">

          {/* Featured Event — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <FeaturedEventCard event={featuredEvent} />
          </motion.div>

          {/* Activity Stream — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col"
          >
            <ActivityStream items={feedNews} />
          </motion.div>
        </div>

        {/* ── Upcoming events strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={15} style={{ color: 'var(--gold)' }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
                More Upcoming Events
              </span>
            </div>
            <Link to="/events" className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--gold)' }}>
              All Events <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {nextEvents.map((ev, i) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <MiniEventCard event={ev} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Recent Activities grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Newspaper size={15} style={{ color: 'var(--krishna)' }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--krishna)' }}>
                Recent Activities
              </span>
            </div>
            <Link to="/news" className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--krishna)' }}>
              All News <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activityCards.map(({ type, item }, i) => (
              <motion.div
                key={`${type}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {type === 'news'
                  ? <NewsActivityCard item={item as typeof newsItems[0]} />
                  : <EventActivityCard item={item as typeof events[0]} />
                }
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Featured Event Card ──────────────────────────────────── */
function FeaturedEventCard({ event }: { event: typeof events[0] }) {
  const colors = categoryColors[event.category] ?? categoryColors.social

  return (
    <Link
      to="/events"
      className="group relative block rounded-sm overflow-hidden card-heritage h-full"
      style={{ minHeight: '420px' }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(4,12,26,0.15) 0%, rgba(4,12,26,0.55) 45%, rgba(4,12,26,0.92) 100%)',
          }}
        />
      </div>

      {/* Top badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span
          className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm"
          style={{ background: colors.bar, color: '#FFF8EF' }}
        >
          {event.category}
        </span>
        {event.isFree && (
          <span
            className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm"
            style={{ background: 'rgba(10,107,84,0.9)', color: '#FFF8EF' }}
          >
            Free
          </span>
        )}
      </div>

      {/* Gold stripe accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${colors.bar}, transparent)` }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        {/* Label */}
        <p className="text-[9px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(232,160,32,0.65)' }}>
          ★ Featured Event
        </p>

        {/* Title */}
        <h3
          className="font-display font-bold leading-tight mb-3"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#FFF8EF', textShadow: '0 2px 16px rgba(4,12,26,0.6)' }}
        >
          {event.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={12} style={{ color: '#E8A020' }} />
            <span className="text-xs" style={{ color: 'rgba(240,228,200,0.8)' }}>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} style={{ color: '#E8A020' }} />
            <span className="text-xs" style={{ color: 'rgba(240,228,200,0.8)' }}>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} style={{ color: '#E8A020' }} />
            <span className="text-xs" style={{ color: 'rgba(240,228,200,0.8)' }}>{event.venue}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed line-clamp-2 mb-5" style={{ color: 'rgba(240,228,200,0.65)' }}>
          {event.description}
        </p>

        {/* CTA */}
        <div className="flex gap-3">
          <span className="btn-gold text-[10px] py-2.5 px-5 group-hover:-translate-y-0.5 transition-transform">
            {event.registrationRequired ? 'Register Now' : 'Learn More'}
            <ArrowRight size={12} />
          </span>
          {event.organizer && (
            <span className="text-[10px] flex items-center" style={{ color: 'rgba(176,148,96,0.5)' }}>
              by {event.organizer.split('&')[0].trim()}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

/* ─── Activity Stream ──────────────────────────────────────── */
function ActivityStream({ items }: { items: typeof newsItems }) {
  return (
    <div
      className="flex flex-col h-full rounded-sm overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b flex items-center justify-between"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-subtle)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#E06010', boxShadow: '0 0 6px rgba(224,96,16,0.6)' }}
          />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)' }}>
            Live Feed
          </span>
        </div>
        <Link to="/news" className="text-[10px] font-semibold flex items-center gap-0.5" style={{ color: 'var(--gold)' }}>
          View All <ChevronRight size={11} />
        </Link>
      </div>

      {/* Feed items */}
      <div className="flex-1 overflow-y-auto" style={{ borderTop: '1px solid var(--border-soft)' }}>
        {items.map((item, i) => {
          const colors = categoryColors[item.category] ?? categoryColors.community
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
            >
              <Link
                to="/news"
                className="flex gap-3 p-4 transition-colors group"
                style={{ borderBottom: '1px solid var(--border-soft)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-subtle)')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-sm overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: colors.bar }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category + time */}
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {item.category}
                    </span>
                    <span className="text-[9px]" style={{ color: 'var(--text-subtle)' }}>
                      {timeAgo(item.publishedAt)}
                    </span>
                  </div>
                  {/* Title */}
                  <p className="text-xs font-semibold leading-snug line-clamp-2" style={{ color: 'var(--text)' }}>
                    {item.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3.5 border-t" style={{ borderColor: 'var(--border)' }}>
        <Link
          to="/news"
          className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors"
          style={{ color: 'var(--gold)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--saffron)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
        >
          All Community News <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  )
}

/* ─── Mini Event Card ──────────────────────────────────────── */
function MiniEventCard({ event }: { event: typeof events[0] }) {
  const colors = categoryColors[event.category] ?? categoryColors.social

  return (
    <Link
      to="/events"
      className="group flex gap-3 p-3 rounded-sm transition-all hover:-translate-y-0.5"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${colors.bar}`,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 4px 16px -4px ${colors.bar}40`)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-12 h-12 object-cover rounded-sm flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold leading-snug line-clamp-2 mb-1" style={{ color: 'var(--text)' }}>
          {event.title}
        </p>
        <div className="flex items-center gap-1">
          <CalendarDays size={9} style={{ color: colors.bar }} />
          <span className="text-[9px]" style={{ color: 'var(--text-subtle)' }}>{formatDate(event.date)}</span>
        </div>
      </div>
    </Link>
  )
}

/* ─── News Activity Card ───────────────────────────────────── */
function NewsActivityCard({ item }: { item: typeof newsItems[0] }) {
  const colors = categoryColors[item.category] ?? categoryColors.community

  return (
    <Link
      to="/news"
      className="group block rounded-sm overflow-hidden card-heritage"
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,12,26,0.6), transparent)' }} />
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: colors.bar }}
        />
        <span
          className="absolute bottom-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm"
          style={{ background: colors.bg, color: colors.text, backdropFilter: 'blur(8px)' }}
        >
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs font-semibold leading-snug line-clamp-2 mb-2 group-hover:underline" style={{ color: 'var(--text)' }}>
          {item.title}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[9px]" style={{ color: 'var(--text-subtle)' }}>
            {timeAgo(item.publishedAt)}
          </span>
          <span className="text-[9px] flex items-center gap-0.5" style={{ color: 'var(--gold)' }}>
            Read <ChevronRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Event Activity Card ──────────────────────────────────── */
function EventActivityCard({ item }: { item: typeof events[0] }) {
  const colors = categoryColors[item.category] ?? categoryColors.social

  return (
    <Link
      to="/events"
      className="group block rounded-sm overflow-hidden card-heritage"
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,12,26,0.6), transparent)' }} />
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: colors.bar }}
        />
        <span
          className="absolute bottom-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm"
          style={{ background: colors.bg, color: colors.text, backdropFilter: 'blur(8px)' }}
        >
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs font-semibold leading-snug line-clamp-2 mb-2 group-hover:underline" style={{ color: 'var(--text)' }}>
          {item.title}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CalendarDays size={9} style={{ color: colors.bar }} />
            <span className="text-[9px]" style={{ color: 'var(--text-subtle)' }}>{formatDate(item.date)}</span>
          </div>
          <span className="text-[9px] flex items-center gap-0.5" style={{ color: 'var(--gold)' }}>
            Details <ChevronRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  )
}
