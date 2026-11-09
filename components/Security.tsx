import { ShieldCheck, ScrollText, Building2, Check, X } from "lucide-react";

const modules = ["clients", "notes", "taches", "documents", "fiches_de_mission", "facturation", "statistiques"];
const people: { name: string; role: string; perms: boolean[] }[] = [
  { name: "Associé", role: "Admin", perms: [true, true, true, true, true, true, true] },
  { name: "Collaborateur", role: "Avocat", perms: [true, true, true, true, true, false, false] },
  { name: "Secrétariat", role: "Assistant", perms: [true, false, true, false, true, false, false] },
];

const logs = [
  ["09:42:17", "A. Lahlou", "a clôturé le dossier 031/2024"],
  ["09:38:05", "S. Bennani", "a modifié la tâche « Relancer expert »"],
  ["09:12:44", "K. Amrani", "a consulté la facture F-2026-088"],
  ["08:57:31", "A. Lahlou", "a créé le dossier 124/2026"],
];

export default function Security() {
  return (
    <section id="securite" className="border-t border-slate-800/80 bg-[#0a0f18] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">Sécurité & administration</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Permissions granulaires & journaux d&apos;activité
          </h2>
          <p className="mt-4 text-slate-400">
            Contrôlez les accès module par module et gardez une trace horodatée de chaque action dans le cabinet.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* permissions */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#131b29] p-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/25 bg-[#3b82f6]/10 text-[#60a5fa]">
                <ShieldCheck size={20} />
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Permissions par collaborateur</h3>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Activez ou retirez l&apos;accès à chaque module selon le rôle au sein du cabinet.
            </p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-[#0d1421]">
              <table className="w-full min-w-[640px] text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="px-4 py-3 font-semibold">Collaborateur</th>
                    {modules.map((m) => (
                      <th key={m} className="px-2 py-3 text-center font-mono text-[10px] font-medium text-slate-400">
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {people.map((p) => (
                    <tr key={p.name} className="border-b border-slate-800/60 last:border-0">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-white">{p.name}</p>
                        <p className="text-[10px] text-slate-500">{p.role}</p>
                      </td>
                      {p.perms.map((ok, i) => (
                        <td key={i} className="px-2 py-3 text-center">
                          {ok ? (
                            <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                              <Check size={13} />
                            </span>
                          ) : (
                            <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-slate-800 text-slate-500">
                              <X size={13} />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* isolation */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#131b29] p-6 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-teal-500/25 bg-teal-500/10 text-teal-300">
              <Building2 size={20} />
            </span>
            <h3 className="mt-4 text-xl font-bold sm:text-2xl">Isolation multi-tenant</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Chaque cabinet évolue dans un espace de données cloisonné. Aucune requête ne peut traverser la frontière entre deux cabinets.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs">
              {["Cabinet A", "Cabinet B"].map((c) => (
                <div key={c} className="rounded-xl border border-slate-800 bg-[#0d1421] p-3">
                  <p className="font-semibold text-[#60a5fa]">{c}</p>
                  <p className="mt-1 text-slate-500">Espace isolé</p>
                </div>
              ))}
            </div>
          </div>

          {/* audit log */}
          <div className="rounded-2xl border border-slate-800/90 bg-[#131b29] p-6 lg:col-span-3">
            <div className="grid items-center gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/25 bg-[#3b82f6]/10 text-[#60a5fa]">
                  <ScrollText size={20} />
                </span>
                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">Journaux d&apos;activité horodatés</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Chaque action au sein du cabinet est enregistrée dans l&apos;onglet <strong className="text-slate-200">Journaux</strong> : qui, quoi, quand.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d1421] font-mono text-xs text-slate-300 lg:col-span-3">
                <div className="border-b border-slate-800 px-4 py-2 text-[10px] uppercase tracking-wider text-slate-500">
                  Administration · Journaux d&apos;activité
                </div>
                {logs.map(([t, u, a]) => (
                  <div key={t} className="flex flex-wrap gap-x-3 border-b border-slate-800/60 px-4 py-2.5 last:border-0">
                    <span className="text-[#60a5fa]">{t}</span>
                    <span className="text-white">{u}</span>
                    <span className="text-slate-400">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
