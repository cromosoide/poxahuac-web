"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className, maxTilt = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt * 2;
    const rotateY = (x - 0.5) * maxTilt * 2;
    setTilt({ rotateX, rotateY });
    setGlare({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative">
        {children}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15), transparent 60%)`,
          }}
        />
      </div>
    </motion.div>
  );
}
