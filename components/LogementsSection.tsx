"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  ExternalLink,
  Send,
} from "lucide-react";
import Link from "next/link";
import { logements } from "@/data/logements";
import {
  galleryGite1,
  galleryGite2,
  type GalleryImage,
} from "@/data/gallery-images";
import { encodedImageSrc } from "@/lib/image-utils";
import { handleAnchorClick } from "@/lib/utils";

const PREVIEW_COUNT = 8;
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

type GiteNum = 1 | 2;

/** Grille épurée pleine largeur : 8 images. La lightbox n’affiche que les photos de ce gîte. */
function PreviewGrid({
  gite,
  images,
  onOpenAt,
  onViewAll,
  viewAllLabel,
}: {
  gite: GiteNum;
  images: GalleryImage[];
  onOpenAt: (gite: GiteNum, index: number) => void;
  onViewAll: (gite: GiteNum) => void;
  viewAllLabel: string;
}) {
  const preview = images.slice(0, PREVIEW_COUNT);
  return (
    <div className="mt-12 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {preview.map((img, i) => (
          <button
            key={i}
            type="button"
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => onOpenAt(gite, i)}
          >
            <Image
              src={encodedImageSrc(img.src)}
              alt={img.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
              unoptimized
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onViewAll(gite)}
        className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <Grid3X3 className="h-4 w-4" />
        {viewAllLabel}
      </button>
    </div>
  );
}

/** État lightbox : un seul gîte à la fois, index dans la galerie de ce gîte. */
type LightboxState = { gite: GiteNum; index: number };

export function LogementsSection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const currentGallery = lightbox?.gite === 1 ? galleryGite1 : galleryGite2;
  const total = currentGallery?.length ?? 0;

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    const gallery = lightbox.gite === 1 ? galleryGite1 : galleryGite2;
    const next = lightbox.index > 0 ? lightbox.index - 1 : gallery.length - 1;
    setLightbox({ ...lightbox, index: next });
  }, [lightbox]);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    const gallery = lightbox.gite === 1 ? galleryGite1 : galleryGite2;
    const next = lightbox.index < gallery.length - 1 ? lightbox.index + 1 : 0;
    setLightbox({ ...lightbox, index: next });
  }, [lightbox]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightbox(null);
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox, goPrev, goNext]);

  return (
    <>
      <section id="nos-logements" className="scroll-mt-20">
        <div className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Nos logements
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Deux gîtes distincts, deux ambiances.
            </p>
          </div>
        </div>

        {/* Bloc 1 : Les Glycines */}
        <div
          id="les-glycines"
          className="scroll-mt-20 border-t border-border bg-background py-14 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted order-2 lg:order-1">
                <Image
                  src={encodedImageSrc(logements[0].heroImage)}
                  alt={logements[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  priority
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-heading mt-2 text-2xl font-semibold sm:text-3xl">
                  {logements[0].name}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {logements[0].subtitle}
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                  {logements[0].summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
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
                    {logements[0].capacity.sdb} SDB
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {logements[0].equipments.slice(0, 5).map((eq) => {
                    const Icon = iconMap[eq.icon];
                    return (
                      <span
                        key={eq.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-foreground"
                      >
                        {Icon ? <Icon className="h-3 w-3" /> : null}
                        {eq.label}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={logements[0].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 min-h-11 sm:h-10 sm:min-h-0 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full bg-[#FF5A5F] px-5 text-sm font-medium text-white hover:bg-[#E00007] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    Réserver sur Airbnb – Les Glycines
                  </a>
                  <Link
                    href="#reserver"
                    onClick={(e) => handleAnchorClick(e, "#reserver")}
                    className="inline-flex h-11 min-h-11 sm:h-10 sm:min-h-0 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full border-2 border-foreground/20 bg-transparent px-5 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
                  >
                    <Send className="h-4 w-4 shrink-0" />
                    Réservation directe
                  </Link>
                </div>
              </div>
            </div>
            <PreviewGrid
              gite={1}
              images={galleryGite1}
              onOpenAt={(gite, index) => setLightbox({ gite, index })}
              onViewAll={(gite) => setLightbox({ gite, index: 0 })}
              viewAllLabel={`Voir toutes les photos (${galleryGite1.length})`}
            />
          </div>
        </div>

        {/* Bloc 2 : La Maisonnette — texte à gauche, image à droite */}
        <div
          id="la-maisonnette"
          className="scroll-mt-20 border-t border-border bg-muted/30 py-14 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="order-1 lg:order-1">
                <h3 className="font-heading mt-2 text-2xl font-semibold sm:text-3xl">
                  {logements[1].name}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {logements[1].subtitle}
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                  {logements[1].summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
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
                    {logements[1].capacity.sdb} SDB
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {logements[1].equipments.slice(0, 5).map((eq) => {
                    const Icon = iconMap[eq.icon];
                    return (
                      <span
                        key={eq.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-xs text-foreground shadow-sm"
                      >
                        {Icon ? <Icon className="h-3 w-3" /> : null}
                        {eq.label}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={logements[1].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 min-h-11 sm:h-10 sm:min-h-0 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full bg-[#FF5A5F] px-5 text-sm font-medium text-white hover:bg-[#E00007] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    Réserver sur Airbnb – La Maisonnette
                  </a>
                  <Link
                    href="#reserver"
                    onClick={(e) => handleAnchorClick(e, "#reserver")}
                    className="inline-flex h-11 min-h-11 sm:h-10 sm:min-h-0 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-full border-2 border-foreground/20 bg-transparent px-5 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
                  >
                    <Send className="h-4 w-4 shrink-0" />
                    Réservation directe
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted order-2 lg:order-2">
                <Image
                  src={encodedImageSrc(logements[1].heroImage)}
                  alt={logements[1].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
            <PreviewGrid
              gite={2}
              images={galleryGite2}
              onOpenAt={(gite, index) => setLightbox({ gite, index })}
              onViewAll={(gite) => setLightbox({ gite, index: 0 })}
              viewAllLabel={`Voir toutes les photos (${galleryGite2.length})`}
            />
          </div>
        </div>
      </section>

      {/* Lightbox : uniquement les photos du gîte ouvert (1 / 43 ou 1 / 41) */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-sm text-white/80">
            {lightbox.index + 1} / {total}
          </div>
          <div className="flex-1 flex items-center justify-center p-4 min-h-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div
              className="relative max-h-full max-w-full flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <Image
                src={encodedImageSrc(currentGallery[lightbox.index].src)}
                alt={currentGallery[lightbox.index].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
