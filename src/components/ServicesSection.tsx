import { siteConfig } from "../../../site.config";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="services section"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Header */}
        <div className="services__header reveal">
          <p className="section-label">
            <span aria-hidden="true">──</span> What I do
          </p>
          <h2 id="services-title" className="section-title">
            Services &amp; expertise
          </h2>
          <p className="section-body">
            A focused set of specialisations — each delivered with precision,
            full documentation, and long-term support in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="services__grid" role="list">
          {siteConfig.services.map((service, idx) => (
            <div role="listitem" key={service.id}>
              <ServiceCard
                id={service.id}
                title={service.title}
                icon={service.icon}
                summary={service.summary}
                details={service.details}
                index={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
