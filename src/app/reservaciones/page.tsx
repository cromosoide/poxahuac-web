import type { Metadata } from "next";
import { Clock, Shield, Phone } from "lucide-react";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reserva tu Mesa en Poxahuac — Pozolería en Amecameca",
  description:
    "Reserva gratis tu mesa en Poxahuac. Respuesta en menos de 30 minutos por WhatsApp. Terraza, WiFi gratis, pet-friendly. Mar-Dom 10:30am.",
  alternates: { canonical: "https://poxahuac.com/reservaciones" },
};

export default function ReservacionesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative bg-pox-red-dark py-16 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(99,18,31,0.9), rgba(99,18,31,0.95)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Reserva tu Mesa
          </h1>
          <p className="text-white/70 text-lg">
            Asegura tu lugar y disfruta del mejor pozole de Amecameca
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <ReservationForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trust elements */}
            <div className="bg-pox-cream rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-pox-red shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-heading font-bold text-pox-brown text-sm">
                    Respuesta rápida
                  </p>
                  <p className="text-pox-gray text-sm">
                    Te confirmamos por WhatsApp en menos de 30 minutos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-pox-red shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-heading font-bold text-pox-brown text-sm">
                    Sin cargos
                  </p>
                  <p className="text-pox-gray text-sm">
                    Reservar es completamente gratis, sin compromiso
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-pox-red shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-heading font-bold text-pox-brown text-sm">
                    ¿Prefieres llamar?
                  </p>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="text-pox-red text-sm font-semibold hover:underline"
                  >
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-pox-cream rounded-2xl p-6">
              <h3 className="font-heading font-bold text-pox-brown mb-3">
                Horarios
              </h3>
              <ul className="space-y-1.5 text-sm text-pox-gray">
                <li>Martes a Jueves: 10:30 – 20:30</li>
                <li>Viernes y Sábado: 10:30 – 21:00</li>
                <li>Domingo: 10:30 – 20:30</li>
                <li className="text-pox-red font-semibold">Lunes: Cerrado</li>
              </ul>
            </div>

            {/* Image */}
            <div
              className="hidden lg:block rounded-2xl overflow-hidden h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
