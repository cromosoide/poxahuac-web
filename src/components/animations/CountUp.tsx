"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  target,
  duration = 1.5,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const start = performance.now();
    const durationMs = duration * 1000;

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, target, duration, shouldReduceMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
