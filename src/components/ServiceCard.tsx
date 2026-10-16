import React from "react";
import { siteConfig } from "../../site.config";

// ─── SVG Icons ─────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  // Trading Chart Icon
  ChartIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  // Brain / AI Icon
  BrainIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
    </svg>
  ),
  // Android / Mobile Icon
  MobileIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  ),
  // Telegram / Bot Icon
  BotIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M9 18h6" />
    </svg>
  ),
  // Server / Care Icon
  ServerIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Honest Advice / Consult Icon
  ConsultIcon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  ),
};

interface ServiceCardProps {
  id: string;
  title: string;
  category?: string;
  icon: string;
  iconType?: "emerald" | "blue" | "amber";
  summary: string;
  details: readonly string[];
  index: number;
}

export default function ServiceCard({
  id,
  title,
  category,
  icon,
  iconType = "emerald",
  summary,
  details,
  index,
}: ServiceCardProps) {
  const iconClass =
    iconType === "blue"
      ? "card__icon card__icon--blue"
      : iconType === "amber"
      ? "card__icon card__icon--amber"
      : "card__icon";

  return (
    <article
      className="card reveal"
      id={id}
      aria-labelledby={`service-title-${id}`}
      tabIndex={0}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Icon */}
        <div className={iconClass} aria-hidden="true">
          {icons[icon] ?? icons.ChartIcon}
        </div>
        {category && (
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: "var(--weight-semibold)",
              color: "var(--color-text-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {category}
          </span>
        )}
      </div>

      {/* Heading */}
      <h3 className="card__title" id={`service-title-${id}`}>
        {title}
      </h3>

      {/* Summary */}
      <p className="card__summary">{summary}</p>

      {/* Detail list */}
      <ul className="card__details" aria-label={`${title} – key points`}>
        {details.map((item) => (
          <li key={item} className="card__detail-item">
            <span className="card__detail-bullet" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Action to message on Telegram */}
      <div style={{ marginTop: "auto", paddingTop: "var(--space-4)" }}>
        <a
          href={siteConfig.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary"
          style={{ width: "100%", justifyContent: "space-between", fontSize: "var(--text-xs)" }}
          aria-label={`Discuss ${title} with me on Telegram`}
        >
          <span>Ask me about this</span>
          <svg
            width="14"
            height="14"
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
      </div>
    </article>
  );
}
