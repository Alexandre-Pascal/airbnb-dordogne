export type LogementId = "les-glycines" | "la-maisonnette";

export interface Logement {
  id: LogementId;
  name: string;
  subtitle: string;
  summary: string;
  capacity: {
    voyageurs: number;
    chambres: number;
    lits: number;
    sdb: number;
    sdbDetail: string;
  };
  equipments: { label: string; icon: string }[];
  heroImage: string;
}

export const logements: Logement[] = [
  {
    id: "les-glycines",
    name: "Les Glycines",
    subtitle: "Gîte de charme au cœur du Périgord Noir",
    summary:
      "Une maison où il fait bon vivre : belle pièce à vivre, terrasse et jardin clos avec salon de jardin, barbecue et hamac. Les chambres, rénovées en 2021, vous accueillent dans un cadre soigné. La piscine couverte partagée, chauffée à 25°C, prolonge le plaisir jusqu'à fin septembre.",
    capacity: {
      voyageurs: 4,
      chambres: 2,
      lits: 3,
      sdb: 1,
      sdbDetail: "Douche, WC",
    },
    equipments: [
      { label: "Jardin privé clôturé", icon: "TreePine" },
      { label: "Terrasse & barbecue", icon: "Flame" },
      { label: "Piscine couverte chauffée", icon: "Waves" },
      { label: "Cuisine équipée (lave-vaisselle, expresso)", icon: "Coffee" },
      { label: "Wi-Fi & TV", icon: "Wifi" },
      { label: "Lits faits, linge fourni", icon: "BedDouble" },
      { label: "Animaux acceptés", icon: "Dog" },
      { label: "Parking gratuit", icon: "Car" },
    ],
    heroImage: "/images/img-airbnb1/Gîte Sarlat Périgord Piscine 10m (1).avif",
  },
  {
    id: "la-maisonnette",
    name: "La Maisonnette",
    subtitle: "Maison en pierre, intimité et caractère",
    summary:
      "Une maison en pierre typique du Périgord : rez-de-chaussée avec cuisine et grand salon-salle à manger, à l'étage une chambre mezzanine mansardée (lit double et 2 lits pliants). Le jardin clos privatif offre une vue discrète sur la piscine. Une bulle de tranquillité pour les familles ou les amis.",
    capacity: {
      voyageurs: 4,
      chambres: 1,
      lits: 3,
      sdb: 1,
      sdbDetail: "Baignoire, WC",
    },
    equipments: [
      { label: "Jardin privé clôturé", icon: "TreePine" },
      { label: "Patio & barbecue", icon: "Flame" },
      { label: "Piscine partagée chauffée", icon: "Waves" },
      { label: "Cuisine équipée (lave-vaisselle 2023)", icon: "Coffee" },
      { label: "Wi-Fi & TV", icon: "Wifi" },
      { label: "Linge fourni, lave-linge", icon: "Shirt" },
      { label: "Animaux acceptés", icon: "Dog" },
      { label: "Abri voiture 1 place", icon: "Car" },
    ],
    heroImage: "/images/img-airbnb2/Gîte Périgord Sarlat Piscine (4).avif",
  },
];
