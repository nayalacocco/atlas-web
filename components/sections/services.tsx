import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="servicios" className="shell section-gap">
      <Reveal>
        <p className="eyebrow">Servicios</p>
        <h2 className="section-title">Tres capacidades bajo un mismo estándar de criterio.</h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <article className="marble-texture h-full rounded-3xl border border-premium-line bg-panel p-8 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-2xl text-ivory">{service.title}</h3>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-gold/35 to-transparent" />
              <p className="mt-4 text-sm leading-relaxed text-slate">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
