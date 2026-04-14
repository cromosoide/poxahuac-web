"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems, menuCategories } from "@/data/menu";
import { MenuNav } from "@/components/menu/MenuNav";
import { MenuSection } from "@/components/menu/MenuSection";
import { Button } from "@/components/ui/Button";
import type { MenuCategory } from "@/types";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("pozoles");

  return (
    <>
      {/* Hero */}
      <div className="bg-pox-dark-bg pt-6 pb-6 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Menú de Poxahuac
          </h1>
          <p className="text-white/70 text-lg">
            Pozoles, antojitos mexicanos y más. Ingredientes frescos de la región de Amecameca.
          </p>
        </div>
      </div>

      <MenuNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 space-y-16">
        {menuCategories.map((cat) => {
          const items = menuItems.filter((item) => item.category === cat.id);
          return (
            <MenuSection
              key={cat.id}
              id={cat.id}
              title={cat.label}
              icon={cat.icon}
              items={items}
            />
          );
        })}
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-pox-dark-surface border-t border-pox-gold/20 p-3 z-40">
        <Link href="/reservaciones" className="block">
          <Button className="w-full">Reservar mesa para probar esto</Button>
        </Link>
      </div>
    </>
  );
}
