import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeroTitle() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Chaos.", "Trauma.","Localhost.", "Portfolio.", "Beta Test."],
    []
  );
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <h1 className="animated-hero-title">
      <span className="static-text text-[4rem]">This is basically just...</span>
      <span className="animated-word-container text-[4rem]">
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="animated-word"
            initial={{ opacity: 0, y: "-200%", x: "-50%" }}
            transition={{
              opacity: { duration: 0.4, ease: "easeInOut" },
              y: { type: "spring", stiffness: 80, damping: 20 },
            }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    x: "-50%",
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? "-250%" : "250%",
                    x: "-50%",
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}


