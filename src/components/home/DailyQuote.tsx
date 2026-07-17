import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { getDailyQuote } from '@/data/quotes'

export function DailyQuote() {
  const quote = getDailyQuote()

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #051630 0%, #0A1830 40%, #081620 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-peacock-400 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-8 bg-gold-500/50" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-500">
              Today's Wisdom
            </span>
            <span className="h-px w-8 bg-gold-500/50" />
          </div>

          {/* Card */}
          <div className="relative glass rounded-2xl p-8 sm:p-12 text-center border border-white/10">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-gold-500/20">
              <Quote size={48} />
            </div>
            <div className="absolute bottom-6 right-8 text-gold-500/20 rotate-180">
              <Quote size={48} />
            </div>

            {/* Sanskrit verse */}
            {quote.sanskrit && (
              <p className="font-display text-lg sm:text-xl text-gold-400 mb-4 italic">
                {quote.sanskrit}
              </p>
            )}

            {/* English text */}
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-cream-100 leading-relaxed font-medium mb-6">
              "{quote.text}"
            </blockquote>

            {/* Source */}
            <footer className="flex flex-col items-center gap-1">
              <div className="w-8 h-px bg-gold-500/60 mb-3" />
              <cite className="not-italic text-gold-400 font-semibold text-sm tracking-wide">
                {quote.source}
              </cite>
              {quote.chapter && (
                <span className="text-cream-500 text-xs">
                  Chapter {quote.chapter}, Verse {quote.verse}
                </span>
              )}
            </footer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
