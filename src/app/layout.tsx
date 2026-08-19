import type { Metadata } from "next";
import { DM_Sans, Nunito_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { JsonLd } from "@/lib/schema";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poxahuac.com"),
  title: {
    default: "Poxahuac — Pozole Tradicional en Amecameca | Restaurante Mexicano",
    template: "%s | Poxahuac",
  },
  description:
    "El mejor pozole de Amecameca. Pozole rojo, blanco, de pollo, cerdo o vegetariano. Antojitos mexicanos, terraza pet-friendly y vista a los volcanes. Reserva tu mesa.",
  keywords: [
    "pozole amecameca",
    "restaurante amecameca",
    "pozole rojo",
    "pozole blanco",
    "comida mexicana amecameca",
    "donde comer amecameca",
    "restaurante cerca volcanes",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://poxahuac.com",
    siteName: "Poxahuac",
    title: "Poxahuac — Pozole Tradicional en Amecameca",
    description:
      "El mejor pozole de Amecameca. Reserva tu mesa y disfruta de pozole rojo, blanco, antojitos mexicanos y vista a los volcanes.",
    images: [{ url: "/images/og/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poxahuac — Pozole Tradicional en Amecameca",
    description: "El mejor pozole de Amecameca. Reserva tu mesa.",
    images: ["/images/og/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://poxahuac.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${nunitoSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <ScrollProgress />
        <Header />
        <main id="main-content" className="flex-1 pt-[76px] sm:pt-[80px]">
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
