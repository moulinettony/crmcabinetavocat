import {
  FolderSync,
  CalendarSync,
  Kanban,
  Mic,
  DollarSign,
  QrCode,
  Star,
  Check,
  Folder,
  Mail,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Filter,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

function Card({
  className = "",
  icon,
  tone = "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/25",
  tag,
  title,
  children,
  visual,
}: {
  className?: string;
  icon: ReactNode;
  tone?: string;
  tag: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#131b29] p-6 transition hover:border-slate-700 sm:p-7 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-xl border ${tone}`}>{icon}</span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{tag}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-slate-400">{children}</div>
      {visual && <div className="mt-6 flex-1">{visual}</div>}
    </article>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-slate-300">
          <Check size={15} className="mt-0.5 shrink-0 text-emerald-400" /> <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const pill = "rounded-md border border-slate-700 bg-[#0d1421] px-2 py-0.5 text-[11px] font-medium text-slate-300";

function DossiersPreview() {
  const dossiers = [
    {
      initial: "A",
      name: "Abdelali TARCHOULI",
      email: "a.tarchouli@realites-maroc.com",
      activeTasks: 0,
      doneText: "Toutes les tâches sont faites (2 terminées)",
    },
    {
      initial: "A",
      name: "Aniss El Hamouri",
      email: "anisselhamouri@gmail.com",
      activeTasks: 1,
      taskTitle: "Lancer la procédure de concordance de ...",
      taskDate: "9 nov.",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b101b] p-3.5 text-xs">
      {/* Top filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
        <div className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#131b29] p-1">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#3b82f6] px-2.5 py-1 text-[11px] font-semibold text-white">
            Dossiers en cours
            <span className="rounded-full bg-white/20 px-1.5 py-0.2 text-[10px]">93</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-slate-400">
            Dossiers clôturés (30j)
            <span className="rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-500">0</span>
          </span>
        </div>
        <div className="hidden items-center gap-1.5 rounded-lg border border-slate-800 bg-[#131b29] px-2.5 py-1 text-[11px] text-slate-500 sm:flex">
          <Search size={11} /> Rechercher un dossier ou client...
        </div>
      </div>

      {/* Dossier cards grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {dossiers.map((d) => (
          <div
            key={d.name}
            className="flex flex-col justify-between rounded-xl border border-slate-800/90 bg-[#131b29] p-3.5"
          >
            <div>
              {/* Client header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#1c2940] text-xs font-bold text-[#60a5fa]">
                    {d.initial}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-white">{d.name}</p>
                    <p className="truncate text-[10px] text-slate-400">{d.email}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  En cours
                </span>
              </div>

              {/* Tasks + Drive link row */}
              <div className="mt-3.5 flex items-center justify-between text-[10px]">
                <span className="font-semibold uppercase tracking-wider text-slate-400">
                  TÂCHES ({d.activeTasks} ACTIVE)
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-[#60a5fa]">
                  <Folder size={11} /> Drive
                </span>
              </div>

              {/* Inner status box */}
              {d.activeTasks === 0 ? (
                <div className="mt-2 rounded-lg border border-slate-800 bg-[#0e1522] p-2.5 text-center">
                  <p className="text-[11px] font-semibold text-slate-200">
                    {d.doneText} <span className="text-emerald-400">✓</span>
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Vous pouvez clôturer ce dossier si l&apos;affaire est terminée.
                  </p>
                </div>
              ) : (
                <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-[#0e1522] p-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-slate-200">{d.taskTitle}</p>
                    <p className="mt-1 text-[10px] text-slate-400">📅 {d.taskDate}</p>
                  </div>
                  <span className="shrink-0 rounded bg-[#3b82f6]/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                    En cours
                  </span>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-2.5 text-[11px]">
              <span className="font-medium text-[#60a5fa]">+ Tâche</span>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md border border-slate-700 bg-[#0d1421] px-2.5 py-1 font-medium text-slate-200">
                  Fiche client
                </span>
                <span className="rounded-md border border-rose-500/30 bg-rose-500/15 px-2.5 py-1 font-semibold text-rose-400">
                  Clôturer
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarPreview() {
  const days = [
    {
      num: "9",
      today: true,
      more: "+14 de plus",
      events: [
        { time: "09:00", label: "869/1501/2026 ...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "5190/8107/202...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "705/1614/2026...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
      ],
    },
    {
      num: "10",
      more: "+18 de plus",
      events: [
        { time: "09:00", label: "75/1402/2026 ...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "1389/1201/202...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "15:00", label: "SAMGUINI Said ...", tone: "border-sky-400 bg-sky-500/15 text-sky-200" },
      ],
    },
    {
      num: "11",
      more: "+16 de plus",
      events: [
        { time: "09:00", label: "1805/1201/2026...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "08:00", label: "Meriem Messoudi", tone: "border-rose-400 bg-rose-500/15 text-rose-200" },
        { time: "Journée", label: "Audience TGI", tone: "border-emerald-400 bg-emerald-500/15 text-emerald-200" },
      ],
    },
    {
      num: "12",
      more: "+16 de plus",
      events: [
        { time: "09:00", label: "1759/1201/2026...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "1390/1201/202...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "15:00", label: "Aida FATHI", tone: "border-sky-400 bg-sky-500/15 text-sky-200" },
      ],
    },
    {
      num: "13",
      more: "+2 de plus",
      events: [
        { time: "09:00", label: "504/2406/202...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "870/1501/2026...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
        { time: "09:00", label: "1596/1201/202...", tone: "border-purple-400 bg-purple-500/15 text-purple-200" },
      ],
    },
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b101b] p-3.5 text-xs">
      {/* Top Google Calendar Sync Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm">
          <CheckCircle2 size={12} className="text-emerald-600" />
          Google Calendar · admin@cabinetavocat.ma
        </span>
        <div className="flex items-center gap-1.5">
          <div className="inline-flex rounded-lg border border-slate-800 bg-[#131b29] p-0.5 text-[10px]">
            <span className="rounded-md bg-[#8b5cf6] px-2 py-0.5 font-semibold text-white">Mois</span>
            <span className="px-2 py-0.5 text-slate-400">Semaine</span>
            <span className="px-2 py-0.5 text-slate-400">Jour</span>
          </div>
          <span className="rounded-lg bg-[#8b5cf6] px-2.5 py-1 text-[10px] font-semibold text-white">
            + Rendez-vous
          </span>
        </div>
      </div>

      {/* Month toolbar */}
      <div className="mb-2.5 flex items-center gap-2 text-[11px]">
        <span className="rounded-md border border-slate-800 bg-[#131b29] px-2 py-0.5 text-slate-300">
          Aujourd&apos;hui
        </span>
        <span className="grid h-5 w-5 place-items-center rounded border border-slate-800 bg-[#131b29] text-slate-400">
          <ChevronLeft size={11} />
        </span>
        <span className="grid h-5 w-5 place-items-center rounded border border-slate-800 bg-[#131b29] text-slate-400">
          <ChevronRight size={11} />
        </span>
        <span className="font-bold text-white">Novembre 2026</span>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#111827]">
        <div className="grid grid-cols-5 border-b border-slate-800 bg-[#131b29] text-center text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          {["LUN", "MAR", "MER", "JEU", "VEN"].map((d) => (
            <div key={d} className="py-1.5">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 divide-x divide-slate-800">
          {days.map((d) => (
            <div key={d.num} className="min-w-0 p-1.5">
              <span
                className={`inline-grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold ${
                  d.today ? "bg-[#8b5cf6] text-white" : "text-slate-300"
                }`}
              >
                {d.num}
              </span>
              <div className="mt-1 space-y-1">
                {d.events.map((ev, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between gap-1 truncate rounded border-l-2 px-1 py-0.5 text-[9px] ${ev.tone}`}
                  >
                    <span className="truncate">
                      <strong>{ev.time}</strong> {ev.label}
                    </span>
                    <span className="shrink-0 text-[8px] font-bold opacity-75">G</span>
                  </div>
                ))}
                <p className="px-0.5 text-[9px] text-slate-500">{d.more}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TasksKanbanPreview() {
  const columns = [
    {
      title: "À faire",
      count: "13",
      dot: "bg-slate-400",
      badgeText: "text-slate-900",
      cards: [
        {
          title: "Préparer les dossiers et planifier un rendez-vous",
          bar: "w-0",
          lawyer: "Naoual Maktabi",
          client: "Jacques ZUNZ",
          date: "En retard · 30 oct.",
          dateTone: "text-rose-600",
          initials: ["NM"],
        },
        {
          title: "PAIEMENT DES HONORAIRES",
          bar: "w-0",
          lawyer: "Laila Touhami Kadiri",
          client: "Caitlyn Carrico",
          date: "En retard · 4 nov.",
          dateTone: "text-rose-600",
          initials: ["LT"],
        },
        {
          title: "Vérifier l'inscription d'une fondation à la conservation foncière",
          bar: "w-0",
          lawyer: "Zakaria Regragui",
          client: "Hajja krikeb",
          date: "En retard · 4 nov.",
          dateTone: "text-rose-600",
          initials: ["ZR"],
        },
      ],
    },
    {
      title: "En cours",
      count: "6",
      dot: "bg-[#3b82f6]",
      badgeText: "text-[#3b82f6]",
      cards: [
        {
          title: "Copie du dossier",
          bar: "w-1/2 bg-[#3b82f6]",
          lawyer: "Naoual Maktabi",
          client: "Mouna Edwige Araib",
          date: "En retard · 5 nov.",
          dateTone: "text-rose-600",
          initials: ["NM"],
        },
        {
          title: "Préparer la procédure de liquidation judiciaire pour Sofia Barada",
          bar: "w-1/2 bg-[#3b82f6]",
          lawyer: "Zakaria Regragui, Soumia Belfakir",
          client: "Sofia Berrada",
          date: "En retard · 6 nov.",
          dateTone: "text-rose-600",
          initials: ["ZR", "SB"],
        },
        {
          title: "Lancer la procédure de concordance de nom de famille",
          bar: "w-1/2 bg-[#3b82f6]",
          lawyer: "Laila Touhami Kadiri, Soumia Belfakir, Naoual Maktabi",
          client: "Aniss El Hamouri",
          date: "Aujourd'hui",
          dateTone: "text-amber-600",
          initials: ["LT", "SB", "NM"],
        },
      ],
    },
    {
      title: "Terminée",
      count: "58",
      dot: "bg-emerald-400",
      badgeText: "text-emerald-600",
      done: true,
      cards: [
        {
          title: "DEVIS PROCEDURE D'EXPULSION",
          bar: "w-full bg-emerald-500",
          lawyer: "Mouna Bougrine, Laila Touhami Kadiri, Soumia Belfakir",
          client: "Mustapha Azizi",
          date: "12 oct.",
          dateTone: "text-emerald-600",
          initials: ["MB", "LT", "SB"],
        },
        {
          title: "Contacter l'avocat et voir comment négocier avec lui le protocole",
          bar: "w-full bg-emerald-500",
          lawyer: "Laila Touhami Kadiri, Naoual Maktabi, Zakaria Regragui",
          client: "Imane TALBAOUI",
          date: "12 oct.",
          dateTone: "text-emerald-600",
          initials: ["LT", "NM", "ZR"],
        },
        {
          title: "Appeler Ladoul Hajji pour informations mariage franco-marocain",
          bar: "w-full bg-emerald-500",
          lawyer: "Laila Touhami Kadiri, Naoual Maktabi",
          client: "Matthieu Caillat",
          date: "12 oct.",
          dateTone: "text-emerald-600",
          initials: ["LT", "NM"],
        },
      ],
    },
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b101b] p-3.5 text-xs">
      {/* Search + Filters bar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#131b29] px-2.5 py-1 text-[10px] text-slate-400">
            <Search size={11} /> Rechercher une tâche...
          </div>
          <span className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#131b29] px-2 py-1 text-[10px] text-slate-300">
            <Filter size={10} /> Filtres
          </span>
          <span className="text-[10px] text-slate-500">77 tâches</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-[#132038] px-2 py-0.5 text-[10px] font-medium text-blue-300">
          <Mic size={10} /> Dictée vocale IA
        </span>
      </div>

      {/* 3 Kanban columns */}
      <div className="grid gap-2.5 sm:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title} className="rounded-xl border border-slate-800/90 bg-[#111826] p-2.5">
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${col.dot}`} />
              <span className="text-[11px] font-bold text-white">{col.title}</span>
              <span
                className={`rounded-full bg-white px-1.5 py-0.2 text-[9px] font-extrabold ${col.badgeText}`}
              >
                {col.count}
              </span>
            </div>

            <div className="space-y-2">
              {col.cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg border border-slate-800 bg-[#161f30] p-2.5"
                >
                  <p
                    className={`line-clamp-2 text-[10px] font-semibold leading-snug ${
                      col.done ? "text-slate-400 line-through" : "text-white"
                    }`}
                  >
                    {c.title}
                  </p>
                  {/* Progress bar */}
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className={`h-full rounded-full ${c.bar}`} />
                  </div>
                  {/* Lawyer & Client tags */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="inline-flex max-w-full items-center gap-1 truncate rounded bg-[#1a2942] px-1.5 py-0.5 text-[9px] font-medium text-[#60a5fa]">
                      <User size={9} className="shrink-0" />
                      <span className="truncate">{c.lawyer}</span>
                    </span>
                    <span className="inline-flex max-w-full items-center gap-1 truncate rounded bg-[#0d1421] px-1.5 py-0.5 text-[9px] text-slate-400">
                      <User size={9} className="shrink-0" />
                      <span className="truncate">{c.client}</span>
                    </span>
                  </div>
                  {/* Date badge & Avatar initials */}
                  <div className="mt-2.5 flex items-center justify-between gap-1">
                    <span
                      className={`inline-flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-[9px] font-bold ${c.dateTone}`}
                    >
                      📅 {c.date}
                    </span>
                    <div className="flex -space-x-1">
                      {c.initials.map((ini) => (
                        <span
                          key={ini}
                          className="grid h-4 w-4 place-items-center rounded-full bg-white text-[8px] font-extrabold text-slate-900 ring-1 ring-[#161f30]"
                        >
                          {ini}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="fonctionnalites" className="border-t border-slate-800/80 bg-[#0a0f18] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">Fonctionnalités</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Chaque module, pensé pour la pratique du barreau
          </h2>
          <p className="mt-4 text-slate-400">
            De l&apos;ouverture du dossier à l&apos;encaissement des honoraires, tout le cycle de vie de votre cabinet est couvert.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {/* 1: Dossiers */}
          <Card
            className="lg:col-span-3"
            icon={<FolderSync size={19} />}
            tag="Dossiers · Google Drive"
            title="Dossiers & synchronisation Google Drive centralisée"
            visual={<DossiersPreview />}
          >
            Vue synthétique des affaires actives du cabinet : chaque fiche relie les{" "}
            <strong className="text-slate-200">tâches actives</strong>, l&apos;accès direct au répertoire{" "}
            <strong className="text-slate-200">Google Drive</strong>, la fiche client et la clôture en 1 clic.
            <Bullets
              items={[
                "Création et renommage automatiques dans le Google Drive du cabinet",
                "Indicateur « Toutes les tâches sont faites » avant clôture",
                "Vues « Dossiers en cours » et « Dossiers clôturés (30 derniers jours) »",
              ]}
            />
          </Card>

          {/* 2: Calendrier */}
          <Card
            className="lg:col-span-3"
            icon={<CalendarSync size={19} />}
            tone="text-purple-300 bg-purple-500/10 border-purple-500/25"
            tag="Calendrier · Google Calendar 2-Way"
            title="Agenda & audiences synchronisés avec Google Calendar"
            visual={<CalendarPreview />}
          >
            Gérez vos audiences, références de dossiers (<code className="text-purple-300">869/1501/2026</code>) et rendez-vous clients avec{" "}
            <strong className="text-slate-200">synchronisation bidirectionnelle Google Calendar</strong> en temps réel.
            <Bullets
              items={[
                "Vues Mois, Semaine et Jour avec code couleur par type d'événement",
                "Badge de synchronisation Google Calendar (« G ») sur chaque audience",
                "Création rapide d'audience ou de rendez-vous en 1 clic",
              ]}
            />
          </Card>

          {/* 3: Tâches Kanban (full width) */}
          <Card
            className="lg:col-span-6"
            icon={<Kanban size={19} />}
            tag="Tâches · IA vocale"
            title="Gestion des tâches Kanban & dictée vocale IA"
            visual={<TasksKanbanPreview />}
          >
            Kanban collaboratif <span className={pill}>À faire</span> <span className={pill}>En cours</span>{" "}
            <span className={pill}>Terminée</span> avec suivi par avocat et client, alertes{" "}
            <strong className="text-slate-200">En retard</strong> et{" "}
            <strong className="text-slate-200">dictée vocale IA</strong> qui extrait automatiquement le titre, l&apos;échéance et assigne le bon collaborateur.
          </Card>

          {/* 4: Facturation */}
          <Card
            className="lg:col-span-3"
            icon={<DollarSign size={19} />}
            tone="text-emerald-400 bg-emerald-500/10 border-emerald-500/25"
            tag="Facturation · Facturo"
            title="Facturation juridique & recouvrement (Intégration Facturo)"
            visual={
              <div className="rounded-xl border border-slate-800 bg-[#0b101b] p-3.5 text-xs">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="font-semibold text-white">Facturation & Encaissements (Facturo)</span>
                  <span className="text-[10px] font-medium text-[#60a5fa]">ICE & RC intégrés</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    ["CA Total Facturé", "284 500 DH", "text-white"],
                    ["Encaissé", "218 000 DH", "text-emerald-400"],
                    ["À Recouvrer", "52 500 DH", "text-amber-400"],
                    ["En Retard", "14 000 DH", "text-rose-500"],
                  ].map(([l, v, c]) => (
                    <div key={l} className="rounded-lg border border-slate-800 bg-[#131b29] p-2">
                      <p className="truncate text-[9px] text-slate-400">{l}</p>
                      <p className={`mt-0.5 text-xs font-bold tabular-nums ${c}`}>{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 rounded-lg border border-slate-800 bg-[#131b29] p-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
                    <span>Facture #F-2026-088 · ICE 002391847000042</span>
                    <span className="text-amber-400">RAS (10 %) : − 2 000 DH</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between border-t border-slate-800 pt-1.5 text-xs">
                    <span className="text-slate-300">Honoraires HT + Débours</span>
                    <span className="font-bold tabular-nums text-emerald-400">Net à payer : 19 350,00 DH</span>
                  </div>
                </div>
              </div>
            }
          >
            Suivi <strong className="text-slate-200">ICE & RC</strong>, retenue à la source (RAS), débours et calcul du{" "}
            <strong className="text-slate-200">net à payer</strong>, avec analytique de recouvrement en temps réel (CA facturé, encaissé, restant à recouvrer, factures en retard).
          </Card>

          {/* 6 */}
          <Card
            className="lg:col-span-3"
            icon={<QrCode size={19} />}
            tag="Acquisition · Leads"
            title="QR Code d'accueil, pipeline de leads & avis Google"
            visual={
              <div className="rounded-xl border border-slate-800 bg-[#0b101b] p-3.5 text-xs">
                <div className="flex items-center gap-3.5 rounded-xl border border-slate-800 bg-[#131b29] p-3">
                  <div className="grid h-16 w-16 shrink-0 grid-cols-5 gap-0.5 rounded-lg bg-white p-1.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          [0, 1, 3, 4, 5, 9, 12, 15, 19, 20, 21, 23, 24, 7, 17].includes(i)
                            ? "bg-[#0a0f18]"
                            : "bg-slate-200"
                        }
                      />
                    ))}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold text-[#60a5fa]">/customer_register</span>
                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] font-semibold text-amber-300">
                        File de validation
                      </span>
                    </div>
                    <p className="truncate text-[11px] font-semibold text-white">
                      Nouveau client : Karim BENJELLOUN
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-semibold text-emerald-300">
                        ✓ Valider la fiche
                      </span>
                      <span className="inline-flex items-center gap-1 rounded border border-slate-700 bg-[#0d1421] px-2 py-0.5 text-slate-300">
                        <Mail size={10} className="text-[#3b82f6]" /> Répondre en 1 clic
                      </span>
                      <span className="inline-flex items-center gap-1 rounded border border-slate-700 bg-[#0d1421] px-2 py-0.5 text-slate-300">
                        <Star size={10} className="fill-amber-400 text-amber-400" /> Avis Google
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Enregistrement client en ligne par <strong className="text-slate-200">QR Code à l&apos;accueil</strong> (
            <code className="rounded bg-[#0d1421] px-1.5 py-0.5 text-blue-300">/customer_register</code>) avec{" "}
            <strong className="text-slate-200">file de validation</strong>, pipeline de leads avec réponse e-mail en 1 clic et demandes d&apos;avis Google automatisées.
          </Card>
        </div>
      </div>
    </section>
  );
}
