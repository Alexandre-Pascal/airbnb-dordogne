import Image from "next/image";
import { Waves, TreePine } from "lucide-react";

// Piscine couverte chauffée 10 m – espaces communs
const PISCINE_IMAGE = "/images/img-airbnb1/Gîte Sarlat Périgord Piscine Couverte (4).avif";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-muted/30 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            L&apos;expérience du domaine
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Partagés pour les moments de convivialité, préservés pour votre
            intimité.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/5">
            <div className="relative aspect-[16/10]">
              <Image
                src={PISCINE_IMAGE}
                alt="Piscine couverte chauffée 10 m"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Espaces communs
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Une piscine couverte de 10 m × 5 m, chauffée à 25 °C jusqu&apos;à
                fin septembre, pour profiter de l&apos;eau en toute saison. Autour,
                la cour commune accueille une table de ping-pong, des
                balançoires et un espace pétanque. De quoi réunir petits et grands
                dans une ambiance détendue.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/5">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Votre intimité
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chaque gîte dispose de son propre jardin clos et privatif, sans
                vis-à-vis. Terrasse, salon de jardin, barbecue et hamac vous
                offrent un coin de tranquillité dédié. Vous profitez des
                espaces communs quand vous le souhaitez, tout en gardant votre
                bulle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
