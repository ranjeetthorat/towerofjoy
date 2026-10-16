import { siteConfig } from "../../site.config";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Brand col */}
          <div className="footer__brand-col">
            <p className="footer__brand-name">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "9999px",
                  background: "var(--color-accent)",
                  display: "inline-block",
                  marginRight: "var(--space-2)",
                  verticalAlign: "middle",
                }}
                aria-hidden="true"
              />
              {siteConfig.brandName}
            </p>
            <p className="footer__tagline">{siteConfig.tagline}</p>
          </div>

          {/* Solutions col */}
          <nav aria-label="Footer services navigation">
            <p className="footer__col-title">What I Build</p>
            <ul className="footer__col-links">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="footer__col-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links col */}
          <nav aria-label="Footer quick links">
            <p className="footer__col-title">Quick Links</p>
            <ul className="footer__col-links">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__col-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__meta">
            <p className="footer__copy">
              &copy; {currentYear} {siteConfig.brandName}. Built with care for
              Indian traders and business owners.
            </p>
            <p
              className="footer__build-info"
              title={
                siteConfig.build.buildTime
                  ? `Built: ${siteConfig.build.buildTime}`
                  : undefined
              }
            >
              <span className="footer__build-badge">v{siteConfig.build.version}</span>
              <span className="footer__build-sep">•</span>
              <span>Build #{siteConfig.build.buildNumber}</span>
              <span className="footer__build-sep">•</span>
              <span className="footer__commit-sha">{siteConfig.build.commitSha}</span>
            </p>
          </div>

          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            {siteConfig.socials.telegram && (
              <a
                href={siteConfig.socials.telegram}
                className="footer__col-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram contact"
              >
                Telegram
              </a>
            )}
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                className="footer__col-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                className="footer__col-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
