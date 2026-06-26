"use client";

import { useState, useRef, useId } from "react";
import { siteConfig } from "../../../site.config";

type FormStatus = "idle" | "sending" | "success" | "error";

const serviceOptions = siteConfig.services.map((s) => s.title);

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = formRef.current!;
    const data = Object.fromEntries(new FormData(form).entries());

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
  };

  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__inner">
          {/* Left – info */}
          <div className="reveal">
            <p className="section-label">
              <span aria-hidden="true">──</span> Contact
            </p>
            <h2 id="contact-title" className="section-title">
              Start a conversation.
            </h2>
            <p className="section-body" style={{ marginBottom: "var(--space-4)" }}>
              Have a project in mind or just want to explore what&apos;s
              possible? Drop a message and I&apos;ll get back to you within one
              business day.
            </p>

            <ul className="contact__info-items" aria-label="Contact information">
              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>{siteConfig.contact.location}</span>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M21.75 0H2.25C1.007 0 0 1.007 0 2.25v19.5C0 22.993 1.007 24 2.25 24h19.5C22.993 24 24 22.993 24 21.75V2.25C24 1.007 22.993 0 21.75 0zM7.5 20.25H4.5V9h3v11.25zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm14.25 12.75h-3V14.5c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05v5.85h-3V9h2.88v1.54h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.68z" strokeWidth="0" fill="currentColor" />
                  </svg>
                </span>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Right – form */}
          <div className="reveal" style={{ transitionDelay: "0.12s" }}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="form"
              aria-label="Contact form"
              noValidate
            >
              <div className="form__row">
                {/* Name */}
                <div className="form__group">
                  <label htmlFor="contact-name" className="form__label">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form__input"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="form__group">
                  <label htmlFor="contact-email" className="form__label">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form__input"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="form__group">
                <label htmlFor="contact-service" className="form__label">
                  Service of interest
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="form__select"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                  <option value="Other">Other / General enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="form__group">
                <label htmlFor="contact-message" className="form__label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form__textarea"
                  placeholder="Tell me about your project or question…"
                  required
                  aria-describedby={statusId}
                />
              </div>

              {/* Status */}
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
                  "✓ Message sent! I'll be in touch within one business day."}
                {status === "error" &&
                  "Something went wrong. Please email me directly."}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                style={{ alignSelf: "flex-start" }}
              >
                {status === "sending" ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
