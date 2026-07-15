import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitio no disponible",
  robots: {
    index: false,
    follow: false,
  },
};

// Overlay a pantalla completa: cubre el Header/Footer del root layout
// para que el sitio desactivado no muestre navegación.
export default function ExpiradaPage() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-pox-brown px-4">
      <div className="text-center max-w-md">
        <img
          src="/images/logo/poxahuac_isotipo_blanco.png"
          alt=""
          className="w-16 h-16 mx-auto mb-6 opacity-70"
        />
        <h1 className="text-3xl font-heading font-bold text-white mb-4">
          Sitio no disponible
        </h1>
        <div className="w-16 h-0.5 bg-pox-gold mx-auto mb-6" />
        <p className="text-white/70 mb-8">
          El periodo de revisión de 30 días finalizó sin aprobación. La página
          ha sido desactivada.
        </p>
        <p className="text-white/40 text-sm">
          ¿Eres el propietario del proyecto? Ponte en contacto con tu proveedor
          para reactivar el sitio.
        </p>
      </div>
    </div>
  );
}
