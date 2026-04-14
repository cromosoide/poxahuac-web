import type { NavLink, HourRange } from "@/types";

export const BRAND = {
  name: "Poxahuac",
  tagline: "El pozole más esponjoso de Amecameca",
  description: "Restaurante de pozole tradicional mexicano",
  phone: "+525512271583",
  phoneDisplay: "55 1227 1583",
  whatsapp: "5545808799",
  whatsappFull: "525545808799",
  email: "contacto@sietelael.com",
  address: {
    street: "Avenida Fray Martín De Valencia 18",
    city: "Amecameca",
    state: "Estado de México",
    zip: "56900",
    country: "MX",
    full: "Av. Fray Martín De Valencia 18, Amecameca 56900, Estado de México",
    lat: 19.1258,
    lng: -98.7631,
  },
  social: {
    facebook: "https://www.facebook.com/Poxahuac/",
    instagram: "https://www.instagram.com/poxahuac/",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g670639-d27322289-Reviews-Poxahuac-Amecameca_Central_Mexico_and_Gulf_Coast.html",
  },
  hours: {
    martes: { open: "10:30", close: "20:30" } as HourRange,
    miercoles: { open: "10:30", close: "20:30" } as HourRange,
    jueves: { open: "10:30", close: "20:30" } as HourRange,
    viernes: { open: "10:30", close: "21:00" } as HourRange,
    sabado: { open: "10:30", close: "21:00" } as HourRange,
    domingo: { open: "10:30", close: "20:30" } as HourRange,
    lunes: null,
  },
  hoursDisplay: "Mar-Jue 10:30–20:30 · Vie-Sáb 10:30–21:00 · Dom 10:30–20:30",
  payments: ["Efectivo", "Visa", "Mastercard", "AmEx", "Transferencia"],
  features: [
    "WiFi gratis",
    "Terraza",
    "Pet-friendly",
    "Para llevar",
    "Estacionamiento",
  ],
  rating: {
    value: 5.0,
    source: "TripAdvisor",
    position: "#14 de 53 restaurantes en Amecameca",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Reservar", href: "/reservaciones" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const RESERVATION_HOURS = [
  "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00",
];

export const OCASIONES = [
  "Cumpleaños",
  "Aniversario",
  "Reunión familiar",
  "Reunión de amigos",
  "Evento empresarial",
  "Otro",
];

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${BRAND.address.lat},${BRAND.address.lng}&destination_place_id=ChIJExample`;
export const WAZE_URL = `https://waze.com/ul?ll=${BRAND.address.lat},${BRAND.address.lng}&navigate=yes`;
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.554045962142!2d-98.77262722383969!3d19.127210182087957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3deb18935185%3A0x5484125467339c30!2sPoxahuac!5e0!3m2!1ses-419!2smx!4v1776193945108!5m2!1ses-419!2smx";
