"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery-images";
import { cn } from "@/lib/utils";

export function GallerySection() {
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
            Un aperçu de l&apos;ambiance des gîtes et du domaine.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:gap-6">
          {galleryImages.map((img, index) => (
            <button
              key={`${img.src}-${index}`}
              type="button"
              className="group relative mb-4 block overflow-hidden rounded-lg lg:mb-6"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </button>
          ))}
        </div>
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
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </button>
      )}
    </section>
  );
}
