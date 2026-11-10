"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { LOGIN_URL, DEMO_HREF } from "@/lib/site";

const links = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#ia", label: "Intelligence Artificielle" },
  { href: "/#securite", label: "Sécurité" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CRM Cabinet Avocat – accueil">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/80 bg-[#141c2b] text-slate-100">
        <Landmark size={18} strokeWidth={1.9} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-white">CRM Cabinet Avocat</span>
        <span className="text-[11px] text-slate-400">Espace cabinet</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled || open ? "border-slate-800/80 bg-[#0a0f18]/90 backdrop-blur-xl" : "border-slate-800/40 bg-[#0a0f18]"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-400 transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
            className="rounded-lg border border-slate-700/80 bg-[#141c2b] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:text-white"
          >
            Se connecter
          </a>
          <Link
            href={DEMO_HREF}
            className="hidden rounded-lg bg-[#3b82f6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Demander une démo
          </Link>
        </div>
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800 px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a href={LOGIN_URL} className="rounded-lg border border-slate-700 bg-[#141c2b] px-4 py-2.5 text-center text-sm font-medium text-white">
              Se connecter
            </a>
            <Link
              href={DEMO_HREF}
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#3b82f6] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
