import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sitio desactivado: el periodo de revisión de 30 días finalizó sin
// aprobación. Todas las rutas se redirigen a /expirada y las APIs
// responden 410. Para reactivar el sitio basta con eliminar este archivo.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return Response.json(
      {
        error:
          "Servicio desactivado. El periodo de revisión de 30 días finalizó sin aprobación.",
      },
      { status: 410 }
    );
  }

  return NextResponse.redirect(new URL("/expirada", request.url), 307);
}

export const config = {
  // Todo excepto /expirada, internos de Next y archivos estáticos (con extensión)
  matcher: ["/((?!expirada|_next/static|_next/image|.*\\..*).*)"],
};
