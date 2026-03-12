import { Hero } from "@/components/Hero";
import { LogementsSection } from "@/components/LogementsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { RegionSection } from "@/components/RegionSection";
import { ReservationSection } from "@/components/ReservationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogementsSection />
      <ExperienceSection />
      <RegionSection />
      <ReservationSection />
    </main>
  );
}
