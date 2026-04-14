import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-heading font-bold text-pox-red mb-4">404</p>
        <h1 className="text-2xl font-heading font-bold text-white mb-2">
          Página no encontrada
        </h1>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Parece que esta página no existe. Pero nuestro pozole sí te está esperando.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button variant="outline">Ir al Inicio</Button>
          </Link>
          <Link href="/menu">
            <Button>Ver Menú</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
