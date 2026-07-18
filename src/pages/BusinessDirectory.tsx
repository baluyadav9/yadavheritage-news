import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { businesses } from '@/data/businesses'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Phone, Mail, Users, CheckCircle, Building2 } from 'lucide-react'

const categoryIcon: Record<string, string> = {
  dairy: '🐄', it: '💻', construction: '🏗️', hospitality: '🍽️',
  agriculture: '🌾', textiles: '🧵', healthcare: '🏥', finance: '📈',
  education: '📚', retail: '🛍️',
}

const categories = ['All', 'dairy', 'it', 'construction', 'hospitality', 'agriculture', 'textiles', 'healthcare', 'finance']

export default function BusinessDirectory() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = businesses.filter((b) => {
    const matchSearch = search === '' || b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.tagline.toLowerCase().includes(search.toLowerCase()) || b.owner.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || b.category === category
    return matchSearch && matchCat
  })

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Business Directory"
        title="Yadav Business Network"
        subtitle="Discover and support businesses owned by members of our community. Every purchase strengthens our collective economy."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <Input
                placeholder="Search businesses, owners, or services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    category === c
                      ? 'bg-gold-500 text-ink-900'
                      : 'bg-white dark:bg-ink-800 text-ink-500 dark:text-cream-400 border border-cream-400 dark:border-ink-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-ink-400 dark:text-cream-500 mb-6">
            Showing {filtered.length} of {businesses.length} businesses
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((biz, i) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card-heritage overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-cream-300 dark:bg-ink-700">
                  <img
                    src={biz.imageUrl}
                    alt={biz.name}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-xl shadow">
                    {categoryIcon[biz.category] ?? '🏢'}
                  </div>
                  {biz.verified && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-peacock-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <CheckCircle size={10} /> Verified
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-semibold text-sm">{biz.name}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-ink-400 dark:text-cream-500 text-xs">{biz.owner}</p>
                    <Badge variant="peacock" className="capitalize text-[9px]">{biz.category}</Badge>
                  </div>
                  <p className="text-gold-600 dark:text-gold-400 text-sm font-semibold italic mb-2">{biz.tagline}</p>
                  <p className="text-ink-500 dark:text-cream-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {biz.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-ink-400 dark:text-cream-600 mb-3">
                    {biz.employees && (
                      <span className="flex items-center gap-1"><Users size={11}/> {biz.employees}</span>
                    )}
                    <span>Est. {biz.founded}</span>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-3 border-t border-cream-400/40 dark:border-ink-700">
                    {biz.phone && (
                      <a href={`tel:${biz.phone}`} className="flex items-center gap-2 text-xs text-ink-400 dark:text-cream-500 hover:text-gold-600 dark:hover:text-gold-400">
                        <Phone size={11}/> {biz.phone}
                      </a>
                    )}
                    {biz.email && (
                      <a href={`mailto:${biz.email}`} className="flex items-center gap-2 text-xs text-ink-400 dark:text-cream-500 hover:text-gold-600 dark:hover:text-gold-400">
                        <Mail size={11}/> {biz.email}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Building2 size={40} className="text-ink-300 dark:text-ink-600 mx-auto mb-3" />
              <p className="text-ink-400 dark:text-cream-500">No businesses found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

