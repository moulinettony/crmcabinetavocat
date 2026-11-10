import { ArrowRight, Sparkles } from "lucide-react";
import { LOGIN_URL, DEMO_HREF } from "@/lib/site";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f18] pb-20 pt-14 text-white sm:pt-20">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-[#3b82f6]/12 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-float-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-[#132038] px-3.5 py-1 text-xs font-medium text-blue-300">
            <Sparkles size={13} /> Conçu pour les cabinets d&apos;avocats · Données isolées & traçables
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Le CRM tout-en-un pensé pour les{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] to-teal-300 bg-clip-text text-transparent">
              cabinets d&apos;avocats
            </span>{" "}
            exigeants
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Gagnez des heures chaque semaine et gardez le contrôle total de votre cabinet :{" "}
            <strong className="font-medium text-slate-200">Dossiers</strong>,{" "}
            <strong className="font-medium text-slate-200">Google Drive</strong>,{" "}
            <strong className="font-medium text-slate-200">Audiences</strong>,{" "}
            <strong className="font-medium text-slate-200">Tâches</strong>,{" "}
            <strong className="font-medium text-slate-200">Facturation (Facturo)</strong> et{" "}
            <strong className="font-medium text-slate-200">Intelligence Artificielle</strong> réunis dans un seul espace.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DEMO_HREF}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 sm:w-auto"
            >
              Réserver une démonstration
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={LOGIN_URL}
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700/80 bg-[#141c2b] px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-white sm:w-auto"
            >
              Accéder à mon cabinet
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Démonstration personnalisée de 30 minutes · Sans engagement</p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
