import Image from "next/image";
import Link from "next/link";

// Grande photo piscine couverte / vue domaine (la plus spectaculaire)
const HERO_IMAGE =
  "/images/img-airbnb1/Gîte Sarlat Périgord Piscine 10m (16).avif";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Gîtes de charme en Périgord Noir"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Séjour d&apos;exception en Périgord Noir
        </h1>
        <p className="mt-6 text-lg font-medium text-white/95 sm:text-xl">
          Un domaine, deux gîtes de charme. Piscine couverte chauffée, jardins
          privés, au calme à Saint-Martial-de-Nabirat.
        </p>
        <div className="mt-10">
          <Link
            href="#nos-logements"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-foreground transition-colors hover:bg-white/90"
          >
            Découvrir nos logements
          </Link>
        </div>
      </div>
    </section>
  );
}
