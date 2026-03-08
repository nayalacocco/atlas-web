import { Reveal } from "@/components/ui/reveal";
import { differentiators } from "@/lib/content";

export function DifferentiatorsSection() {
  return (
    <section id="diferenciales" className="shell section-gap">
      <Reveal>
        <p className="eyebrow">Diferenciales</p>
        <h2 className="section-title">Precisión técnica, trato personal y visión integral.</h2>
      </Reveal>
      <Reveal>
        <ul className="mt-10 grid gap-x-10 gap-y-4 text-sm text-slate sm:grid-cols-2">
          {differentiators.map((item) => (
            <li key={item} className="border-b border-premium-line pb-4">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
