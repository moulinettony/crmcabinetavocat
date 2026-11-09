import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de CRM Cabinet Avocat : traitement des données, secret professionnel, utilisation de Google Drive et Google Calendar (OAuth).",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="9 novembre 2026">
      <p>
        La présente politique décrit la manière dont <strong>CRM Cabinet Avocat</strong> (le « Service », accessible sur
        pro.crmavocat.com et présenté sur crmcabinetavocat.com) collecte, utilise, protège et partage les données
        personnelles. Elle est conçue pour tenir compte des exigences de confidentialité propres aux cabinets d&apos;avocats
        et des règles applicables aux API Google.
      </p>

      <h2>1. Responsable de traitement et sous-traitant</h2>
      <p>
        Pour les données relatives aux clients et dossiers de votre cabinet, <strong>le cabinet d&apos;avocats est responsable de
        traitement</strong> ; CRM Cabinet Avocat agit en qualité de <strong>sous-traitant</strong> et traite ces données
        uniquement sur instruction documentée du cabinet. Pour les données de compte des utilisateurs et des visiteurs du site
        vitrine, CRM Cabinet Avocat est responsable de traitement.
      </p>
      <p>Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>

      <h2>2. Données collectées</h2>
      <ul>
        <li><strong>Données de compte :</strong> nom, adresse e-mail professionnelle, rôle, permissions.</li>
        <li><strong>Données de cabinet :</strong> dossiers, clients, notes, tâches, audiences, fiches de mission, informations de facturation (ICE, RC, honoraires, débours, retenue à la source).</li>
        <li><strong>Données d&apos;usage et de sécurité :</strong> journaux d&apos;activité horodatés, adresse IP, type de navigateur.</li>
        <li><strong>Demandes de démonstration :</strong> nom, cabinet, e-mail, téléphone, nombre de collaborateurs, message.</li>
        <li><strong>Enregistrement client par QR Code :</strong> informations saisies par le visiteur sur le formulaire d&apos;accueil du cabinet.</li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <table>
        <thead><tr><th>Finalité</th><th>Base légale</th></tr></thead>
        <tbody>
          <tr><td>Fourniture du Service (gestion de dossiers, agenda, tâches, facturation)</td><td>Exécution du contrat</td></tr>
          <tr><td>Sécurité, prévention de la fraude, journaux d&apos;audit</td><td>Intérêt légitime</td></tr>
          <tr><td>Réponse aux demandes de démonstration</td><td>Mesures précontractuelles / intérêt légitime</td></tr>
          <tr><td>Respect des obligations légales</td><td>Obligation légale</td></tr>
        </tbody>
      </table>

      <h2>4. Secret professionnel et confidentialité</h2>
      <p>
        Nous reconnaissons que les données traitées sont couvertes par le secret professionnel de l&apos;avocat. En conséquence :
      </p>
      <ul>
        <li>Chaque cabinet dispose d&apos;un espace de données <strong>isolé</strong> (architecture multi-tenant) ;</li>
        <li>L&apos;accès est limité par des <strong>permissions granulaires</strong> par module et par collaborateur ;</li>
        <li>Toutes les actions sont consignées dans des <strong>journaux d&apos;activité</strong> ;</li>
        <li>Nos équipes n&apos;accèdent aux contenus des dossiers que lorsque cela est strictement nécessaire à un support demandé par le cabinet, et sont tenues à une obligation de confidentialité ;</li>
        <li>Nous ne vendons, ne louons et ne partageons jamais vos données à des fins publicitaires.</li>
      </ul>

      <h2>5. Utilisation des API Google (Google OAuth)</h2>
      <p>
        Le Service propose des intégrations facultatives avec Google. Elles ne sont activées qu&apos;après votre consentement
        explicite via l&apos;écran d&apos;autorisation Google (OAuth 2.0), et vous pouvez les révoquer à tout moment.
      </p>
      <h3>5.1 Google Drive</h3>
      <ul>
        <li><strong>Ce que nous faisons :</strong> créer, renommer et organiser les répertoires de dossiers clients dans le Drive central du cabinet ; vérifier que les permissions de partage nécessaires sont en place ; déplacer les répertoires entre « Dossiers en cours » et « Clôturés ».</li>
        <li><strong>Données concernées :</strong> métadonnées des répertoires et fichiers créés ou gérés via le Service (identifiants, noms, structure, permissions).</li>
        <li><strong>Ce que nous ne faisons pas :</strong> nous ne lisons pas le contenu de vos documents à d&apos;autres fins que celles que vous demandez dans le Service.</li>
      </ul>
      <h3>5.2 Google Calendar</h3>
      <ul>
        <li><strong>Ce que nous faisons :</strong> synchroniser dans les deux sens les audiences, échéances et rendez-vous entre le Service et votre agenda Google.</li>
        <li><strong>Données concernées :</strong> titre, date, heure, lieu et description des événements synchronisés.</li>
      </ul>
      <h3>5.3 Engagement « Limited Use »</h3>
      <p>
        L&apos;utilisation et le transfert vers toute autre application des informations reçues des API Google respecteront la{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank">
          politique relative aux données utilisateur des services d&apos;API Google
        </a>
        , y compris les exigences d&apos;utilisation limitée (« Limited Use »). En particulier :
      </p>
      <ul>
        <li>Les données Google ne sont utilisées que pour fournir et améliorer les fonctionnalités visibles par l&apos;utilisateur (gestion des dossiers et agenda) ;</li>
        <li>Elles ne sont <strong>pas transférées à des tiers</strong>, sauf nécessité pour fournir le Service, respecter la loi, ou dans le cadre d&apos;une fusion/acquisition avec information préalable ;</li>
        <li>Elles ne sont <strong>pas utilisées pour la publicité</strong>, y compris le ciblage ou le reciblage ;</li>
        <li>Elles ne sont <strong>pas utilisées pour entraîner des modèles d&apos;IA/ML généralistes</strong> ;</li>
        <li>Aucun humain ne lit ces données, sauf avec votre accord explicite, pour des raisons de sécurité, pour respecter la loi, ou si elles sont agrégées et anonymisées.</li>
      </ul>
      <h3>5.4 Révocation</h3>
      <p>
        Vous pouvez retirer l&apos;accès du Service depuis votre compte Google (
        <a href="https://myaccount.google.com/permissions" rel="noopener noreferrer" target="_blank">myaccount.google.com/permissions</a>
        ) ou depuis les paramètres du Service. Les jetons d&apos;accès sont alors supprimés et la synchronisation s&apos;arrête.
      </p>

      <h2>6. Connecteur d&apos;intelligence artificielle (MCP)</h2>
      <p>
        Le connecteur MCP permettant d&apos;interroger le cabinet depuis Claude ou ChatGPT est <strong>en lecture seule</strong>
        et facultatif. Il respecte les permissions de l&apos;utilisateur. Les informations transmises à l&apos;assistant choisi
        sont soumises aux conditions de son éditeur ; il appartient au cabinet de décider d&apos;activer ce connecteur. La
        fonction de dictée vocale est utilisée uniquement pour transformer votre voix en tâche.
      </p>

      <h2>7. Destinataires et sous-traitants ultérieurs</h2>
      <p>
        Vos données peuvent être traitées par nos prestataires techniques strictement nécessaires (hébergement, base de
        données, e-mail transactionnel, Google pour les intégrations activées), liés par des engagements contractuels de
        confidentialité et de sécurité. La liste est communiquée sur demande.
      </p>

      <h2>8. Durée de conservation</h2>
      <ul>
        <li>Données de dossiers : pendant la durée du contrat, puis restitution/suppression selon les instructions du cabinet dans un délai de 90 jours après la fin du contrat ;</li>
        <li>Journaux d&apos;activité : 12 mois minimum, sauf obligation légale contraire ;</li>
        <li>Demandes de démonstration : 3 ans après le dernier contact.</li>
      </ul>

      <h2>9. Sécurité</h2>
      <p>
        Chiffrement des communications (HTTPS/TLS), contrôle d&apos;accès, isolation des données par cabinet, journalisation,
        sauvegardes et revue régulière des accès. En cas de violation de données, nous informons le cabinet concerné dans les
        meilleurs délais.
      </p>

      <h2>10. Vos droits</h2>
      <p>
        Conformément au RGPD et, le cas échéant, à la loi marocaine n° 09-08, vous disposez de droits d&apos;accès, de
        rectification, d&apos;effacement, d&apos;opposition, de limitation et de portabilité. Pour les données de vos clients,
        adressez-vous au cabinet responsable de traitement ; nous l&apos;assisterons dans la réponse. Pour exercer vos droits :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Vous pouvez également saisir l&apos;autorité de contrôle
        compétente (CNIL en France, CNDP au Maroc).
      </p>

      <h2>11. Cookies</h2>
      <p>
        Le site vitrine n&apos;utilise pas de cookies publicitaires. Seuls des cookies strictement nécessaires au
        fonctionnement et à la sécurité de l&apos;application peuvent être déposés lors de la connexion.
      </p>

      <h2>12. Transferts hors de votre pays</h2>
      <p>
        Lorsque des données sont traitées en dehors de votre pays, nous veillons à des garanties appropriées (clauses
        contractuelles types ou équivalent).
      </p>

      <h2>13. Modifications</h2>
      <p>
        Nous pouvons mettre à jour la présente politique. Toute modification substantielle sera notifiée aux utilisateurs
        par e-mail ou dans l&apos;application.
      </p>
    </LegalLayout>
  );
}

