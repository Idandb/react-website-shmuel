/* import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Assistant } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ContactFooter from '@/components/contact-footer'
import A11yWidget from '@/components/a11y-widget'
import StickyCallBar from '@/components/sticky-call-bar'
import FloatingContact from '@/components/floating-contact'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

const SITE_URL = 'https://hevelhaaretz.co.il'
const TITLE = 'חבל הארץ אחזקות בע״מ – קונים ברזל ומתכות וגרט | פינוי גרוטאות עם מנוף'
const DESCRIPTION =
  'קונים ברזל, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן ובתשלום מזומן במקום, ומעניקים שירותי פינוי גרוטאות ופינוי מתכות מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים, שירות במרכז, בשפלה, בדרום, בשרון ובירושלים.'
const KEYWORDS = [
  'קונים ברזל', 'קונה ברזל', 'קניית מתכות', 'קונים מתכות', 'פינוי גרוטאות', 'פינוי מתכות',
  'גרט ברזל', 'גרט', 'קונים נחושת', 'קונה נחושת', 'קניית נחושת', 'קונים אלומיניום',
  'קניית אלומיניום', 'נירוסטה', 'פליז', 'קניית כבלים', 'תשלום במזומן',
  'משאית מנוף', 'פינוי פסולת מתכת', 'מחזור מתכות', 'הצעת מחיר לברזל',
  'פינוי ציוד כבד', 'מחיר ברזל לקילו', 'מחיר נחושת לקילו', 'קונה ברזל ירושלים',
  'פינוי גרוטאות ירושלים', 'פינוי מתכות לעסקים', 'פינוי מפעלים', 'חבל הארץ אחזקות',
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/hero-bg.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/hero-bg.png`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f0a500',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`bg-background ${assistant.variable}`}>
      <head>
        // Google tag (gtag.js) — Google Ads AW-18289458338 
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18289458338"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18289458338');
gtag('config', 'G-0W18FBG8V7');`,
          }}
        />

        // TrafficGuard Integration 
        <Script
          id="trafficguard"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var dataTrafficGuard = dataTrafficGuard || [];
              dataTrafficGuard.push(['property_group_id', 'tg-g-025691-001']);
              dataTrafficGuard.push(['event','pageview']);
              (function() {
                var tg = document.createElement('script'); tg.type = 'text/javascript'; tg.async = true;
                tg.src = '//tgtag.io/tg.js?pid=tg-g-025691-001';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tg, s);
              })();
            `,
          }}
        />
        {
// Clixtell Tracking Code 
<Script
  id="clixtell-tracking"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      var script=document.createElement('script');
      var prefix=document.location.protocol;
      script.async=true;script.type='text/javascript';
      var target=prefix + '//scripts.clixtell.com/track.js';
      script.src=target;var elem=document.head;
      elem.appendChild(script);
    `,
  }}
/>
      </head>
      <body className="font-sans antialiased pb-[52px] md:pb-0">
        //TrafficGuard (noscript) 
        <noscript>
          <img
            src="//p.tgtag.io/event?property_group_id=tg-g-025691-001&event_name=pageview&no_script=1"
            width="1"
            height="1"
            style={{ display: 'none' }}
            alt=""
          />
        </noscript>

        <Navbar />
        {children}
        <ContactFooter />
        <FloatingContact />
        <StickyCallBar />
        <A11yWidget />
      </body>
    </html>
  ) 
} */
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Assistant } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ContactFooter from '@/components/contact-footer'
import A11yWidget from '@/components/a11y-widget'
import StickyCallBar from '@/components/sticky-call-bar'
import FloatingContact from '@/components/floating-contact'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

const SITE_URL = 'https://hevelhaaretz.co.il'
const TITLE = 'חבל הארץ אחזקות בע״מ – קונים ברזל ומתכות וגרט | פינוי גרוטאות עם מנוף'
const DESCRIPTION =
  'קונים ברזל, נחושת, אלומיניום, נירוסטה ופליז במחיר הוגן ובתשלום מזומן במקום, ומעניקים שירותי פינוי גרוטאות ופינוי מתכות מקצועי לעסקים וללקוחות פרטיים. משאיות עם מנוף, הצעת מחיר משתלמת באחריות, ותק של 12 שנים, שירות במרכז, בשפלה, בדרום, בשרון ובירושלים.'
const KEYWORDS = [
  'קונים ברזל', 'קונה ברזל', 'קניית מתכות', 'קונים מתכות', 'פינוי גרוטאות', 'פינוי מתכות',
  'גרט ברזל', 'גרט', 'קונים נחושת', 'קונה נחושת', 'קניית נחושת', 'קונים אלומיניום',
  'קניית אלומיניום', 'נירוסטה', 'פליז', 'קניית כבלים', 'תשלום במזומן',
  'משאית מנוף', 'פינוי פסולת מתכת', 'מחזור מתכות', 'הצעת מחיר לברזל',
  'פינוי ציוד כבד', 'מחיר ברזל לקילו', 'מחיר נחושת לקילו', 'קונה ברזל ירושלים',
  'פינוי גרוטאות ירושלים', 'פינוי מתכות לעסקים', 'פינוי מפעלים', 'חבל הארץ אחזקות',
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/hero-bg.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/hero-bg.png`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`bg-background ${assistant.variable}`}>
      <head>
        {/* Google tag (gtag.js) — Google Ads AW-18289458338 */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18289458338"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18289458338');
gtag('config', 'G-0W18FBG8V7');`,
          }}
        />

        {/* TrafficGuard Integration */}
        <Script
          id="trafficguard"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var dataTrafficGuard = dataTrafficGuard || [];
              dataTrafficGuard.push(['property_group_id', 'tg-g-025691-001']);
              dataTrafficGuard.push(['event','pageview']);
              (function() {
                var tg = document.createElement('script'); tg.type = 'text/javascript'; tg.async = true;
                tg.src = '//tgtag.io/tg.js?pid=tg-g-025691-001';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tg, s);
              })();
            `,
          }}
        />
        {/* Clixtell Tracking Code */}
<Script
  id="clixtell-tracking"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      var script=document.createElement('script');
      var prefix=document.location.protocol;
      script.async=true;script.type='text/javascript';
      var target=prefix + '//scripts.clixtell.com/track.js';
      script.src=target;var elem=document.head;
      elem.appendChild(script);
    `,
  }}
/>
      </head>
      <body className="font-sans antialiased pb-[52px] md:pb-0">
        {/* TrafficGuard (noscript) */}
        <noscript>
          <img
            src="//p.tgtag.io/event?property_group_id=tg-g-025691-001&event_name=pageview&no_script=1"
            width="1"
            height="1"
            style={{ display: 'none' }}
            alt=""
          />
        </noscript>

        <Navbar />
        {children}
        <ContactFooter />
        <FloatingContact />
        <StickyCallBar />
        <A11yWidget />
      </body>
    </html>
  )
}

