// Consultancy section — pulled from the service with id "consultancy"
import { siteConfig } from "../../site.config";

// Icons for consultancy items (in order matching details array)
const itemIcons = [
  // Tech stack
  <svg key="stack" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  // Cloud migration
  <svg key="cloud" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" /></svg>,
  // Security
  <svg key="shield" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Trading / compliance
  <svg key="chart" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  // Automation ROI
  <svg key="zap" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  // Vendor eval
  <svg key="search" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  // Team upskilling
  <svg key="users" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // CTO
  <svg key="briefcase" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="17" /><line x1="9" y1="14.5" x2="15" y2="14.5" /></svg>,
];

export default function ConsultancySection() {
  const consultancy = siteConfig.services.find((s) => s.id === "consultancy");
  if (!consultancy) return null;

  return (
    <section
      id="consultancy"
      className="consultancy section"
      aria-labelledby="consultancy-title"
    >
      <div className="container">
        <div className="consultancy__inner">
          {/* Left – detail items */}
          <div className="reveal">
            <p className="section-label">
              <span aria-hidden="true">──</span> Consultancy
            </p>
            <h2 id="consultancy-title" className="section-title">
              Strategic guidance,
              <br />
              not just execution.
            </h2>
            <p className="section-body">{consultancy.summary}</p>

            <ul className="consultancy__list" aria-label="Consultancy offerings">
              {consultancy.details.map((item, idx) => (
                <li key={item} className="consultancy__item">
                  <span className="consultancy__item-icon" aria-hidden="true">
                    {itemIcons[idx] ?? itemIcons[0]}
                  </span>
                  <div>
                    <p className="consultancy__item-title">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – sticky CTA panel */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="consultancy__panel" role="complementary" aria-label="Book a consultation">
              <p className="section-label">
                <span aria-hidden="true">──</span> Let&apos;s talk
              </p>
              <h3 className="consultancy__panel-title">
                Need an expert opinion?
              </h3>
              <p className="consultancy__panel-body">
                Whether you&apos;re evaluating a new cloud architecture, trying
                to understand trading API constraints, or simply need a second
                pair of eyes on your system — I&apos;m available for focused,
                time-boxed consultancy sessions.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <a href="#contact" className="btn btn--primary" style={{ justifyContent: "center" }}>
                  Book a session
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="btn btn--ghost" style={{ justifyContent: "center" }}>
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Availability indicator */}
              <div style={{
                marginTop: "var(--space-8)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: "9999px",
                  background: "var(--color-success)",
                  flexShrink: 0,
                  boxShadow: "0 0 8px rgba(62,207,142,0.6)",
                }} aria-hidden="true" />
                Currently accepting new clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
