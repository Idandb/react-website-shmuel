declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/* המרת "לחיצה על וואטסאפ" בחשבון Google Ads — נורית ישירות דרך gtag */
const WHATSAPP_CONVERSION = 'AW-18289458338/G-9MCNz9rskcEKL5i5FE'

/* מדווח המרה ל-Google Ads על לחיצת וואטסאפ */
export function trackWhatsappClick(source: string) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION, whatsapp_source: source })
}
