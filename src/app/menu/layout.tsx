import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú y Precios — Pozole Rojo, Blanco y Vegetariano en Amecameca",
  description:
    "Pozole rojo, blanco y vegetariano de $110 a $130 MXN con guarnición incluida, más tlacoyos, sopes y quesadillas. Centro de Amecameca, mar-dom desde 10:30.",
  alternates: { canonical: "https://poxahuac.com/menu" },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
