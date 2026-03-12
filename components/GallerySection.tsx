"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryGite1, galleryGite2, type GalleryImage } from "@/data/gallery-images";

/** Encode le nom de fichier pour les URLs (accents, espaces). */
function encodedSrc(src: string): string {
  const i = src.lastIndexOf("/");
  return src.substring(0, i + 1) + encodeURIComponent(src.substring(i + 1));
}

function GalleryBlock({
  title,
  images,
  startIndex,
  onOpen,
}: {
  title: string;
  images: GalleryImage[];
  startIndex: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="mt-16 first:mt-12">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
        {title}
      </h3>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 lg:gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className="group relative mb-4 block w-full overflow-hidden rounded-lg lg:mb-6"
            onClick={() => onOpen(startIndex + i)}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={encodedSrc(img.src)}
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
    </div>
  );
}

export function GallerySection() {
  const allImages = [...galleryGite1, ...galleryGite2];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Galerie
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Toutes les photos des deux gîtes : Les Glycines puis La Maisonnette.
          </p>
        </div>

        <GalleryBlock
          title="Les Glycines"
          images={galleryGite1}
          startIndex={0}
          onOpen={setLightboxIndex}
        />
        <GalleryBlock
          title="La Maisonnette"
          images={galleryGite2}
          startIndex={galleryGite1.length}
          onOpen={setLightboxIndex}
        />
      </div>

      {lightboxIndex !== null && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
          aria-label="Fermer la galerie"
        >
          <span className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </span>
          <div className="relative max-h-[90vh] max-w-4xl">
            <Image
              src={encodedSrc(allImages[lightboxIndex].src)}
              alt={allImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
              unoptimized
            />
          </div>
        </button>
      )}
    </section>
  );
}
