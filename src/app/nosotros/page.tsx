import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, BookOpen, Heart, TrendingUp, Globe, Users, Award, MapPin } from "lucide-react";
import { Timeline } from "@/components/sections/Timeline";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nuestra Historia — Poxahuac Restaurante en Amecameca",
  description:
    "Conoce la historia de Poxahuac: tradición náhuatl, ingredientes locales y la pasión por el pozole auténtico de Amecameca, Estado de México.",
  alternates: { canonical: "https://poxahuac.com/nosotros" },
};

const filosofia = [
  {
    icon: Leaf,
    title: "Ingredientes Locales",
    description:
      "Trabajamos con productores de la región de Amecameca. Nuestro maíz, chiles, verduras y hierbas vienen de campos cercanos, garantizando frescura y apoyando la economía local.",
  },
  {
    icon: BookOpen,
    title: "Recetas Auténticas",
    description:
      "Cada platillo sigue recetas tradicionales que han pasado de generación en generación. No tomamos atajos: nuestro pozole se cuece lentamente para lograr el sabor y textura perfectos.",
  },
  {
    icon: Heart,
    title: "Experiencia Familiar",
    description:
      "Más que un restaurante, somos un espacio de encuentro. Familias, amigos y viajeros se reúnen aquí para compartir la mesa y celebrar los sabores de México.",
  },
];

const visionPoints = [
  { icon: Award, text: "Rating 5.0 en TripAdvisor — #14 de 53 restaurantes en Amecameca" },
  { icon: MapPin, text: "Ubicación estratégica: puerta de entrada a los volcanes y Pueblo con Encanto" },
  { icon: TrendingUp, text: "Turismo creciente en la región de los volcanes y potencial de expansión" },
  { icon: Globe, text: "Presencia digital como diferenciador vs. competencia local" },
  { icon: Users, text: "+5,600 seguidores en redes sociales con engagement orgánico activo" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative bg-pox-dark-bg py-20 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(26,17,13,0.85), rgba(26,17,13,0.95)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Nuestra Historia
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Desde las raíces náhuatl hasta tu mesa. La tradición del pozole esponjoso en el corazón de Amecameca.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-pox-cream text-center mb-12">
              Nuestro Camino
            </h2>
          </FadeIn>
          <Timeline />
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 lg:py-24 bg-pox-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-pox-cream text-center mb-12">
              Nuestra Filosofía
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filosofia.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-pox-dark-surface rounded-2xl p-8 text-center border border-pox-gold/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pox-gold/10 text-pox-gold mb-5">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-pox-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-pox-cream/70 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Historia del Pozole */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-pox-cream text-center mb-8">
              El Pozole: Un Platillo con Historia
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="prose prose-lg mx-auto text-pox-cream/70">
              <p>
                El pozole es uno de los platillos más antiguos de México, con orígenes que se remontan a la época prehispánica. Su nombre viene del náhuatl <em>pozolli</em>, que significa &ldquo;espumoso&rdquo; o &ldquo;hervido&rdquo;, describiendo la forma en que el maíz cacahuazintle revienta al cocerse.
              </p>
              <p>
                En la región de Amecameca, a los pies del Popocatépetl, el pozole tiene un significado especial. Los pueblos náhuatl de esta zona lo preparaban como alimento ceremonial, y la tradición se ha mantenido viva durante siglos.
              </p>
              <p>
                En Poxahuac honramos esa herencia. Nuestro maíz se prepara siguiendo el proceso tradicional de nixtamalización, y cada olla de pozole se cuece lentamente para lograr ese maíz &ldquo;esponjoso&rdquo; que nos da nombre. Es más que comida: es cultura, familia y tradición.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visión - Posicionamiento Futuro */}
      <section className="py-16 lg:py-24 bg-pox-dark-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Nuestra Visión
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Poxahuac aspira a convertirse en referente gastronómico de la región, no solo como restaurante sino como embajador de la tradición culinaria de Amecameca.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {visionPoints.map((point) => (
              <StaggerItem key={point.text}>
                <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <point.icon className="text-pox-gold shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-white/80">{point.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.5}>
            <p className="text-white/60 text-sm mb-6">
              ¿Interesado en colaboraciones, prensa o alianzas?
            </p>
            <Link href="/contacto">
              <Button variant="outline" className="border-pox-gold text-pox-gold hover:bg-pox-gold hover:text-pox-black">
                Contáctanos
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-pox-dark-surface">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-pox-cream mb-4">
            Ven a conocernos
          </h2>
          <p className="text-pox-cream/70 mb-6">
            Reserva tu mesa y vive la experiencia Poxahuac
          </p>
          <Link href="/reservaciones">
            <Button size="lg">Reservar Mesa</Button>
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
