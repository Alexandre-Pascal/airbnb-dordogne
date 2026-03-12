"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos Logements", href: "#nos-logements" },
  { label: "La Région", href: "#region" },
  { label: "Contact / Réserver", href: "#reserver" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#accueil"
          className={cn(
            "font-heading text-xl font-semibold transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          Gîtes Périgord
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
                  : "text-white/90 hover:text-white"
              )}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reserver"
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-full px-4 text-sm font-medium transition-all duration-300",
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-foreground hover:bg-white/90"
            )}
          >
            Réserver
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "md:hidden flex items-center justify-center p-2 transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
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
              : "border-white/20 bg-black/40"
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
                    : "text-white hover:bg-white/10"
                )}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reserver"
              onClick={(e) => handleNavClick(e, "#reserver")}
              className={cn(
                "mt-2 inline-flex h-9 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition-colors",
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-foreground hover:bg-white/90"
              )}
            >
              Réserver
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
