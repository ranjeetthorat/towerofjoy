import { siteConfig } from "../../site.config";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const { advancedInfrastructure } = siteConfig;

  return (
    <section
      id="offerings"
      className="services section"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="services__header reveal">
          <p className="section-label">
            <span aria-hidden="true">──</span> Practical Solutions
          </p>
          <h2 id="services-title" className="section-title">
            How I Help You — Seedhi Baat, No Jargon
          </h2>
          <p className="section-body">
            Direct, practical technology for your daily work — whether you trade
            in the markets or run a business. No corporate fluff, no fake promises.
          </p>
        </div>

        {/* 6 Core Benefit Cards */}
        <div className="services__grid" role="list">
          {siteConfig.services.map((service, idx) => (
            <div role="listitem" key={service.id}>
              <ServiceCard
                id={service.id}
                title={service.title}
                category={service.category}
                icon={service.icon}
                iconType={service.iconType as "emerald" | "blue" | "amber"}
                summary={service.summary}
                details={service.details}
                index={idx}
              />
            </div>
          ))}
        </div>

        {/* Secondary Callout for Advanced Managed Services & Databases (as requested in problem.md) */}
        <div className="managed-callout reveal" id="managed-infrastructure">
          <div className="managed-callout__content">
            <h3 className="managed-callout__title">
              {advancedInfrastructure.title}
            </h3>
            <p className="managed-callout__desc">
              {advancedInfrastructure.description}
            </p>
          </div>
          <a
            href={siteConfig.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <span>{advancedInfrastructure.actionText}</span>
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
        </div>
      </div>
    </section>
  );
}
