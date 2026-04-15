"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/animations/FadeIn";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 400);
  }, []);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <section className="py-16 lg:py-24 bg-pox-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="section-label text-center mb-3">Testimonios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-2 tracking-tight">
            Lo que dicen nuestros comensales
          </h2>
          <div className="section-divider mb-12" />
        </FadeIn>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="bg-pox-dark-surface rounded-2xl p-8 sm:p-10 border border-pox-gold/20 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-white leading-relaxed mb-6">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-heading font-bold text-white">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-pox-gold font-semibold">
                {testimonials[current].source}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-pox-dark-surface border border-pox-gold/20 flex items-center justify-center text-white hover:bg-pox-gold hover:text-pox-black transition-colors hidden sm:flex"
            aria-label="Reseña anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-pox-dark-surface border border-pox-gold/20 flex items-center justify-center text-white hover:bg-pox-gold hover:text-pox-black transition-colors hidden sm:flex"
            aria-label="Siguiente reseña"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-pox-red w-6" : "bg-pox-gold/40"
                }`}
                aria-label={`Reseña ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
