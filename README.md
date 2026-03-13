# Gîtes Périgord — Site vitrine

Site vitrine pour **Les Glycines** et **La Maisonnette**, deux gîtes de charme à Saint-Martial-de-Nabirat, au cœur du Périgord Noir (Dordogne).

**→ [Voir le site en ligne](https://gite-perigord.vercel.app/)**

---

## Aperçu

- **Hero** avec image et accroche
- **Nos logements** : fiches détaillées par gîte (capacité, équipements, galerie photos, réservation Airbnb ou directe)
- **L’expérience du domaine** : espaces communs (piscine) et intimité (jardins privés)
- **La région** : activités et environs (Sarlat, Domme, Beynac…)
- **Contact / Réservation** : formulaire de demande, calendrier (séjour minimum 7 nuits, samedi–samedi), liens Airbnb et profil

---

## Stack

| Techno        | Usage                    |
|---------------|--------------------------|
| **Next.js 16**| App Router, React 19     |
| **TypeScript**| Typage                   |
| **Tailwind CSS 4** | Styles, responsive  |
| **shadcn / Base UI** | Composants (boutons, formulaire, calendrier) |
| **date-fns**  | Dates (calendrier résa)  |
| **Lucide**    | Icônes                   |

Polices : **Playfair Display** (titres), **DM Sans** (texte).

---

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer en développement (http://localhost:3000)
npm run dev

# Build de production
npm run build

# Lancer la version buildée
npm run start
```

---

## Structure du projet

```
├── app/              # Pages, layout, métadonnées, globals
├── components/       # Header, Footer, sections (Hero, Logements, Expérience, Région, Réservation), UI
├── data/             # Données (logements, région, galerie images)
├── lib/              # Utilitaires (images avec caractères spéciaux, etc.)
├── public/           # Images, favicon, logo, manifest
└── docs/             # Notes (ex. prompt logo)
```

Les images des gîtes sont dans `public/images/img-airbnb1/` et `img-airbnb2/`. Les noms avec espaces ou accents sont gérés via `encodedImageSrc()` (`lib/image-utils.ts`).

---

## Envoi d'emails (réservation)

Le système d'emails est en place avec **Resend** :

- **Email au responsable des gîtes** : à chaque envoi du formulaire, vous recevez un email avec toutes les infos (nom, email, téléphone, logement, nombre de voyageurs, dates, message).
- **Email de confirmation au client** : le client reçoit un email lui confirmant que sa demande a bien été reçue.

En local, créez un fichier `.env.local` avec :

- `RESEND_API_KEY` — clé API Resend (compte sur [resend.com](https://resend.com))
- `RESERVATION_EMAIL` — adresse qui reçoit les demandes (ex. `locationlagreze@gmail.com`)
- `FROM_NAME` — (optionnel) nom affiché comme expéditeur (défaut : « Gîtes Périgord »)
- `FROM_EMAIL` — (optionnel) adresse expéditrice ; sans domaine vérifié dans Resend, seule `onboarding@resend.dev` est utilisée.

**Important** : sans domaine vérifié, Resend n’autorise l’envoi **qu’à l’adresse email du compte** (celle utilisée sur resend.com). Pour envoyer au responsable des gîtes (si différent) et la confirmation aux clients, il faut **vérifier un domaine** sur [resend.com/domains](https://resend.com/domains), puis utiliser une adresse de ce domaine dans `FROM_EMAIL` et `RESERVATION_EMAIL`.

Sur **Vercel** : ajoutez les mêmes variables dans **Project → Settings → Environment Variables** pour que l'envoi fonctionne en production.

---

## À venir

Il reste à **synchroniser le calendrier Airbnb avec le calendrier du site** (disponibilités, réservations) pour que la chaîne soit complète.

---

## Déploiement

Le projet est prêt pour un déploiement sur **Vercel** (ou tout hébergeur Node) :

- Build : `npm run build`
- Variables d'environnement : `RESEND_API_KEY` et `RESERVATION_EMAIL` pour l'envoi des demandes de réservation.

---

## Licence

Projet privé — © Gîtes Périgord Noir.
