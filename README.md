# Liverpool Accommodation Specialists Ltd

Marketing website for Liverpool Accommodation Specialists Ltd, a property management and maintenance company serving landlords and tenants across Liverpool and the North West. The business operates fully online (no public office).

## What's on the site

- Branded homepage with hero, services, landlord/tenant information, how-it-works steps and areas covered
- Live "Open now / Closed" indicator based on UK time (Mon–Sat 8:30am – 6pm, closed Sunday)
- Enquiry form (also used for reporting repairs) handled by Netlify Forms
- Click-to-call phone number and email links throughout
- Custom logo: `public/logo.svg` (full lockup), `public/logo-mark.svg` (icon), `public/favicon.svg`

## Tech

- TanStack Start (React 19) + Vite
- Tailwind CSS 4
- Netlify Forms for enquiries, Netlify Image CDN for photography
- Deployed on Netlify

## Running locally

```bash
pnpm install
netlify dev
```

## Viewing enquiries

Form submissions appear in the Netlify dashboard under **Forms → enquiry**. To get them by email, add a form notification under **Project configuration → Notifications → Emails and webhooks**.
