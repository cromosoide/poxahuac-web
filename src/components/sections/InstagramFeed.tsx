"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const instagramPhotos = [
  { src: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=80", alt: "Pozole rojo servido con guarniciones" },
  { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80", alt: "Ambiente del restaurante Poxahuac" },
  { src: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80", alt: "Quesadillas hechas a mano" },
  { src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80", alt: "Antojitos mexicanos variados" },
  { src: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80", alt: "Pozole mixto con todos los complementos" },
  { src: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80", alt: "Guacamole fresco preparado al momento" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 lg:py-24 bg-pox-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-pox-cream mb-3">
              Síguenos en Instagram
            </h2>
            <p className="text-pox-cream/70">@poxahuac · +5,600 seguidores</p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {instagramPhotos.map((photo, i) => (
            <StaggerItem key={i}>
              <ImageReveal direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden block"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-pox-red-dark/0 group-hover:bg-pox-red-dark/60 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </a>
              </ImageReveal>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="text-center mt-8">
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pox-gold font-heading font-semibold hover:text-pox-cream transition-colors"
          >
            <Camera size={20} />
            Síguenos en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
