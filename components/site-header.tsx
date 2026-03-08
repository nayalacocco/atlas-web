"use client";

import { motion } from "framer-motion";

const links = [
  ["Enfoque", "#enfoque"],
  ["Servicios", "#servicios"],
  ["Diferenciales", "#diferenciales"],
  ["Firma", "#firma"],
  ["Contacto", "#contacto"]
] as const;

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-smoke/10 bg-graphite/80 backdrop-blur-md"
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#inicio" className="font-serif text-xl tracking-wide text-smoke">
          Atlas <span className="text-gold">Wealth</span>
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-mist lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-smoke">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-smoke/25 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-smoke transition hover:border-smoke/55"
        >
          Agenda privada
        </a>
      </div>
    </motion.header>
  );
}
