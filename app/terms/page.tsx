import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation & Mentions légales",
  description:
    "Conditions Générales d'Utilisation et mentions légales de la plateforme CRM Cabinet Avocat, logiciel de gestion pour cabinets d'avocats.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation & Mentions légales" updated="9 novembre 2026">
      <h2>Mentions légales</h2>
      <ul>
        <li><strong>Site :</strong> crmcabinetavocat.com</li>
        <li><strong>Application :</strong> pro.crmavocat.com</li>
        <li><strong>Éditeur :</strong> [Dénomination sociale, forme juridique, capital – à compléter]</li>
        <li><strong>Siège social :</strong> [Adresse – à compléter]</li>
        <li><strong>Immatriculation :</strong> [RC / ICE / SIREN – à compléter]</li>
        <li><strong>Directeur de la publication :</strong> [Nom – à compléter]</li>
        <li><strong>Contact :</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        <li><strong>Hébergeur :</strong> [Nom et adresse de l&apos;hébergeur – à compléter]</li>
      </ul>

      <h2>Conditions Générales d&apos;Utilisation</h2>

      <h3>Article 1 – Objet</h3>
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (« CGU ») régissent l&apos;accès et l&apos;utilisation de la
        plateforme SaaS <strong>CRM Cabinet Avocat</strong> (le « Service »), destinée à la gestion des dossiers, agendas,
        tâches, fiches de mission, facturation et statistiques des cabinets d&apos;avocats. L&apos;utilisation du Service
        emporte acceptation pleine et entière des CGU.
      </p>

      <h3>Article 2 – Définitions</h3>
      <ul>
        <li><strong>Cabinet :</strong> le cabinet d&apos;avocats titulaire d&apos;un abonnement.</li>
        <li><strong>Utilisateur :</strong> toute personne habilitée par le Cabinet à utiliser le Service.</li>
        <li><strong>Données du Cabinet :</strong> toutes les données, documents et contenus saisis ou importés dans le Service.</li>
      </ul>

      <h3>Article 3 – Accès au Service et comptes</h3>
      <p>
        Le Service est réservé aux professionnels du droit. L&apos;accès s&apos;effectue via{" "}
        <a href="https://pro.crmavocat.com/login">https://pro.crmavocat.com/login</a>. Le Cabinet est responsable de la
        confidentialité des identifiants, de la gestion des comptes et de l&apos;attribution des permissions (clients, notes,
        tâches, documents, fiches de mission, facturation, statistiques). Toute activité réalisée depuis un compte est
        réputée effectuée par l&apos;Utilisateur concerné.
      </p>

      <h3>Article 4 – Description du Service</h3>
      <p>
        Le Service comprend notamment : gestion des dossiers et synchronisation Google Drive, agenda et audiences
        synchronisés avec Google Calendar, tâches Kanban et dictée vocale assistée par IA, fiches de mission et numérotation
        annuelle, facturation et suivi du recouvrement, enregistrement des clients par QR Code, journaux d&apos;activité, et
        connecteur MCP en lecture seule. Les fonctionnalités peuvent évoluer ; l&apos;éditeur s&apos;efforce de ne pas en réduire
        substantiellement le périmètre au cours d&apos;une période d&apos;abonnement.
      </p>

      <h3>Article 5 – Abonnement et tarifs</h3>
      <p>
        Les conditions financières sont définies dans l&apos;offre commerciale ou le bon de commande accepté par le Cabinet.
        Sauf stipulation contraire, l&apos;abonnement est conclu pour la durée indiquée et se renouvelle tacitement ; il peut
        être résilié moyennant un préavis de 30 jours avant l&apos;échéance. Les factures sont payables à 30 jours.
      </p>

      <h3>Article 6 – Obligations de l&apos;Utilisateur</h3>
      <ul>
        <li>Utiliser le Service conformément à la loi et aux règles déontologiques de la profession ;</li>
        <li>Ne pas tenter de contourner les mesures de sécurité ni d&apos;accéder aux données d&apos;un autre cabinet ;</li>
        <li>Ne pas introduire de contenu illicite ou malveillant ;</li>
        <li>Ne pas revendre, sous-licencier ni copier le Service.</li>
      </ul>

      <h3>Article 7 – Données, secret professionnel et confidentialité</h3>
      <p>
        Le Cabinet demeure propriétaire de ses Données et responsable de traitement ; l&apos;éditeur agit en tant que
        sous-traitant, dans les conditions décrites dans la <a href="/privacy">Politique de confidentialité</a>. L&apos;éditeur
        met en œuvre des mesures raisonnables de sécurité (isolation multi-tenant, contrôle d&apos;accès, journalisation) et
        s&apos;engage à préserver la confidentialité des Données. Le Cabinet reste seul garant du respect de ses obligations
        déontologiques, notamment en ce qui concerne l&apos;activation des intégrations tierces et du connecteur IA.
      </p>

      <h3>Article 8 – Services tiers</h3>
      <p>
        Le Service s&apos;intègre à des services tiers (Google Drive, Google Calendar, Facturo, assistants IA tels que Claude
        ou ChatGPT). Leur utilisation est soumise à leurs propres conditions, et leur disponibilité échappe au contrôle de
        l&apos;éditeur. Le connecteur MCP est fourni en lecture seule. Les réponses générées par une IA peuvent comporter des
        erreurs et doivent être vérifiées par l&apos;avocat avant toute utilisation.
      </p>

      <h3>Article 9 – Propriété intellectuelle</h3>
      <p>
        Le Service, son code, ses interfaces, marques et contenus sont protégés et demeurent la propriété de l&apos;éditeur.
        Le Cabinet bénéficie d&apos;un droit d&apos;utilisation personnel, non exclusif et non transférable pendant la durée de
        son abonnement.
      </p>

      <h3>Article 10 – Disponibilité et support</h3>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer la disponibilité du Service 24h/24, sous réserve des opérations de
        maintenance et des cas de force majeure. Le Cabinet est invité à conserver ses propres sauvegardes des pièces
        essentielles et dispose d&apos;un support par e-mail aux heures ouvrées.
      </p>

      <h3>Article 11 – Responsabilité</h3>
      <p>
        Le Service est un outil d&apos;aide à l&apos;organisation ; il ne constitue pas un conseil juridique et ne remplace pas
        la vigilance professionnelle de l&apos;avocat, notamment pour le suivi des délais de procédure. Dans les limites
        permises par la loi, la responsabilité de l&apos;éditeur est limitée aux dommages directs et plafonnée au montant des
        sommes versées par le Cabinet au cours des 12 derniers mois. L&apos;éditeur n&apos;est pas responsable des dommages
        indirects (perte de chance, de clientèle, d&apos;exploitation).
      </p>

      <h3>Article 12 – Suspension et résiliation</h3>
      <p>
        L&apos;éditeur peut suspendre l&apos;accès en cas de manquement grave aux CGU ou d&apos;impayé après mise en demeure
        restée sans effet. À la fin du contrat, le Cabinet peut exporter ses Données pendant 90 jours, délai à l&apos;issue
        duquel elles sont supprimées, sauf obligation légale de conservation.
      </p>

      <h3>Article 13 – Modification des CGU</h3>
      <p>
        L&apos;éditeur peut modifier les CGU ; les Utilisateurs seront informés par tout moyen approprié. La poursuite de
        l&apos;utilisation du Service vaut acceptation des CGU modifiées.
      </p>

      <h3>Article 14 – Droit applicable et juridiction</h3>
      <p>
        Les CGU sont régies par le droit applicable au siège de l&apos;éditeur [à compléter]. À défaut de résolution amiable,
        tout litige relève des tribunaux compétents du ressort du siège de l&apos;éditeur.
      </p>

      <h3>Contact</h3>
      <p>Pour toute question : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </LegalLayout>
  );
}

