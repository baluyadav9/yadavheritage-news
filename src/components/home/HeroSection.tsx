import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { newsItems } from '@/data/news'

/*
 * Replace each imageUrl below with actual community event photographs.
 * Recommended: high-resolution photos (1920×1080) from Janmashtami, Sammelan,
 * Business Expo, Sadar festival, and Youth Summit events.
 */
const slides = [
  {
    imageUrl: 'https://picsum.photos/id/142/1920/1080',
    badge: 'Religious Festival • Aug 2025',
    headline: ['Rooted in', 'Devotion.'],
    headlineGold: 1,
    sub: '60,000+ devotees united at Janmashtami Mahotsav — Sri Krishna Mandir, Jubilee Hills',
    cta: { label: 'View Events', to: '/events' },
    ctaSecondary: { label: 'Bhagavad Gita', to: '/bhagavad-gita' },
    verse: '॥ श्री कृष्ण शरणम् ॥',
    accent: '#C28010',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop&auto=format&q=80',
    badge: 'Community Gathering • Sep 2025',
    headline: ['United in', 'Purpose.'],
    headlineGold: 1,
    sub: 'Annual Yadav Mahasabha Sammelan — 5,000 members, one vision for Hyderabad',
    cta: { label: 'About Us', to: '/about' },
    ctaSecondary: { label: 'Our History', to: '/history' },
    verse: '॥ जय यादव समाज ॥',
    accent: '#1E3D8F',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&auto=format&q=80',
    badge: 'Business & Careers • Oct 2025',
    headline: ['Rising', 'Together.'],
    headlineGold: 1,
    sub: '400+ Yadav entrepreneurs at Business & Career Expo — HICC Hyderabad',
    cta: { label: 'Business Directory', to: '/business-directory' },
    ctaSecondary: { label: 'Career Resources', to: '/welfare-schemes' },
    verse: '॥ उद्यमेन हि सिध्यन्ति कार्याणि ॥',
    accent: '#C03878',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&h=1080&fit=crop&auto=format&q=80',
    badge: 'Telangana State Festival • Oct 2025',
    headline: ['Celebrating Our', 'Heritage.'],
    headlineGold: 1,
    sub: 'Sadar Utsav — declared a Telangana State Festival, celebrated across 33 districts',
    cta: { label: 'Our Culture', to: '/culture' },
    ctaSecondary: { label: 'Gallery', to: '/gallery' },
    verse: '॥ यादवों का कदर — हैदराबाद सदर ॥',
    accent: '#0A6B54',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&auto=format&q=80',
    badge: 'Youth Leadership • Apr 2025',
    headline: ['Empowering the', 'Future.'],
    headlineGold: 1,
    sub: '500+ young professionals at the inaugural Yadav Youth Leadership Summit, HITEC City',
    cta: { label: 'Youth Programs', to: '/welfare-schemes' },
    ctaSecondary: { label: 'Join Community', to: '/contact' },
    verse: '॥ युवा शक्ति — समाज शक्ति ॥',
    accent: '#E06010',
  },
]

