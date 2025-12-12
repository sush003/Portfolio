import { useEffect, useRef } from "react";
import AnimatedHeroTitle from "./AnimatedHeroTitle";
import { LocationTag } from "@/components/ui/location-tag";


export default function HeroSection() {
  
  const heroSectionRef = useRef(null);
  const isInScrollZoneRef = useRef(false);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;

    // Wait for Spline viewer to be available
    const getViewer = () => document.getElementById("spline-viewer");

    let viewer = getViewer();
    let cleanupFunctions = [];

    const setupViewer = (viewerEl) => {
      if (!viewerEl) return;

      // Allow scrolling from anywhere on the hero section (from top)
      const handleMouseMove = (e) => {
        // Always allow scrolling when mouse is on hero section
        isInScrollZoneRef.current = true;
      };

      const handleMouseLeave = () => {
        isInScrollZoneRef.current = false;
      };

      // Remove watermark
      const removeWatermark = () => {
        if (viewerEl.shadowRoot) {
          const logo = viewerEl.shadowRoot.querySelector("#logo");
          if (logo) {
            logo.style.display = "none";
            console.log("Watermark removed");
          }
        }
      };

      // Remove watermark attempts
      const timeout1 = setTimeout(removeWatermark, 1000);
      const timeout2 = setTimeout(removeWatermark, 2000);
      viewerEl.addEventListener("load", removeWatermark);

      // Prevent default interactions with spline viewer
      const preventDefaults = [
        "mousedown",
        "click",
        "dblclick",
        "dragstart",
        "touchstart",
        "touchmove",
        "contextmenu",
      ];

      const preventDefaultHandlers = preventDefaults.map((event) => {
        const handler = (e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        };
        viewerEl.addEventListener(event, handler, {
          capture: true,
          passive: false,
        });
        return { event, handler };
      });

      // Handle wheel events for scrolling
      const wheelHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isInScrollZoneRef.current) {
          window.scrollBy(0, e.deltaY);
        }

        return false;
      };
      viewerEl.addEventListener("wheel", wheelHandler, {
        passive: false,
        capture: true,
      });

      // Prevent pointer lock
      const handlePointerLockChange = () => {
        if (document.pointerLockElement === viewerEl) {
          document.exitPointerLock();
        }
      };

      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("pointerlockchange", handlePointerLockChange);

      // Store cleanup functions
      cleanupFunctions = [
        () => clearTimeout(timeout1),
        () => clearTimeout(timeout2),
        () => viewerEl.removeEventListener("load", removeWatermark),
        () =>
          preventDefaultHandlers.forEach(({ event, handler }) =>
            viewerEl.removeEventListener(event, handler, { capture: true })
          ),
        () =>
          viewerEl.removeEventListener("wheel", wheelHandler, {
            capture: true,
          }),
        () => heroSection.removeEventListener("mousemove", handleMouseMove),
        () => heroSection.removeEventListener("mouseleave", handleMouseLeave),
        () =>
          document.removeEventListener(
            "pointerlockchange",
            handlePointerLockChange
          ),
      ];
    };

    if (!viewer) {
      // If not immediately available, wait a bit
      const checkViewer = setInterval(() => {
        viewer = getViewer();
        if (viewer) {
          clearInterval(checkViewer);
          setupViewer(viewer);
        }
      }, 100);

      return () => {
        clearInterval(checkViewer);
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    }

    setupViewer(viewer);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    
    <section className="hero-section" id="home" ref={heroSectionRef}>
      <div className="hero-content">
        <AnimatedHeroTitle />
        <p>Experience the magic of interactive particles</p>
        <a href="#about" className="cta-button">
          Learn More
        </a>
      </div>

      <div className="absolute top-4 right-4 z-50">
  <div className="flex flex-col text-white items-end gap-2  backdrop-blur-md rounded-md p-3 shadow-md">
    
    {/* <div className="text-white"> */}
    <LocationTag city="Nashik" country="IN" timezone="IST" />
    {/* </div> */}
    
  </div>
</div>

      <div className="scroll-indicator">
        <a href="#about">↓</a>
      </div>

      <spline-viewer
        url="https://prod.spline.design/nWDH4bXcHj1w0hva/scene.splinecode"
        id="spline-viewer"
      ></spline-viewer>
    </section>
    
  );
}
