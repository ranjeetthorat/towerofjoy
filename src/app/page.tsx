import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceSpotlight from "@/components/AudienceSpotlight";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
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
        <AudienceSpotlight />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Mounts IntersectionObserver for scroll animations */}
      <ScrollReveal />
    </>
  );
}
