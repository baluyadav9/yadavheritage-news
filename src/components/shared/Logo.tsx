import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: number
  variant?: 'full' | 'icon'
}

export function Logo({ className, size = 40, variant = 'full' }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* SVG Icon — peacock feather eye + flute motif */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer decorative ring */}
        <circle cx="30" cy="30" r="28" stroke="#C8922A" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Peacock feather "eye" — outer ring */}
        <ellipse cx="30" cy="26" rx="11" ry="16" stroke="#C8922A" strokeWidth="1.5" />

        {/* Inner feather ring — peacock teal */}
        <ellipse cx="30" cy="26" rx="7" ry="10.5" stroke="#1E6B5C" strokeWidth="1.5" />

        {/* Feather center eye */}
        <ellipse cx="30" cy="26" rx="3.5" ry="5" fill="#1E6B5C" />
        <circle cx="30" cy="26" r="2" fill="#C8922A" />
        <circle cx="29.2" cy="25.2" r="0.6" fill="white" opacity="0.8" />

        {/* Feather barbs radiating up */}
        <line x1="30" y1="10" x2="22" y2="3" stroke="#C8922A" strokeWidth="1" strokeLinecap="round" />
        <line x1="30" y1="10" x2="30" y2="2" stroke="#C8922A" strokeWidth="1" strokeLinecap="round" />
        <line x1="30" y1="10" x2="38" y2="3" stroke="#C8922A" strokeWidth="1" strokeLinecap="round" />
        <line x1="30" y1="10" x2="16" y2="6" stroke="#C8922A" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
        <line x1="30" y1="10" x2="44" y2="6" stroke="#C8922A" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />

        {/* Flute — horizontal bar across lower half */}
        <rect x="12" y="44" width="36" height="3.5" rx="1.75" fill="#C8922A" />
        {/* Flute holes */}
        <circle cx="20" cy="45.75" r="1.2" fill="#110E1A" />
        <circle cx="27" cy="45.75" r="1.2" fill="#110E1A" />
        <circle cx="34" cy="45.75" r="1.2" fill="#110E1A" />
        <circle cx="41" cy="45.75" r="1.2" fill="#110E1A" />
        {/* Flute end cap */}
        <rect x="46" y="44.5" width="2" height="2.5" rx="1" fill="#9B6D18" />

        {/* Stem connecting eye to flute */}
        <line x1="30" y1="42" x2="30" y2="46" stroke="#1E6B5C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-gold-500">
            Yadav Heritage
          </span>
          <span className="text-[9px] font-body font-medium tracking-[0.2em] uppercase text-peacock-500 dark:text-peacock-400 mt-0.5">
            Hyderabad Community Portal
          </span>
        </div>
      )}
    </div>
  )
}
