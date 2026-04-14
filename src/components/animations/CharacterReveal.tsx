"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function CharacterReveal({ text, className, delay = 0 }: CharacterRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion || forceVisible) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const globalIndex =
              words.slice(0, wordIndex).join(" ").length + charIndex;
            return (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -90,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  delay: delay + globalIndex * 0.035,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
                style={{ transformOrigin: "bottom" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
