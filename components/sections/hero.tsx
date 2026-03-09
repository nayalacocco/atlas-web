import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="inicio" className="shell relative min-h-[94svh] pt-32 sm:pt-40 lg:pt-44">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-24 -z-10 h-[26rem]" />
      <div className="architectural-grid pointer-events-none absolute inset-x-6 top-28 -z-10 h-[21rem] opacity-35 sm:inset-x-10 lg:inset-x-16" />

      <div className="grid items-end gap-14 lg:grid-cols-[1.618fr_1fr] lg:gap-12">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Atlas Wealth Management</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-ivory sm:text-6xl lg:text-7xl">
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

        <Reveal delay={0.12} className="hidden lg:block">
          <div className="marble-texture rounded-[1.8rem] border border-premium-line/70 bg-panel-soft/80 p-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate">Arquitectura patrimonial</p>
            <p className="mt-5 font-serif text-3xl leading-tight text-ivory">Estructura clara para decisiones de largo alcance.</p>
            <div className="mt-7 greek-divider" />
            <p className="mt-7 text-sm leading-relaxed text-slate">
              Diseñamos marcos de decisión consistentes que sostienen el patrimonio entre generaciones.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
