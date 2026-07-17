import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Images } from 'lucide-react'
import { getFeaturedGallery } from '@/data/gallery'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function GalleryPreview() {
  const items = getFeaturedGallery(6)

  return (
    <section className="py-20 bg-ink-900">
      <div className="section-container">
        <SectionTitle
          eyebrow="Photo Gallery"
          title="Moments We Cherish"
          subtitle="Glimpses of the events, celebrations, and milestones that define our community."
          light
          className="mb-12"
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
            >
              <Link to="/gallery">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/60 transition-colors duration-300 flex items-end p-4">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-cream-100 font-semibold text-sm leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    {item.date && (
                      <p className="text-gold-400 text-xs mt-0.5">
                        {new Date(item.date).toLocaleDateString('en-IN', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Category tag */}
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full glass text-cream-200 capitalize opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-cream-200/20 text-cream-300 hover:text-gold-400 hover:border-gold-500/40 text-sm font-semibold transition-all"
          >
            <Images size={16} />
            View Full Gallery
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
