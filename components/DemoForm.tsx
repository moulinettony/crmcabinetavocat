"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const field =
  "w-full rounded-xl border border-slate-800 bg-[#0d1421] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/20";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [name, setName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setName(String(data.nom));
    setStatus("loading");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="demo" className="hidden relative overflow-hidden border-t border-slate-800/80 bg-[#0a0f18] py-20 sm:py-28">
      <div
        className="absolute left-1/2 top-0 h-80 w-[800px] -translate-x-1/2 rounded-full bg-[#3b82f6]/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="text-white lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">Démonstration</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Voyez le CRM à l&apos;œuvre sur <span className="text-[#60a5fa]">vos</span> cas d&apos;usage
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Démonstration personnalisée de 30 minutes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Réponse sous 24 h ouvrées
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Sans engagement
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-[#131b29] p-6 shadow-2xl sm:p-8 lg:col-span-3">
          {status === "done" ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto text-emerald-400" size={52} />
              <h3 className="mt-4 text-2xl font-bold text-white">
                Merci{name ? `, ${name.split(" ")[0]}` : ""} !
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
                Votre demande a bien été reçue. Notre équipe vous recontacte sous 24 h ouvrées pour planifier votre démonstration.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-[#60a5fa] underline"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <Label text="Nom complet *">
                <input required name="nom" autoComplete="name" className={field} placeholder="Me Sara Lahlou" />
              </Label>
              <Label text="Nom du cabinet *">
                <input
                  required
                  name="cabinet"
                  autoComplete="organization"
                  className={field}
                  placeholder="Cabinet Lahlou & Associés"
                />
              </Label>
              <Label text="Email professionnel *">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={field}
                  placeholder="vous@cabinet.com"
                />
              </Label>
              <Label text="Téléphone">
                <input
                  type="tel"
                  name="telephone"
                  autoComplete="tel"
                  className={field}
                  placeholder="+212 6 00 00 00 00"
                />
              </Label>
              <div className="sm:col-span-2">
                <Label text="Nombre de collaborateurs">
                  <select name="collaborateurs" defaultValue="" className={field}>
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    <option>1 – 3</option>
                    <option>4 – 10</option>
                    <option>11 – 25</option>
                    <option>Plus de 25</option>
                  </select>
                </Label>
              </div>
              <div className="sm:col-span-2">
                <Label text="Message">
                  <textarea
                    name="message"
                    rows={4}
                    className={field}
                    placeholder="Parlez-nous de votre cabinet et de vos besoins…"
                  />
                </Label>
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-rose-400 sm:col-span-2">
                  Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60 sm:col-span-2"
              >
                {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                Demander une démonstration
              </button>
              <p className="text-center text-[11px] text-slate-500 sm:col-span-2">
                Vos informations sont utilisées uniquement pour traiter votre demande. Voir notre{" "}
                <a href="/privacy" className="text-slate-400 underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-slate-300">{text}</span>
      {children}
    </label>
  );
}
