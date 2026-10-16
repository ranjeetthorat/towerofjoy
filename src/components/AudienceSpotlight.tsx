import { siteConfig } from "../../site.config";

export default function AudienceSpotlight() {
  const { trader, business } = siteConfig.spotlight;

  return (
    <section className="spotlight section" aria-label="Who We Serve">
      <div className="container">
        <div className="spotlight__grid">
          {/* Card A: For Individual Traders */}
          <article
            id={trader.id}
            className="spotlight__card reveal"
            aria-labelledby="trader-spotlight-title"
          >
            <div className="spotlight__tag">{trader.tag}</div>
            <h2 id="trader-spotlight-title" className="spotlight__title">
              {trader.title}
            </h2>

            {/* Simple 1-line punchy bullet points */}
            <ul className="spotlight__list" aria-label="Trader capabilities">
              {trader.points.map((point) => (
                <li key={point} className="spotlight__item">
                  <span className="spotlight__bullet" aria-hidden="true">
                    ✓
                  </span>
                  <span className="spotlight__item-text">{point}</span>
                </li>
              ))}
            </ul>

            <a href={trader.actionHref} className="spotlight__link">
              <span>{trader.actionText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </article>

          {/* Card B: For Small Businesses & Proprietors */}
          <article
            id={business.id}
            className="spotlight__card reveal"
            aria-labelledby="business-spotlight-title"
          >
            <div className="spotlight__tag spotlight__tag--business">
              {business.tag}
            </div>
            <h2 id="business-spotlight-title" className="spotlight__title">
              {business.title}
            </h2>

            {/* Simple 1-line punchy bullet points */}
            <ul className="spotlight__list" aria-label="Business automation capabilities">
              {business.points.map((point) => (
                <li key={point} className="spotlight__item">
                  <span
                    className="spotlight__bullet spotlight__bullet--business"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="spotlight__item-text">{point}</span>
                </li>
              ))}
            </ul>

            <a href={business.actionHref} className="spotlight__link">
              <span>{business.actionText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
