import { Reveal } from "@/components/ui/reveal";

export function InstitutionalSection() {
  return (
    <section id="firma" className="shell section-gap">
      <Reveal className="rounded-3xl border border-premium-line bg-panel p-9 sm:p-12">
        <p className="eyebrow">Institucional</p>
        <h2 className="section-title mt-3">Atlas Wealth Management</h2>
        <p className="section-copy mt-4 max-w-4xl">
          Firma orientada al asesoramiento patrimonial integral. Este espacio permite incorporar founders, equipo,
          marco profesional, partners y referencias regulatorias de forma sobria, sin alterar la experiencia editorial.
        </p>
      </Reveal>
    </section>
  );
}
