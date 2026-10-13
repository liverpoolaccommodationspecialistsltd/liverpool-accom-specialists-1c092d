# AGENTS.md

Single-page marketing site for Liverpool Accommodation Specialists Ltd (property management & maintenance, Liverpool & North West). TanStack Start + React 19 + Tailwind CSS 4, deployed on Netlify.

## Structure

- `src/routes/__root.tsx` — HTML shell, meta tags, Google Fonts (Fraunces + Manrope), favicon
- `src/routes/index.tsx` — the whole homepage, split into section components (Hero, Services, Split, HowItWorks, Areas, HoursAndContact, Footer)
- `src/components/` — `Logo` (inline SVG mark + wordmark), `SiteHeader` (sticky nav + mobile menu), `ContactForm` (Netlify Forms), `OpenStatus` (UK-time open/closed badge)
- `src/data/business.ts` — single source of truth for name, email, phone, hours and areas. Update details here, not in components.
- `public/img/` — AI-generated photography; always reference via `/.netlify/images?url=/img/<file>&w=<w>&fm=webp` (see `img()` helper in index.tsx)
- `public/logo.svg`, `public/logo-mark.svg`, `public/favicon.svg` — logo assets (keep in sync with `Logo.tsx`)
- `public/__forms.html` — static skeleton so Netlify detects the `enquiry` form at build time

## Conventions / non-obvious decisions

- Brand tokens live in `@theme` in `src/styles.css`: `ink` (navy), `brass` (gold), `cream`, `paper`; fonts `font-display` / `font-sans`.
- The form POSTs via fetch to `/__forms.html` (not `/`) so the SSR function doesn't swallow it. Any new field must also be added to `public/__forms.html`.
- Open/closed status is computed client-side in `Europe/London` time after mount to avoid hydration mismatches.
- The email address spelling (`liverpoolaccomodationspecial@gmail.com`, single "m") is intentional — it's the client's real address.
- The business has no office address; don't add one.
