import type { ReservationFormData } from "@/types";
import { BRAND } from "./constants";

export function buildWhatsAppUrl(data: ReservationFormData): string {
  // Emojis escritos como escapes Unicode (ASCII puro) para evitar que se
  // corrompan a U+FFFD (�) en el build/deploy.
  const lines = [
    `Hola, quiero reservar en Poxahuac:`,
    `\u{1F4C5} ${data.fecha} a las ${data.hora}`,
    `\u{1F465} ${data.personas} persona${data.personas > 1 ? "s" : ""}`,
    `\u{1F464} ${data.nombre}`,
    `\u{1F4F1} ${data.telefono}`,
  ];

  if (data.ocasion) {
    lines.push(`\u{1F389} ${data.ocasion}`);
  }

  if (data.notas) {
    lines.push(`\u{1F4DD} ${data.notas}`);
  }

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BRAND.whatsappFull}?text=${message}`;
}
