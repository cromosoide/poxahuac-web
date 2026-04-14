"use client";

import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { BRAND, GOOGLE_MAPS_URL, WAZE_URL } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function MapSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white text-center mb-12">
            Encuéntranos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <FadeIn className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.554045962142!2d-98.77262722383969!3d19.127210182087957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3deb18935185%3A0x5484125467339c30!2sPoxahuac!5e0!3m2!1ses-419!2smx!4v1776193945108!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Poxahuac en Google Maps"
              />
            </div>
          </FadeIn>

          {/* Info card */}
          <FadeIn delay={0.2}>
            <div className="bg-pox-dark-surface rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border border-pox-gold/20">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-pox-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-white">Dirección</p>
                    <p className="text-white/70 text-sm">{BRAND.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-pox-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-white">Horarios</p>
                    <p className="text-white/70 text-sm">Mar-Jue: 10:30 – 20:30</p>
                    <p className="text-white/70 text-sm">Vie-Sáb: 10:30 – 21:00</p>
                    <p className="text-white/70 text-sm">Dom: 10:30 – 20:30</p>
                    <p className="text-pox-red text-sm font-semibold">Lun: Cerrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-pox-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-white">Teléfono</p>
                    <a href={`tel:${BRAND.phone}`} className="text-white/70 text-sm hover:text-pox-gold transition-colors">
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="filled" size="sm" className="w-full">
                    <Navigation size={16} className="mr-2" />
                    Cómo llegar
                  </Button>
                </a>
                <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    Abrir en Waze
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
