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

Le formulaire envoie les demandes par email via **Resend**. En local, créez un fichier `.env.local` (ou renommez `.env.dev` en `.env.local`) avec :

- `RESEND_API_KEY` — clé API Resend (compte sur [resend.com](https://resend.com))
- `RESERVATION_EMAIL` — adresse qui reçoit les demandes (ex. `locationlagreze@gmail.com`)
- `FROM_NAME` — (optionnel) nom affiché comme expéditeur (défaut : « Gîtes Périgord »)
- `FROM_EMAIL` — (optionnel) adresse expéditrice ; sans domaine vérifié dans Resend, seule `onboarding@resend.dev` est utilisée ; après vérification de votre domaine, mettez ex. `contact@votredomaine.fr`

Sur **Vercel** : ajoutez les mêmes variables dans **Project → Settings → Environment Variables** pour que l'envoi fonctionne en production.

---

## Déploiement

Le projet est prêt pour un déploiement sur **Vercel** (ou tout hébergeur Node) :

- Build : `npm run build`
- Variables d'environnement : `RESEND_API_KEY` et `RESERVATION_EMAIL` pour l'envoi des demandes de réservation.

---

## Licence

Projet privé — © Gîtes Périgord Noir.
