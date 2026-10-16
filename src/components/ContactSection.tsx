"use client";

import { useState, useRef, useId } from "react";
import { siteConfig } from "../../site.config";

type FormStatus = "idle" | "sending" | "success" | "error";

const serviceCategories = [
  "Automating My Trading Strategy (Nifty / BankNifty / Stocks)",
  "Connecting AI to My Business (Hisaab-Kitaab / Bills / Sheets)",
  "Custom Android App for My Dukaan or Trading",
  "Telegram Alerts & Workflow Bot",
  "Website & Server Care (Tension-Free)",
  "Honest Tech Advice / Review an Agency Quote",
  "Managed Cloud Infrastructure & Databases",
  "Other / Just Want to Talk",
];

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = formRef.current!;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__inner">
          {/* Left: Primary Telegram Direct Action */}
          <div className="reveal">
            <p className="section-label">
              <span aria-hidden="true">──</span> Seedhi Baat
            </p>
            <h2 id="contact-title" className="section-title">
              Have an idea or a daily headache? Let&apos;s talk.
            </h2>
            <p className="section-body">
              No sales pitches, no pushy follow-ups. Just tell me what you are
              trying to build or fix, and I&apos;ll give you a straight answer on
              how to get it done reliably and affordably.
            </p>

            {/* Telegram Direct Message Highlight Box */}
            <div className="contact__primary-cta">
              <div className="contact__telegram-box">
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: "var(--weight-bold)",
                    color: "var(--color-telegram)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  ⚡ Recommended &amp; Fastest Way
                </span>
                <h3 className="contact__telegram-title">
                  Message directly on Telegram
                </h3>
                <p className="contact__telegram-desc">
                  Voice notes, chart screenshots, and quick questions welcome.
                  I respond directly myself.
                </p>
                <div style={{ marginTop: "var(--space-2)" }}>
                  <a
                    href={siteConfig.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--telegram"
                    style={{ fontSize: "1rem" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    Start Chat on Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Other info */}
            <ul className="contact__info-items" aria-label="Other contact info">
              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span>
                  Email:{" "}
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </span>
              </li>

              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Location: {siteConfig.contact.location} (IST Timezone)</span>
              </li>
            </ul>
          </div>

          {/* Right: Fallback Email Form */}
          <div className="reveal">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="form"
              aria-label="Send a direct message"
              noValidate
            >
              <div>
                <h3 className="form__heading">Prefer email? Send a message</h3>
                <p className="form__subheading">
                  Fill in your details and I will reply within 24 hours.
                </p>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="contact-name" className="form__label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="form__input"
                    autoComplete="name"
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="contact-email" className="form__label">
                    Email or Telegram *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="text"
                    required
                    placeholder="name@email.com or @telegram"
                    className="form__input"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="contact-service" className="form__label">
                  What are you looking for?
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="form__select"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an area of interest...
                  </option>
                  {serviceCategories.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form__group">
                <label htmlFor="contact-message" className="form__label">
                  What would you like to build or solve? *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell me briefly about your trading strategy, shop/office process, or what you want to automate..."
                  className="form__textarea"
                />
              </div>

              {/* Status alerts */}
              <div
                id={statusId}
                role="status"
                aria-live="polite"
                className={`form__status${
                  status === "success"
                    ? " form__status--success"
                    : status === "error"
                    ? " form__status--error"
                    : ""
                }`}
              >
                {status === "success" &&
                  "✓ Message received! I will review your note and get back to you shortly."}
                {status === "error" &&
                  "Unable to send right now. Please message me directly on Telegram or email hello@tinycompute.site."}
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === "sending"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {status === "sending" ? "Sending note..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
