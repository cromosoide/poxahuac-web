"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-pox-red-dark/95 backdrop-blur-md py-2 shadow-lg"
            : "bg-pox-red-dark py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-display font-bold text-2xl sm:text-3xl tracking-tight"
            aria-label="Poxahuac - Ir al inicio"
          >
            <span className="text-pox-gold">🌽</span>
            <span>P<span className="text-pox-gold">o</span>xahuac</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.filter((l) => l.href !== "/reservaciones").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-pox-gold",
                  "after:transition-transform after:duration-300 after:origin-left",
                  pathname === link.href
                    ? "text-white after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link href="/reservaciones">
                <Button size="sm">Reservar Mesa</Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-white hover:text-pox-gold transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
