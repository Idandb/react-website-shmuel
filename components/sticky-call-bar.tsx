'use client'
import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { trackPhoneClick } from '@/lib/track'

const PHONE = '0537380382'

export default function StickyCallBar() {
  const [bottom, setBottom] = useState(0)

  useEffect(() => {
    const vv = window.visualViewport
    if (!vv) return
    const update = () => {
      setBottom(Math.max(0, window.innerHeight - vv.height - vv.offsetTop))
    }
    update()
    vv.addEventListener('resize', update)
    vv.addEventListener('scroll', update)
    return () => {
      vv.removeEventListener('resize', update)
      vv.removeEventListener('scroll', update)
    }
  }, [])

  return (
    <div
      className="fixed right-0 left-0 z-[95] grid grid-cols-1 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      style={{ bottom, paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={`tel:${PHONE}`} onClick={() => trackPhoneClick('sticky-bar')}
        className="flex items-center justify-center gap-2 bg-[#f0a500] active:bg-[#c98a00] text-[#1c1c1c] font-extrabold text-base py-2">
        <Phone size={19} strokeWidth={2.2} aria-hidden="true" />
        <span>חייגו עכשיו</span>
      </a>
    </div>
  )
}
