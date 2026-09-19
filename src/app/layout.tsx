import type { Metadata, Viewport } from "next";
import { suisseFont } from "./fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/layout/Header/Header";
import { Preloader } from "@/components/layout/Preloader/Preloader";
import { Footer } from "@/components/layout/Footer/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#0c388d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "AMIMUN'27 — Amity International Model United Nations",
    template: "%s | AMIMUN'27",
  },
  description:
    "Amity International Model United Nations 2027 (16th Edition) — Where diplomacy, dialogue, and discipline meet to shape tomorrow's global leaders.",
  icons: {
    icon: "/Amity_University_logo.png",
    shortcut: "/Amity_University_logo.png",
    apple: "/Amity_University_logo.png",
  },
  keywords: [
    "AMIMUN",
    "AMIMUN 2027",
    "AMIMUN'27",
    "Amity Model United Nations",
    "Amity University Noida",
    "Model United Nations India",
    "Youth Diplomacy",
    "International MUN",
  ],
  authors: [{ name: "AMIMUN Secretariat" }],
  creator: "AMIMUN",
  publisher: "Amity University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AMIMUN'27 — Amity International Model United Nations",
    description:
      "Where diplomacy, dialogue, and discipline meet to shape tomorrow's global leaders. 15–17 January 2027 at Amity University, Noida.",
    siteName: "AMIMUN'27",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMIMUN'27 — Amity International Model United Nations",
    description:
      "Where diplomacy, dialogue, and discipline meet to shape tomorrow's global leaders.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={suisseFont.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={suisseFont.className} suppressHydrationWarning>
        <SmoothScrollProvider>
          <Preloader />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
