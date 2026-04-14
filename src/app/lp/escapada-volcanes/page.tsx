"use client";

import Image from "next/image";
import { MapPin, Clock, Mountain, Camera, Utensils, Car } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { attractions } from "@/data/attractions";
import { trackEvent, EVENTS } from "@/lib/analytics";
import { FadeIn } from "@/components/animations/FadeIn";

function trackCTA(label: string) {
  trackEvent(EVENTS.CTA_CLICK, { label, page: "lp-escapada-volcanes" });
}

const whatsappUrl = `https://wa.me/${BRAND.whatsappFull}?text=${encodeURIComponent("Hola, quiero reservar para este fin de semana en Poxahuac")}`;

const itinerary = [
  { time: "8:00 AM", label: "Manana", title: "Senderismo en los Volcanes", description: "Salida temprano a Paso de Cortes o Hacienda Panoaya. Bosques, miradores y aire puro a 3,680 m de altitud.", icon: Mountain },
  { time: "12:30 PM", label: "Mediodia", title: "Pozole en Poxahuac", description: "El complemento perfecto despues de la montana. Pozole caliente, antojitos y aguas frescas en terraza con vista.", icon: Utensils },
  { time: "3:00 PM", label: "Tarde", title: "Pueblo con Encanto", description: "Paseo por el centro historico, Sacromonte, mercado municipal. Regreso a CDMX antes del trafico.", icon: Camera },
];

const bestHours = [
  { day: "Martes - Jueves", best: "11:00 - 12:00", level: "Tranquilo" },
  { day: "Viernes", best: "11:00 - 12:00", level: "Moderado" },
  { day: "Sabado", best: "10:30 - 11:30", level: "Moderado" },
  { day: "Domingo", best: "10:30 - 11:30", level: "Moderado" },
];

export default function LPEscapadaVolcanes() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-pox-brown overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
          alt="Volcanes Popocatepetl e Iztaccihuatl"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <FadeIn>
            <p className="section-label text-pox-gold mb-4">A Solo 1 Hora de CDMX</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
              Tu Escapada Gastronomica<br />a los Volcanes
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Senderismo, pueblo magico y el mejor pozole de Amecameca.
              La escapada perfecta de fin de semana desde la Ciudad de Mexico.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("hero-reservar")}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              Reserva para este Fin de Semana
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Distance */}
      <section className="py-12 bg-pox-red-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <FadeIn delay={0}>
              <div>
                <Car className="mx-auto mb-2 text-pox-gold" size={28} />
                <p className="text-2xl font-heading font-bold">1h 15min</p>
                <p className="text-white/60 text-sm">Desde CDMX</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <Mountain className="mx-auto mb-2 text-pox-gold" size={28} />
                <p className="text-2xl font-heading font-bold">3,680m</p>
                <p className="text-white/60 text-sm">Paso de Cortes</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <Utensils className="mx-auto mb-2 text-pox-gold" size={28} />
                <p className="text-2xl font-heading font-bold">5.0</p>
                <p className="text-white/60 text-sm">TripAdvisor</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="section-label mb-2">Que Hacer</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pox-brown tracking-tight">
                Atracciones Cercanas
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.slice(0, 3).map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image src={a.image} alt={a.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-pox-brown">{a.name}</h3>
                    <p className="text-pox-gray text-sm mt-1 line-clamp-2">{a.description}</p>
                    <p className="text-pox-gold text-sm font-semibold mt-2 flex items-center gap-1">
                      <MapPin size={14} /> {a.distance}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-8 bg-pox-cream rounded-2xl p-6 sm:p-8 text-center">
              <Utensils className="text-pox-red mx-auto mb-3" size={28} />
              <h3 className="font-heading font-bold text-pox-brown text-lg mb-2">+ Poxahuac: Tu Parada Gastronomica</h3>
              <p className="text-pox-gray text-sm max-w-lg mx-auto">
                Despues de explorar los volcanes, nada mejor que un pozole caliente. Terraza pet-friendly, WiFi y estacionamiento.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-pox-cream">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="section-label mb-2">Planea Tu Dia</p>
              <h2 className="text-3xl font-display font-bold text-pox-brown tracking-tight">
                Itinerario Sugerido
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="space-y-6">
            {itinerary.map((step, i) => (
              <FadeIn key={step.time} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 flex gap-5 items-start">
                  <div className="shrink-0 text-center">
                    <div className="w-14 h-14 bg-pox-red/10 rounded-xl flex items-center justify-center mb-1">
                      <step.icon className="text-pox-red" size={24} />
                    </div>
                    <p className="text-xs text-pox-gold font-heading font-semibold">{step.time}</p>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold text-pox-gold uppercase tracking-wider">{step.label}</p>
                    <h3 className="font-heading font-bold text-pox-brown text-lg">{step.title}</h3>
                    <p className="text-pox-gray text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Best Hours */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="section-label mb-2">Mejor Hora Para Visitarnos</p>
              <h2 className="text-2xl font-display font-bold text-pox-brown tracking-tight">
                Horarios Recomendados
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-pox-cream">
                    <th className="text-left py-3 px-5 font-heading font-semibold text-pox-brown">Dia</th>
                    <th className="text-left py-3 px-5 font-heading font-semibold text-pox-brown">Mejor Hora</th>
                    <th className="text-left py-3 px-5 font-heading font-semibold text-pox-brown">Afluencia</th>
                  </tr>
                </thead>
                <tbody>
                  {bestHours.map((row) => (
                    <tr key={row.day} className="border-t border-gray-100">
                      <td className="py-3 px-5 text-pox-brown font-medium">{row.day}</td>
                      <td className="py-3 px-5 text-pox-gray flex items-center gap-1">
                        <Clock size={14} className="text-pox-gold" /> {row.best}
                      </td>
                      <td className="py-3 px-5">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${row.level === "Tranquilo" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {row.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="text-center mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA("bottom-reservar")}
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Reserva para este Fin de Semana
              </a>
              <p className="text-pox-gray text-sm mt-3">
                <MapPin className="inline" size={14} /> {BRAND.address.full}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
