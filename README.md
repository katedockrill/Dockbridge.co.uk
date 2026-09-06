# Dockbridge Advisory — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Pages

- `/` — Home
- `/services` — Services overview
- `/services/energy` — Energy
- `/services/water` — Water
- `/services/business-advisory` — Business Advisory
- `/about` — About
- `/insights` — Insights (3 written articles)
- `/contact` — Contact (form + direct email)
- `/privacy` — Privacy Policy

Navigation is deliberately flat (Services / About / Insights / Contact) with
Energy, Water and Business Advisory as children of Services — this keeps the
site reading as a broad commercial advisory firm rather than an energy
business with two add-ons.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.17 or later installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before you publish — 3 things to finish

1. **Wire up the contact form to actually send email.**
   Right now `app/api/contact/route.ts` receives the form submission and
   logs it, but doesn't send anything anywhere. Pick one:
   - Easiest: sign up for [Resend](https://resend.com) (free tier is
     plenty) and add ~5 lines to `route.ts` to send an email to
     hello@dockbridge.co.uk. Their docs have a copy-paste Next.js example.
   - Alternative: swap the form to post straight to
     [Formspree](https://formspree.io) or Netlify Forms instead of your own
     API route — no backend code needed at all.

2. **Buy/point the domain.** Update `metadataBase` in `app/layout.tsx` if
   the live domain differs from `dockbridge.co.uk`.

3. **Have a solicitor glance at the Privacy Policy** (`app/privacy/page.tsx`).
   It's a genuine, complete UK GDPR-style policy, but it's a template — it
   flags this in a note on the page itself, which you should remove once
   it's been checked and the "last updated" date is filled in.

## Deploying

The simplest route for a Next.js site is **Vercel** (made by the same
people as Next.js, free for a site like this):

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign up, and "Import Project"
   from that repository.
3. Vercel detects Next.js automatically — just click Deploy.
4. Once live, add your domain under Project → Settings → Domains and
   follow their DNS instructions.

Netlify and Cloudflare Pages also support Next.js if you'd rather use
one of those.

## Images

- `public/images/hero.jpg`, `architecture.jpg`, `business-environment.jpg`,
  `detail.jpg`, `energy-infra.jpg`, `water.jpg`, `advisory.jpg`,
  `brand-statement.jpg`, `uk-landscape.jpg`, `values.jpg` and the logo files
  were supplied by Dockbridge directly (photography moodboard + logo) and
  are yours to use freely.
- Three images (in the Insights section and pages) are hotlinked to
  Unsplash's own CDN under the free [Unsplash License](https://unsplash.com/license),
  which permits commercial use without attribution. If you'd rather not
  depend on an external host, download them and drop them into
  `public/images/` instead, then update the three `src` values in
  `app/page.tsx` and `app/insights/page.tsx` to local paths.

## Content that still needs real input

- **Insights articles** are genuinely written, not placeholder lorem
  ipsum — but as the business builds a track record, replace or add to
  them with real examples (kept free of invented statistics or case
  studies, per your original brief).
- No fake testimonials, client logos, stats, awards or "years in
  business" claims have been used anywhere, on purpose — add real ones
  as they exist.

## Design system

- Colours, type and spacing tokens live in `tailwind.config.ts` and are
  also inlined as hex values in components (kept explicit rather than
  only Tailwind classes, so a designer can tweak a single value later).
- Fonts: Playfair Display (serif, headings) + Inter (sans, everything
  else), loaded via `next/font/google` — no extra setup needed, and no
  external font request at runtime.
