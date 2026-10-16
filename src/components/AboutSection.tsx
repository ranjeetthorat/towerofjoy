import { siteConfig } from "../../site.config";

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about__inner">
          {/* Left: Founder Story & Personal Promise */}
          <div className="about__content reveal">
            <p className="section-label">
              <span aria-hidden="true">──</span> About Me
            </p>
            <h2 id="about-title" className="about__headline">
              {about.headline}
            </h2>
            <div className="about__body">
              {about.body.split("\n\n").map((paragraph, i) => (
                <p key={i} style={{ marginBottom: "var(--space-4)" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credibility Highlights */}
            <div className="about__tags" aria-label="Key highlights">
              {about.highlights.map((tag) => (
                <span key={tag} className="about__tag">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: The Direct Partnership Guarantee Card */}
          <div className="about__card reveal">
            <h3 className="about__card-title">
              <span role="img" aria-label="handshake">
                🤝
              </span>
              <span>My Commitment to You</span>
            </h3>
            <ul className="about__card-list">
              {about.guarantees.map((item) => (
                <li key={item} className="about__card-item">
                  <span
                    style={{
                      color: "var(--color-accent)",
                      fontWeight: "bold",
                    }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-faint)", marginBottom: "var(--space-3)" }}>
                Have a question or want to verify if your idea is doable?
              </p>
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send a voice note or message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
