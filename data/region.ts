export interface RegionActivity {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  imageAlt: string;
  tip: string;
}

/** Images Unsplash (Périgord / Sarlat / Dordogne) – libres d’utilisation. */
const UNSPLASH_PARAMS = "?w=1200&q=80&fit=crop";

export const regionHeroImage =
  "https://images.unsplash.com/photo-1676385852863-2fe5119044b7" + UNSPLASH_PARAMS; // Rivière et campagne verte – Périgord

export const regionIntro = {
  first:
    "À Saint-Martial-de-Nabirat, vous posez vos valises au cœur du Périgord Noir, entre Dordogne et forêts de châtaigniers. La région déploie en quelques kilomètres tout ce qui fait sa renommée : villages de pierre blonde, châteaux accrochés aux falaises, marchés gourmands et rivières paisibles.",
  second:
    "Que vous veniez pour la gastronomie, l’histoire ou les balades en famille, chaque journée peut se construire au gré des envies. Nos gîtes sont le point de départ idéal pour explorer sans se presser.",
};

export const regionActivities: RegionActivity[] = [
  {
    title: "Sarlat et les marchés",
    description:
      "Capitale du Périgord Noir, Sarlat séduit par son centre historique et son marché aux saveurs.",
    longDescription:
      "Sarlat-la-Canéda est l’une des plus belles cités médiévales de France. Les samedis matin, le marché anime les ruelles : noix du Périgord, truffes, foie gras, confits et fromages de chèvre invitent à composer vos pique-niques et dîners. Flânez sous les toits de lauze, visitez la cathédrale et laissez-vous guider par les odeurs de pain et de tourtes.",
    icon: "Store",
    image:
      "https://images.unsplash.com/photo-1538942177296-65a7ec87f54a?w=800&q=80&fit=crop",
    imageAlt: "Ruelles médiévales de Sarlat-la-Canéda",
    tip: "À 25 min · Marché le samedi matin",
  },
  {
    title: "Châteaux de la Dordogne",
    description:
      "Beynac, Castelnaud, Les Milandes : des forteresses qui dominent la rivière.",
    longDescription:
      "La vallée de la Dordogne aligne des châteaux parmi les plus photographiés de France. Beynac-et-Cazenac et Castelnaud-la-Chapelle se font face de part et d’autre du fleuve ; Les Milandes rappelle l’histoire de Joséphine Baker. Visites, spectacles de fauconnerie et points de vue sur la rivière font de chaque escapade un moment fort. Idéal en famille ou pour les amateurs d’histoire.",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1676385859303-6d1430d31a73?w=800&q=80&fit=crop",
    imageAlt: "Château du Périgord dominant la vallée",
    tip: "Beynac, Castelnaud à 20–30 min",
  },
  {
    title: "Randonnées et nature",
    description:
      "Sentiers, canoë, grottes : la région se découvre à pied ou sur l’eau.",
    longDescription:
      "Sentiers de randonnée, canoë-kayak sur la Dordogne, grottes de Lascaux IV et du Pech Merle : le Périgord Noir est un terrain de jeu pour les amoureux de nature. Falaises, forêts et villages de caractère se succèdent. Après une journée dehors, le jardin et la piscine des gîtes offrent une parenthèse de calme bien méritée.",
    icon: "Trees",
    image:
      "https://images.unsplash.com/photo-1676385852863-2fe5119044b7?w=800&q=80&fit=crop",
    imageAlt: "Rivière et campagne du Périgord",
    tip: "Nombreux départs de randonnée à proximité",
  },
  {
    title: "Gastronomie périgourdine",
    description:
      "Foie gras, magret, noix, cèpes et truffes : un terroir d’exception.",
    longDescription:
      "Foie gras, magret, noix du Périgord, cèpes et truffes : les tables et marchés locaux célèbrent un terroir reconnu dans le monde entier. Fermes auberges, restaurants d’application et producteurs vous accueillent pour des dégustations et des repas mémorables. De la ferme au restaurant, chaque repas est un voyage. Pensez à réserver pour les tables les plus prisées en saison.",
    icon: "UtensilsCrossed",
    image:
      "https://images.unsplash.com/photo-1699102471535-890cce2b2bdd?w=800&q=80&fit=crop",
    imageAlt: "Marché et produits du terroir",
    tip: "Fermes et marchés à découvrir aux alentours",
  },
];
