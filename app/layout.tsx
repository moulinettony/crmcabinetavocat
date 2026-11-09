import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const title = "CRM Cabinet d'Avocat | Logiciel de gestion de cabinet tout-en-un";
const description =
  "Le CRM tout-en-un pour cabinets d'avocats : suivi des dossiers, Google Drive, audiences, tâches Kanban, facturation Facturo et IA (Claude & ChatGPT en lecture seule). Demandez une démonstration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  keywords: [
    "CRM cabinet d'avocat",
    "logiciel gestion cabinet d'avocat",
    "suivi dossiers avocats",
    "logiciel avocat",
    "gestion des audiences",
    "facturation avocat",
    "legal tech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0f18" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
