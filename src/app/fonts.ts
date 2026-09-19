import localFont from "next/font/local";

export const suisseFont = localFont({
  src: [
    {
      path: "../../public/fonts/suisse.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
  display: "swap",
});
