"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { RESERVATION_HOURS, OCASIONES } from "@/lib/constants";
import { trackEvent, trackMetaPixel, EVENTS } from "@/lib/analytics";
import type { ReservationFormData } from "@/types";

const schema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  telefono: z
    .string()
    .min(10, "Ingresa un teléfono válido")
    .regex(/^[\d\s\-+()]+$/, "Formato de teléfono inválido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  fecha: z.string().min(1, "Selecciona una fecha"),
  hora: z.string().min(1, "Selecciona una hora"),
  personas: z.number().min(1).max(20),
  ocasion: z.string().optional(),
  notas: z.string().optional(),
});

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [personas, setPersonas] = useState(2);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(schema),
    defaultValues: { personas: 2 },
  });

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  async function onSubmit(data: ReservationFormData) {
    try {
      await fetch("/api/reservacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Continue even if API fails — WhatsApp is the primary channel
    }

    trackEvent(EVENTS.FORM_SUBMIT, { form: "reservacion" });
    trackMetaPixel("Lead", { content_name: "Reservación" });

    const whatsappUrl = buildWhatsAppUrl(data);
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          ¡Reservación enviada!
        </h3>
        <p className="text-white/70">
          Te contactaremos por WhatsApp en menos de 30 minutos para confirmar tu mesa.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={() => trackEvent(EVENTS.FORM_START, { form: "reservacion" })}
      className="space-y-5"
    >
      <Input
        id="nombre"
        label="Nombre"
        placeholder="Tu nombre completo"
        error={errors.nombre?.message}
        required
        {...register("nombre")}
      />

      <Input
        id="telefono"
        label="Teléfono"
        type="tel"
        placeholder="+52 55 1234 5678"
        error={errors.telefono?.message}
        required
        {...register("telefono")}
      />

      <Input
        id="email"
        label="Email (opcional)"
        type="email"
        placeholder="tu@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fecha" className="block text-sm font-semibold text-white mb-1.5">
            Fecha <span className="text-pox-red">*</span>
          </label>
          <input
            id="fecha"
            type="date"
            min={minDate}
            className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
            {...register("fecha")}
          />
          {errors.fecha && (
            <p className="mt-1 text-sm text-pox-red">{errors.fecha.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="hora" className="block text-sm font-semibold text-white mb-1.5">
            Hora <span className="text-pox-red">*</span>
          </label>
          <select
            id="hora"
            className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
            {...register("hora")}
          >
            <option value="">Seleccionar</option>
            {RESERVATION_HOURS.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          {errors.hora && (
            <p className="mt-1 text-sm text-pox-red">{errors.hora.message}</p>
          )}
        </div>
      </div>

      {/* Personas counter */}
      <div>
        <label className="block text-sm font-semibold text-white mb-1.5">
          Número de personas <span className="text-pox-red">*</span>
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              const v = Math.max(1, personas - 1);
              setPersonas(v);
              setValue("personas", v);
            }}
            className="w-10 h-10 rounded-full bg-pox-dark-surface border border-pox-gold/30 flex items-center justify-center text-white hover:bg-pox-gold/20 transition-colors"
          >
            <Minus size={18} />
          </button>
          <span className="text-2xl font-heading font-bold text-white w-8 text-center">
            {personas}
          </span>
          <button
            type="button"
            onClick={() => {
              const v = Math.min(20, personas + 1);
              setPersonas(v);
              setValue("personas", v);
            }}
            className="w-10 h-10 rounded-full bg-pox-dark-surface border border-pox-gold/30 flex items-center justify-center text-white hover:bg-pox-gold/20 transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="ocasion" className="block text-sm font-semibold text-white mb-1.5">
          Ocasión especial (opcional)
        </label>
        <select
          id="ocasion"
          className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
          {...register("ocasion")}
        >
          <option value="">Sin ocasión especial</option>
          {OCASIONES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notas" className="block text-sm font-semibold text-white mb-1.5">
          Notas adicionales (opcional)
        </label>
        <textarea
          id="notas"
          rows={3}
          placeholder="Alergias, preferencias, peticiones especiales..."
          className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white resize-none"
          {...register("notas")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Enviando...
          </>
        ) : (
          "Reservar por WhatsApp"
        )}
      </Button>
    </form>
  );
}
