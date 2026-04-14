import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `$${price} MXN`;
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3");
}
