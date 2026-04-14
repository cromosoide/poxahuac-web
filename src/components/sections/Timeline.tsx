"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const timelineItems = [
  {
    year: "Raíces",
    title: "El nombre Poxahuac",
    description:
      "'Poxahuac' proviene del náhuatl y significa 'esponjoso'. Es el nombre que los pueblos originarios daban al maíz cuando revienta durante la cocción del pozole, creando esa textura única y característica.",
  },
  {
    year: "Tradición",
    title: "Receta familiar",
    description:
      "Nuestra receta de pozole ha sido transmitida de generación en generación, conservando las técnicas ancestrales de preparación del maíz cacahuazintle y el balance perfecto de chiles.",
  },
  {
    year: "Presente",
    title: "Poxahuac Restaurante",
    description:
      "Hoy somos un referente del pozole en Amecameca, reconocidos en TripAdvisor con calificación 5.0. Servimos a familias locales, excursionistas que visitan los volcanes y amantes de la cocina mexicana auténtica.",
  },
  {
    year: "Futuro",
    title: "Nuestra visión",
    description:
      "Seguimos comprometidos con la calidad, los ingredientes locales y la preservación de la tradición culinaria náhuatl, mientras buscamos hacer de Amecameca un destino gastronómico reconocido.",
  },
];

export function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-pox-gold/30" />

      <div className="space-y-12">
        {timelineItems.map((item, i) => (
          <FadeIn key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pox-gold border-4 border-pox-brown shadow-md z-10" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="inline-block px-3 py-1 bg-pox-red text-white text-xs font-bold rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-pox-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-pox-cream/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
