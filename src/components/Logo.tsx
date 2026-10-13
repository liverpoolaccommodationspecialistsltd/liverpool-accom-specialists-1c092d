export function LogoMark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0f2a44" />
      <path d="M10 28 32 11l22 17" fill="none" stroke="#d4a64a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="none" stroke="#f7f2e9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 34v15h8.5" />
        <path d="M23.5 49 31 34l7.5 15M26.5 43.5h9" />
        <path d="M52 37c-1-1.8-2.8-3-4.9-3-2.8 0-4.8 1.6-4.8 3.9 0 5.3 10.2 2.9 10.2 7.8 0 2.4-2.2 4.3-5.2 4.3-2.4 0-4.3-1.1-5.3-2.9" />
      </g>
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.6rem] font-semibold tracking-tight ${light ? 'text-cream' : 'text-ink'}`}>
          Liverpool
        </span>
        <span className={`mt-1 text-[0.58rem] font-bold tracking-[0.22em] ${light ? 'text-brass-light' : 'text-brass-dark'}`}>
          ACCOMMODATION SPECIALISTS LTD
        </span>
      </span>
    </span>
  )
}
