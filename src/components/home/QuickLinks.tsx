import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const links = [
  {
    title: 'Our Story',
    sub: 'About Us',
    to: '/history',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=500&fit=crop&auto=format&q=80',
    accent: '#C28010',
  },
  {
    title: 'Our Goals',
    sub: 'Vision & Mission',
    to: '/about',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop&auto=format&q=80',
    accent: '#0A6B54',
  },
  {
    title: 'Our Activities',
    sub: 'Events & Programs',
    to: '/events',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=500&fit=crop&auto=format&q=80',
    accent: '#1E3D8F',
  },
  {
    title: 'Our Culture',
    sub: 'Heritage & Traditions',
    to: '/culture',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop&auto=format&q=80',
    accent: '#E06010',
  },
]

export function QuickLinks() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {links.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <Link
              to={link.to}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Background image */}
              <img
                src={link.image}
                alt={link.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transform: 'scale(1)' }}
                loading="lazy"
              />
              {/* Default overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(4,12,26,0.82) 0%, rgba(4,12,26,0.35) 55%, rgba(4,12,26,0.1) 100%)' }}
              />
              {/* Hover colour wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(to top, ${link.accent}CC 0%, ${link.accent}44 50%, transparent 100%)` }}
              />
              {/* Accent top stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-400"
                style={{ background: link.accent }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.25em] mb-1 transition-colors duration-300"
                  style={{ color: 'rgba(232,160,32,0.7)' }}
                >
                  {link.sub}
                </p>
                <div className="flex items-end justify-between gap-2">
                  <h3
                    className="font-display text-lg sm:text-xl font-bold leading-tight"
                    style={{ color: '#FFF8EF', textShadow: '0 2px 8px rgba(4,12,26,0.6)' }}
                  >
                    {link.title}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: '#FFF8EF' }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
