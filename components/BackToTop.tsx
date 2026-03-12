"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full",
        "bg-foreground text-background shadow-lg transition-opacity hover:opacity-90",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      )}
      aria-label="Remonter en haut de la page"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
