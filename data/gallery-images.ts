/**
 * Toutes les images des deux gîtes.
 * src = path complet pour affichage (fichiers avec accents encodés côté composant).
 */
export type GalleryImage = { src: string; alt: string; gite: 1 | 2 };

const filesGite1 = [
  "19e0317a-e2f3-4ebb-97a4-161b9bd7ae09.avif",
  "3b444613-d446-4b30-8f1f-649e40a7f00d.avif",
  "4c7dc855-ebc6-4a2f-bc07-785029f19034.avif",
  "4ef9aa2b-c5bc-46af-9733-1375a3f2de97.avif",
  "67998630-916c-458b-af55-d9ca6c1d42db.avif",
  "750badad-1e27-4ca0-b2b1-37e5c00d48d6.avif",
  "80caae18-fe99-4498-82ce-1efbf4c2c779.webp",
  "d6f08344-c5d8-4d01-b1c2-fcbfdfd4b332.avif",
  "Gîte Sarlat Périgord Piscine 10m (1).avif",
  "Gîte Sarlat Périgord Piscine 10m (2).avif",
  "Gîte Sarlat Périgord Piscine 10m (3).avif",
  "Gîte Sarlat Périgord Piscine 10m (4).avif",
  "Gîte Sarlat Périgord Piscine 10m (5).avif",
  "Gîte Sarlat Périgord Piscine 10m (6).avif",
  "Gîte Sarlat Périgord Piscine 10m (7).avif",
  "Gîte Sarlat Périgord Piscine 10m (8).avif",
  "Gîte Sarlat Périgord Piscine 10m (9).avif",
  "Gîte Sarlat Périgord Piscine 10m (10).avif",
  "Gîte Sarlat Périgord Piscine 10m (11).avif",
  "Gîte Sarlat Périgord Piscine 10m (12).avif",
  "Gîte Sarlat Périgord Piscine 10m (13).avif",
  "Gîte Sarlat Périgord Piscine 10m (14).avif",
  "Gîte Sarlat Périgord Piscine 10m (15).avif",
  "Gîte Sarlat Périgord Piscine 10m (16).avif",
  "Gîte Sarlat Périgord Piscine 10m (17).avif",
  "Gîte Sarlat Périgord Piscine 10m (18).avif",
  "Gîte Sarlat Périgord Piscine 10m (19).avif",
  "Gîte Sarlat Périgord Piscine 10m (20).avif",
  "Gîte Sarlat Périgord Piscine 10m (21).avif",
  "Gîte Sarlat Périgord Piscine 10m (22).avif",
  "Gîte Sarlat Périgord Piscine 10m (23).avif",
  "Gîte Sarlat Périgord Piscine 10m (24).avif",
  "Gîte Sarlat Périgord Piscine 10m (25).avif",
  "Gîte Sarlat Périgord Piscine 10m.avif",
  "Gîte Sarlat Périgord Piscine Couverte (1).avif",
  "Gîte Sarlat Périgord Piscine Couverte (2).avif",
  "Gîte Sarlat Périgord Piscine Couverte (3).avif",
  "Gîte Sarlat Périgord Piscine Couverte (4).avif",
  "Gîte Sarlat Périgord Piscine Couverte (5).avif",
  "Gîte Sarlat Périgord Piscine Couverte.avif",
  "Gîte Sarlat Périgord Piscine Couverte.jpg",
  "Gîte Sarlat Piscine Couverte (1).avif",
  "Gîte Sarlat Piscine Couverte.avif",
];

const filesGite2 = [
  "2eda0ea2-b9d2-41d6-a706-d381598f0a3d.avif",
  "2f56797b-4d9e-46f8-82fc-9c5a15f127c0.avif",
  "543ad0b5-03c1-4b76-9d0f-8041093eb798.avif",
  "6a85f619-6f86-4d65-b21b-0f078ba65ae0.avif",
  "705f4479-0dd8-453d-9772-27a860e53390.avif",
  "8cfa373d-833a-46aa-a460-2f2990eff53b.avif",
  "8f0c96d8-dd71-4304-9540-590522e0cf29.avif",
  "981a3971-9af3-40b4-ad7d-18e262b3e77f.avif",
  "c711c80b-6e65-4233-8325-e41f384ec118.avif",
  "e1f5979d-675a-4558-9c9a-e124c398f667.avif",
  "e4c2512c-1bfe-44a3-82f2-a4c317266786.avif",
  "e53feb5d-7038-4b1f-aadb-45efe3d926d8.avif",
  "ea8b5197-c6c4-4762-8ffc-fb344dc751d8.avif",
  "f6157d69-de08-41a8-bc9b-3f177048cdbd.avif",
  "Gîte Périgord Sarlat Piscine (1).avif",
  "Gîte Périgord Sarlat Piscine (2).avif",
  "Gîte Périgord Sarlat Piscine (3).avif",
  "Gîte Périgord Sarlat Piscine (4).avif",
  "Gîte Périgord Sarlat Piscine (5).avif",
  "Gîte Périgord Sarlat Piscine (6).avif",
  "Gîte Périgord Sarlat Piscine (7).avif",
  "Gîte Périgord Sarlat Piscine 10m (1) copie.avif",
  "Gîte Périgord Sarlat Piscine 10m (1).avif",
  "Gîte Périgord Sarlat Piscine 10m (2).avif",
  "Gîte Périgord Sarlat Piscine 10m (3).avif",
  "Gîte Périgord Sarlat Piscine 10m (4).avif",
  "Gîte Périgord Sarlat Piscine 10m copie.avif",
  "Gîte Périgord Sarlat Piscine 10m.avif",
  "Gîte Périgord Sarlat Piscine Couvert 10m (1).avif",
  "Gîte Périgord Sarlat Piscine Couvert 10m (2).avif",
  "Gîte Périgord Sarlat Piscine Couvert 10m copie.avif",
  "Gîte Périgord Sarlat Piscine Couvert 10m.avif",
  "Gîte Périgord Sarlat Piscine Couverte (2).avif",
  "Gîte Périgord Sarlat Piscine Couverte (6).avif",
  "Gîte Périgord Sarlat Piscine.avif",
  "Gîte Périgord Sarlat piscine couverte (1).avif",
  "Gîte Périgord Sarlat piscine couverte (3).avif",
  "Gîte Périgord Sarlat piscine couverte (4).avif",
  "Gîte Périgord Sarlat piscine couverte (5).avif",
  "Gîte Périgord Sarlat piscine couverte (7).avif",
  "Gîte Périgord Sarlat piscine couverte.avif",
];

function buildGallery(
  folder: "img-airbnb1" | "img-airbnb2",
  files: string[],
  gite: 1 | 2
): GalleryImage[] {
  return files.map((file) => ({
    src: `/images/${folder}/${file}`,
    alt: `Gîte ${gite === 1 ? "Les Glycines" : "La Maisonnette"} – ${file.replace(/\.[a-z]+$/i, "")}`,
    gite,
  }));
}

export const galleryGite1: GalleryImage[] = buildGallery("img-airbnb1", filesGite1, 1);
export const galleryGite2: GalleryImage[] = buildGallery("img-airbnb2", filesGite2, 2);

/** Toutes les images (gîte 1 puis gîte 2) pour la galerie unifiée. */
export const galleryImages: GalleryImage[] = [...galleryGite1, ...galleryGite2];
