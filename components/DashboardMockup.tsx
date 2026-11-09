"use client";

import { useState } from "react";
import {
  Landmark,
  Home,
  BarChart2,
  Users,
  Folder,
  Target,
  Calendar,
  CheckSquare,
  FileText,
  StickyNote,
  Settings,
  ScrollText,
  Search,
  Sparkles,
  Bell,
  ChevronDown,
  SquarePen,
  AlertTriangle,
  UserPlus,
  CalendarPlus,
  DollarSign,
  MessageSquare,
} from "lucide-react";

type Col = "todo" | "doing" | "done";
type Task = {
  id: number;
  title: string;
  lawyer: string;
  client: string;
  who: string;
  due: string;
  col: Col;
  late?: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Préparer les dossiers et planifier un rendez-vous pour la famille",
    lawyer: "Naoual Maktabi",
    client: "Jacques ZUNZ",
    who: "NM",
    due: "En retard · 30 oct.",
    col: "todo",
    late: true,
  },
  {
    id: 2,
    title: "PAIEMENT DES HONORAIRES",
    lawyer: "Laila Touhami Kadiri",
    client: "Caitlyn Carrico",
    who: "LT",
    due: "En retard · 4 nov.",
    col: "todo",
    late: true,
  },
  {
    id: 3,
    title: "Lancer la procédure de concordance de nom de famille",
    lawyer: "Laila Touhami, Soumia B.",
    client: "Aniss El Hamouri",
    who: "LT",
    due: "Aujourd'hui",
    col: "doing",
  },
  {
    id: 4,
    title: "DEVIS PROCEDURE D'EXPULSION",
    lawyer: "Mouna B., Laila T.",
    client: "Mustapha Azizi",
    who: "MB",
    due: "12 oct.",
    col: "done",
  },
];

const cols: { key: Col; label: string; dot: string; badgeText: string }[] = [
  { key: "todo", label: "À faire", dot: "bg-slate-400", badgeText: "text-slate-900" },
  { key: "doing", label: "En cours", dot: "bg-[#3b82f6]", badgeText: "text-[#3b82f6]" },
  { key: "done", label: "Terminée", dot: "bg-emerald-400", badgeText: "text-emerald-600" },
];

const sidebarGroups = [
  {
    title: "CABINET",
    items: [
      { label: "Tableau de bord", icon: Home, active: true },
      { label: "Analytique", icon: BarChart2 },
      { label: "Clients", icon: Users },
    ],
  },
  {
    title: "GESTION",
    items: [
      { label: "Dossiers en cours", icon: Folder },
      { label: "Leads", icon: Target },
      { label: "Calendrier", icon: Calendar },
      { label: "Tâches", icon: CheckSquare },
      { label: "Facturation", icon: FileText },
      { label: "Notes", icon: StickyNote },
    ],
  },
  {
    title: "ADMINISTRATION",
    items: [
      { label: "Utilisateurs", icon: Users },
      { label: "Paramètres", icon: Settings },
      { label: "Journaux", icon: ScrollText },
    ],
  },
];

