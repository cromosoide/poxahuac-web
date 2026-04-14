import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, CreditCard, Banknote, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto y Facturación — Poxahuac Restaurante",
  description:
    "Contáctanos para eventos, facturación o dudas. WhatsApp: 55 4580 8799. Aceptamos tarjetas, transferencia y efectivo.",
  alternates: { canonical: "https://poxahuac.com/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-pox-dark-bg py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Contacto
          </h1>
          <p className="text-white/70 text-lg">
            Estamos para ayudarte. Escríbenos o llámanos.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6 sm:p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contacto directo */}
            <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6">
              <h3 className="font-heading font-bold text-pox-gold mb-4">
                Contacto Directo
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-center gap-3 text-white/70 hover:text-pox-gold transition-colors"
                  >
                    <Phone size={18} className="text-pox-gold" />
                    <div>
                      <p className="text-xs text-white/50">Teléfono</p>
                      <p className="font-semibold">{BRAND.phoneDisplay}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${BRAND.whatsappFull}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-pox-gold transition-colors"
                  >
                    <MessageCircle size={18} className="text-pox-gold" />
                    <div>
                      <p className="text-xs text-white/50">WhatsApp</p>
                      <p className="font-semibold">{BRAND.whatsapp}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-pox-gold transition-colors"
                  >
                    <Mail size={18} className="text-pox-gold" />
                    <div>
                      <p className="text-xs text-white/50">Email</p>
                      <p className="font-semibold">{BRAND.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} className="text-pox-gold shrink-0" />
                  <div>
                    <p className="text-xs text-white/50">Dirección</p>
                    <p className="font-semibold text-sm">{BRAND.address.full}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6">
              <h3 className="font-heading font-bold text-pox-gold mb-4">
                Redes Sociales
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Facebook", href: BRAND.social.facebook },
                  { label: "Instagram", href: BRAND.social.instagram },
                  { label: "TripAdvisor", href: BRAND.social.tripadvisor },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-pox-gold"
                  >
                    <span className="font-semibold text-sm">{social.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Formas de Pago */}
            <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6">
              <h3 className="font-heading font-bold text-pox-gold mb-4">
                Formas de Pago
              </h3>
              <div className="flex flex-wrap gap-3">
                {BRAND.payments.map((method) => (
                  <span
                    key={method}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pox-brown rounded-lg text-sm text-white/70"
                  >
                    {method === "Efectivo" ? (
                      <Banknote size={16} className="text-pox-gold" />
                    ) : (
                      <CreditCard size={16} className="text-pox-gold" />
                    )}
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
