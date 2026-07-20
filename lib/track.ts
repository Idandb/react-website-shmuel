declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    cxc?: (...args: unknown[]) => void
  }
}

/* Clixtell — הגנה מפני קליקים מרמים (מזהה לקוח) */
const CLIXTELL_ID = 'VJF0y2'

/* המרת "לחיצה על וואטסאפ" בחשבון Google Ads — נורית ישירות דרך gtag */
const WHATSAPP_CONVERSION = 'AW-18289458338/G-9MCNz9rskcEKL5i5FE'

/* מדווח המרה ל-Google Ads, ל-Analytics וגם ל-Clixtell על לחיצת וואטסאפ */
export function trackWhatsappClick(source: string) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION, whatsapp_source: source })
  window.gtag?.('event', 'contact_click', { type: 'whatsapp', source })
  window.cxc?.(CLIXTELL_ID)
}

/* המרת "לחיצה על התקשרות באתר" בחשבון Google Ads — נורית ישירות דרך gtag */
const PHONE_CONVERSION = 'AW-18289458338/PA7pCPiMncwcEKL5i5FE'

/* מדווח המרה ל-Google Ads, ל-Analytics וגם ל-Clixtell על לחיצת טלפון */
export function trackPhoneClick(source: string) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'conversion', { send_to: PHONE_CONVERSION, phone_source: source })
  window.gtag?.('event', 'contact_click', { type: 'phone', source })
  window.cxc?.(CLIXTELL_ID)
}