export default function DashboardMockup() {
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState<"principal" | "kanban">("principal");

  const advance = (id: number) =>
    setTasks((ts) =>
      ts.map((t) =>
        t.id === id
          ? { ...t, col: t.col === "todo" ? "doing" : t.col === "doing" ? "done" : "todo", late: false }
          : t,
      ),
    );

  const todayCount = tasks.filter((t) => t.col !== "done").length;
  const lateCount = tasks.filter((t) => t.late && t.col !== "done").length;

  const kpis = [
    {
      label: "Dossiers en cours",
      value: "48",
      sub: "Dossiers & affaires actifs",
      icon: Folder,
      iconTone: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
    },
    {
      label: "Tâches à traiter aujourd'hui",
      value: String(todayCount),
      sub: "Échéance fixée aujourd'hui",
      icon: CheckSquare,
      iconTone: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
    },
    {
      label: "Audiences & RDV du jour",
      value: "3",
      sub: "Prévus au calendrier",
      icon: Calendar,
      iconTone: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Tâches en retard",
      value: String(lateCount),
      sub: lateCount ? "Action prioritaire requise" : "Aucun retard à déplorer",
      icon: AlertTriangle,
      iconTone: lateCount
        ? "text-rose-400 bg-rose-500/10 border-rose-500/20"
        : "text-slate-400 bg-slate-800/60 border-slate-700/60",
    },
  ];

  const facturo = [
    { label: "CA Total Facturé", value: "284 500 DH", color: "text-white" },
    { label: "Encaissements Réalisés", value: "218 000 DH", color: "text-emerald-400" },
    { label: "Restant à Recouvrer", value: "52 500 DH", color: "text-amber-400" },
    { label: "Factures en Retard", value: "14 000 DH", color: "text-rose-500" },
  ];

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#3b82f6]/15 via-teal-500/10 to-transparent blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b101b] text-left shadow-2xl shadow-black/70">
        <div className="flex min-h-[540px]">
          {/* Exact Sidebar */}
          <aside className="hidden w-56 shrink-0 flex-col border-r border-slate-800/80 bg-[#0e1624] p-4 lg:flex">
            <div className="flex items-center gap-2.5 px-1 pb-5">
              <span className="grid h-8 w-8 place-items-center text-slate-200">
                <Landmark size={20} strokeWidth={1.8} />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">Mon Cabinet</p>
                <p className="text-[10px] text-slate-400">Espace cabinet</p>
              </div>
            </div>

            <div className="space-y-4">
              {sidebarGroups.map((group) => (
                <div key={group.title}>
                  <p className="px-2.5 text-[10px] font-semibold tracking-wider text-slate-500">{group.title}</p>
                  <ul className="mt-1.5 space-y-0.5">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs ${item.active
                          ? "bg-[#113841] font-medium text-teal-200"
                          : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200"
                          }`}
                      >
                        <item.icon size={14} className={item.active ? "text-teal-300" : "text-slate-400"} />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Area */}
          <div className="min-w-0 flex-1 bg-[#0a0f18]">
            {/* Top Header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 px-4 py-2.5 sm:px-6">
              <div className="flex w-full max-w-xs items-center gap-2 rounded-lg border border-slate-800 bg-[#111826] px-3 py-1.5 text-xs text-slate-400">
                <Search size={13} className="text-slate-500" />
                <span className="truncate">Rechercher un client, collaborateur...</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-[#132038] px-3 py-1.5 text-xs font-medium text-blue-300">
                  <Sparkles size={12} /> Assistant
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-800/60">
                  <Bell size={15} />
                </span>
                <div className="hidden items-center gap-2 pl-1 sm:flex">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#3b82f6] text-xs font-semibold text-white">
                    A
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-medium text-white">Amal</p>
                    <p className="text-[10px] text-slate-400">Associé</p>
                  </div>
                  <ChevronDown size={13} className="text-slate-500" />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              {/* Title + Edit View */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Dashboard</h3>
                  <p className="text-xs text-slate-400">9 Novembre 2026</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-[#141c2b] px-3 py-1.5 text-xs text-slate-300">
                  <SquarePen size={12} /> Éditer la vue
                </span>
              </div>

              {/* View Tabs */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setView("principal")}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${view === "principal"
                    ? "bg-[#3b82f6] text-white"
                    : "border border-slate-800 bg-[#141c2b] text-slate-400 hover:text-white"
                    }`}
                >
                  Principal
                </button>
                <button
                  type="button"
                  onClick={() => setView("kanban")}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition ${view === "kanban"
                    ? "bg-[#3b82f6] text-white"
                    : "border border-dashed border-slate-700/80 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                    }`}
                >
                  + Tâches Kanban & Audiences
                </button>
              </div>

              {/* KPI Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {kpis.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl border border-slate-800/90 bg-[#131b29] p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-medium text-slate-300">{k.label}</span>
                      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border ${k.iconTone}`}>
                        <k.icon size={14} />
                      </span>
                    </div>
                    <p className="mt-2 text-2xl font-bold tabular-nums text-white">{k.value}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{k.sub}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="mr-1 font-medium text-slate-400">Actions rapides :</span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-[#141c2b] px-3 py-1.5 font-medium text-slate-200">
                  <UserPlus size={13} className="text-[#3b82f6]" /> Nouveau Client
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-[#141c2b] px-3 py-1.5 font-medium text-slate-200">
                  <CalendarPlus size={13} className="text-[#3b82f6]" /> Nouvelle Audience / RDV
                </span>
              </div>

              {view === "principal" ? (
                <>
                  {/* Facturation & Encaissements (Facturo) */}
                  <div className="mt-4 rounded-xl border border-slate-800/90 bg-[#131b29] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-500/15 text-emerald-400">
                          <DollarSign size={14} />
                        </span>
                        <h4 className="text-xs font-semibold text-white">
                          Facturation & Encaissements (Facturo)
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-[#60a5fa]">Gérer les factures →</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
                      {facturo.map((f) => (
                        <div
                          key={f.label}
                          className="rounded-lg border border-slate-800 bg-[#0e1522] p-3"
                        >
                          <p className="text-[11px] text-slate-400">{f.label}</p>
                          <p className={`mt-1 text-base font-bold tabular-nums ${f.color}`}>{f.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-4 grid gap-3 xl:grid-cols-3">
                  {cols.map((c) => (
                    <div key={c.key} className="rounded-xl border border-slate-800 bg-[#111826] p-3.5">
                      <div className="mb-2.5 flex items-center gap-1.5 text-xs font-bold text-white">
                        <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                        {c.label}
                        <span className={`rounded-full bg-white px-2 py-0.2 text-[10px] font-extrabold ${c.badgeText}`}>
                          {tasks.filter((t) => t.col === c.key).length}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {tasks
                          .filter((t) => t.col === c.key)
                          .map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => advance(t.id)}
                              className="w-full rounded-xl border border-slate-800 bg-[#161f30] p-3 text-left transition hover:border-[#3b82f6]"
                            >
                              <p
                                className={`text-xs font-semibold leading-snug ${
                                  t.col === "done" ? "text-slate-400 line-through" : "text-white"
                                }`}
                              >
                                {t.title}
                              </p>
                              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                                <div
                                  className={`h-full rounded-full ${
                                    t.col === "doing"
                                      ? "w-1/2 bg-[#3b82f6]"
                                      : t.col === "done"
                                      ? "w-full bg-emerald-500"
                                      : "w-0"
                                  }`}
                                />
                              </div>
                              <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10px]">
                                <span className="rounded bg-[#1a2942] px-2 py-0.5 font-medium text-[#60a5fa]">
                                  👤 {t.lawyer}
                                </span>
                                <span className="rounded bg-[#0d1421] px-2 py-0.5 text-slate-400">
                                  👤 {t.client}
                                </span>
                              </div>
                              <div className="mt-3 flex items-center justify-between">
                                <span
                                  className={`rounded bg-white px-2 py-0.5 text-[10px] font-bold ${
                                    t.late
                                      ? "text-rose-600"
                                      : t.col === "done"
                                      ? "text-emerald-600"
                                      : "text-amber-600"
                                  }`}
                                >
                                  📅 {t.due}
                                </span>
                                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[9px] font-extrabold text-slate-900">
                                  {t.who}
                                </span>
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating chat bubble matching screenshot */}
        <span
          aria-hidden
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#3b82f6] text-white shadow-lg shadow-blue-500/30"
        >
          <MessageSquare size={17} />
        </span>
      </div>
    </div>
  );
}
