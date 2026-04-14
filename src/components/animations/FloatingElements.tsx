"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const elements = [
  {
    emoji: "🌶️",
    size: 24,
    x: "10%",
    y: "20%",
    duration: 6,
    delay: 0,
    rotate: 15,
  },
  {
    emoji: "🌽",
    size: 28,
    x: "85%",
    y: "30%",
    duration: 7,
    delay: 1,
    rotate: -20,
  },
  {
    emoji: "🍃",
    size: 20,
    x: "75%",
    y: "70%",
    duration: 8,
    delay: 2,
    rotate: 25,
  },
  {
    emoji: "🌶️",
    size: 18,
    x: "20%",
    y: "75%",
    duration: 5.5,
    delay: 0.5,
    rotate: -10,
  },
  {
    emoji: "💨",
    size: 22,
    x: "50%",
    y: "15%",
    duration: 9,
    delay: 3,
    rotate: 0,
  },
];

export function FloatingElements() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (shouldReduceMotion || isMobile) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: el.x,
            top: el.y,
            fontSize: el.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.12, 0.12, 0],
            y: [0, -20, 0, 20, 0],
            rotate: [0, el.rotate, 0, -el.rotate, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
