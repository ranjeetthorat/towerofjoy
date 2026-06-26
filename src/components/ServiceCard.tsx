import React from "react";

// ─── Icon Map ─────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  ServerIcon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  ChartIcon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  BotIcon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M9 18h6" />
    </svg>
  ),
  ConsultIcon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  ),
};

// ─── Types ────────────────────────────────────────────────
interface ServiceCardProps {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: readonly string[];
  index: number;
}

// ─── Component ────────────────────────────────────────────
export default function ServiceCard({
  id,
  title,
  icon,
  summary,
  details,
  index,
}: ServiceCardProps) {
  const delayClass =
    index < 4 ? `animate-delay-${index + 1}` : "";

  return (
    <article
      className={`card reveal`}
      id={id}
      aria-labelledby={`service-title-${id}`}
      tabIndex={0}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Icon */}
      <div className="card__icon" aria-hidden="true">
        {icons[icon] ?? icons.ServerIcon}
      </div>

      {/* Heading */}
      <h3 className="card__title" id={`service-title-${id}`}>
        {title}
      </h3>

      {/* Summary */}
      <p className="card__summary">{summary}</p>

      {/* Detail list */}
      <ul
        className="card__details"
        aria-label={`${title} – what's included`}
      >
        {details.map((item) => (
          <li key={item} className="card__detail-item">
            <span className="card__detail-bullet" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="card__cta">
        <a
          href="#contact"
          className="btn btn--ghost"
          aria-label={`Enquire about ${title}`}
        >
          Enquire
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
