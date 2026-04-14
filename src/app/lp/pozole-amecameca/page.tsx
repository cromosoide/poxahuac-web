"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { menuItems } from "@/data/menu";
import { testimonials } from "@/data/testimonials";
import { formatPrice } from "@/lib/utils";
import { trackEvent, EVENTS } from "@/lib/analytics";
import { FadeIn } from "@/components/animations/FadeIn";

const featuredItems = menuItems.filter((item) => item.featured).slice(0, 4);
const selectedTestimonials = testimonials.slice(0, 3);

function trackCTA(label: string) {
  trackEvent(EVENTS.CTA_CLICK, { label, page: "lp-pozole-amecameca" });
}

const whatsappUrl = `https://wa.me/${BRAND.whatsappFull}?text=${encodeURIComponent("Hola, quiero reservar una mesa en Poxahuac")}`;

export default function LPPozoleAmecameca() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-pox-red-dark overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1200&q=80"
          alt="Pozole rojo tradicional de Poxahuac"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <FadeIn>
            <p className="section-label text-pox-gold mb-4">Pozoleria Tradicional en Amecameca</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
              El Mejor Pozole<br />de Amecameca
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Maiz cacahuazintle cocido a fuego lento, receta tradicional nahuatl.
              Terraza con vista a los volcanes. Rating 5.0 en TripAdvisor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA("hero-reservar-whatsapp")}
                className="bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Reserva tu Mesa
              </a>
              <Link
                href="/menu?utm_source=google&utm_medium=cpc&utm_campaign=pozole-amecameca"
                onClick={() => trackCTA("hero-ver-menu")}
                className="border-2 border-white/40 hover:border-white text-white font-heading font-semibold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Ver Menu Completo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Propuestas de valor */}
      <section className="py-16 bg-pox-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-pox-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Utensils className="text-pox-red" size={28} />
                </div>
                <h3 className="font-heading font-bold text-pox-brown text-lg mb-2">Pozole Tradicional</h3>
                <p className="text-pox-gray text-sm">Maiz cacahuazintle preparado con la tecnica ancestral nahuatl. Esponjoso de verdad.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-pox-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-pox-red" size={28} />
                </div>
                <h3 className="font-heading font-bold text-pox-brown text-lg mb-2">Vista a los Volcanes</h3>
                <p className="text-pox-gray text-sm">Terraza con vista al Popocatepetl e Iztaccihuatl. A 1 hora de CDMX.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-pox-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-pox-red" size={28} />
                </div>
                <h3 className="font-heading font-bold text-pox-brown text-lg mb-2">Ingredientes Locales</h3>
                <p className="text-pox-gray text-sm">Ingredientes frescos de productores locales de la region de Amecameca.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="section-label mb-2">Nuestros Favoritos</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pox-brown tracking-tight">
                Platillos Estrella
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-pox-brown">{item.name}</h3>
                    <p className="text-pox-gray text-sm mt-1 line-clamp-2">{item.description}</p>
                    <p className="text-pox-gold font-bold text-xl mt-2 font-heading">{formatPrice(item.price)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-pox-cream">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-pox-gold fill-pox-gold" size={24} />
                ))}
              </div>
              <p className="font-heading font-bold text-pox-brown text-lg">
                5.0 en TripAdvisor &middot; {BRAND.rating.position}
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {selectedTestimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="text-pox-gold fill-pox-gold" size={14} />
                    ))}
                  </div>
                  <p className="text-pox-gray text-sm mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-heading font-semibold text-pox-brown text-sm">{t.name}</p>
                  <p className="text-pox-gray text-xs">{t.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="bg-pox-brown rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-10 text-white">
                  <h2 className="text-2xl font-display font-bold mb-4">Visitanos</h2>
                  <div className="space-y-3 text-white/80">
                    <p className="flex items-start gap-3">
                      <MapPin size={18} className="shrink-0 mt-0.5 text-pox-gold" />
                      {BRAND.address.full}
                    </p>
                    <p className="flex items-start gap-3">
                      <Clock size={18} className="shrink-0 mt-0.5 text-pox-gold" />
                      {BRAND.hoursDisplay}
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTA("map-reservar-whatsapp")}
                    className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Reserva tu Mesa
                  </a>
                </div>
                <div className="relative min-h-[250px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d${BRAND.address.lng}!3d${BRAND.address.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPoxahuac!5e0!3m2!1ses!2smx!4v1`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicacion de Poxahuac"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
