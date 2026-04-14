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
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-pox-brown text-center mb-12">
            Encuéntranos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <FadeIn className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d-98.7631!3d19.1258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPoxahuac!5e0!3m2!1ses!2smx`}
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
            <div className="bg-pox-cream rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-pox-red shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-pox-brown">Dirección</p>
                    <p className="text-pox-gray text-sm">{BRAND.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-pox-red shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-pox-brown">Horarios</p>
                    <p className="text-pox-gray text-sm">Mar-Jue: 10:30 – 20:30</p>
                    <p className="text-pox-gray text-sm">Vie-Sáb: 10:30 – 21:00</p>
                    <p className="text-pox-gray text-sm">Dom: 10:30 – 20:30</p>
                    <p className="text-pox-red text-sm font-semibold">Lun: Cerrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-pox-red shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-heading font-bold text-pox-brown">Teléfono</p>
                    <a href={`tel:${BRAND.phone}`} className="text-pox-gray text-sm hover:text-pox-red transition-colors">
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
