"use client";

import { useEffect, useState, useCallback } from "react";
import { siteConfig } from "../../../site.config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`nav${scrolled ? " nav--scrolled" : ""}`}
      role="banner"
    >
      <div className="nav__inner">
        {/* Brand */}
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label={`${siteConfig.brandName} – go to homepage`}
        >
          <span className="nav__brand-dot" aria-hidden="true" />
          {siteConfig.brandName}
        </a>

        {/* Desktop navigation */}
        <nav
          className={`nav__links${menuOpen ? " nav__links--open" : ""}`}
          aria-label="Primary navigation"
          id="main-nav"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
