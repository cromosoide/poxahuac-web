"use client";

import Image from "next/image";
import { useState } from "react";
import { PartyPopper, Users, Building2, Heart, MapPin, Utensils, Wifi, PawPrint } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { testimonials } from "@/data/testimonials";
import { trackEvent, EVENTS } from "@/lib/analytics";
import { FadeIn } from "@/components/animations/FadeIn";

const eventTypes = [
  { icon: PartyPopper, title: "Cumpleanos", description: "Celebra tu cumpleanos con pozole y antojitos. Menu personalizado para grupos desde 10 personas." },
  { icon: Users, title: "Reunion Familiar", description: "El lugar perfecto para reunir a la familia. Terraza amplia, ambiente acogedor y comida para todos los gustos." },
  { icon: Building2, title: "Evento Empresarial", description: "Comidas de trabajo, team building o celebraciones corporativas. WiFi gratis y atencion dedicada." },
  { icon: Heart, title: "Aniversarios", description: "Celebra tu aniversario con una comida especial. Atención personalizada y un toque especial para la ocasión." },
];

const selectedTestimonials = [testimonials[2], testimonials[3]];

function buildEventWhatsAppUrl(data: { nombre: string; tipo: string; personas: string; fecha: string }) {
  const lines = [
    `Hola, quiero cotizar un evento en Poxahuac:`,
    `🎉 Tipo: ${data.tipo}`,
    `👥 Personas: ${data.personas}`,
    `📅 Fecha tentativa: ${data.fecha}`,
    `👤 Nombre: ${data.nombre}`,
  ];
  return `https://wa.me/${BRAND.whatsappFull}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function LPEventos() {
  const [form, setForm] = useState({ nombre: "", telefono: "", tipo: "Cumpleanos", personas: "20", fecha: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackEvent(EVENTS.CTA_CLICK, { label: "evento-cotizar", page: "lp-eventos" });
    const url = buildEventWhatsAppUrl(form);
    window.open(url, "_blank");
  }

  return (
    <div className="bg-pox-brown">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-pox-dark-bg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80"
          alt="Celebracion en Poxahuac"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <FadeIn>
            <p className="section-label text-pox-gold mb-4">Eventos y Celebraciones</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
              Tu Evento Especial<br />en Poxahuac
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Cumpleanos, reuniones familiares, aniversarios y eventos empresariales.
              Terraza, menu personalizado y atencion dedicada.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="section-label mb-2">Que Celebramos</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Todo Tipo de Eventos
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {eventTypes.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.08}>
                <div className="bg-pox-dark-surface rounded-2xl p-6 flex gap-4 border border-pox-gold/20">
                  <div className="w-12 h-12 bg-pox-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <event.icon className="text-pox-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">{event.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-pox-dark-bg">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="section-label mb-2">Lo Que Incluye</p>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Todo para tu Evento
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Utensils, text: "Menu personalizado" },
              { icon: Users, text: "Atencion dedicada" },
              { icon: PawPrint, text: "Terraza pet-friendly" },
              { icon: Wifi, text: "WiFi gratis" },
            ].map((item, i) => (
              <FadeIn key={item.text} delay={i * 0.08}>
                <div className="bg-pox-dark-surface rounded-xl p-6 text-center border border-pox-gold/20">
                  <item.icon className="text-pox-gold mx-auto mb-3" size={32} />
                  <p className="font-heading font-semibold text-white">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-8 bg-pox-dark-surface rounded-2xl p-6 sm:p-8 text-center border border-pox-gold/20">
              <h3 className="font-heading font-bold text-white text-lg mb-2">Capacidad</h3>
              <p className="text-pox-gray">
                Interior amplio + terraza al aire libre. Grupos de <strong>10 a 60 personas</strong>.
                Estacionamiento disponible para tus invitados.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="section-label mb-2">Cotiza Tu Evento</p>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Cuentanos tu Idea
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-pox-cream rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-white mb-1">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-white mb-1">Telefono</label>
                <input
                  id="telefono"
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
                  placeholder="55 1234 5678"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="tipo" className="block text-sm font-semibold text-white mb-1">Tipo de Evento</label>
                  <select
                    id="tipo"
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
                  >
                    <option>Cumpleanos</option>
                    <option>Reunion Familiar</option>
                    <option>Evento Empresarial</option>
                    <option>Aniversario</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="personas" className="block text-sm font-semibold text-white mb-1"># Personas</label>
                  <input
                    id="personas"
                    type="number"
                    min={5}
                    max={100}
                    required
                    value={form.personas}
                    onChange={(e) => setForm({ ...form, personas: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fecha" className="block text-sm font-semibold text-white mb-1">Fecha Tentativa</label>
                <input
                  id="fecha"
                  type="date"
                  required
                  value={form.fecha}
                  onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-4 px-6 rounded-xl transition-colors text-lg"
              >
                Cotiza tu Evento por WhatsApp
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pox-dark-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6">
            {selectedTestimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <div className="bg-pox-dark-surface rounded-2xl p-6 border border-pox-gold/20">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-pox-gold fill-pox-gold" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <MapPin className="text-pox-red mx-auto mb-3" size={32} />
            <h2 className="text-2xl font-display font-bold text-pox-brown mb-2">Nos Encuentras En</h2>
            <p className="text-pox-gray mb-2">{BRAND.address.full}</p>
            <p className="text-white/70 text-sm">{BRAND.hoursDisplay}</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
