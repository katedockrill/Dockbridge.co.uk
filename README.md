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

## Contact form setup

The contact form is wired to send enquiries to `hello@dockbridge.co.uk` through Resend.

Before it will send in production:

1. Create a Resend account.
2. In Resend, add and verify the sending subdomain `mail.dockbridge.co.uk`. Using a subdomain keeps Resend's email-authentication DNS separate from the Google Workspace records on the root domain.
3. Add the DNS records Resend gives you in Cloudflare and wait for the domain to show as verified.
4. Create a Resend API key with sending access.
5. In Vercel, open **Project → Settings → Environment Variables** and add:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_TO_EMAIL` = `hello@dockbridge.co.uk`
   - `CONTACT_FROM_EMAIL` = `Dockbridge Website <enquiries@mail.dockbridge.co.uk>`
6. Apply those variables to Production (and Preview if you want to test previews), then redeploy.
7. Submit a real test enquiry at `/contact` and confirm it arrives at `hello@dockbridge.co.uk`. Replies to the notification will go directly to the visitor's email address.

Do not put the Resend API key in source code or commit it to GitHub.

## Before you publish — remaining checks

1. **Domain.** `metadataBase` in `app/layout.tsx` is set for `dockbridge.co.uk`.
2. **Privacy Policy.** Have a solicitor glance at `app/privacy/page.tsx`; it is a UK GDPR-style template and should be checked before relying on it publicly.
3. **Contact form.** Complete the Resend setup above and test it end-to-end.

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
