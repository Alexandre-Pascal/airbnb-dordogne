import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Nous trouver
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Saint-Martial-de-Nabirat, Dordogne
              <br />
              Périgord Noir, Nouvelle-Aquitaine
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@gites-perigord.fr"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                contact@gites-perigord.fr
              </a>
              <a
                href="tel:+33000000000"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                00 00 00 00 00
              </a>
              <a
                href="https://www.google.com/maps?q=44.75403,1.24011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                Voir sur la carte
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="h-64 overflow-hidden rounded-lg border border-border bg-muted lg:h-80">
            <iframe
              title="Carte Google Maps - Saint-Martial-de-Nabirat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90178.0!2d1.24011!3d44.75403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ1JzE0LjUiTiAxwrAxNCcyNC40IkU!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gîtes Périgord Noir. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
