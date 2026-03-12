"use client";

import { useState, useEffect } from "react";
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
  X,
} from "lucide-react";
import { logements } from "@/data/logements";
import { galleryGite1, galleryGite2, type GalleryImage } from "@/data/gallery-images";
import { encodedImageSrc } from "@/lib/image-utils";
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

function LogementGallery({
  images,
  startIndex,
  onOpen,
}: {
  images: GalleryImage[];
  startIndex: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 lg:gap-4">
      {images.map((img, i) => (
        <button
          key={i}
          type="button"
          className="group relative mb-3 block w-full overflow-hidden rounded-xl lg:mb-4"
          onClick={() => onOpen(startIndex + i)}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={encodedImageSrc(img.src)}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized
            />
          </div>
        </button>
      ))}
    </div>
  );
}

const allGalleryImages = [...galleryGite1, ...galleryGite2];

export function LogementsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section id="nos-logements" className="scroll-mt-20">
        <div className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Nos logements
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Deux gîtes distincts, deux ambiances : choisissez celui qui vous ressemble.
            </p>
          </div>
        </div>

        {/* Bloc 1 : Les Glycines */}
        <div
          id="les-glycines"
          className="scroll-mt-20 border-t border-border bg-background py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:min-w-[45%] lg:max-w-[50%]">
                <Image
                  src={encodedImageSrc(logements[0].heroImage)}
                  alt={logements[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Gîte 1
                </span>
                <h3 className="font-heading mt-1 text-2xl font-semibold sm:text-3xl">
                  {logements[0].name}
                </h3>
                <p className="mt-1 text-muted-foreground">{logements[0].subtitle}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {logements[0].summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {logements[0].capacity.voyageurs} voyageurs
                  </li>
                  <li className="flex items-center gap-2">
                    <DoorOpen className="h-4 w-4" />
                    {logements[0].capacity.chambres} chambres
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4" />
                    {logements[0].capacity.lits} lits
                  </li>
                  <li className="flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    {logements[0].capacity.sdb} SDB ({logements[0].capacity.sdbDetail})
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {logements[0].equipments.slice(0, 6).map((eq) => {
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
                    className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Réserver Les Glycines
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
                Galerie – Les Glycines
              </h4>
              <LogementGallery
                images={galleryGite1}
                startIndex={0}
                onOpen={setLightboxIndex}
              />
            </div>
          </div>
        </div>

        {/* Bloc 2 : La Maisonnette – fond différencié */}
        <div
          id="la-maisonnette"
          className="scroll-mt-20 border-t border-border bg-muted/40 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-16 gap-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:min-w-[45%] lg:max-w-[50%]">
                <Image
                  src={encodedImageSrc(logements[1].heroImage)}
                  alt={logements[1].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="lg:text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Gîte 2
                </span>
                <h3 className="font-heading mt-1 text-2xl font-semibold sm:text-3xl">
                  {logements[1].name}
                </h3>
                <p className="mt-1 text-muted-foreground">{logements[1].subtitle}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {logements[1].summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {logements[1].capacity.voyageurs} voyageurs
                  </li>
                  <li className="flex items-center gap-2">
                    <DoorOpen className="h-4 w-4" />
                    {logements[1].capacity.chambres} chambre mezzanine
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4" />
                    {logements[1].capacity.lits} lits
                  </li>
                  <li className="flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    {logements[1].capacity.sdb} SDB ({logements[1].capacity.sdbDetail})
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {logements[1].equipments.slice(0, 6).map((eq) => {
                    const Icon = iconMap[eq.icon];
                    return (
                      <span
                        key={eq.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
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
                    className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Réserver La Maisonnette
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
                Galerie – La Maisonnette
              </h4>
              <LogementGallery
                images={galleryGite2}
                startIndex={galleryGite1.length}
                onOpen={setLightboxIndex}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox commune */}
      {lightboxIndex !== null && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
          aria-label="Fermer"
        >
          <span className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </span>
          <div className="relative max-h-[90vh] max-w-4xl">
            <Image
              src={encodedImageSrc(allGalleryImages[lightboxIndex].src)}
              alt={allGalleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
              unoptimized
            />
          </div>
        </button>
      )}
    </>
  );
}
