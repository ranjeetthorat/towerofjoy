"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 * Adds an IntersectionObserver that toggles the `.visible` class
 * on any element with the `.reveal` class.
 * This component renders nothing – it only registers the side-effect.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once revealed, stop observing to avoid re-hiding
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
