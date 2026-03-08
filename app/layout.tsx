import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Wealth Management | Private Wealth Boutique",
  description:
    "Asesoramiento patrimonial integral para familias, empresarios y ejecutivos. Criterio, discreción y visión de largo plazo.",
  metadataBase: new URL("https://atlaswm.com"),
  openGraph: {
    title: "Atlas Wealth Management",
    description: "Patrimonio con criterio, estructura y visión patrimonial de largo plazo.",
    type: "website",
    locale: "es_AR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-ink font-sans text-ivory antialiased">{children}</body>
    </html>
  );
}
