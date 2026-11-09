import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
  const str = (k: string) => String(data[k] ?? "").trim().slice(0, 2000);
  const payload = {
    nom: str("nom"),
    cabinet: str("cabinet"),
    email: str("email"),
    telephone: str("telephone"),
    collaborateurs: str("collaborateurs"),
    message: str("message"),
    receivedAt: new Date().toISOString(),
  };
  if (!payload.nom || !payload.cabinet || !emailRe.test(payload.email)) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 422 });
  }
  // Honeypot
  if (str("website")) return NextResponse.json({ ok: true });

  const hook = process.env.DEMO_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Demo webhook failed", e);
      return NextResponse.json({ error: "Envoi impossible" }, { status: 502 });
    }
  } else {
    console.log("[demo-request]", payload);
  }
  return NextResponse.json({ ok: true });
}

