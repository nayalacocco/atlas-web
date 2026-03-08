import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="contacto" className="shell section-gap pb-24">
      <Reveal className="rounded-3xl border border-accent-gold/40 bg-gradient-to-br from-panel to-ink p-10 text-center sm:p-16">
        <p className="eyebrow">Conversación inicial</p>
        <h2 className="mt-5 font-serif text-4xl text-ivory sm:text-5xl">Agenda una reunión confidencial.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate">
          Primera instancia reservada para comprender prioridades, estructura patrimonial y nivel de complejidad con
          un enfoque técnico, independiente y sin presión comercial.
        </p>
        <a
          href="mailto:contacto@atlaswm.com"
          className="mt-9 inline-block rounded-full border border-premium-line px-8 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
        >
          contacto@atlaswm.com
        </a>
      </Reveal>
    </section>
  );
}
