"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { trackEvent, EVENTS } from "@/lib/analytics";
import type { ContactFormData } from "@/types";

const schema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Ingresa un email válido"),
  asunto: z.string().min(1, "Selecciona un asunto"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const asuntos = [
  "Información general",
  "Eventos y grupos",
  "Facturación",
  "Colaboraciones y prensa",
  "Otro",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Continue even if API fails
    }

    trackEvent(EVENTS.FORM_SUBMIT, { form: "contacto" });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-white/70">
          Te responderemos lo antes posible. Gracias por contactarnos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        id="contact-nombre"
        label="Nombre"
        placeholder="Tu nombre completo"
        error={errors.nombre?.message}
        required
        {...register("nombre")}
      />

      <Input
        id="contact-email"
        label="Email"
        type="email"
        placeholder="tu@email.com"
        error={errors.email?.message}
        required
        {...register("email")}
      />

      <div>
        <label htmlFor="contact-asunto" className="block text-sm font-semibold text-white mb-1.5">
          Asunto <span className="text-pox-red">*</span>
        </label>
        <select
          id="contact-asunto"
          className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors bg-pox-dark-surface text-white"
          {...register("asunto")}
        >
          <option value="">Seleccionar</option>
          {asuntos.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        {errors.asunto && (
          <p className="mt-1 text-sm text-pox-red">{errors.asunto.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-mensaje" className="block text-sm font-semibold text-white mb-1.5">
          Mensaje <span className="text-pox-red">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          rows={5}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full px-4 py-3 rounded-lg border-2 border-pox-gold/30 focus:border-pox-gold focus:outline-none transition-colors resize-none bg-pox-dark-surface text-white placeholder:text-white/40"
          {...register("mensaje")}
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-pox-red">{errors.mensaje.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </Button>
    </form>
  );
}
