import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

/* Inline lotus ornament — 8-petal bloom with extending lines */
function LotusOrnament({ light }: { light?: boolean }) {
  return (
    <svg
      width="120"
      height="22"
      viewBox="0 0 120 22"
      aria-hidden="true"
      className={cn('flex-shrink-0', light ? 'text-gold-300' : 'text-gold-600 dark:text-gold-400')}
      fill="currentColor"
    >
      {/* Left extending line with fading dots */}
      <line x1="0" y1="11" x2="36" y2="11" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <circle cx="4" cy="11" r="1.5" opacity="0.3" />
      <circle cx="10" cy="11" r="1" opacity="0.2" />

      {/* Left side petal pair */}
      <ellipse cx="43" cy="11" rx="6" ry="3" opacity="0.45" />

      {/* Center 8-petal lotus */}
      <ellipse cx="60" cy="4"  rx="3.5" ry="7" opacity="0.9" />
      <ellipse cx="60" cy="18" rx="3.5" ry="7" opacity="0.9" transform="rotate(180 60 11)" />
      <ellipse cx="53" cy="11" rx="7" ry="3.5" opacity="0.9" />
      <ellipse cx="67" cy="11" rx="7" ry="3.5" opacity="0.9" />
      <ellipse cx="55" cy="6"  rx="5" ry="2.8" opacity="0.65" transform="rotate(-45 55 6)" />
      <ellipse cx="65" cy="6"  rx="5" ry="2.8" opacity="0.65" transform="rotate(45 65 6)" />
      <ellipse cx="55" cy="16" rx="5" ry="2.8" opacity="0.65" transform="rotate(45 55 16)" />
      <ellipse cx="65" cy="16" rx="5" ry="2.8" opacity="0.65" transform="rotate(-45 65 16)" />
      {/* Center circle */}
      <circle cx="60" cy="11" r="3.5" />

      {/* Right side petal pair */}
      <ellipse cx="77" cy="11" rx="6" ry="3" opacity="0.45" />

      {/* Right extending line with fading dots */}
      <line x1="84" y1="11" x2="120" y2="11" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <circle cx="116" cy="11" r="1.5" opacity="0.3" />
      <circle cx="110" cy="11" r="1" opacity="0.2" />
    </svg>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-col gap-3', alignClass, className)}
    >
      {eyebrow && (
        <span
          className={cn(
            'font-body text-[10px] font-bold tracking-[0.35em] uppercase',
            light ? 'text-gold-300' : 'text-gold-600 dark:text-gold-400'
          )}
        >
          ✦ {eyebrow} ✦
        </span>
      )}

      <h2
        className={cn(
          'font-display font-bold text-balance',
          'text-3xl sm:text-4xl lg:text-5xl',
          light
            ? 'text-cream-100'
            : 'text-ink-800 dark:text-cream-200'
        )}
      >
        {title}
      </h2>

      {/* Lotus ornamental divider */}
      <div
        className={cn(
          'flex items-center',
          align === 'center' && 'justify-center',
          align === 'right' && 'justify-end'
        )}
      >
        <LotusOrnament light={light} />
      </div>

      {subtitle && (
        <p
          className={cn(
            'font-body text-base sm:text-lg leading-relaxed max-w-2xl',
            light ? 'text-cream-400' : 'text-ink-500 dark:text-cream-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
