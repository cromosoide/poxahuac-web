"use client";

import { Wheat, Mountain, ChefHat } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TiltCard } from "@/components/animations/TiltCard";

const features = [
  {
    icon: Wheat,
    title: "Ingredientes Frescos",
    description:
      "Maíz pozolero, chiles y verduras de productores locales de la región de Amecameca. Frescura que se siente en cada bocado.",
  },
  {
    icon: Mountain,
    title: "Vista a los Volcanes",
    description:
      "Nuestra terraza ofrece una vista privilegiada al Popocatépetl y al Iztaccíhuatl. La mejor compañía para tu pozole.",
  },
  {
    icon: ChefHat,
    title: "Receta Tradicional",
    description:
      "Pozole auténtico preparado con la técnica ancestral náhuatl. 'Poxahuac' significa 'esponjoso' en náhuatl, y así es nuestro maíz.",
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-pox-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label text-center mb-3">Nuestra Esencia</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-2 tracking-tight">
          Lo que nos hace únicos
        </h2>
        <div className="section-divider mb-12" />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <TiltCard>
                <div className="bg-pox-dark-surface rounded-2xl p-8 text-center border border-pox-gold/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pox-gold/10 text-pox-gold mb-5">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
