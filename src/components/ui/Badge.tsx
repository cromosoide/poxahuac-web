import { cn } from "@/lib/utils";
import type { MenuBadge } from "@/types";

const BADGE_CONFIG: Record<MenuBadge, { label: string; className: string }> = {
  "mas-vendido": {
    label: "Más vendido",
    className: "bg-pox-red text-white",
  },
  nuevo: {
    label: "Nuevo",
    className: "bg-pox-gold text-white",
  },
  vegetariano: {
    label: "Vegetariano",
    className: "bg-green-600 text-white",
  },
  picante: {
    label: "Picante 🌶️",
    className: "bg-orange-500 text-white",
  },
};

interface BadgeProps {
  badge: MenuBadge;
  className?: string;
}

export function Badge({ badge, className }: BadgeProps) {
  const config = BADGE_CONFIG[badge];
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
