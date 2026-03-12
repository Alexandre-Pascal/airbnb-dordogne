"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Image de la maison seule (sans texte). Le texte "Gîte Périgord" est ajouté en HTML. */
const LOGO_HOUSE = "/logo-no-bg.png";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos Logements", href: "#nos-logements" },
  { label: "La Région", href: "#region" },
  { label: "Contact / Réserver", href: "#reserver" },
];

const AIRBNB_PROFILE_URL =
  "https://www.airbnb.fr/users/profile/1465564265008672096?previous_page_name=PdpHomeMarketplace";

/** Logo du site : maison + texte "Gîte Périgord" sur une ligne. Fond discret quand header transparent (logo non transparent). */
function SiteLogo({ scrolled }: { scrolled: boolean }) {
  const [useFallback, setUseFallback] = useState(false);
  const textClass = cn(
    "font-heading text-lg font-semibold whitespace-nowrap",
    scrolled ? "text-foreground" : "text-[#5c4033]",
  );
  const wrapperClass = cn(
    "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-300",
    !scrolled && "bg-white/95 shadow-sm",
  );
  if (useFallback) {
    return (
      <span
        className={cn(
          "font-heading text-xl font-semibold",
          scrolled ? "text-foreground" : "text-white",
        )}
      >
        Gîtes Périgord
      </span>
    );
  }
  return (
    <span className={wrapperClass}>
      <img
        src={LOGO_HOUSE}
        alt=""
        className="h-8 w-auto object-contain"
        onError={() => setUseFallback(true)}
      />
      <span className={textClass}>Gîte Périgord</span>
    </span>
  );
}

/** Logo Airbnb (Bélo) – symbole officiel */
function AirbnbLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M91.5 71c-0.5-1.2-1-2.5-1.5-3.6-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6c-1.5 1.8-2.6 3.7-3.6 5.5-0.8 1.6-1.6 3.2-2.4 4.7l-0.3 0.6C19.7 31.8 12.2 47 5.3 62l-0.1 0.2c-0.7 1.6-1.5 3.3-2.3 5.1-0.5 1.1-1 2.3-1.5 3.6-1.3 3.7-1.7 7.2-1.2 10.8 1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6 0.8 0 1.8-0.1 2.6-0.2 3.3-0.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4 0.8 0.1 1.8 0.2 2.6 0.2 2.8 0 5.6-0.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6C93.2 78.2 92.8 74.7 91.5 71z M46.4 76.2c-5.4-6.8-8.9-13.2-10.1-18.6-0.5-2.3-0.6-4.3-0.3-6.1 0.2-1.6 0.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4 3.7 0 7 1.6 8.8 4.4 0.8 1.2 1.4 2.6 1.6 4.2 0.3 1.8 0.2 3.9-0.3 6.1C55.3 62.9 51.8 69.3 46.4 76.2z M86.3 80.9c-0.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-0.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1 0.7-3.1 0.8-5.9 0.5-8.5-0.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-0.4 2.6-0.3 5.5 0.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7 0.3-5.3-0.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-0.3-2.5-0.1-5 0.9-7.8 0.3-1 0.8-2 1.3-3.2 0.7-1.6 1.5-3.3 2.3-5l0.1-0.2c6.9-14.9 14.3-30.1 22-44.9l0.3-0.6c0.8-1.5 1.6-3.1 2.4-4.6 0.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7 3.1 0 5.9 1.3 8 3.7 1.1 1.3 2 2.8 2.8 4.4 0.8 1.5 1.6 3.1 2.4 4.6l0.3 0.6C67.7 34.8 75.1 50 82 64.9L82 65c0.8 1.6 1.5 3.4 2.3 5 0.5 1.2 1 2.2 1.3 3.2C86.4 75.8 86.7 78.3 86.3 80.9z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setOpen(false);
    if (href.startsWith("#") && window.location.hash === href) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#accueil"
          className={cn(
            "flex items-center gap-2 transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          <SiteLogo scrolled={scrolled} />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/90 hover:text-white",
              )}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={AIRBNB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-8 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-white transition-all duration-300",
              scrolled
                ? "bg-[#FF5A5F] hover:bg-[#E00007]"
                : "bg-[#FF5A5F] hover:bg-[#E00007]",
            )}
          >
            <AirbnbLogo className="h-4 w-4" />
            Profil
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            "md:hidden flex items-center justify-center p-2 transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white",
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          className={cn(
            "md:hidden border-t backdrop-blur-md",
            scrolled
              ? "border-border bg-background/98"
              : "border-white/20 bg-black/40",
          )}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10",
                )}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={AIRBNB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-2 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white transition-colors",
                scrolled
                  ? "bg-[#FF5A5F] hover:bg-[#E00007]"
                  : "bg-[#FF5A5F] hover:bg-[#E00007]",
              )}
            >
              <AirbnbLogo className="h-4 w-4" />
              Profil Airbnb
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
