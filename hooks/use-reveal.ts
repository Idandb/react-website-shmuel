'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Elements with class "reveal", "reveal-left", or "reveal-right"
 * inside the container get the "visible" class when they enter view.
 */
export function useReveal(threshold = 0.15) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}
