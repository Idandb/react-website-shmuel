'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Clock, ChevronDown, MapPin } from 'lucide-react'
import { trackPhoneClick } from '@/lib/track'

const navLinks = [
  { label: 'קצת עלינו',        href: '/about' },
  { label: 'פינוי גרוטאות',    href: '/pinui-grutaot' },
  { label: 'נחושת ואלומיניום', href: '/nechoshet-aluminium' },
  { label: 'לעסקים ומפעלים',   href: '/b2b' },
  { label: 'גלריה',            href: '/gallery' },
]

const areaLinks = [
  { label: 'המרכז',   href: '/merkaz' },
  { label: 'השפלה',   href: '/shfela' },
  { label: 'הדרום',   href: '/darom' },
  { label: 'השרון',   href: '/sharon' },
  { label: 'ירושלים', href: '/jerusalem' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const areasRef = useRef<HTMLDivElement>(null)

  const isAreaActive = areaLinks.some((l) => pathname === l.href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // סגירת הדרופדאון בלחיצה מחוץ אליו
  useEffect(() => {
    if (!areasOpen) return
    const onClick = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [areasOpen])

  // סגירת תפריטים במעבר עמוד
  useEffect(() => {
    setMenuOpen(false)
    setAreasOpen(false)
  }, [pathname])

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>

      {/* Top info bar */}
      <div className="bg-[#1c1c1c] text-[#f0a500] text-xs font-semibold py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="icon-pulse" />
            <span>פעילים ראשון–שישי | 07:00–18:00</span>
          </div>
          <a href="tel:0537380382" onClick={() => trackPhoneClick('navbar-top')} className="hover:text-white transition-colors">
            0537380382
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.jpg"
            alt="חבל הארץ אחזקות בע״מ"
            width={200}
            height={80}
            className="object-contain h-14 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-[14px] transition-colors relative group pb-0.5 ${
                  isActive ? 'text-[#f0a500]' : 'text-[#2a2a2a] hover:text-[#f0a500]'
                }`}
              >
                {link.label}
                <span className={`nav-link-line ${isActive ? '!w-full' : ''}`} />
              </Link>
            )
          })}

          {/* אזורי שירות — dropdown */}
          <div ref={areasRef} className="relative">
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              aria-expanded={areasOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 font-semibold text-[14px] transition-colors relative pb-0.5 ${
                isAreaActive || areasOpen ? 'text-[#f0a500]' : 'text-[#2a2a2a] hover:text-[#f0a500]'
              }`}
            >
              אזורי שירות
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`}
              />
              <span className={`nav-link-line ${isAreaActive ? '!w-full' : ''}`} />
            </button>

            {areasOpen && (
              <div className="absolute top-full right-0 mt-2 min-w-[180px] bg-white rounded-2xl shadow-xl border border-[#ececec] py-2 z-50">
                {areaLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setAreasOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 font-semibold text-[14px] transition-colors ${
                        isActive
                          ? 'text-[#f0a500] bg-[#fffbf2]'
                          : 'text-[#2a2a2a] hover:text-[#f0a500] hover:bg-[#fffbf2]'
                      }`}
                    >
                      <MapPin size={14} className="text-[#f0a500]" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </nav>

        {/* CTA button */}
        <a
          href="tel:0537380382"
          onClick={() => trackPhoneClick('navbar-cta')}
          className="btn-pulse hidden md:flex items-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#c98a00] transition-colors whitespace-nowrap shadow-md"
        >
          <Phone size={14} className="icon-shake" />
          <span>חייגו עכשיו</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1c1c1c] mr-auto transition-transform duration-200 active:scale-90"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white border-t border-[#ececec] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'max-h-[700px] py-4 overflow-y-auto' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-0.5 px-4">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                className={`font-semibold text-base py-3 border-b border-[#f3f3f3] hover:text-[#f0a500] hover:pr-2 transition-all duration-200 ${
                  menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                } ${isActive ? 'text-[#f0a500]' : 'text-[#1c1c1c]'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}

          {/* אזורי שירות — קטגוריה נפתחת במובייל */}
          <button
            onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
            aria-expanded={mobileAreasOpen}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 40}ms` : '0ms' }}
            className={`flex items-center justify-between font-semibold text-base py-3 border-b border-[#f3f3f3] transition-all duration-200 ${
              menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            } ${isAreaActive || mobileAreasOpen ? 'text-[#f0a500]' : 'text-[#1c1c1c]'}`}
          >
            <span>אזורי שירות</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileAreasOpen ? 'max-h-[300px]' : 'max-h-0'
            }`}
          >
            {areaLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 font-semibold text-[15px] py-2.5 pr-4 border-b border-[#f8f8f8] hover:text-[#f0a500] transition-colors ${
                    isActive ? 'text-[#f0a500]' : 'text-[#444]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <MapPin size={14} className="text-[#f0a500]" />
                  {link.label}
                </Link>
              )
            })}
          </div>

          <a
            href="tel:0537380382"
            onClick={() => trackPhoneClick('navbar-mobile')}
            className="mt-4 flex items-center justify-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-base px-5 py-3.5 rounded-full shadow-md"
          >
            <Phone size={16} />
            <span>0537380382</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
