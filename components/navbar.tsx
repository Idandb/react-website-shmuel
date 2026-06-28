'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Clock } from 'lucide-react'

const navLinks = [
  { label: 'קצת עלינו', href: '#about' },
  { label: 'המרכז',    href: '#merkaz' },
  { label: 'השפלה',    href: '#shfela' },
  { label: 'הדרום',    href: '#darom' },
  { label: 'השרון',    href: '#sharon' },
  { label: 'גלריה',    href: '#gallery' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>

      {/* Top info bar */}
      <div className="bg-[#1c1c1c] text-[#f0a500] text-xs font-semibold py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="icon-pulse" />
            <span>פעילים ראשון–שישי | 07:00–18:00</span>
          </div>
          <a href="tel:0723910351" className="hover:text-white transition-colors">
            072-3910351
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="חבל הארץ אחזקות בע״מ"
            width={54}
            height={54}
            className="object-contain"
          />
          <div className="text-right hidden sm:block">
            <div className="text-[#1c1c1c] font-extrabold text-[17px] leading-tight">חבל הארץ</div>
            <div className="text-[#999] font-medium text-[11px] tracking-wide">אחזקות בע״מ</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2a2a2a] font-semibold text-[14px] hover:text-[#f0a500] transition-colors relative group pb-0.5"
            >
              {link.label}
              <span className="nav-link-line" />
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="tel:0723910351"
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
          menuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-0.5 px-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
              className={`text-[#1c1c1c] font-semibold text-base py-3 border-b border-[#f3f3f3] hover:text-[#f0a500] hover:pr-2 transition-all duration-200 ${
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0723910351"
            className="mt-4 flex items-center justify-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-base px-5 py-3.5 rounded-full shadow-md"
          >
            <Phone size={16} />
            <span>072-3910351</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
