import Image from "next/image";
import Link from "next/link";
import {
  TreePine,
  Flame,
  Waves,
  Coffee,
  Wifi,
  BedDouble,
  Dog,
  Car,
  Shirt,
  Users,
  DoorOpen,
  Bath,
} from "lucide-react";
import { logements } from "@/data/logements";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TreePine,
  Flame,
  Waves,
  Coffee,
  Wifi,
  BedDouble,
  Dog,
  Car,
  Shirt,
};

export function LogementsSection() {
  return (
    <section
      id="nos-logements"
      className="scroll-mt-20 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Nos logements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Deux gîtes distincts, un même esprit : confort, calme et caractère
            périgourdin.
          </p>
        </div>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {logements.map((logement, index) => (
            <div
              key={logement.id}
              className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center"
            >
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-2xl",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <Image
                  src={logement.heroImage}
                  alt={logement.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                  {logement.name}
                </h3>
                <p className="mt-1 text-muted-foreground">{logement.subtitle}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {logement.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {logement.capacity.voyageurs} voyageurs
                  </li>
                  <li className="flex items-center gap-2">
                    <DoorOpen className="h-4 w-4" />
                    {logement.capacity.chambres} chambre
                    {logement.capacity.chambres > 1 ? "s" : ""}
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4" />
                    {logement.capacity.lits} lits
                  </li>
                  <li className="flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    {logement.capacity.sdb} SDB ({logement.capacity.sdbDetail})
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {logement.equipments.slice(0, 6).map((eq) => {
                    const Icon = iconMap[eq.icon];
                    return (
                      <span
                        key={eq.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                        {eq.label}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-10">
                  <Link
                    href="#reserver"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-input bg-background px-5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Plus de détails & Disponibilités
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
