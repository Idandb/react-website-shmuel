export type A11yPrefKey = 'contrast' | 'textSize' | 'lineSpacing' | 'largeCursor' | 'reduceMotion'
export type A11yPrefs   = Record<A11yPrefKey, boolean>
export type A11yListener = (prefs: A11yPrefs) => void

const CLASS_MAP: Record<A11yPrefKey, string> = {
  contrast:     'a11y-contrast',
  textSize:     'a11y-text-size',
  lineSpacing:  'a11y-line-spacing',
  largeCursor:  'a11y-large-cursor',
  reduceMotion: 'a11y-reduce-motion',
}

const DEFAULT_PREFS: A11yPrefs = {
  contrast: false, textSize: false, lineSpacing: false,
  largeCursor: false, reduceMotion: false,
}

/* ההעדפות נשמרות בזיכרון בלבד — נשמרות בניווט בין עמודים ומתאפסות ברענון/ביקור חדש */
class A11yStore {
  private prefs     = { ...DEFAULT_PREFS }
  private listeners = new Set<A11yListener>()

  subscribe(listener: A11yListener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  getPrefs(): A11yPrefs {
    return { ...this.prefs }
  }

  toggle(key: A11yPrefKey): void {
    this.prefs = { ...this.prefs, [key]: !this.prefs[key] }
    this.syncClasses()
    this.notify()
  }

  reset(): void {
    this.prefs = { ...DEFAULT_PREFS }
    this.syncClasses()
    this.notify()
  }

  private syncClasses(): void {
    if (typeof document === 'undefined') return
    const el = document.documentElement
    for (const key of Object.keys(CLASS_MAP) as A11yPrefKey[]) {
      el.classList.toggle(CLASS_MAP[key], this.prefs[key])
    }
  }

  private notify(): void {
    const snapshot = this.getPrefs()
    this.listeners.forEach(l => l(snapshot))
  }
}

export const a11yStore = new A11yStore()
