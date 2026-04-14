"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          backgroundImage: "url('/images/hero-pozole.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pox-brown via-pox-brown/70 to-pox-brown/40" />

      {/* Content — visible by default, CSS animations for enhancement */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6">
          El pozole más esponjoso de Amecameca
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Tradición náhuatl en cada cucharada. Pozole rojo, blanco y los mejores
          antojitos mexicanos con vista a los volcanes.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="bg-pox-cream text-pox-brown border-pox-cream hover:bg-white w-full sm:w-auto"
              >
                Ver Menú
              </Button>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="/reservaciones">
              <Button size="lg" className="w-full sm:w-auto">
                Reservar Mesa
              </Button>
            </Link>
          </MagneticButton>
        </div>

        {/* TripAdvisor badge */}
        <div className="hero-badge mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-semibold">5.0 en TripAdvisor</span>
        </div>
      </div>
    </section>
  );
}
