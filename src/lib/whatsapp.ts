import type { ReservationFormData } from "@/types";
import { BRAND } from "./constants";

export function buildWhatsAppUrl(data: ReservationFormData): string {
  const lines = [
    `Hola, quiero reservar en Poxahuac:`,
    `📅 ${data.fecha} a las ${data.hora}`,
    `👥 ${data.personas} persona${data.personas > 1 ? "s" : ""}`,
    `👤 ${data.nombre}`,
    `📱 ${data.telefono}`,
  ];

  if (data.ocasion) {
    lines.push(`🎉 ${data.ocasion}`);
  }

  if (data.notas) {
    lines.push(`📝 ${data.notas}`);
  }

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BRAND.whatsappFull}?text=${message}`;
}
