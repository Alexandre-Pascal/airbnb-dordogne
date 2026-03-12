/** Encode le nom de fichier dans un path pour les URLs (accents, espaces). */
export function encodedImageSrc(src: string): string {
  const i = src.lastIndexOf("/");
  return src.substring(0, i + 1) + encodeURIComponent(src.substring(i + 1));
}
