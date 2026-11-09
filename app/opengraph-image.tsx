import { ImageResponse } from "next/og";

export const alt = "CRM Cabinet Avocat – le CRM tout-en-un pour cabinets d'avocats";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#0A0F18 0%,#141C2B 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa", marginBottom: 28 }}>
          CRM Cabinet Avocat · Espace cabinet
        </div>
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1.12, fontWeight: 700 }}>
          Le CRM tout-en-un pensé pour les cabinets d&apos;avocats exigeants
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8", marginTop: 34 }}>
          Dossiers · Google Drive · Audiences · Tâches · Facturation (Facturo) · IA
        </div>
      </div>
    ),
    size,
  );
}
