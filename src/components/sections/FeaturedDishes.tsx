"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Button } from "@/components/ui/Button";
import { menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

const featured = menuItems.filter((item) => item.featured).slice(0, 5);

export function FeaturedDishes() {
  return (
    <section className="py-16 lg:py-24 bg-pox-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="section-label text-center mb-3 text-pox-red">Nuestro Menú</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pox-brown text-center mb-2 tracking-tight">
            Nuestros Platillos Estrella
          </h2>
          <div className="section-divider" />
          <p className="text-pox-brown/70 text-center mb-12 max-w-2xl mx-auto mt-4">
            Los favoritos de nuestros comensales, preparados con ingredientes
            frescos de la región.
          </p>
        </FadeIn>

        {/* CSS Scroll-snap Carousel */}
        <div className="snap-carousel -mx-4 px-4 flex gap-6 pb-4">
          {featured.map((dish, i) => (
            <div
              key={dish.id}
              className="snap-item shrink-0 w-[280px] sm:w-[320px] anim-fade-in anim-stagger in-view"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-pox-brown/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                <ImageReveal direction="up" delay={i * 0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="320px"
                      draggable={false}
                    />
                    {dish.badges && dish.badges.length > 0 && (
                      <span className="absolute top-3 left-3 bg-pox-red text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {dish.badges[0] === "mas-vendido"
                          ? "Más vendido"
                          : dish.badges[0] === "vegetariano"
                            ? "Vegetariano"
                            : "Nuevo"}
                      </span>
                    )}
                  </div>
                </ImageReveal>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-pox-brown text-lg">
                    {dish.name}
                  </h3>
                  <p className="text-pox-brown/70 text-sm mt-1 line-clamp-2">
                    {dish.description}
                  </p>
                  <p className="text-pox-red font-bold text-xl mt-3">
                    {formatPrice(dish.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/menu">
            <Button variant="outline">Ver menú completo →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
