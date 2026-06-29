'use client'

import { useEffect, useState, useCallback } from 'react'
import { a11yStore, type A11yPrefs, type A11yPrefKey } from '@/lib/a11y-store'

export function useA11y() {
  const [prefs, setPrefs] = useState<A11yPrefs>(() => a11yStore.getPrefs())

  useEffect(() => {
    setPrefs(a11yStore.getPrefs())
    return a11yStore.subscribe(setPrefs)
  }, [])

  const toggle = useCallback((key: A11yPrefKey) => a11yStore.toggle(key), [])
  const reset  = useCallback(() => a11yStore.reset(), [])

  return { prefs, toggle, reset }
}
