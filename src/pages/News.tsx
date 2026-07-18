import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { newsItems } from '@/data/news'
import { Badge } from '@/components/ui/badge'
import { Clock, User, Tag } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const categoryColors: Record<string, 'gold' | 'peacock' | 'saffron'> = {
  community: 'peacock', culture: 'gold', business: 'saffron',
  education: 'peacock', politics: 'saffron', sports: 'gold',
}

const categories = ['All', 'community', 'culture', 'business', 'education', 'politics', 'sports']

export default function News() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? newsItems : newsItems.filter((n) => n.category === category)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Community News"
        title="Latest from Our World"
        subtitle="News, initiatives, and stories that matter to the Hyderabad Yadav community."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                  category === c
                    ? 'bg-gold-500 text-ink-900'
                    : 'bg-white dark:bg-ink-800 text-ink-500 dark:text-cream-400 border border-cream-400 dark:border-ink-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group card-heritage overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden bg-cream-300 dark:bg-ink-700">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge variant={categoryColors[item.category] ?? 'gold'} className="absolute top-3 left-3 capitalize">
                    {item.category}
                  </Badge>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-ink-400 dark:text-cream-600 mb-3">
                    <span className="flex items-center gap-1"><Clock size={11}/>{formatDate(item.publishedAt)}</span>
                    <span className="flex items-center gap-1"><User size={11}/>{item.author}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-snug mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-cream-300 dark:bg-ink-700 text-ink-400 dark:text-cream-500 flex items-center gap-1">
                        <Tag size={9}/> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

