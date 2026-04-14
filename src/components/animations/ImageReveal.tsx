"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

const clipPaths = {
  left: {
    hidden: "inset(0 100% 0 0)",
    visible: "inset(0 0% 0 0)",
  },
  right: {
    hidden: "inset(0 0 0 100%)",
    visible: "inset(0 0 0 0%)",
  },
  up: {
    hidden: "inset(100% 0 0 0)",
    visible: "inset(0% 0 0 0)",
  },
  down: {
    hidden: "inset(0 0 100% 0)",
    visible: "inset(0 0 0% 0)",
  },
};

export function ImageReveal({
  children,
  className,
  direction = "left",
  delay = 0,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const clip = clipPaths[direction];

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clip.hidden, opacity: 0.3 }}
      whileInView={{ clipPath: clip.visible, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
