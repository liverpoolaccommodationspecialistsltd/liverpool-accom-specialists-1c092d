import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { business } from '@/data/business'

const enquiryTypes = [
  'Property management for my home / portfolio',
  'Report a repair or maintenance issue',
  'Request a maintenance quote',
  'Tenant enquiry',
  'Something else',
]

type State = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    const form = e.currentTarget
    try {
      // Posts to the static skeleton so Netlify Forms handles it, not the SSR function.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-8 shadow-xl shadow-ink/5 ring-1 ring-ink/5 sm:p-10">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <h3 className="font-display text-3xl font-semibold">Thank you — we've got your message.</h3>
        <p className="text-ink/70">
          We'll be in touch within working hours (Mon–Sat, 8:30am – 6pm). If it's urgent, please call us on{' '}
          <a className="font-bold underline decoration-brass underline-offset-4" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
          .
        </p>
        <button onClick={() => setState('idle')} className="text-sm font-bold text-brass-dark hover:underline">
          Send another enquiry
        </button>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-brass focus:ring-4 focus:ring-brass/20'

  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl bg-white p-6 shadow-xl shadow-ink/5 ring-1 ring-ink/5 sm:grid-cols-2 sm:p-10"
    >
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <label className="grid gap-2 text-sm font-semibold">
        Your name
        <input name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.co.uk" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Phone <span className="font-normal text-ink/50">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="07…" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Property area / postcode
        <input name="propertyArea" className={field} placeholder="e.g. L17, Wirral, Warrington" />
      </label>
      <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
        What can we help with?
        <select name="enquiryType" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose an option
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about the property or the issue — the more detail, the quicker we can help."
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/55">We reply Monday to Saturday, 8:30am – 6pm.</p>
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-3.5 font-bold text-ink transition hover:bg-brass-light disabled:opacity-60"
        >
          {state === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send enquiry
        </button>
      </div>
      {state === 'error' && (
        <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 sm:col-span-2">
          Sorry, that didn't send. Please try again or email us at {business.email}.
        </p>
      )}
    </form>
  )
}
