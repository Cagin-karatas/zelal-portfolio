import localFont from "next/font/local";

/**
 * Bodoni Moda — the display/section didone. Self-hosted as a single
 * variable file per style (normal, italic), each carrying both the `wght`
 * (400–900) and `opsz` (6–96) axes in one file. A single-axis "wght only"
 * build was available and smaller, but §6 item 9's hover micro-interaction
 * shifts `font-variation-settings: 'opsz'` at runtime — that axis has to
 * exist in the shipped font, not just in the family. Italic is included
 * only for the one signature word ("*stories.*", §4.3), not general use.
 */
export const bodoniModa = localFont({
  src: [
    {
      path: "../public/fonts/bodoni-moda-variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/bodoni-moda-variable-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-bodoni-moda",
  weight: "400 900",
  display: "swap",
});

/**
 * Archivo — the body/label/number grotesk. Only the weight-axis variable
 * file is shipped; this design has no use for Archivo's width axis, so
 * that axis (and the larger file it requires) is left out.
 */
export const archivo = localFont({
  src: "../public/fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});
