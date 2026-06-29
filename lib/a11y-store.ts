export type A11yPrefKey = 'contrast' | 'textSize' | 'lineSpacing' | 'largeCursor' | 'reduceMotion'
export type A11yPrefs   = Record<A11yPrefKey, boolean>
export type A11yListener = (prefs: A11yPrefs) => void

const STORAGE_KEY = 'a11y-prefs'

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

class A11yStore {
  private prefs       = { ...DEFAULT_PREFS }
  private listeners   = new Set<A11yListener>()
  private initialized = false

  private init(): void {
    if (this.initialized || typeof window === 'undefined') return
    this.initialized = true
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<A11yPrefs>
        for (const key of Object.keys(DEFAULT_PREFS) as A11yPrefKey[]) {
          if (typeof parsed[key] === 'boolean') this.prefs[key] = parsed[key]!
        }
      }
    } catch { /* ignore malformed data */ }
    this.syncClasses()
  }

  subscribe(listener: A11yListener): () => void {
    this.init()
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  getPrefs(): A11yPrefs {
    this.init()
    return { ...this.prefs }
  }

  toggle(key: A11yPrefKey): void {
    this.init()
    this.prefs = { ...this.prefs, [key]: !this.prefs[key] }
    this.persist()
    this.syncClasses()
    this.notify()
  }

  reset(): void {
    this.init()
    this.prefs = { ...DEFAULT_PREFS }
    this.persist()
    this.syncClasses()
    this.notify()
  }

  private persist(): void {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs)) } catch { /* quota exceeded */ }
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
