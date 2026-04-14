"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const instagramPhotos = [
  { src: "/images/hero-pozole.jpg", alt: "Pozole rojo servido con guarniciones" },
  { src: "/images/interior-restaurante.jpg", alt: "Ambiente del restaurante Poxahuac" },
  { src: "/images/pozole-rojo.jpg", alt: "Pozole rojo con guarniciones" },
  { src: "/images/mesa-completa.jpg", alt: "Mesa completa de pozoles y antojitos" },
  { src: "/images/pozole-topdown.jpg", alt: "Pozole visto desde arriba" },
  { src: "/images/pozole-casual.jpg", alt: "Pozole servido con tostadas" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 lg:py-24 bg-pox-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              Síguenos en Instagram
            </h2>
            <p className="text-white/70">@poxahuac · +5,600 seguidores</p>
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
            className="inline-flex items-center gap-2 text-pox-gold font-heading font-semibold hover:text-white transition-colors"
          >
            <Camera size={20} />
            Síguenos en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
