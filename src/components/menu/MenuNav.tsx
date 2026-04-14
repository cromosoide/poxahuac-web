"use client";


import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/types";

interface MenuNavProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

export function MenuNav({ activeCategory, onCategoryChange }: MenuNavProps) {
  return (
    <nav
      className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3"
      aria-label="Categorías del menú"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onCategoryChange(cat.id);
                document.getElementById(`menu-${cat.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-pox-red text-white"
                  : "bg-pox-cream text-pox-brown hover:bg-pox-red/10"
              )}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
