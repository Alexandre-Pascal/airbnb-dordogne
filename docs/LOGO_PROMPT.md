# Prompt pour générer le logo (Nano Banaa ou autre)

Copie ce texte pour demander la génération du logo :

---

**Prompt à envoyer (Nano Banaa ou outil de mise en page) :**

J’ai déjà le logo (illustration de la maison avec la glycine). Je veux **uniquement ajouter le texte** pour obtenir un logo en largeur :

- **À faire** : placer le texte « Gîte Périgord » **à droite de l’illustration**, **à la même hauteur** que le dessin (aligné sur la même ligne de base visuelle, pas en dessous).
- **Rendu attendu** : une seule image en format **paysage** — maison à gauche, texte à droite, le tout formant un bloc horizontal pour le header.
- **Texte** : police serif ou classique, **même couleur** que le logo (marron / ton du dessin), même style sobre.
- **Fond** : transparent. Exporte en **PNG** ou **SVG**.

---

## Où mettre le logo sur le site

1. Dépose le fichier dans le dossier **`public/`** à la racine du projet.
2. Nomme-le **`logo.svg`** (ou `logo.png`).
3. Si tu utilises un PNG : ouvre `components/Header.tsx`, ligne ~9, et change :
   ```ts
   const SITE_LOGO = "/logo.png";
   ```

Le logo s’affiche à gauche dans le header (remplace « Gîtes Périgord »). S’il n’y a pas de fichier, le texte « Gîtes Périgord » reste affiché.

---

## Icônes du site (favicon, onglet, raccourci)

Pour remplacer l’icône par défaut du navigateur (onglet, favoris, raccourci mobile), ajoute ces fichiers dans **`public/`** :

| Fichier | Usage | Taille conseillée |
|--------|--------|--------------------|
| **`favicon.ico`** | Onglet, favoris (navigateurs) | 32×32 ou 48×48, format .ico |
| **`apple-touch-icon.png`** | Raccourci sur iPhone/iPad | 180×180 px |

**Comment les obtenir à partir du logo :**
- **favicon.ico** : utilise un outil en ligne (ex. [realfavicongenerator.net](https://realfavicongenerator.net/) ou [favicon.io](https://favicon.io/)) en important ton `logo.png` ou `logo.svg` ; tu récupères un `favicon.ico` (et souvent l’apple-touch-icon aussi).
- **apple-touch-icon.png** : exporte une version carrée 180×180 de ton logo (fond opaque conseillé pour iOS).

Une fois les fichiers déposés dans `public/`, le site les utilisera automatiquement (config déjà en place dans `app/layout.tsx`).
