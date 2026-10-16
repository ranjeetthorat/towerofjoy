/**
 * site.config.ts
 * ─────────────────────────────────────────────────────────────────
 * Central configuration file for Tiny Compute.
 * Tailored for Indian Retail Traders and Small Business Proprietors.
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand identity */
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Tiny Compute",

  /** Primary website domain / URL */
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.tinycompute.site",

  /** Hero headline & taglines */
  heroHeadline: "Big Ideas. Smart Technology. No Big-Company Complexity.",
  
  tagline:
    process.env.NEXT_PUBLIC_TAGLINE ||
    "Custom AI integrations, high-throughput automation, and lean engineering.",

  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    "Powering your business, workflows, and trading with custom ChatGPT & Claude integrations, Telegram automation, and modern web systems — built lean, without big-company complexity.",

  /** Contact details */
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@tinycompute.site",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 00000 00000",
    location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || "India",
  },

  /** Social & External links (configurable via env variables) */
  socials: {
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/tinycompute",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tinycompute",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/tinycompute",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/tinycompute",
  },

  /** Navigation links */
  navLinks: [
    { label: "How I Help",         href: "#offerings" },
    { label: "For Traders",        href: "#for-traders" },
    { label: "For Business Owners",href: "#for-business" },
    { label: "Pricing",            href: "#pricing" },
    { label: "About Me",           href: "#about" },
    { label: "Talk to Me",         href: "#contact" },
  ],

  /** Trust badges under the hero (shown on desktop) */
  trustBadges: [
    { icon: "check", text: "Zero Upfront Fees (Pay only when it works)" },
    { icon: "check", text: "Pay Small, Pay Only What You Use" },
    { icon: "check", text: "Zerodha, AngelOne, Upstox & Dhan Ready" },
  ],

  /** 50/50 Dual Audience Spotlight */
  spotlight: {
    trader: {
      id: "for-traders",
      tag: "For Individual Traders 📈",
      title: "Your Custom Trading Strategy",
      points: [
        "20+ Indian brokers supported (Zerodha, AngelOne, Upstox, Dhan)",
        "TradingView, AmiBroker & MetaTrader connections",
        "Telegram & ChatGPT automated execution",
        "Chartink scanner alerts & custom indicator signals",
        "SEBI-compliant, non-custodial architecture",
        "Built-in stop-loss & risk management controls",
      ],
      actionText: "See details & full breakdown ↓",
      actionHref: "#trading-rules",
    },
    business: {
      id: "for-business",
      tag: "For Small Businesses & Proprietors 🏪",
      title: "Connect Your Business & Daily Work to AI",
      points: [
        "ChatGPT, Claude & Gemini private business connections",
        "100% private data & hisaab-kitaab (no leaks)",
        "Telegram bots for daily sales, reports & order alerts",
        "Automated Excel, Google Sheets & billing sync",
        "Custom Android app for your dukaan or office",
        "Tension-free website hosting & server care",
      ],
      actionText: "See details & full breakdown ↓",
      actionHref: "#business-ai",
    },
  },

  /** ─── Core Offerings (Seedhi Baat, No Jargon) ─── */
  services: [
    {
      id: "trading-rules",
      title: "Your Custom Trading Strategy",
      category: "TradingView, Broker APIs & Algos",
      icon: "ChartIcon",
      summary:
        "Turn your rules, Pine Script, AmiBroker, or TradingView charts into automated execution without emotion or screen fatigue.",
      details: [
        "TradingView, Chartink & AmiBroker Bridges: Automatically trigger live orders from TradingView webhooks, Chartink scanners, or AmiBroker AFL.",
        "Direct Broker API Integrations: Connects seamlessly with Zerodha (Kite Connect), Upstox, AngelOne, and Dhan accounts.",
        "ChatGPT Strategy Support: Build, refine, and generate your indicator code directly using ChatGPT.",
        "Built-in safety & risk rules: Automatic Stop-Loss, trailing profit locks, maximum daily loss cap, and instant Telegram trade alerts.",
      ],
      iconType: "emerald",
    },
    {
      id: "business-ai",
      title: "Connect Your Business & Daily Work to AI",
      category: "ChatGPT, Claude & Gemini for Office Work",
      icon: "BrainIcon",
      summary:
        "Connect ChatGPT, Claude, and Gemini privately to your bills, sheets, and documents to do actual work for you.",
      details: [
        "Connected privately to ChatGPT, Claude & Gemini: Connect AI privately to your PDFs, invoices, price lists, customer records, and Excel spreadsheets.",
        "Instant answers without manual searching: Ask 'What rate did we quote Sharma Traders last month?' or 'Summarize this week's pending bills' in seconds.",
        "Make AI execute tasks, not just chat: Auto-update Google Sheets, draft customer quotations, organize order emails, and reconcile accounts.",
        "100% Private & Secure: Your private business data and hisaab-kitaab stay strictly inside your own private setup — never shared or leaked.",
      ],
      iconType: "blue",
    },
    {
      id: "android-apps",
      title: "Custom Android Apps for Your Dukaan or Trading",
      category: "Mobile Pocket Utility",
      icon: "MobileIcon",
      summary:
        "A simple, fast Android app on your phone — no complicated menus, just the exact buttons you need.",
      details: [
        "Made for your daily routine: An app custom-made for your shop orders, customer udhaar/khata, product catalogue, or dispatch status.",
        "For traders on the move: View live signals, monitor running trading bots, and pause or resume strategies with one tap from anywhere.",
        "Works offline and loads instantly without heavy software overhead.",
        "Delivered directly to your phone as a lightweight Android app (APK).",
      ],
      iconType: "emerald",
    },
    {
      id: "telegram-automation",
      title: "Run Your Daily Work & Alerts from Telegram",
      category: "Phone Control",
      icon: "BotIcon",
      summary:
        "Control your business or trading setup directly from your phone on Telegram.",
      details: [
        "Instant Telegram messages the moment a trade executes, a customer makes an order, or a daily sales summary is ready.",
        "Stop manual copy-pasting: Automatically move data between Google Forms, Excel sheets, billing tools, and customer chats.",
        "Send simple text commands on Telegram to check reports, pause your bot, or fetch customer details on the go.",
      ],
      iconType: "blue",
    },
    {
      id: "server-care",
      title: "\"Tension-Free\" Website & Server Care",
      category: "Hands-Off Reliability",
      icon: "ServerIcon",
      summary:
        "You run your business. I'll babysit your computers, websites, and databases.",
      details: [
        "Don't know how cloud servers, hosting, or domains work? You don't need to. I handle the entire technical setup.",
        "Automatic Daily Backups: Your customer data, website, and billing records are backed up every day so you never lose a file.",
        "24/7 Watchdog & Cost Cutting: If your site slows down, I fix it. Plus, I trim your cloud bills so you aren't overpaying.",
      ],
      iconType: "amber",
    },
    {
      id: "honest-advice",
      title: "Honest Tech Advice (Before You Spend Money)",
      category: "Consultancy & Guidance",
      icon: "ConsultIcon",
      summary:
        "Talk to me before an agency or software vendor overcharges you.",
      details: [
        "Confused about which software to buy, or received a huge quote from an agency for a simple website?",
        "Sit with me for a quick call. I will tell you in plain language what you actually need and how to do it cheaply.",
        "Save your hard-earned money and avoid paying for useless corporate bells and whistles.",
      ],
      iconType: "emerald",
    },
  ],

  /** Secondary / Advanced Managed Infrastructure Callout */
  advancedInfrastructure: {
    title: "Need Deeper Cloud Infrastructure or Database Engineering?",
    description:
      "If your startup or business is growing and needs managed PostgreSQL, Redis, custom APIs, automated CI/CD pipelines, or high-throughput cloud servers on AWS/GCP/DigitalOcean — I provide end-to-end architecture and maintenance.",
    actionText: "Ask about managed cloud services",
    actionHref: "#contact",
  },

  /** ─── Pricing & How We Work (High-Trust Highlight Box) ─── */
  pricing: {
    heading: "Simple, Honest Pricing — Built for Individual Pockets",
    subheading:
      "Big IT agencies charge lakhs in advance and lock you into heavy contracts. At Tiny Compute, we work the opposite way:",
    features: [
      {
        badge: "₹0",
        title: "Zero Upfront Fees",
        description:
          "We discuss your problem, I show you a working solution or clear plan, and you don't pay heavy advance fees to get started.",
      },
      {
        badge: "Pay Small",
        title: "Pay Only What You Use",
        description:
          "Whether it's a small Telegram bot, a custom Android tool, an algo trading script, or monthly website care — you only pay tiny, fair amounts for what you need.",
      },
      {
        badge: "100%",
        title: "Stop Anytime, Zero Lock-In",
        description:
          "Your code, your data, and your accounts always belong strictly to you. No hidden lock-in or retention tricks, ever.",
      },
    ],
  },

  /** ─── About Me ─── */
  about: {
    headline: "Why work with Tiny Compute? Because you work directly with me.",
    body: `Hi, I'm an independent systems engineer and developer. When you hire an agency, you talk to a smooth salesperson and your project gets handed off to an inexperienced junior. With Tiny Compute, there are no middlemen.

I understand both high-level cloud engineering and the ground reality of Indian traders and small business owners. You don't need to learn fancy tech words — just tell me on a call or Telegram voice note where your time is getting wasted or how you trade, and I'll build a reliable system that solves it.`,
    highlights: [
      "1-on-1 Direct Access",
      "TradingView & Broker API Experience",
      "AI & Telegram Specialist",
      "Android App Builder",
      "Plain-Language Support (Seedhi Baat)",
    ],
    guarantees: [
      "Personal code & architecture reviews by me",
      "Direct response via Telegram or email — no ticket queues",
      "Strict confidentiality for your trading strategies & business data",
    ],
  },

  /** ─── Build / Version Metadata ─── */
  build: {
    version: process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0",
    buildNumber: process.env.NEXT_PUBLIC_BUILD_NUMBER || "1",
    commitSha: process.env.NEXT_PUBLIC_COMMIT_SHA || "dev",
    buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || "",
  },

  /** ─── Meta / SEO ─── */
  meta: {
    siteName: process.env.NEXT_PUBLIC_BRAND_NAME || "Tiny Compute",
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@tinycompute",
    ogImage: "/og-image.png",
  },
} as const;

export type SiteConfig = typeof siteConfig;
