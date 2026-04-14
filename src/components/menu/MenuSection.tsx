import { MenuItem } from "./MenuItem";
import type { MenuItem as MenuItemType } from "@/types";

interface MenuSectionProps {
  id: string;
  title: string;
  icon: string;
  items: MenuItemType[];
}

export function MenuSection({ id, title, icon, items }: MenuSectionProps) {
  return (
    <section id={`menu-${id}`} className="scroll-mt-[120px]">
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <MenuItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