const AUTOPLAY_DELAY = 5500

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number, dir?: number) => {
    setDirection(dir ?? (idx > current ? 1 : -1))
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => {
    const nextIdx = (current + 1) % slides.length
    goTo(nextIdx, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    const prevIdx = (current - 1 + slides.length) % slides.length
    goTo(prevIdx, -1)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, next])

  const slide = slides[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '8%' : '-8%', opacity: 0, scale: 1.03 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-8%' : '8%', opacity: 0, scale: 0.97 }),
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#040C1A' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Sliding background images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0"
        >
          <img
            src={slide.imageUrl}
            alt={slide.headline.join(' ')}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(105deg, rgba(4,12,26,0.88) 0%, rgba(4,12,26,0.65) 50%, rgba(4,12,26,0.22) 100%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(4,12,26,0.4) 0%, transparent 30%, transparent 55%, rgba(4,12,26,0.85) 100%)',
      }} />
      <div className="absolute inset-0 bg-mandala-dots opacity-15 pointer-events-none" />

      {/* ── Saffron top stripe ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-30"
        style={{ background: 'linear-gradient(90deg, #C28010 0%, #E06010 30%, #E8A020 50%, #E06010 70%, #C28010 100%)' }}
      />

      {/* ── Slide accent color bar (left edge) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`accent-${current}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-20 bottom-20 w-[3px] z-20 origin-top"
          style={{ background: slide.accent }}
        />
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="relative z-10 section-container flex-1 flex flex-col justify-center pt-28 pb-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`content-${current}`}
            custom={direction}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] rounded-sm"
                style={{ background: slide.accent, color: '#FFF8EF' }}
              >
                {slide.badge}
              </span>
            </div>

            {/* Sanskrit / verse */}
            <p
              className="font-display text-lg sm:text-xl tracking-widest mb-5"
              style={{ color: '#E8A020', textShadow: '0 2px 20px rgba(232,160,32,0.35)' }}
            >
              {slide.verse}
            </p>

            {/* Headline */}
            <h1
              className="font-display font-bold leading-[1.06] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', color: '#FFF8EF', textShadow: '0 4px 32px rgba(4,12,26,0.7)' }}
            >
              {slide.headline.map((line, i) => (
                <span key={i} className="block">
                  {i === slide.headlineGold
                    ? <span className="text-gradient-gold">{line}</span>
                    : line}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'rgba(240,228,200,0.72)', textShadow: '0 2px 12px rgba(4,12,26,0.6)' }}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to={slide.cta.to} className="btn-gold text-xs px-7 py-3.5">
                {slide.cta.label} <ArrowRight size={14} />
              </Link>
              <Link
                to={slide.ctaSecondary.to}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-7 py-3.5 transition-all hover:-translate-y-0.5"
                style={{
                  border: '1.5px solid rgba(194,128,16,0.4)',
                  color: 'rgba(232,160,32,0.85)',
                  borderRadius: '2px',
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(4,12,26,0.2)',
                }}
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Stats row (fixed, always visible) ── */}
      <div
        className="absolute bottom-10 left-0 right-0 z-20 section-container"
      >
        <div
          className="grid grid-cols-4 gap-5 pt-5 border-t max-w-lg"
          style={{ borderColor: 'rgba(194,128,16,0.15)' }}
        >
          {[
            { value: '2.5L+', label: 'Members' },
            { value: '500+',  label: 'Businesses' },
            { value: '24',    label: 'Mandals' },
            { value: '38+',   label: 'Years' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                className="font-display text-2xl sm:text-3xl font-bold tabular"
                style={{ color: '#E8A020', textShadow: '0 2px 12px rgba(194,128,16,0.3)' }}
              >
                {value}
              </div>
              <div className="text-[9px] mt-1 tracking-wider uppercase" style={{ color: 'rgba(176,148,96,0.5)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-sm transition-all hover:scale-110"
        style={{
          background: 'rgba(4,12,26,0.6)',
          border: '1px solid rgba(194,128,16,0.25)',
          backdropFilter: 'blur(8px)',
          color: 'rgba(232,160,32,0.8)',
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-sm transition-all hover:scale-110"
        style={{
          background: 'rgba(4,12,26,0.6)',
          border: '1px solid rgba(194,128,16,0.25)',
          backdropFilter: 'blur(8px)',
          color: 'rgba(232,160,32,0.8)',
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: i === current ? '4px' : '50%',
              background: i === current ? s.accent : 'rgba(255,248,239,0.3)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div
        className="absolute top-24 right-6 z-20 font-display tabular"
        style={{ color: 'rgba(194,128,16,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
      >
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-9 left-0 h-[2px] z-20"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
          style={{ background: slide.accent, opacity: 0.6 }}
        />
      )}

      {/* ── News ticker ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
        style={{
          background: 'rgba(4,12,26,0.88)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(194,128,16,0.18)',
        }}
      >
        <div className="flex items-center h-9">
          <div
            className="flex-shrink-0 flex items-center gap-1.5 px-4 h-full border-r"
            style={{ borderColor: 'rgba(194,128,16,0.2)', background: 'rgba(224,96,16,0.15)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#E06010', boxShadow: '0 0 5px rgba(224,96,16,0.8)' }}
            />
            <span className="text-[9px] font-black tracking-[0.25em] uppercase" style={{ color: '#E06010' }}>
              Live
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track">
              {[...newsItems, ...newsItems].map((item, i) => (
                <span key={i} className="inline-flex items-center">
                  <span className="text-[10px] font-medium mx-8" style={{ color: 'rgba(240,228,200,0.75)' }}>
                    {item.title}
                  </span>
                  <span style={{ color: 'rgba(194,128,16,0.4)' }}>◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 right-6 flex flex-col items-center gap-1 z-20"
        style={{ color: 'rgba(176,148,96,0.4)' }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} />
        </motion.div>
        <span className="text-[7px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
