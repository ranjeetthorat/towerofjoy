import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ConsultancySection from "@/components/ConsultancySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Accessibility: skip-to-main-content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ConsultancySection />
        <ContactSection />
      </main>

      <Footer />

      {/* Mounts IntersectionObserver for scroll animations */}
      <ScrollReveal />
    </>
  );
}
