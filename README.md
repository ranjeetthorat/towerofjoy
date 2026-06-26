# Lint Lab – Website

A professional Next.js 16 / TypeScript website for **Lint Lab**, built for Vercel deployment.

---

## Project structure

```
.
├── site.config.ts           ← ✅ ALL site content & brand config lives here
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← Root layout + SEO metadata
│   │   ├── page.tsx         ← Main page (composes all sections)
│   │   ├── globals.css      ← Full design system (CSS custom properties)
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts ← Contact form API endpoint
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ServicesSection.tsx
│       ├── ServiceCard.tsx
│       ├── AboutSection.tsx
│       ├── ConsultancySection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── ScrollReveal.tsx
├── vercel.json
└── .env.local.example
```

---

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your values
npm run dev                         # http://localhost:3000
```

---

## Customisation

Open **`site.config.ts`** and update:

| Field | What it controls |
|---|---|
| `brandName` | Logo text, page title, footer, meta tags |
| `tagline` | Footer and hero sub-text |
| `description` | Meta description, hero paragraph |
| `contact` | Email, phone, location in the Contact section |
| `socials` | Links shown in the footer |
| `navLinks` | Top navigation items |
| `services[]` | Service cards (title, icon, summary, details bullet points) |
| `about` | The "About" section headline and body copy |
| `meta` | OG image path, site name, Twitter handle |

---

## Adding/removing services

Each service in `services[]` becomes a card. The supported `icon` values are:

- `"ServerIcon"` – managed infrastructure
- `"ChartIcon"` – trading/finance
- `"BotIcon"` – automation/bots
- `"ConsultIcon"` – consultancy / chat

To add a new icon, open `ServiceCard.tsx` and add an SVG to the `icons` map.

---

## Deploying to Vercel

1. Push to a GitHub / GitLab / Bitbucket repo.
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Add environment variables in **Settings → Environment Variables**:
   - `CONTACT_TO_EMAIL`
   - `RESEND_API_KEY` (or equivalent for your email provider)
4. Click **Deploy**.

Vercel automatically detects Next.js — no extra configuration needed beyond `vercel.json`.

---

## Wiring the contact form to email

Edit `src/app/api/contact/route.ts`. A Resend example is already commented in. Install the SDK:

```bash
npm install resend
```

Then uncomment the Resend block and set `RESEND_API_KEY` in your Vercel environment variables.

---

## Design decisions

- **Dark theme only** – `--color-bg: #0d0f14` as canonical background.
- **CSS custom properties** – all colours, spacing, and typography are tokens, so rebranding is a single-file change.
- **No Tailwind** – pure vanilla CSS for maximum clarity and zero purge complexity.
- **Keyboard accessible** – focus-visible outlines, skip-to-main link, ARIA labels on all interactive elements, Escape closes mobile menu.
- **Scroll reveal** – `IntersectionObserver` adds `.visible` to `.reveal` elements; no heavy animation libraries.
