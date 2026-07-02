declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

/* המרת "לחיצה על וואטסאפ" בחשבון Google Ads — נורית ישירות דרך gtag */
const WHATSAPP_CONVERSION = 'AW-18289458338/G-9MCNz9rskcEKL5i5FE'

/* דוחף אירוע whatsapp_click ל-dataLayer (לשימוש עתידי ב-GTM) ומדווח המרה ל-Google Ads */
export function trackWhatsappClick(source: string) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'whatsapp_click', whatsapp_source: source })
  window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION })
}
