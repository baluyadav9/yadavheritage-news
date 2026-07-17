import { Link } from 'react-router-dom'
import { Logo } from '@/components/shared/Logo'
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'History', href: '/history' },
  { label: 'Community Leaders', href: '/leaders' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Gallery', href: '/gallery' },
]

const cultureLinks = [
  { label: 'Bhagavad Gita', href: '/bhagavad-gita' },
  { label: 'Krishna Teachings', href: '/krishna-teachings' },
  { label: 'Great Personalities', href: '/personalities' },
  { label: 'Temple Directory', href: '/temples' },
  { label: 'Articles', href: '/articles' },
]

const resourceLinks = [
  { label: 'Business Directory', href: '/business-directory' },
  { label: 'Job Board', href: '/jobs' },
  { label: 'Student Corner', href: '/student-corner' },
  { label: 'News', href: '/news' },
  { label: 'Events', href: '/events' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(180deg, #071228 0%, #050E1E 100%)' }}>
      {/* Traditional top border — lotus repeating motif */}
      <div className="relative overflow-hidden" style={{ height: '28px' }}>
        {/* Gold gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #C28010 20%, #E8A020 50%, #C28010 80%, transparent 100%)' }}
        />
        {/* Repeating lotus border strip */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 1200 28"
            className="w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="footerLotus" x="0" y="0" width="60" height="28" patternUnits="userSpaceOnUse">
                {/* Diamond */}
                <path d="M30,4 L36,14 L30,24 L24,14 Z" fill="none" stroke="#C28010" strokeWidth="0.8" opacity="0.5" />
                {/* Center dot */}
                <circle cx="30" cy="14" r="2" fill="#C28010" opacity="0.6" />
                {/* Side dots */}
                <circle cx="8"  cy="14" r="1.2" fill="#C28010" opacity="0.3" />
                <circle cx="52" cy="14" r="1.2" fill="#C28010" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="1200" height="28" fill="url(#footerLotus)" />
          </svg>
        </div>
      </div>

      <div className="section-container pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size={44} />

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(176,148,96,0.85)' }}>
              The digital home of the Yadav Community of Hyderabad — preserving our heritage,
              celebrating our culture, and uniting 2.5 lakh members across Telangana.
            </p>

            {/* Sanskrit tagline */}
            <div className="flex flex-col gap-1 border-l-2 pl-4" style={{ borderColor: '#C28010' }}>
              <span className="text-base font-display" style={{ color: '#E8A020' }}>॥ जय यादव समाज ॥</span>
              <span className="text-xs tracking-wider" style={{ color: 'rgba(176,148,96,0.6)' }}>Jay Yadav Samaj</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(194,128,16,0.1)',
                    border: '1px solid rgba(194,128,16,0.25)',
                    borderRadius: '2px',
                    color: 'rgba(176,148,96,0.7)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(194,128,16,0.25)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#E8A020'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(194,128,16,0.1)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(176,148,96,0.7)'
                  }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display text-sm font-semibold uppercase tracking-widest mb-4 pb-2"
              style={{ color: '#E8A020', borderBottom: '1px solid rgba(194,128,16,0.2)' }}
            >
              Community
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors flex items-center gap-2"
                    style={{ color: 'rgba(176,148,96,0.75)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.75)')}
                  >
                    <span style={{ color: '#C28010', fontSize: '8px' }}>◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Culture Links */}
          <div>
            <h4
              className="font-display text-sm font-semibold uppercase tracking-widest mb-4 pb-2"
              style={{ color: '#E8A020', borderBottom: '1px solid rgba(194,128,16,0.2)' }}
            >
              Culture
            </h4>
            <ul className="space-y-2.5">
              {cultureLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors flex items-center gap-2"
                    style={{ color: 'rgba(176,148,96,0.75)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.75)')}
                  >
                    <span style={{ color: '#C28010', fontSize: '8px' }}>◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div className="space-y-8">
            <div>
              <h4
                className="font-display text-sm font-semibold uppercase tracking-widest mb-4 pb-2"
                style={{ color: '#E8A020', borderBottom: '1px solid rgba(194,128,16,0.2)' }}
              >
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors flex items-center gap-2"
                      style={{ color: 'rgba(176,148,96,0.75)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.75)')}
                    >
                      <span style={{ color: '#C28010', fontSize: '8px' }}>◆</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="font-display text-sm font-semibold uppercase tracking-widest mb-4 pb-2"
                style={{ color: '#E8A020', borderBottom: '1px solid rgba(194,128,16,0.2)' }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm" style={{ color: 'rgba(176,148,96,0.75)' }}>
                  <MapPin size={14} style={{ color: '#C28010' }} className="mt-0.5 flex-shrink-0" />
                  <span>Yadav Community Hall, Road No. 5, Jubilee Hills, Hyderabad — 500033</span>
                </li>
                <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(176,148,96,0.75)' }}>
                  <Phone size={14} style={{ color: '#C28010' }} className="flex-shrink-0" />
                  +91 40 2345 6789
                </li>
                <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(176,148,96,0.75)' }}>
                  <Mail size={14} style={{ color: '#C28010' }} className="flex-shrink-0" />
                  info@hydyadavcommunity.org
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(194,128,16,0.15)' }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(176,148,96,0.5)' }}>
            © {year} Hyderabad Yadav Community Portal. All rights reserved.
          </p>
          <p className="text-xs text-center flex items-center gap-2">
            <span style={{ color: '#C28010', fontFamily: '"Cormorant Garamond", serif', fontSize: '15px' }}>ॐ</span>
            <span className="font-display text-sm" style={{ color: 'rgba(232,160,32,0.7)' }}>श्री कृष्ण शरणम्</span>
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(176,148,96,0.5)' }}>
            <Link
              to="/about"
              className="transition-colors"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.5)')}
            >
              Privacy
            </Link>
            <Link
              to="/about"
              className="transition-colors"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.5)')}
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="transition-colors"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#E8A020')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(176,148,96,0.5)')}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
