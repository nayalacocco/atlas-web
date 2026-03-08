import { Reveal } from "@/components/ui/reveal";
import { clientProfiles } from "@/lib/content";

export function ClientsSection() {
  return (
    <section id="clientes" className="shell section-gap grid gap-14 section-divider-y py-24 lg:grid-cols-2">
      <Reveal>
        <p className="eyebrow">Para quién es</p>
        <h2 className="section-title">Relaciones selectivas para patrimonios con complejidad real.</h2>
      </Reveal>
      <div className="space-y-4">
        {clientProfiles.map((profile, index) => (
          <Reveal key={profile} delay={index * 0.05}>
            <p className="rounded-2xl border border-premium-line bg-panel-soft px-6 py-5 text-sm leading-relaxed text-slate">
              {profile}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
