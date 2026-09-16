import { NextResponse, type NextRequest } from "next/server";
import { site } from "@/data";

const EXPIRES_AT = new Date(site.demo.caduca);

export function proxy(_req: NextRequest) {
  if (Date.now() < EXPIRES_AT.getTime()) {
    return NextResponse.next();
  }
  return new NextResponse(
    `<!doctype html><html lang="es"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Propuesta no disponible</title>
    <style>
      body{margin:0;min-height:100vh;display:grid;place-items:center;
        background:#0a0a0c;color:#f5f4f0;font-family:system-ui,sans-serif;padding:2rem}
      div{max-width:30rem;text-align:center}
      h1{font-size:1.4rem;margin:0 0 .75rem}
      p{color:#b7b5ae;line-height:1.6;margin:.4rem 0}
    </style></head><body><div>
      <h1>Esta propuesta ya no está disponible</h1>
      <p>La demo de Mucho Más Que Fotos preparada por WEBMD tenía una fecha de validez que ya ha pasado.</p>
      <p>Si quieres retomarla, escríbenos y la reactivamos.</p>
    </div></body></html>`,
    { status: 410, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|presentadores|brand).*)"],
};
