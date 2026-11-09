import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import FAQ, { faqs } from "@/components/FAQ";
import Footer from "@/components/Footer";
import { APP_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: APP_URL,
        description: "CRM et logiciel de gestion pour cabinets d'avocats.",
        inLanguage: "fr",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AISection />
        <Security />
        <Pricing />
        <DemoForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
