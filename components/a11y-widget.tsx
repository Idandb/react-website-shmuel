'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Accessibility, X, RotateCcw, Sun, Type, AlignJustify, MousePointer, Zap,
} from 'lucide-react'
import { useA11y } from '@/hooks/use-a11y'
import { cn } from '@/lib/utils'
import type { A11yPrefKey } from '@/lib/a11y-store'

const TOGGLES: {
  key: A11yPrefKey
  label: string
  description: string
  icon: React.ElementType
}[] = [
  { key: 'contrast',     label: 'ניגודיות גבוהה',  description: 'טקסט לבן על רקע שחור',         icon: Sun },
  { key: 'textSize',     label: 'הגדלת טקסט',      description: 'הגדלת הגופן ב-20%',              icon: Type },
  { key: 'lineSpacing',  label: 'ריווח שורות',      description: 'ריווח מוגבר בין שורות ואותיות',  icon: AlignJustify },
  { key: 'largeCursor',  label: 'סמן גדול',         description: 'הגדלת הסמן על המסך',             icon: MousePointer },
  { key: 'reduceMotion', label: 'הפחתת תנועה',      description: 'ביטול אנימציות ומעברים',         icon: Zap },
]

const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),[tabindex]:not([tabindex="-1"])'

function useFocusTrap(panelRef: React.RefObject<HTMLDivElement | null>, isOpen: boolean) {
  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const panel = panelRef.current
    const getFocusable = () => Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))

    const first = getFocusable()[0]
    first?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const els = getFocusable()
      if (els.length === 0) return
      const firstEl = els[0]
      const lastEl  = els[els.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === firstEl) { e.preventDefault(); lastEl.focus() }
      } else {
        if (document.activeElement === lastEl)  { e.preventDefault(); firstEl.focus() }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, panelRef])
}

export default function A11yWidget() {
  const { prefs, toggle, reset } = useA11y()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef   = useRef<HTMLDivElement>(null)

  useFocusTrap(panelRef, open)

  const close = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current   && !panelRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) close()
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open, close])

  const activeCount = Object.values(prefs).filter(Boolean).length

  return (
    <>
      {/* ── FAB trigger ── */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(o => !o)}
        aria-label="פתח אפשרויות נגישות"
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          'fixed bottom-[52px] right-6 md:bottom-6 md:right-6 z-[100]',
          'w-[30px] h-[30px] rounded-full',
          'bg-[#1a3a6b] text-white',
          'shadow-lg hover:bg-[#152e55]',
          'flex items-center justify-center',
          'transition-transform duration-200 active:scale-90',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1a3a6b]/50',
          open && 'scale-90',
        )}
      >
        <Accessibility size={16} strokeWidth={1.8} aria-hidden="true" />
        {activeCount > 0 && (
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1c1c1c] text-[#f0a500] text-[10px] font-bold flex items-center justify-center"
          >
            {activeCount}
          </span>
        )}
      </button>

      {/* ── Panel ── */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="אפשרויות נגישות"
          dir="rtl"
          className={cn(
            'fixed bottom-24 right-6 md:bottom-20 md:right-6 z-[100]',
            'w-80 rounded-2xl',
            'bg-white border border-[#e2e2e2]',
            'shadow-2xl p-4',
            'flex flex-col gap-3',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[#1c1c1c] font-bold text-base flex items-center gap-2">
              <Accessibility size={18} className="text-[#f0a500]" aria-hidden="true" />
              <span>נגישות</span>
            </h2>
            <button
              onClick={close}
              aria-label="סגור תפריט נגישות"
              className="text-[#666] hover:text-[#1c1c1c] rounded-lg p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500]"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <hr className="border-[#ececec]" aria-hidden="true" />

          {/* Toggle list */}
          <ul role="list" className="flex flex-col gap-2" aria-label="הגדרות נגישות">
            {TOGGLES.map(({ key, label, description, icon: Icon }) => (
              <li key={key}>
                <button
                  role="switch"
                  aria-checked={prefs[key]}
                  aria-label={label}
                  aria-describedby={`a11y-desc-${key}`}
                  onClick={() => toggle(key)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl',
                    'text-right transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500]',
                    prefs[key]
                      ? 'bg-[#f0a500]/15 border border-[#f0a500]/60'
                      : 'bg-[#f5f5f5] border border-transparent hover:bg-[#ececec]',
                  )}
                >
                  <span
                    className={cn('shrink-0', prefs[key] ? 'text-[#f0a500]' : 'text-[#999]')}
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span className="flex-1 min-w-0 text-right">
                    <span className="block text-sm font-semibold text-[#1c1c1c] leading-none mb-0.5">
                      {label}
                    </span>
                    <span id={`a11y-desc-${key}`} className="block text-xs text-[#777] leading-tight">
                      {description}
                    </span>
                  </span>

                  {/* Toggle pill */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'shrink-0 w-10 h-5 rounded-full relative transition-colors duration-200',
                      prefs[key] ? 'bg-[#f0a500]' : 'bg-[#ccc]',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200',
                        prefs[key] ? 'right-0.5' : 'left-0.5',
                      )}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <hr className="border-[#ececec]" aria-hidden="true" />

          {/* Reset */}
          <button
            onClick={reset}
            aria-label="אפס את כל הגדרות הנגישות"
            className={cn(
              'w-full flex items-center justify-center gap-2',
              'py-2 rounded-xl text-sm font-semibold',
              'text-[#666] hover:text-[#1c1c1c]',
              'bg-[#f5f5f5] hover:bg-[#ececec]',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500]',
            )}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>אפס הכל</span>
          </button>
        </div>
      )}
    </>
  )
}
