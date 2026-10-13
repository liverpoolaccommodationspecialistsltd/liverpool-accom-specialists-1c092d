import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import { business } from '@/data/business'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#areas', label: 'Areas' },
  { href: '#hours', label: 'Hours' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label={business.name}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/75 transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-ink-soft sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-brass-light" />
            {business.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-ink/10 bg-paper px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-3 font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-cream"
          >
            <Phone className="h-4 w-4 text-brass-light" /> Call {business.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
