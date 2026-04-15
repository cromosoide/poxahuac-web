"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export function ImageReveal({
  children,
  className,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { rootMargin: "-20px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className={cn("anim-fade-in", inView && "in-view")}
        style={delay ? { transitionDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
