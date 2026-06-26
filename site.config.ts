/**
 * site.config.ts
 * ─────────────────────────────────────────────────────────────────
 * Central configuration file for the website.
 * Update this file to change the brand name, contact details,
 * social links, services, and any other site-wide settings.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand / business name shown across the entire site */
  brandName: "Lint Lab",

  /** Short tagline shown in the hero section */
  tagline: "Precision-engineered solutions for modern businesses.",

  /** Longer description for meta tags and hero sub-text */
  description:
    "Lint Lab delivers managed infrastructure, custom trading strategies for Indian markets, intelligent automation, and strategic consultancy — all crafted with clarity and precision.",

  /** Contact details */
  contact: {
    email: "hello@lintlab.dev",
    phone: "+91 00000 00000", // replace with real number
    location: "India",
  },

  /** Social / professional links */
  socials: {
    github: "https://github.com/lintlab",
    linkedin: "https://linkedin.com/in/lintlab",
    twitter: "https://twitter.com/lintlab",
    telegram: "https://t.me/lintlab",
  },

  /** Navigation links */
  navLinks: [
    { label: "Home",          href: "#home" },
    { label: "Services",      href: "#services" },
    { label: "About",         href: "#about" },
    { label: "Consultancy",   href: "#consultancy" },
    { label: "Contact",       href: "#contact" },
  ],

  /** ─── Services ─── */
  services: [
    {
      id: "managed-services",
      title: "Managed Services",
      icon: "ServerIcon",
      summary:
        "End-to-end infrastructure management so you can focus on building, not babysitting servers.",
      details: [
        "Web hosting & cloud server management (AWS, GCP, DigitalOcean)",
        "Content Delivery Network (CDN) setup & optimisation",
        "Managed relational & NoSQL databases (PostgreSQL, MySQL, MongoDB, Redis)",
        "Large-scale data storage management & archival (S3, MinIO, NAS)",
        "SSL/TLS certificate lifecycle management",
        "24/7 uptime monitoring & incident response",
        "Backup, disaster-recovery planning & execution",
        "Performance tuning, autoscaling & cost optimisation",
        "DevOps & CI/CD pipeline setup (GitHub Actions, Docker, Kubernetes)",
      ],
    },
    {
      id: "trading-strategies",
      title: "Custom Trading Strategies",
      icon: "ChartIcon",
      summary:
        "Algorithmic and rule-based strategies tailored for Indian equity, F&O, and commodity markets.",
      details: [
        "Fully custom strategy development for NSE & BSE",
        "Equity, Futures & Options (F&O), and commodity instruments",
        "Integration with Zerodha Kite Connect, Upstox, AngelOne APIs",
        "Backtesting frameworks and historical performance analysis",
        "Real-time signal generation and order management systems",
        "Risk management modules (stop-loss, position sizing, drawdown control)",
        "Paper trading environments before live deployment",
        "Ongoing strategy monitoring, tuning, and reporting",
      ],
    },
    {
      id: "automation",
      title: "Telegram & OpenClaw Automation",
      icon: "BotIcon",
      summary:
        "Intelligent bots and workflow automation powered by Telegram and OpenClaw pipelines.",
      details: [
        "Custom Telegram bots for alerts, commands, and data delivery",
        "OpenClaw-based workflow orchestration and automation pipelines",
        "Scheduled jobs, event-driven triggers, and webhook integrations",
        "CRM, support-ticketing, and lead-management automation",
        "API aggregation — connect any third-party service seamlessly",
        "Real-time notifications for trading signals, server alerts, and reports",
        "Natural-language command interfaces for internal tools",
        "End-to-end testing and deployment of automation flows",
      ],
    },
    {
      id: "consultancy",
      title: "Consultancy",
      icon: "ConsultIcon",
      summary:
        "Strategic technical guidance to help you make the right architectural and business decisions.",
      details: [
        "Technology stack selection and architecture review",
        "Cloud migration strategy and cost analysis",
        "Infrastructure security audits and hardening recommendations",
        "Trading system design and regulatory compliance guidance",
        "Automation ROI assessment and workflow mapping",
        "Vendor evaluation and contract negotiation support",
        "Team upskilling workshops and documentation",
        "On-demand fractional CTO engagement",
      ],
    },
  ],

  /** ─── About / founder blurb ─── */
  about: {
    headline: "Built on precision. Driven by results.",
    body: `Lint Lab is an independent consultancy and engineering studio.
We specialise in the intersection of cloud infrastructure, financial technology,
and intelligent automation — delivering solutions that are robust, maintainable,
and designed to scale.

Every engagement is treated as a long-term partnership. We keep things lean,
well-documented, and free of unnecessary complexity.`,
  },

  /** ─── Meta / SEO ─── */
  meta: {
    siteName: "Lint Lab",
    twitterHandle: "@lintlab",
    ogImage: "/og-image.png", // place a 1200×630 image in /public
  },
} as const;

export type SiteConfig = typeof siteConfig;
