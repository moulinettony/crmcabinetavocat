import { Check } from "lucide-react";

const items = [
  "Tous les modules : dossiers, calendrier, tâches Kanban, facturation Facturo, analytique",
  "Synchronisation Google Drive & Google Calendar (2-Way)",
  "Connecteur IA MCP (Claude & ChatGPT) en lecture seule",
  "Permissions par collaborateur et journaux d'activité",
  "Accompagnement à la mise en route et à la reprise de vos dossiers",
];

export default function Pricing() {
  return (
    <section id="tarifs" className="border-t border-slate-800/80 bg-[#0d1421] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">Tarifs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Une offre adaptée à la taille de votre cabinet
          </h2>
          <p className="mt-4 text-slate-400">
            Tarification sur mesure selon le nombre de collaborateurs, sans frais cachés.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-[#131b29] shadow-2xl">
          <div className="grid md:grid-cols-5">
            <div className="border-b border-slate-800 bg-[#0a0f18] p-8 text-white md:col-span-2 md:border-b-0 md:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">Offre Cabinet</p>
              <p className="mt-3 text-4xl font-bold">Sur devis</p>
              <p className="mt-2 text-sm text-slate-400">Par cabinet, selon le nombre d&apos;utilisateurs.</p>
              <a
                href="#demo"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#3b82f6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Demander une démonstration
              </a>
            </div>
            <ul className="space-y-3.5 p-8 md:col-span-3">
              {items.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300">
                  <Check size={17} className="mt-0.5 shrink-0 text-emerald-400" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
