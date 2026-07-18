import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { galleryItems } from '@/data/gallery'
import { X, ZoomIn } from 'lucide-react'

const categories = ['all', 'festival', 'culture', 'community', 'heritage']

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null)

  const filtered = active === 'all' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Photo Gallery"
        title="Moments We Cherish"
        subtitle="Visual memories of our community's celebrations, achievements, and everyday life."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                  active === c
                    ? 'bg-gold-500 text-ink-900'
                    : 'bg-white dark:bg-ink-800 text-ink-500 dark:text-cream-400 border border-cream-400 dark:border-ink-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/50 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs font-medium line-clamp-1">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[90vh] flex flex-col gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.imageUrl}
                alt={lightbox.title}
                className="max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center">
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-white/60 text-sm">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

