import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** À utiliser sur les liens #section : si on est déjà sur ce hash, force le scroll (comme le header). */
export function handleAnchorClick(
  e: { preventDefault: () => void },
  href: string,
): void {
  if (href.startsWith("#") && typeof window !== "undefined" && window.location.hash === href) {
    e.preventDefault()
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
}
