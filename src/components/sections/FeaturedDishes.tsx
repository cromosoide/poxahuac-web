"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Button } from "@/components/ui/Button";
import { menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

const featured = menuItems.filter((item) => item.featured).slice(0, 5);

export function FeaturedDishes() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      setDragConstraint(-(scrollWidth - clientWidth));
    }
  }, []);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="section-label text-center mb-3">Nuestro Menú</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pox-brown text-center mb-2 tracking-tight">
            Nuestros Platillos Estrella
          </h2>
          <div className="section-divider" />
          <p className="text-pox-gray text-center mb-12 max-w-2xl mx-auto mt-4">
            Los favoritos de nuestros comensales, preparados con ingredientes
            frescos de la región.
          </p>
        </FadeIn>

        {/* Drag Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4">
          <motion.div
            ref={carouselRef}
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: dragConstraint, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          >
            {featured.map((dish, i) => (
              <motion.div
                key={dish.id}
                className="shrink-0 w-[280px] sm:w-[320px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
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
                    <p className="text-pox-gray text-sm mt-1 line-clamp-2">
                      {dish.description}
                    </p>
                    <p className="text-pox-gold font-bold text-xl mt-3">
                      {formatPrice(dish.price)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
