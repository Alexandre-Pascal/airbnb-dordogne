import Image from "next/image";
import { Store, Landmark, Trees, UtensilsCrossed } from "lucide-react";
import {
  regionHeroImage,
  regionIntro,
  regionActivities,
  type RegionActivity,
} from "@/data/region";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Landmark,
  Trees,
  UtensilsCrossed,
};

function ActivityBlock({
  activity,
  index,
}: {
  activity: RegionActivity;
  index: number;
}) {
  const Icon = iconMap[activity.icon];
  const imageLeft = index % 2 === 0;

  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted",
          !imageLeft && "lg:order-2"
        )}
      >
        <Image
          src={activity.image}
          alt={activity.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className={cn(!imageLeft && "lg:order-1 lg:text-left")}>
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
          <h3 className="font-heading text-xl font-semibold sm:text-2xl">
            {activity.title}
          </h3>
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {activity.longDescription}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
          {activity.tip}
        </p>
      </div>
    </article>
  );
}

export function RegionSection() {
  return (
    <section
      id="region"
      className="scroll-mt-20 bg-background py-0"
    >
      {/* Hero : image pleine largeur + overlay */}
      <div className="relative aspect-[21/9] min-h-[280px] w-full overflow-hidden sm:min-h-[320px]">
        <Image
          src={regionHeroImage}
          alt="Périgord Noir – Vallée de la Dordogne"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Découvrir la région
          </h2>
          <p className="mt-3 max-w-xl text-lg font-medium text-white/95">
            Le Périgord Noir, à quelques minutes de vos gîtes
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            {regionIntro.first}
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {regionIntro.second}
          </p>
        </div>

        {/* Activités : alternance image / texte */}
        <div className="mt-16 space-y-20 lg:space-y-28">
          {regionActivities.map((activity, index) => (
            <ActivityBlock key={activity.title} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
