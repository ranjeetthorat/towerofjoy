import { siteConfig } from "../../site.config";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__split">
          {/* Left Column: Copy & Actions */}
          <div className="hero__content">
            {/* Professional Eyebrow Pill */}
            <div className="animate-fade-up">
              <div className="hero__pill">
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
                <span>
                  AI Integrations • Automation • Modern Web Systems
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="hero__title animate-fade-up animate-delay-1"
            >
              Big Ideas. Smart Technology.{" "}
              <span className="hero__title-accent">
                No Big-Company Complexity.
              </span>
            </h1>

            {/* Grounded Sub-text */}
            <p className="hero__subtitle animate-fade-up animate-delay-2">
              {siteConfig.description}
            </p>

            {/* Action Buttons */}
            <div className="hero__actions animate-fade-up animate-delay-3">
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--telegram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Chat with me on Telegram
              </a>

              <a href="#offerings" className="btn btn--secondary">
                See How I Can Help ↓
              </a>
            </div>
          </div>

          {/* Right Column: AI & Automation Platform Visual */}
          <HeroVisual />
        </div>

        {/* 4 Trust Badges */}
        <div
          className="trust-bar animate-fade-up animate-delay-4"
          aria-label="Trust guarantees"
        >
          {siteConfig.trustBadges.map((badge) => (
            <div key={badge.text} className="trust-bar__item">
              <span className="trust-bar__icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
