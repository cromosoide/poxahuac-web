import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nombre, email, asunto, mensaje } = body;

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    // Log contact message (future: send email via Resend/SendGrid)
    console.log("Nuevo mensaje de contacto:", {
      nombre,
      email,
      asunto,
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
