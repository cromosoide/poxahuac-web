import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horarios y Afluencia | Poxahuac Amecameca — Cuando Visitarnos",
  description:
    "Consulta los horarios de Poxahuac y el nivel de afluencia por dia y hora. Planea tu visita para disfrutar sin esperas. Abierto Martes a Domingo.",
  keywords: [
    "horarios poxahuac",
    "cuando ir a poxahuac",
    "afluencia restaurante amecameca",
    "horario poxahuac amecameca",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function HorariosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
