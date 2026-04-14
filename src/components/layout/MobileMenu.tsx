"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col transition-transform duration-300 ease-in-out bg-pox-black",
        open ? "translate-x-0" : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      aria-hidden={!open}
    >
      {/* Close button */}
      <div className="flex justify-between items-center px-6 py-4">
        <span className="text-white font-heading font-bold text-xl">
          Poxahuac
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-pox-gold transition-colors"
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "block py-3 text-2xl font-heading font-semibold transition-colors",
              pathname === link.href
                ? "text-pox-gold"
                : "text-white/80 hover:text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-8 pb-8">
        <Link
          href="/reservaciones"
          onClick={onClose}
          className="block w-full bg-pox-red text-white text-center py-4 rounded-lg font-heading font-bold text-lg hover:bg-pox-red/90 transition-colors"
        >
          Reservar Mesa
        </Link>
      </div>
    </div>
  );
}
