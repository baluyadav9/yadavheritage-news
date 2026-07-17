import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-saffron-700 via-gold-600 to-gold-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 120}, 200)`}>
              {Array.from({ length: 8 }).map((_, j) => (
                <ellipse key={j} cx="0" cy="0" rx="20" ry="70"
                  transform={`rotate(${j * 45})`}
                  fill="white" />
              ))}
            </g>
          ))}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-gold-100/80 block mb-4">
              Be Part of Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Together, We Are<br />
              <span className="text-gold-100">Stronger</span>
            </h2>
            <p className="text-gold-100/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 2.5 lakh members who call this portal home. Share your story,
              find opportunities, celebrate our culture, and build the future of
              our community — together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base bg-ink-900 text-gold-400 hover:bg-ink-800 transition-all hover:-translate-y-1 shadow-ink-lg"
              >
                <Users size={18} />
                Join the Community
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/bhagavad-gita"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base border-2 border-white/40 text-white hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <BookOpen size={18} />
                Read the Gita
              </Link>
            </div>

            {/* Divider with Sanskrit */}
            <div className="mt-14 pt-10 border-t border-white/20">
              <p className="font-display text-2xl text-gold-100/60 italic">
                "वसुधैव कुटुम्बकम्"
              </p>
              <p className="text-white/50 text-sm mt-1 tracking-wider">
                The World is One Family
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
