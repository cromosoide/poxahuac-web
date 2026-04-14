export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  badges?: MenuBadge[];
  featured?: boolean;
}

export type MenuCategory =
  | "pozoles"
  | "antojitos"
  | "bebidas"
  | "postres"
  | "extras";

export type MenuBadge = "mas-vendido" | "nuevo" | "vegetariano" | "picante";

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: "TripAdvisor" | "Google" | "Facebook";
  date?: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  keywords: string[];
  author: string;
}

export interface ReservationFormData {
  nombre: string;
  telefono: string;
  email?: string;
  fecha: string;
  hora: string;
  personas: number;
  ocasion?: string;
  notas?: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HourRange {
  open: string;
  close: string;
}

export interface AfluenciaData {
  day: string;
  hours: { time: string; level: "baja" | "moderada" | "alta" }[];
}
