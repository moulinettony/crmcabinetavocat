import { Plus } from "lucide-react";

export const faqs = [
  {
    q: "Mes données clients sont-elles confidentielles ?",
    a: "Oui. Chaque cabinet dispose d'un espace de données totalement isolé (multi-tenant). L'accès est contrôlé module par module pour chaque collaborateur, et toutes les actions sont consignées dans des journaux d'activité horodatés. Les données sont chiffrées en transit et nous ne les utilisons jamais à d'autres fins que la fourniture du service.",
  },
  {
    q: "Le CRM est-il compatible avec Google Workspace ?",
    a: "Oui. Le CRM se connecte au Google Drive central de votre cabinet (création et renommage automatiques des répertoires de dossiers) et se synchronise dans les deux sens avec Google Calendar pour vos audiences et rendez-vous. Il fonctionne avec Google Workspace comme avec un compte Google standard.",
  },
  {
    q: "Comment reprendre mes dossiers existants ?",
    a: "Nous vous accompagnons lors de l'onboarding : import de votre liste de clients et dossiers, rattachement aux répertoires Google Drive existants et poursuite de votre numérotation annuelle N/YYYY. Vous démarrez sans repartir de zéro.",
  },
  {
    q: "Puis-je y accéder depuis mon mobile ?",
    a: "Oui. L'application est accessible depuis n'importe quel navigateur, sur ordinateur, tablette et smartphone, sans installation. Consultez vos audiences, vos tâches et vos dossiers depuis le palais ou en déplacement.",
  },
  {
    q: "L'IA peut-elle modifier ou supprimer mes données ?",
    a: "Non. Le connecteur MCP pour Claude et ChatGPT fonctionne en lecture seule : l'assistant peut répondre à vos questions sur le cabinet mais ne peut effectuer aucune modification. Il respecte les permissions de l'utilisateur connecté.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-800/80 bg-[#0d1421] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Questions fréquentes</h2>
        </div>
        <div className="mt-12 divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-[#131b29]">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 py-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={18} className="shrink-0 text-[#60a5fa] transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
