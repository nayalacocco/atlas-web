import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="inicio" className="shell relative min-h-[90svh] pt-36 sm:pt-44">
      {/* Halo tenue para aportar profundidad sin caer en efectos estridentes. */}
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-24 -z-10 h-[26rem]" />

      <Reveal className="max-w-4xl">
        <p className="eyebrow">Atlas Wealth Management</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.04] text-ivory sm:text-6xl lg:text-7xl">
          Patrimonio ordenado.
          <br />
          Criterio que perdura.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate">
          Boutique privada de asesoramiento patrimonial integral para familias, empresarios y ejecutivos con
          visión de largo plazo.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#contacto" className="btn-primary">
            Agendar conversación
          </a>
          <a href="#enfoque" className="btn-secondary">
            Conocer enfoque
          </a>
        </div>
      </Reveal>
    </section>
  );
}
