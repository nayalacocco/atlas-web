"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    /* Header translúcido mínimo para preservar foco y tono editorial. */
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-premium-line bg-ink/85 backdrop-blur-md"
    >
      <div className="shell flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a href="#inicio" className="font-serif text-lg tracking-wide text-ivory sm:text-xl">
          Atlas <span className="text-accent-gold">Wealth Management</span>
        </a>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-slate lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-ivory">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="rounded-full border border-premium-line px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
        >
          Agenda privada
        </a>
      </div>
    </motion.header>
  );
}
