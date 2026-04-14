"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

const translateMap = {
  left: { x: "-100%", y: "0%" },
  right: { x: "100%", y: "0%" },
  up: { x: "0%", y: "100%" },
  down: { x: "0%", y: "-100%" },
};

export function ImageReveal({
  children,
  className,
  direction = "left",
  delay = 0,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  // Safety timeout: if animation hasn't triggered in 3s, force visible
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion || forceVisible) {
    return <div className={className}>{children}</div>;
  }

  const translate = translateMap[direction];

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ x: translate.x, y: translate.y, opacity: 0 }}
        whileInView={{ x: "0%", y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onAnimationComplete={() => setForceVisible(true)}
      >
        {children}
      </motion.div>
    </div>
  );
}
