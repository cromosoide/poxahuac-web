"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { MenuItem as MenuItemType } from "@/types";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <div
      className="menu-item-enter bg-pox-dark-surface rounded-2xl border border-pox-gold/20 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* padding-bottom fallback for browsers without aspect-ratio */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ minHeight: "180px" }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          loading="lazy"
        />
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {item.badges.map((badge) => (
              <Badge key={badge} badge={badge} />
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-white text-lg">
          {item.name}
        </h3>
        <p className="text-white/70 text-sm mt-1 line-clamp-2">
          {item.description}
        </p>
        <p className="text-pox-gold font-bold text-xl mt-3 font-heading">
          {formatPrice(item.price)}
        </p>
      </div>
    </div>
  );
}
