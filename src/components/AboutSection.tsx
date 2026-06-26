import { siteConfig } from "../../site.config";

const stats = [
  { value: "4+", label: "Service verticals" },
  { value: "∞", label: "Scalable infrastructure" },
  { value: "NSE", label: "Market coverage" },
  { value: "24/7", label: "Monitoring & support" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about__inner">
          {/* Left – copy */}
          <div className="about__content reveal">
            <p className="section-label">
              <span aria-hidden="true">──</span> About
            </p>
            <div className="divider" aria-hidden="true" />
            <h2 id="about-title" className="about__headline">
              {siteConfig.about.headline}
            </h2>
            <p className="about__body">{siteConfig.about.body}</p>
          </div>

          {/* Right – stats grid */}
          <div
            className="about__stats reveal"
            aria-label="Quick statistics"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <p className="about__stat-value" aria-label={stat.value}>
                  {stat.value}
                </p>
                <p className="about__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
