import { Store, Landmark, Trees, UtensilsCrossed } from "lucide-react";
import { regionIntro, regionActivities } from "@/data/region";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Landmark,
  Trees,
  UtensilsCrossed,
};

export function RegionSection() {
  return (
    <section
      id="region"
      className="scroll-mt-20 bg-muted/30 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Découvrir la région
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            {regionIntro}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regionActivities.map((activity) => {
            const Icon = iconMap[activity.icon];
            return (
              <Card key={activity.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-semibold">
                      {activity.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
