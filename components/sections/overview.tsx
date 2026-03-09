import { Reveal } from "@/components/ui/reveal";

export function OverviewSection() {
  return (
    <section id="enfoque" className="shell section-divider pt-28">
      <Reveal>
        <p className="eyebrow">Enfoque</p>
        <h2 className="section-title">No se trata de perseguir retornos. Se trata de gobernar patrimonio.</h2>
        <div className="mt-8 greek-divider" />
        <p className="section-copy">
          Atlas integra decisiones de inversión, planificación patrimonial y estructura familiar en una misma hoja de
          ruta. Priorizamos consistencia estratégica, protección patrimonial y claridad de ejecución.
        </p>
      </Reveal>
    </section>
  );
}
