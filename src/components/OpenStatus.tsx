import { useEffect, useState } from 'react'
import { openingHours } from '@/data/business'

// Works out open/closed in UK time on the client only, so SSR output stays stable.
function getUkStatus() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const now = `${get('hour')}:${get('minute')}`
  const today = openingHours.find((d) => d.index === dayIndex)
  const open = !!today?.open && now >= today.open && now < today.close!
  return { open, dayIndex }
}

export function useUkStatus() {
  const [status, setStatus] = useState<{ open: boolean; dayIndex: number } | null>(null)
  useEffect(() => {
    setStatus(getUkStatus())
    const id = setInterval(() => setStatus(getUkStatus()), 60_000)
    return () => clearInterval(id)
  }, [])
  return status
}

export function OpenBadge({ dark = false }: { dark?: boolean }) {
  const status = useUkStatus()
  if (!status) return <span className="inline-block h-7" />
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? 'bg-white/10 text-cream' : 'bg-ink/5 text-ink'
      }`}
    >
      <span className={`relative flex h-2 w-2`}>
        {status.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${status.open ? 'bg-emerald-500' : 'bg-rose-400'}`} />
      </span>
      {status.open ? 'Open now · until 6pm' : 'Closed now · opens 8:30am Mon–Sat'}
    </span>
  )
}
