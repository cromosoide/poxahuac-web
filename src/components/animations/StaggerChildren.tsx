"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const StaggerContext = createContext(false);

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.15,
  className,
}: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion || forceVisible) {
    return (
      <StaggerContext.Provider value={true}>
        <div className={className}>{children}</div>
      </StaggerContext.Provider>
    );
  }

  return (
    <StaggerContext.Provider value={false}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
        className={className}
        onAnimationComplete={() => setForceVisible(true)}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const parentForcedVisible = useContext(StaggerContext);

  // If parent fell back to plain div, render as plain div too
  if (parentForcedVisible) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
