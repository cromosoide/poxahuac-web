"use client";

import { createContext, useContext, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const StaggerContext = createContext(false);

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  className,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <StaggerContext.Provider value={inView}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const parentInView = useContext(StaggerContext);

  return (
    <div
      className={cn("anim-fade-in anim-stagger", parentInView && "in-view", className)}
      style={{ "--i": index } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
