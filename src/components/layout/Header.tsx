import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Sun, Moon, ChevronDown,
  Users, BookOpen, Building2, GraduationCap,
  Newspaper, CalendarDays, MapPin, ImageIcon,
  Phone,
} from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

const navGroups = [
  {
    label: 'Community',
    items: [
      { label: 'About Us', href: '/about', icon: Users },
      { label: 'History', href: '/history', icon: BookOpen },
      { label: 'Timeline', href: '/timeline', icon: CalendarDays },
      { label: 'Leaders', href: '/leaders', icon: Users },
      { label: 'Achievements', href: '/achievements', icon: GraduationCap },
    ],
  },
  {
    label: 'Culture',
    items: [
      { label: 'Great Personalities', href: '/personalities', icon: Users },
      { label: 'Bhagavad Gita', href: '/bhagavad-gita', icon: BookOpen },
      { label: 'Krishna Teachings', href: '/krishna-teachings', icon: BookOpen },
      { label: 'Articles', href: '/articles', icon: Newspaper },
    ],
  },
  {
    label: 'Business',
    items: [
      { label: 'Business Directory', href: '/business-directory', icon: Building2 },
      { label: 'Job Board', href: '/jobs', icon: GraduationCap },
      { label: 'Student Corner', href: '/student-corner', icon: GraduationCap },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'News', href: '/news', icon: Newspaper },
      { label: 'Events', href: '/events', icon: CalendarDays },
      { label: 'Gallery', href: '/gallery', icon: ImageIcon },
      { label: 'Temple Directory', href: '/temples', icon: MapPin },
    ],
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const { resolved, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
      style={scrolled || !isHome ? {
        background: 'rgba(255,248,239,0.97)',
        borderBottom: '1px solid rgba(194,128,16,0.2)',
      } : undefined}
    >
      {/* Traditional saffron-gold top stripe */}
      <div
        className="h-[3px]"
        style={{ background: 'linear-gradient(90deg, #C28010 0%, #E06010 25%, #E8A020 50%, #E06010 75%, #C28010 100%)' }}
      />
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo
              size={36}
              className={cn(
                !scrolled && isHome ? '[&_span]:text-cream-100 [&_span:last-child]:text-gold-300' : ''
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-gold-600 dark:text-gold-400'
                    : !scrolled && isHome
                    ? 'text-cream-200 hover:text-gold-300'
                    : 'text-ink-600 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400'
                )
              }
            >
              Home
            </NavLink>

            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    !scrolled && isHome
                      ? 'text-cream-200 hover:text-gold-300'
                      : 'text-ink-600 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400'
                  )}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      'transition-transform duration-200',
                      openGroup === group.label && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-ink-800 rounded-xl border border-cream-400/60 dark:border-ink-700 shadow-ink-lg overflow-hidden py-1"
                    >
                      {group.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                              cn(
                                'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                                isActive
                                  ? 'bg-gold-50 dark:bg-gold-900/20 text-gold-600 dark:text-gold-400'
                                  : 'text-ink-600 dark:text-cream-400 hover:bg-cream-100 dark:hover:bg-ink-700 hover:text-gold-600 dark:hover:text-gold-400'
                              )
                            }
                          >
                            <Icon size={15} className="text-gold-500 flex-shrink-0" />
                            {item.label}
                          </NavLink>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-gold-600 dark:text-gold-400'
                    : !scrolled && isHome
                    ? 'text-cream-200 hover:text-gold-300'
                    : 'text-ink-600 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400'
                )
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={cn(
                'p-2 rounded-lg transition-colors',
                !scrolled && isHome
                  ? 'text-cream-300 hover:text-gold-300 hover:bg-white/10'
                  : 'text-ink-500 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-cream-100 dark:hover:bg-ink-700'
              )}
            >
              {resolved === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Join CTA — desktop */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-gold text-xs py-2 px-4"
            >
              Join Community
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                !scrolled && isHome
                  ? 'text-cream-200 hover:bg-white/10'
                  : 'text-ink-600 dark:text-cream-400 hover:bg-cream-100 dark:hover:bg-ink-700'
              )}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-cream-400/40 dark:border-ink-700 bg-white dark:bg-ink-900 overflow-hidden"
          >
            <div className="section-container py-4 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn('block px-4 py-2.5 rounded-lg text-sm font-medium', isActive ? 'bg-gold-50 dark:bg-gold-900/20 text-gold-600 dark:text-gold-400' : 'text-ink-600 dark:text-cream-400')
                }
              >
                Home
              </NavLink>

              {navGroups.map((group) => (
                <div key={group.label}>
                  <button
                    onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-ink-600 dark:text-cream-400"
                  >
                    {group.label}
                    <ChevronDown
                      size={14}
                      className={cn('transition-transform', openGroup === group.label && 'rotate-180')}
                    />
                  </button>
                  {openGroup === group.label && (
                    <div className="ml-4 border-l-2 border-gold-500/30 pl-3 mt-1 space-y-1">
                      {group.items.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className={({ isActive }) =>
                            cn('block px-3 py-2 rounded-lg text-sm', isActive ? 'text-gold-600 dark:text-gold-400' : 'text-ink-500 dark:text-cream-500 hover:text-gold-600')
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <NavLink
                to="/contact"
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-ink-600 dark:text-cream-400"
              >
                Contact
              </NavLink>

              <div className="pt-3 border-t border-cream-400/40 dark:border-ink-700">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-ink-900 hover:bg-gold-400 transition-colors"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
