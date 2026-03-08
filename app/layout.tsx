import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant"
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Atlas Wealth Management | Private Wealth Boutique",
  description:
    "Asesoramiento patrimonial integral para familias y empresarios con criterio, discreción y visión de largo plazo.",
  openGraph: {
    title: "Atlas Wealth Management",
    description:
      "Ordenar, proteger y gestionar el patrimonio con criterio y sofisticación.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} ${manrope.variable} bg-graphite text-smoke antialiased`}>
        {children}
      </body>
    </html>
  );
}
