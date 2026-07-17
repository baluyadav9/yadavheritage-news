import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { newsItems } from '@/data/news'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'

const categoryColors: Record<string, 'gold' | 'peacock' | 'saffron'> = {
  community: 'peacock',
  culture: 'gold',
  business: 'saffron',
  education: 'peacock',
  politics: 'saffron',
  sports: 'gold',
}

export function NewsSection() {
  const featured = newsItems.filter((n) => n.featured).slice(0, 1)[0]
  const rest = newsItems.filter((n) => !n.featured || n.id !== featured.id).slice(0, 4)

  return (
    <section className="py-20 bg-mandala-dots relative" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="section-container">
        <SectionTitle
          eyebrow="Latest News"
          title="From the Community"
          subtitle="Stay informed about the initiatives, events, and achievements shaping our community today."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Featured story — large card */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 group card-heritage overflow-hidden"
          >
            <Link to={`/news`} className="block">
              <div className="relative h-56 sm:h-72 overflow-hidden bg-cream-400">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <Badge
                  variant={categoryColors[featured.category] ?? 'gold'}
                  className="absolute top-4 left-4 capitalize"
                >
                  {featured.category}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-ink-400 dark:text-cream-500 text-xs mb-3">
                  <Clock size={12} />
                  {formatDate(featured.publishedAt)}
                  <span className="mx-1">·</span>
                  {featured.author}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-800 dark:text-cream-100 leading-tight mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-gold-600 dark:text-gold-400 text-sm font-semibold">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.article>

          {/* Smaller news items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group card-heritage p-4 flex gap-4"
              >
                <Link to="/news" className="flex gap-4 w-full">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-cream-400">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Badge variant={categoryColors[item.category] ?? 'gold'} className="capitalize text-[10px] py-0">
                        {item.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-sm text-ink-700 dark:text-cream-200 leading-snug line-clamp-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-ink-400 dark:text-cream-600 text-xs mt-1 block">
                      {formatDate(item.publishedAt)}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}

            {/* View all */}
            <Link
              to="/news"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-gold-500/50 text-gold-600 dark:text-gold-400 text-sm font-semibold hover:bg-gold-500/5 transition-colors"
            >
              View All News <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
