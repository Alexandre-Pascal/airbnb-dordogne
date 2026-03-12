export interface RegionActivity {
  title: string;
  description: string;
  icon: string;
}

export const regionIntro =
  "À Saint-Martial-de-Nabirat, au cœur du Périgord Noir, vous êtes à quelques minutes des plus beaux joyaux de la Dordogne : Sarlat-la-Canéda, Domme, La Roque-Gageac, Beynac-et-Cazenac. Terres de châteaux, de grottes et de gastronomie, la région vous invite à des séjours mémorables.";

export const regionActivities: RegionActivity[] = [
  {
    title: "Sarlat et les marchés",
    description:
      "Capitale du Périgord Noir, Sarlat séduit par son centre historique et son marché aux saveurs. Le samedi matin, les étals de noix, truffes, foie gras et confits animent la ville dans une atmosphère authentique.",
    icon: "Store",
  },
  {
    title: "Châteaux de la Dordogne",
    description:
      "Beynac, Castelnaud, Les Milandes : une succession de forteresses dominant la rivière. Chaque château raconte l'histoire du Périgord et offre des points de vue spectaculaires sur la vallée.",
    icon: "Landmark",
  },
  {
    title: "Randonnées et nature",
    description:
      "Sentiers pédestres, canoë sur la Dordogne, grottes de Lascaux et du Pech Merle : la région se découvre à pied ou sur l'eau, entre falaises, forêts et villages de caractère.",
    icon: "Trees",
  },
  {
    title: "Gastronomie périgourdine",
    description:
      "Foie gras, magret, noix du Périgord, cèpes et truffes : les tables et marchés locaux célèbrent un terroir d'exception. De la ferme au restaurant, chaque repas est un voyage.",
    icon: "UtensilsCrossed",
  },
];
