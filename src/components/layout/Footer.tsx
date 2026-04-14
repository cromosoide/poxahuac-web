import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

const socialLinks = [
  { label: "Facebook", href: BRAND.social.facebook, icon: "fb" },
  { label: "Instagram", href: BRAND.social.instagram, icon: "ig" },
  { label: "TripAdvisor", href: BRAND.social.tripadvisor, icon: "ta" },
  {
    label: "WhatsApp",
    href: `https://wa.me/${BRAND.whatsappFull}`,
    icon: "wa",
  },
];

export function Footer() {
  return (
    <footer className="bg-pox-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/poxahuac_logo_blanco.png"
                alt="Poxahuac"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {BRAND.tagline}. Restaurante de pozole tradicional mexicano en Amecameca, Estado de México.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-pox-gold hover:text-white hover:rotate-[10deg] transition-all duration-200 text-sm font-bold"
                >
                  {s.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-pox-gold">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-pox-gold">Horarios</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>Martes a Jueves: 10:30 – 20:30</p>
                  <p>Viernes y Sábado: 10:30 – 21:00</p>
                  <p>Domingo: 10:30 – 20:30</p>
                  <p className="text-pox-red font-semibold mt-1">Lunes: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-pox-gold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsappFull}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {BRAND.address.full}
              </li>
            </ul>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-3 justify-center">
          {["Pueblo con Encanto", "Pet Friendly 🐾", "WiFi Gratis 📶", "Terraza", "Para Llevar"].map(
            (badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70"
              >
                {badge}
              </span>
            )
          )}
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Poxahuac. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
