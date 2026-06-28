'use client'

import { useState } from 'react'
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

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Call Button */}
        <a
          href="tel:0723910351"
          className="flex items-center gap-2 bg-[#f0a500] text-[#1c1c1c] font-bold text-sm px-4 py-2 rounded-full hover:bg-[#c98a00] transition-colors whitespace-nowrap"
        >
          <Phone size={16} />
          <span>חייגו עכשיו</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1c1c1c] font-semibold text-base hover:text-[#f0a500] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="חבל הארץ אחזקות בע״מ"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="text-right hidden sm:block">
            <div className="text-[#1c1c1c] font-bold text-lg leading-tight">חבל הארץ</div>
            <div className="text-[#666666] font-medium text-xs">אחזקות בע״מ</div>
          </div>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1c1c1c] ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-[#e2e2e2] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1c1c1c] font-semibold text-lg hover:text-[#f0a500] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
