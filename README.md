# Tiny Compute – Website

A high-performance Next.js 16 / TypeScript website for **Tiny Compute** (`https://www.tinycompute.site`), built for automated versioning and seamless Vercel deployment.

---

## Project structure

```
.
├── next.config.ts           ← ✅ Dynamic build & commit tracking (Git SHA, build #)
├── site.config.ts           ← ✅ Central site content & brand config (reads env vars)
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← Root layout + SEO metadata & metadataBase
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
│       ├── Footer.tsx       ← Displays build #, version badge & commit hash
│       └── ScrollReveal.tsx
├── vercel.json
└── .env.local.example       ← Environment variable documentation
```

---

## Getting started

```bash
npm install
cp .env.local.example .env.local   # optional: customize brand or domain
npm run dev                         # http://localhost:3000
```

---

## Brand & Domain Configuration

Brand and domain names can be swapped via environment variables without touching any source code:

| Environment Variable | Default Value | Description |
|---|---|---|
| `NEXT_PUBLIC_BRAND_NAME` | `"Tiny Compute"` | Site brand name across navigation, footer, hero, and SEO |
| `NEXT_PUBLIC_SITE_URL` | `"https://www.tinycompute.site"` | Primary site URL (canonical & metadataBase) |
| `NEXT_PUBLIC_TAGLINE` | `"Lean infrastructure and algorithmic systems..."` | Tagline in hero and footer |
| `NEXT_PUBLIC_DESCRIPTION` | `"Tiny Compute delivers lean managed infrastructure..."` | Meta description and hero copy |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `"hello@tinycompute.site"` | Public contact email address |
| `NEXT_PUBLIC_CONTACT_PHONE` | `"+91 00000 00000"` | Contact phone number |
| `NEXT_PUBLIC_CONTACT_LOCATION` | `"India"` | Location displayed in contact section |
| `NEXT_PUBLIC_GITHUB_URL` | `"https://github.com/tinycompute"` | GitHub profile link |
| `NEXT_PUBLIC_LINKEDIN_URL` | `"https://linkedin.com/company/tinycompute"` | LinkedIn page link |
| `NEXT_PUBLIC_TWITTER_HANDLE`| `"@tinycompute"` | Twitter/X handle for cards |
| `NEXT_PUBLIC_TWITTER_URL` | `"https://twitter.com/tinycompute"` | Twitter/X profile link |
| `NEXT_PUBLIC_TELEGRAM_URL` | `"https://t.me/tinycompute"` | Telegram link |

---

## Automated Build & Version Tracking

Every build automatically resolves and embeds version information into the site footer:
- **Application Version**: `v0.1.0` (from `package.json`)
- **Build Number**: Monotonically incrementing commit count (`git rev-list --count HEAD` or `BUILD_NUMBER`)
- **Commit SHA**: Short git hash (`git rev-parse --short HEAD` or `VERCEL_GIT_COMMIT_SHA`)

This enables instant verification that your latest commit has been built and deployed on the live site.

---

## Deploying to Vercel

1. Push to your Git repository.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. (Optional) Set custom environment variables in **Settings → Environment Variables** if you want to override the default domain or brand.
4. Set email credentials:
   - `CONTACT_TO_EMAIL`
   - `RESEND_API_KEY`
5. Click **Deploy**.
