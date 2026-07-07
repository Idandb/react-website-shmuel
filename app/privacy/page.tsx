import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | חבל הארץ אחזקות בע״מ',
  description: 'מדיניות הפרטיות של אתר חבל הארץ אחזקות בע״מ — כיצד אנו אוספים ומשתמשים במידע.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[2.4rem] md:text-5xl font-extrabold text-[#1c1c1c] text-center mb-4 leading-tight">
          מדיניות פרטיות
        </h1>
        <div className="gold-divider mb-10" />

        <div className="text-[#555] text-lg leading-[1.85] space-y-6 text-right">
          <p>
            חבל הארץ אחזקות בע״מ (״האתר״, ״אנחנו״) מכבדת את פרטיותכם. מסמך זה מסביר איזה מידע
            נאסף באתר וכיצד הוא משמש.
          </p>

          <div>
            <h2 className="text-[#1c1c1c] font-extrabold text-xl mb-2">טופס יצירת קשר</h2>
            <p>
              הטופס בעמוד ״צרו קשר״ אינו שומר את הפרטים שלכם בשרת שלנו — לחיצה על ״שליחה״
              פותחת עבורכם וואטסאפ עם ההודעה שהזנתם, ואתם אלו ששולחים אותה אלינו ישירות
              דרך וואטסאפ.
            </p>
          </div>

          <div>
            <h2 className="text-[#1c1c1c] font-extrabold text-xl mb-2">כלים לניתוח ומדידת פרסום</h2>
            <p>
              אנו משתמשים ב-Google Tag (Google Ads) כדי למדוד את האפקטיביות של הפרסום שלנו —
              למשל, אילו לחיצות על כפתורי חיוג או וואטסאפ הגיעו מקליק על מודעה. כמו כן פועל
              באתר שירות הגנה מפני קליקים מרמים (Clixtell). כלים אלה עשויים להשתמש בעוגיות
              (cookies) ומזהים טכניים בדפדפן, בהתאם למדיניות הפרטיות של גוגל ושל הספקים
              הרלוונטיים.
            </p>
          </div>

          <div>
            <h2 className="text-[#1c1c1c] font-extrabold text-xl mb-2">מפת גוגל</h2>
            <p>
              בעמוד ״צרו קשר״ מוטמעת מפת Google Maps להצגת אזור השירות שלנו, בכפוף למדיניות
              הפרטיות של Google.
            </p>
          </div>

          <div>
            <h2 className="text-[#1c1c1c] font-extrabold text-xl mb-2">יצירת קשר</h2>
            <p>
              לשאלות בנוגע למדיניות הפרטיות ניתן לפנות אלינו טלפונית בטלפון{' '}
              <a href="tel:0537380382" className="text-[#f0a500] font-semibold hover:text-[#c98a00]">
                0537380382
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
