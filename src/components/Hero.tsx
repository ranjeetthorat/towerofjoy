import { siteConfig } from "../../site.config";

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__inner">
        {/* Eyebrow */}
        <p className="hero__eyebrow animate-fade-up" aria-hidden="true">
          {siteConfig.brandName}
        </p>

        {/* Heading */}
        <h1
          id="hero-title"
          className="hero__title animate-fade-up animate-delay-1"
        >
          Engineering services,{" "}
          <span className="hero__title-accent">precisely delivered.</span>
        </h1>

        {/* Sub-text */}
        <p className="hero__subtitle animate-fade-up animate-delay-2">
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div className="hero__actions animate-fade-up animate-delay-3">
          <a href="#services" className="btn btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            View services
          </a>
          <a href="#contact" className="btn btn--secondary">
            Start a conversation
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero__badge-row animate-fade-up animate-delay-4">
          {[
            "NSE &amp; BSE Compatible",
            "Vercel &amp; Cloud-ready",
            "SEBI-aware Design",
            "Zero vendor lock-in",
          ].map((badge) => (
            <span
              key={badge}
              className="hero__badge"
              dangerouslySetInnerHTML={{ __html: badge }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
