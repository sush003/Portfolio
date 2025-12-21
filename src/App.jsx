import ReactGA from "react-ga4";
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
import { Analytics } from "@vercel/analytics/react"

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    // Force page to always load at the top on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // GA4 page tracking for SPA (including hash/section navigation)
  useEffect(() => {
    const sendPageView = () => {
      const pagePath =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      ReactGA.send({
        hitType: "pageview",
        page: pagePath,
      });
    };

    // Initial page view
    sendPageView();

    // Track hash changes (e.g., #about, #services)
    window.addEventListener("hashchange", sendPageView);

    return () => {
      window.removeEventListener("hashchange", sendPageView);
    };
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

  // GA4 custom event tracking (data-ga-event / data-ga-label)
  useEffect(() => {
    const trackClick = (e) => {
      const target = e.target.closest("[data-ga-event]");
      if (!target) return;

      const eventName = target.getAttribute("data-ga-event");
      const eventLabel = target.getAttribute("data-ga-label") || "unknown";

      ReactGA.event({
        category: "interaction",
        action: eventName,
        label: eventLabel,
      });
    };

    document.addEventListener("click", trackClick);

    return () => {
      document.removeEventListener("click", trackClick);
    };
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
       <Analytics/>
    </>
  );
}

export default App;
