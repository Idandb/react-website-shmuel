'use client'

import { Phone } from 'lucide-react'
/* import { WhatsappIcon } from '@/components/floating-contact' */
/* import { trackWhatsappClick, trackPhoneClick } from '@/lib/track' */
import { trackPhoneClick } from '@/lib/track'

const PHONE = '0537380382'
// const WHATSAPP = '972537380382'
// const WHATSAPP_TEXT = encodeURIComponent('שלום, אשמח להערכת מחיר למתכות. אשלח תמונה.')

export default function StickyCallBar() {
  return (
    <div
      className="fixed bottom-0 right-0 left-0 z-[95] grid grid-cols-1 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
    >
      <a
        href={`tel:${PHONE}`}
        onClick={() => trackPhoneClick('sticky-bar')}
        className="flex items-center justify-center gap-2 bg-[#f0a500] active:bg-[#c98a00] text-[#1c1c1c] font-extrabold text-base py-2"
      >
        <Phone size={19} strokeWidth={2.2} aria-hidden="true" />
        <span>חייגו עכשיו</span>
      </a>

      {/*
      <a
        href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsappClick('sticky-bar')}
        className="flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1ebe57] text-white font-extrabold text-base py-3.5"
      >
        <WhatsappIcon size={19} />
        <span>וואטסאפ</span>
      </a>
      */}
    </div>
  )
}
