"use client";

import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { logements } from "@/data/logements";
import { cn } from "@/lib/utils";

export function ReservationSection() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    logement: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reserver"
      className="scroll-mt-20 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Demande de réservation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Séjour minimum : 7 nuits. Sélectionnez vos dates. Ce formulaire
            constitue une demande de réservation. Nous vous recontacterons par
            email pour confirmer la disponibilité, le tarif exact et vous
            transmettre notre RIB pour bloquer votre séjour par virement.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Label className="text-base font-medium">Vos dates</Label>
            <p className="mt-1 text-sm text-muted-foreground">
              Choisissez votre date d&apos;arrivée et de départ (séjour minimum 7
              nuits)
            </p>
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              locale={fr}
              numberOfMonths={1}
              className="mt-4 rounded-xl border border-border p-4"
            />
            {range?.from && (
              <p className="mt-4 text-sm text-muted-foreground">
                {range.to
                  ? `${format(range.from, "d MMMM yyyy", { locale: fr })} – ${format(range.to, "d MMMM yyyy", { locale: fr })}`
                  : format(range.from, "d MMMM yyyy", { locale: fr })}
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-border bg-muted/30 p-8 text-center">
                <p className="font-medium text-foreground">
                  Merci pour votre demande.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nous vous recontacterons très prochainement par email pour
                  confirmer la disponibilité et les modalités de votre séjour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Jean Dupont"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="jean@exemple.fr"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="06 00 00 00 00"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Logement souhaité</Label>
                  <Select
                    value={formData.logement}
                    onValueChange={(value) =>
                      setFormData((p) => ({ ...p, logement: value ?? "" }))
                    }
                    required
                  >
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Choisir un logement" />
                    </SelectTrigger>
                    <SelectContent>
                      {logements.map((l) => (
                        <SelectItem key={l.id} value={l.id}>
                          {l.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Nombre de voyageurs</Label>
                    <Input
                      id="guests"
                      type="number"
                      min={1}
                      max={8}
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, guests: e.target.value }))
                      }
                      placeholder="4"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Questions ou remarques..."
                    rows={4}
                    className="rounded-lg resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Les dates sélectionnées dans le calendrier à gauche seront
                  associées à votre demande.
                </p>
                <Button type="submit" size="lg" className="rounded-full">
                  Envoyer la demande
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
