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
                  width: 7,
                  height: 7,
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

          {/* Services col */}
          <nav aria-label="Footer services navigation">
            <p className="footer__col-title">Services</p>
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

          {/* Links col */}
          <nav aria-label="Footer quick links">
            <p className="footer__col-title">Links</p>
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
          <p className="footer__copy">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
