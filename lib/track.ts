declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    cxc?: (...args: unknown[]) => void
  }
}

/* Google Ads — לחיצה על וואטסאפ */
const WHATSAPP_CONVERSION = 'AW-18289458338/G-9MCNz9rskcEKL5i5FE'

export function trackWhatsappClick(source: string) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', 'conversion', {
    send_to: WHATSAPP_CONVERSION,
    whatsapp_source: source,
  })

  window.gtag?.('event', 'contact_click', {
    type: 'whatsapp',
    source,
  })
}

/* Google Ads — לחיצה על טלפון */
const PHONE_CONVERSION = 'AW-18289458338/PA7pCPiMncwcEKL5i5FE'

export function trackPhoneClick(source: string) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', 'conversion', {
    send_to: PHONE_CONVERSION,
    phone_source: source,
  })

  window.gtag?.('event', 'contact_click', {
    type: 'phone',
    source,
  })

  /* Clixtell Web Conversion */
  window.cxc?.('Cmw74t')
}
