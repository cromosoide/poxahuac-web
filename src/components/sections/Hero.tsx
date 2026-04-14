"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CharacterReveal } from "@/components/animations/CharacterReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { FloatingElements } from "@/components/animations/FloatingElements";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pox-red-dark via-pox-red-dark/70 to-pox-red-dark/40" />

      {/* Floating elements */}
      <FloatingElements />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        style={{ opacity: contentOpacity }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6">
          <CharacterReveal text="El pozole más esponjoso de Amecameca" delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Tradición náhuatl en cada cucharada. Pozole rojo, blanco y los mejores
          antojitos mexicanos con vista a los volcanes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pox-red-dark w-full sm:w-auto"
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
        </motion.div>

        {/* TripAdvisor badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.6, type: "spring" }}
          className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
        >
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-semibold">5.0 en TripAdvisor</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
