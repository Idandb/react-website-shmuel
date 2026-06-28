'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'קצת עלינו', href: '#about' },
  { label: 'המרכז', href: '#merkaz' },
  { label: 'השפלה', href: '#shfela' },
  { label: 'הדרום', href: '#darom' },
  { label: 'השרון', href: '#sharon' },
  { label: 'גלריה', href: '#gallery' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
    >
      {/* RTL layout: Logo (right) → Nav (center) → Call button (left) */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo — far right in RTL */}
        <a href="#" className="flex items-center gap-2 shrink-0 order-first">
          <Image
            src="/logo.png"
            alt="חבל הארץ אחזקות בע״מ"
            width={58}
            height={58}
            className="object-contain"
          />
          <div className="text-right hidden sm:block">
            <div className="text-[#1c1c1c] font-extrabold text-lg leading-tight">חבל הארץ</div>
            <div className="text-[#888] font-medium text-xs tracking-wide">אחזקות בע״מ</div>
          </div>
        </a>

        {/* Desktop Nav — center */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1c1c1c] font-semibold text-[15px] hover:text-[#f0a500] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-0.5 bg-[#f0a500] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Call Button — far left in RTL */}
        <a
          href="tel:0723910351"
          className="btn-pulse hidden md:flex items-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#c98a00] transition-colors whitespace-nowrap"
        >
          <Phone size={15} />
          <span>חייגו עכשיו</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1c1c1c] mr-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-[#e2e2e2] overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1c1c1c] font-semibold text-lg py-2.5 border-b border-[#f5f5f5] hover:text-[#f0a500] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0723910351"
            className="mt-3 flex items-center justify-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-base px-5 py-3 rounded-full"
          >
            <Phone size={16} />
            <span>072-3910351</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
