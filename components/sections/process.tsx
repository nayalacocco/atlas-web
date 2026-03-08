import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section id="proceso" className="shell section-gap">
      <Reveal>
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="section-title">Un proceso claro para decisiones relevantes.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.07}>
            <div className="rounded-2xl border border-premium-line bg-panel-soft p-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent-gold">0{index + 1}</span>
              <p className="mt-3 font-serif text-2xl text-ivory">{step}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
