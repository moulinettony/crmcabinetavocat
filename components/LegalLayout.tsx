import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0f18]">
        <div className="border-b border-slate-800 bg-[#0d1421] py-14 text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-slate-400">Dernière mise à jour : {updated}</p>
          </div>
        </div>
        <article className="prose-legal mx-auto max-w-3xl px-4 py-12 sm:px-6">{children}</article>
      </main>
      <Footer />
    </>
  );
}
