import { Hero } from "@/components/Hero";
import { LogementsSection } from "@/components/LogementsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { RegionSection } from "@/components/RegionSection";
import { ReservationSection } from "@/components/ReservationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogementsSection />
      <ExperienceSection />
      <GallerySection />
      <RegionSection />
      <ReservationSection />
    </main>
  );
}
