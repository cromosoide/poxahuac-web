import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nombre, telefono, fecha, hora, personas } = body;

    if (!nombre || !telefono || !fecha || !hora || !personas) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    // Log reservation (future: store in database or send email)
    console.log("Nueva reservación:", {
      nombre,
      telefono,
      fecha,
      hora,
      personas,
      ocasion: body.ocasion,
      notas: body.notas,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la reservación" },
      { status: 500 }
    );
  }
}
