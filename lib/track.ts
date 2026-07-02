declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/* דוחף אירוע whatsapp_click ל-dataLayer — נתפס ב-GTM ע"י טריגר Custom Event */
export function trackWhatsappClick(source: string) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'whatsapp_click', whatsapp_source: source })
}
