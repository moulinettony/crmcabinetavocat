import Link from "next/link";
import { LOGIN_URL, CONTACT_EMAIL, DEMO_HREF } from "@/lib/site";
import { Logo } from "./Navbar";

export default function Footer() {
  const col = "space-y-2.5 text-sm text-slate-400";
  const a = "transition hover:text-white";
  return (
    <footer className="border-t border-slate-800 bg-[#0a0f18] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Le CRM tout-en-un pour cabinets d&apos;avocats : dossiers, audiences, tâches, facturation Facturo et IA, en toute confidentialité.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Produit</p>
            <ul className={col}>
              <li><Link className={a} href="/#fonctionnalites">Fonctionnalités</Link></li>
              <li><Link className={a} href="/#ia">Intelligence Artificielle</Link></li>
              <li><Link className={a} href="/#securite">Sécurité</Link></li>
              <li><Link className={a} href="/#tarifs">Tarifs</Link></li>
              <li><Link className={a} href="/#faq">FAQ</Link></li>
              <li><a className={a} href={LOGIN_URL}>Se connecter</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Légal & contact</p>
            <ul className={col}>
              <li><Link className={a} href="/privacy">Politique de confidentialité</Link></li>
              <li><Link className={a} href="/terms">Conditions Générales d&apos;Utilisation</Link></li>
              <li><a className={a} href={DEMO_HREF}>Demander une démonstration</a></li>
              <li><a className={a} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 CRM Cabinet Avocat. Tous droits réservés.</p>
          <p>Données hébergées et isolées par cabinet · Accès réservé aux professionnels du droit</p>
        </div>
      </div>
    </footer>
  );
}
