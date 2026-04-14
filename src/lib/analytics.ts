declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

export function trackMetaPixel(
  event: string,
  data?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
}

// Event names
export const EVENTS = {
  CTA_CLICK: "cta_click",
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  MENU_SECTION_VIEW: "menu_section_view",
  SOCIAL_CLICK: "social_click",
  MAP_INTERACT: "map_interact",
  PHONE_CLICK: "phone_click",
} as const;
