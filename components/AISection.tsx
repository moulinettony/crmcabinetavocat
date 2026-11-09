import { Sparkles, Lock, MessageSquare, Eye, Plug } from "lucide-react";

const questions = [
  "Quels sont les dossiers en retard cette semaine ?",
  "Combien de tâches ont été clôturées ce mois-ci ?",
  "Quelles audiences ai-je demain et pour quels dossiers ?",
];

export default function AISection() {
  return (
    <section id="ia" className="relative overflow-hidden border-t border-slate-800/80 bg-[#0d1421] py-20 text-white sm:py-28">
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-[#132038] px-3 py-1 text-xs font-medium text-blue-300">
            <Sparkles size={12} /> Assistant · Connecteur MCP
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Interrogez votre cabinet avec <span className="text-[#60a5fa]">Claude</span> ou{" "}
            <span className="text-teal-300">ChatGPT</span>
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            Grâce au <strong className="text-white">connecteur MCP</strong>, les associés relient Claude ou ChatGPT à leur CRM et posent leurs questions en langage naturel, en toute sécurité.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              [Lock, "100 % lecture seule", "L'assistant consulte : il ne peut ni créer, ni modifier, ni supprimer aucune donnée."],
              [Eye, "Respect strict des permissions", "L'IA ne voit que les modules auxquels le collaborateur connecté a accès."],
              [Plug, "Connexion rapide", "Compatible avec les connecteurs MCP de Claude et de ChatGPT."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Lock;
              return (
                <li key={t as string} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-500/25 bg-[#3b82f6]/10 text-[#60a5fa]">
                    <I size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t as string}</p>
                    <p className="text-sm text-slate-400">{d as string}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#131b29] p-5 shadow-2xl sm:p-6">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
            <span className="flex items-center gap-2 font-medium text-blue-300">
              <Sparkles size={14} /> Assistant IA · MCP
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
              100 % lecture seule
            </span>
          </div>
          <div className="space-y-4 text-sm">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#3b82f6] px-4 py-2.5 text-white">
              {questions[0]}
            </div>
            <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-slate-800 bg-[#0d1421] px-4 py-3 text-slate-300">
              <p>
                <strong className="text-white">3 dossiers</strong> ont des tâches en retard cette semaine :
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-400">
                <li>• 124/2026 – Alaoui : conclusions (échéance hier)</li>
                <li>• 097/2026 – Nexa : bordereau (2 jours)</li>
                <li>• 071/2025 – Benali : relance expert (3 jours)</li>
              </ul>
            </div>
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#3b82f6] px-4 py-2.5 text-white">
              {questions[1]}
            </div>
            <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-slate-800 bg-[#0d1421] px-4 py-3 text-slate-300">
              <strong className="text-emerald-400">42 tâches</strong> ont été clôturées ce mois-ci, soit +18 % par rapport au mois dernier.
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {questions.slice(2).map((q) => (
              <span
                key={q}
                className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-[#0d1421] px-3 py-1.5 text-xs text-slate-400"
              >
                <MessageSquare size={12} className="text-[#3b82f6]" /> {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
