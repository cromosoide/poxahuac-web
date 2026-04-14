import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Car, Bus, ParkingMeter, Navigation } from "lucide-react";
import { BRAND, GOOGLE_MAPS_URL, WAZE_URL } from "@/lib/constants";
import { attractions } from "@/data/attractions";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cómo Llegar a Poxahuac — Amecameca, Estado de México",
  description:
    "Encuéntranos en Av. Fray Martín De Valencia 18, Amecameca. A 1h 15min de CDMX por autopista México-Cuautla. Estacionamiento disponible.",
  alternates: { canonical: "https://poxahuac.com/ubicacion" },
};

const directions = [
  {
    icon: Car,
    title: "Desde CDMX",
    description:
      "Toma la autopista México-Cuautla (150D). Salida Amecameca. Aproximadamente 1 hora 15 minutos. Dirígete al centro de Amecameca sobre Av. Fray Martín De Valencia.",
  },
  {
    icon: Car,
    title: "Desde Puebla",
    description:
      "Toma la autopista Puebla-México y desviación hacia Amecameca por la carretera libre. Aproximadamente 1 hora 30 minutos.",
  },
  {
    icon: Bus,
    title: "Transporte Público",
    description:
      "Autobuses desde la Terminal TAPO (CDMX) con destino a Amecameca. Servicio cada 30 minutos. Al llegar, el restaurante está a 5 minutos caminando del centro.",
  },
  {
    icon: ParkingMeter,
    title: "Estacionamiento",
    description:
      "Contamos con estacionamiento disponible para clientes. También hay estacionamiento público en la plaza central de Amecameca, a 3 minutos caminando.",
  },
];

export default function UbicacionPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-pox-dark-bg py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Cómo Llegar
          </h1>
          <p className="text-white/70 text-lg flex items-center justify-center gap-2">
            <MapPin size={18} />
            {BRAND.address.full}
          </p>
        </div>
      </div>

      {/* Map */}
      <section className="relative">
        <div className="h-[400px] lg:h-[500px]">
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
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto flex gap-2">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              <Navigation size={16} className="mr-2" />
              Google Maps
            </Button>
          </a>
          <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              Waze
            </Button>
          </a>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
              Cómo Llegar a Poxahuac
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {directions.map((dir) => (
              <StaggerItem key={dir.title}>
                <div className="bg-pox-dark-surface rounded-2xl p-6 h-full border border-pox-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pox-gold/10 flex items-center justify-center shrink-0">
                      <dir.icon className="text-pox-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white mb-2">
                        {dir.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {dir.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 lg:py-24 bg-pox-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-4">
              Qué Hacer en Amecameca
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Poxahuac es tu parada obligada en la ruta turística de Amecameca y los volcanes.
            </p>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <StaggerItem key={attraction.id}>
                <div className="bg-pox-dark-surface rounded-2xl overflow-hidden border border-pox-gold/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-white">
                      {attraction.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-3">
                      {attraction.description}
                    </p>
                    <p className="text-pox-gold text-sm font-semibold mt-2">
                      📍 {attraction.distance}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
