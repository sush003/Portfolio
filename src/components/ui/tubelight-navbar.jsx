import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const aboutSection = document.getElementById("about");

      if (heroSection && aboutSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Hide if in hero section (before hero section ends)
        if (scrollY < heroBottom) {
          setIsVisible(false);
        }
        // Show as soon as we've scrolled past the hero section
        else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "fixed top-6 left-0 right-0 z-50 flex justify-center items-start",
            className
          )}
        >
          <div className="flex items-center gap-1 bg-[#121212] border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                    const targetId = item.url.replace("#", "");
                    const targetElement =
                      document.getElementById(targetId) ||
                      document.querySelector(item.url);
                    if (targetElement) {
                      targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className={cn(
                    "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors",
                    "text-gray-400 hover:text-gray-100",
                    isActive && "bg-[#1C1C1C] text-white"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#1C1C1C] rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                      {/* <motion.div
                    layoutId="indicator"
                    className="absolute -top-3 left-1.1 -translate-x-1/7 w-12 h-2 bg-white rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  /> */}
                    </>
                  )}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
