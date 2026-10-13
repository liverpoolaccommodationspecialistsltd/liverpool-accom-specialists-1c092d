import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  Hammer,
  Home,
  KeyRound,
  Laptop,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { ContactForm } from '@/components/ContactForm'
import { Logo } from '@/components/Logo'
import { OpenBadge, useUkStatus } from '@/components/OpenStatus'
import { areas, business, openingHours } from '@/data/business'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// Serve generated photography through the Netlify Image CDN at a sensible size.
const img = (file: string, w: number) => `/.netlify/images?url=/img/${file}&w=${w}&fm=webp`

const services = [
  {
    icon: KeyRound,
    title: 'Full property management',
    body: 'Hands-off letting for landlords: rent collection, tenant communication, renewals and regular inspections — handled end to end.',
  },
  {
    icon: Users,
    title: 'Tenant finding & referencing',
    body: 'Marketing, viewings, thorough referencing and right-to-rent checks so you get reliable tenants, faster.',
  },
  {
    icon: Wrench,
    title: 'Repairs & maintenance',
    body: 'Plumbing, electrics, joinery, decorating and general repairs carried out by trusted local trades.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & safety',
    body: 'Gas safety, EICRs, EPCs, smoke and CO alarms — we track renewals and keep your property legal.',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspections & inventories',
    body: 'Detailed photo inventories, check-ins, check-outs and mid-tenancy reports you can rely on.',
  },
  {
    icon: Sparkles,
    title: 'Refurbs & void turnarounds',
    body: 'Cleans, refreshes and refurbishments between tenancies to keep void periods short and rents strong.',
  },
]

const steps = [
  { n: '01', title: 'Get in touch', body: 'Call, email or send the form. Tell us about your property or the job that needs doing.' },
  { n: '02', title: 'Tailored plan', body: 'We agree a clear plan and quote — no hidden extras, no long tie-ins.' },
  { n: '03', title: 'We take it from here', body: 'Our team and trusted trades get to work. You get updates by phone, email or message.' },
  { n: '04', title: 'Ongoing peace of mind', body: 'Regular check-ins, compliance reminders and fast fixes, all year round.' },
]

function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <Services />
      <Split />
      <HowItWorks />
      <Areas />
      <HoursAndContact />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream">
      <img
        src={img('hero.png', 1800)}
        alt="Red-brick Georgian terraced houses on a cobbled Liverpool street at golden hour"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="max-w-2xl">
          <div className="rise">
            <OpenBadge dark />
          </div>
          <h1 className="rise rise-2 mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Your property,
            <br />
            <span className="italic text-brass-light">properly</span> looked after.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {business.name} provides property management and maintenance for landlords and tenants across{' '}
            {business.region}. Reliable, local and refreshingly easy to reach.
          </p>
          <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-4 font-bold text-ink transition hover:bg-brass-light"
            >
              Get a free quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 font-bold text-cream transition hover:bg-cream/10"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: MapPin, label: 'Liverpool & North West' },
    { icon: Laptop, label: '100% online — no office overheads' },
    { icon: CalendarClock, label: 'Mon–Sat, 8:30am – 6pm' },
    { icon: BadgeCheck, label: 'Vetted local trades' },
  ]
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 text-sm font-semibold lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-brass-dark" />
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brass-dark">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink/70">{intro}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="grain py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Management and maintenance, under one roof."
          intro="Whether you own a single flat or a growing portfolio, we take the day-to-day off your plate and keep your property in great shape."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-3xl bg-white p-8 ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-brass-light transition group-hover:bg-brass group-hover:text-ink">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Split() {
  return (
    <section className="bg-ink py-24 text-cream lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={img('interior.png', 1000)}
            alt="Bright refurbished apartment living room with exposed brick"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <img
            src={img('maintenance.png', 600)}
            alt="Tradesperson repairing a kitchen tap"
            loading="lazy"
            className="absolute -bottom-10 -right-2 hidden aspect-[4/3] w-1/2 rounded-2xl object-cover ring-8 ring-ink sm:block lg:-right-8"
          />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brass-light">For landlords</p>
            <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Less admin. More return.</h3>
            <p className="mt-4 leading-relaxed text-cream/75">
              We look after tenants, repairs and compliance so your investment runs smoothly — with clear reporting
              and a single point of contact who actually picks up the phone.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brass-light">For tenants</p>
            <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Repairs reported in minutes.</h3>
            <p className="mt-4 leading-relaxed text-cream/75">
              Something broken? Send us a message or give us a call. We'll arrange a trusted tradesperson and keep
              you updated until it's fixed.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-brass-light hover:underline">
            Start an enquiry <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Simple, online and personal."
          intro="We don't have a high-street office — we run fully online. That means lower costs for you and faster replies, without losing the personal touch."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink/10 ring-1 ring-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-paper p-8">
              <span className="font-display text-5xl font-semibold text-brass">{s.n}</span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section id="areas" className="relative isolate overflow-hidden py-24 text-cream lg:py-32">
      <img
        src={img('waterfront.png', 1800)}
        alt="Liverpool's Royal Albert Dock at blue hour"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brass-light">Areas we cover</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Liverpool and right across the North West.
        </h2>
        <ul className="mt-12 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li
              key={a}
              className="flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-5 py-2.5 text-sm font-semibold backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-brass-light" /> {a}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-cream/70">Not on the list? Get in touch — if you're in the North West, we can likely help.</p>
      </div>
    </section>
  )
}

function HoursAndContact() {
  const status = useUkStatus()
  return (
    <section id="contact" className="grain py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your property."
            intro="Call, email or use the form. We're an online business with no office to visit — so we come to you."
          />
          <div className="grid gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5 transition hover:ring-brass"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brass-light">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">Call us</span>
                <span className="text-lg font-bold">{business.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5 transition hover:ring-brass"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-brass-light">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">Email us</span>
                <span className="block break-all font-bold">{business.email}</span>
              </span>
            </a>
          </div>
          <div id="hours" className="rounded-3xl bg-ink p-7 text-cream">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold">Opening hours</h3>
              <OpenBadge dark />
            </div>
            <ul className="mt-5 divide-y divide-cream/10 text-sm">
              {openingHours.map((d) => {
                const isToday = status?.dayIndex === d.index
                return (
                  <li
                    key={d.day}
                    className={`flex justify-between py-2.5 ${isToday ? 'font-bold text-brass-light' : 'text-cream/80'}`}
                  >
                    <span>
                      {d.day}
                      {isToday && <span className="ml-2 text-xs uppercase tracking-wider">Today</span>}
                    </span>
                    <span>{d.open ? '8:30am – 6:00pm' : 'Closed'}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
            Property management and maintenance across {business.region}. Operating fully online.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-bold uppercase tracking-wider text-brass-light">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-cream/80">
            <li>
              <a href={business.phoneHref} className="hover:text-cream">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="break-all hover:text-cream">
                {business.email}
              </a>
            </li>
            <li>Mon–Sat 8:30am – 6pm · Sun closed</li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-bold uppercase tracking-wider text-brass-light">Services</h4>
          <ul className="mt-4 space-y-2 text-cream/80">
            <li className="flex items-center gap-2"><Home className="h-4 w-4" /> Property management</li>
            <li className="flex items-center gap-2"><Hammer className="h-4 w-4" /> Repairs & maintenance</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Compliance & safety</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream/50 lg:px-8">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
