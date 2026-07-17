import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden pt-32 pb-24',
        className
      )}
      style={{ background: 'linear-gradient(175deg, #0A1A3C 0%, #071228 55%, #0D1E1A 100%)' }}
    >
      {/* ── Temple arch silhouette ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1200 600"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[900px] opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          {/* Main gopuram arch */}
          <path
            d="M480,580 L480,260 Q480,120 600,80 Q720,120 720,260 L720,580 Z"
            fill="#C28010"
          />
          {/* Arch tiered steps (shikhara) */}
          <path d="M510,580 L510,280 Q510,150 600,110 Q690,150 690,280 L690,580 Z" fill="#C28010" />
          <path d="M535,580 L535,295 Q535,175 600,138 Q665,175 665,295 L665,580 Z" fill="#C28010" />
          <path d="M555,580 L555,308 Q555,198 600,163 Q645,198 645,308 L645,580 Z" fill="#C28010" />
          {/* Finial/kalasha at top */}
          <ellipse cx="600" cy="72" rx="18" ry="28" fill="#C28010" />
          <ellipse cx="600" cy="48" rx="10" ry="14" fill="#C28010" />
          <circle cx="600" cy="36" r="8" fill="#C28010" />
          {/* Left pillar */}
          <rect x="390" y="340" width="48" height="240" rx="4" fill="#C28010" />
          <path d="M390,340 Q414,300 438,340 Z" fill="#C28010" />
          {/* Right pillar */}
          <rect x="762" y="340" width="48" height="240" rx="4" fill="#C28010" />
          <path d="M762,340 Q786,300 810,340 Z" fill="#C28010" />
          {/* Horizontal architrave */}
          <rect x="380" y="560" width="440" height="20" rx="2" fill="#C28010" />
          <rect x="370" y="550" width="460" height="12" rx="2" fill="#C28010" />
        </svg>

        {/* Spinning mandala top-right */}
        <svg
          viewBox="0 0 400 400"
          className="absolute -right-20 -top-20 w-80 h-80 opacity-[0.06] mandala-rotate"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform="translate(200,200)">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <ellipse cx="0" cy="-160" rx="18" ry="50" fill="#C28010" />
              </g>
            ))}
            {[0,45,90,135,180,225,270,315].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <ellipse cx="0" cy="-100" rx="12" ry="32" fill="#1A9478" />
              </g>
            ))}
            <circle r="40" fill="none" stroke="#C28010" strokeWidth="1.5" />
            <circle r="20" fill="#C28010" opacity="0.6" />
          </g>
        </svg>

        {/* Faint left mandala */}
        <svg
          viewBox="0 0 300 300"
          className="absolute -left-16 bottom-0 w-64 h-64 opacity-[0.05] mandala-rotate-reverse"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform="translate(150,150)">
            {[0,40,80,120,160,200,240,280,320].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <ellipse cx="0" cy="-110" rx="14" ry="38" fill="#E06010" />
              </g>
            ))}
            <circle r="30" fill="none" stroke="#E06010" strokeWidth="1" />
            <circle r="12" fill="#E06010" opacity="0.5" />
          </g>
        </svg>

        {/* Gold gradient veil */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(194,128,16,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Decorative top stripe ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #C28010, #E06010, #C28010, transparent)' }}
      />

      {/* ── Content ── */}
      <div className="section-container relative z-10 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4 block"
            style={{ color: '#E8A020' }}
          >
            ✦ {eyebrow} ✦
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
          style={{ color: '#FFF8EF' }}
        >
          {title}
        </motion.h1>

        {/* Lotus divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <span className="h-px w-10 opacity-50" style={{ background: '#C28010' }} />
          <svg width="48" height="18" viewBox="0 0 48 18" fill="#C28010" aria-hidden="true">
            <ellipse cx="24" cy="4"  rx="3" ry="5.5" opacity="0.9" />
            <ellipse cx="24" cy="14" rx="3" ry="5.5" opacity="0.9" transform="rotate(180 24 9)" />
            <ellipse cx="19" cy="9" rx="5.5" ry="3" opacity="0.9" />
            <ellipse cx="29" cy="9" rx="5.5" ry="3" opacity="0.9" />
            <ellipse cx="20" cy="5"  rx="4" ry="2.2" opacity="0.6" transform="rotate(-45 20 5)" />
            <ellipse cx="28" cy="5"  rx="4" ry="2.2" opacity="0.6" transform="rotate(45 28 5)" />
            <ellipse cx="20" cy="13" rx="4" ry="2.2" opacity="0.6" transform="rotate(45 20 13)" />
            <ellipse cx="28" cy="13" rx="4" ry="2.2" opacity="0.6" transform="rotate(-45 28 13)" />
            <circle cx="24" cy="9" r="2.8" />
          </svg>
          <span className="h-px w-10 opacity-50" style={{ background: '#C28010' }} />
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240,228,200,0.75)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom lotus border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(194,128,16,0.5), transparent)' }}
      />
    </section>
  )
}
