import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { setupGSAPAnimations } from "./hooks/useGSAP";
import { NavBarDemo } from "./components/navbar";
import { PixelCursorTrail } from "./components/ui/pixel-trail";

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Prevent horizontal scroll
    window.addEventListener("scroll", () => {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Setup GSAP animations after component mounts
    setupGSAPAnimations();
  }, []);

  return (
    <>
      <PixelCursorTrail />
      <NavBarDemo />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
