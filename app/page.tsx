import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Wealth Management",
    text: "Asignación estratégica, arquitectura abierta y gobierno patrimonial para resguardar capital con criterio."
  },
  {
    title: "Planificación patrimonial",
    text: "Estructura legal, fiscal y sucesoria diseñada para preservar continuidad familiar y eficiencia de largo plazo."
  },
  {
    title: "Advisory estratégico",
    text: "Acompañamiento en decisiones de liquidez, eventos corporativos y diseño de patrimonio para familias empresarias."
  }
];

const clientTypes = [
  "Familias que requieren orden y continuidad intergeneracional.",
  "Empresarios con patrimonio concentrado y objetivos de diversificación.",
  "Ejecutivos con exposición variable y necesidades de planificación fina.",
  "Estructuras patrimoniales complejas con múltiples jurisdicciones."
];

const process = ["Diagnóstico", "Estrategia", "Implementación", "Seguimiento"];

const differentials = [
  "Atención verdaderamente personalizada",
  "Independencia de criterio",
  "Visión integral del patrimonio",
  "Foco disciplinado de largo plazo",
  "Discreción y confidencialidad",
  "Relación de confianza sostenida"
];

export default function Home() {
  return (
    <main id="inicio" className="pb-20">
      <SiteHeader />

      <section className="section-shell relative min-h-screen pt-36 sm:pt-44">
        {/* Deliberately restrained hero: premium whitespace and one dominant message. */}
        <Reveal className="max-w-4xl">
          <p className="section-label">Atlas Wealth Management</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-smoke sm:text-6xl lg:text-7xl">
            Patrimonio con criterio.
            <br />
            <span className="text-stone">Visión de largo plazo.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
            Firma boutique de asesoramiento patrimonial integral para familias, empresarios y ejecutivos que priorizan estructura, discreción y precisión.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-parchment px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition hover:bg-stone"
            >
              Agendar conversación
            </a>
            <a
              href="#enfoque"
              className="rounded-full border border-smoke/30 px-7 py-3 text-xs uppercase tracking-[0.18em] text-smoke transition hover:border-smoke/55"
            >
              Conocer enfoque
            </a>
          </div>
        </Reveal>
      </section>

      <section id="enfoque" className="section-shell mt-14 border-t border-smoke/10 pt-24">
        <Reveal>
          <p className="section-label">Enfoque</p>
          <h2 className="section-title">No gestionamos productos. Diseñamos arquitectura patrimonial.</h2>
          <p className="section-copy">
            Atlas integra estrategia de inversión, planificación patrimonial y decisiones estructurales en un mismo marco de gobierno. El objetivo es ordenar, proteger y gestionar patrimonio con disciplina y lectura integral.
          </p>
        </Reveal>
      </section>

      <section id="servicios" className="section-shell mt-24">
        <Reveal>
          <p className="section-label">Servicios</p>
          <h2 className="section-title">Tres capacidades, una sola lógica de criterio.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="h-full rounded-3xl border border-smoke/10 bg-charcoal/65 p-8 shadow-line backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-smoke">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24 grid gap-14 border-y border-smoke/10 py-24 lg:grid-cols-2">
        <Reveal>
          <p className="section-label">Para quién es</p>
          <h2 className="section-title">Clientes que buscan estructura, no ruido comercial.</h2>
        </Reveal>
        <div className="space-y-4">
          {clientTypes.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <p className="rounded-2xl border border-smoke/10 bg-charcoal/45 px-6 py-5 text-sm leading-relaxed text-mist">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <Reveal>
          <p className="section-label">Cómo trabajamos</p>
          <h2 className="section-title">Un proceso simple, riguroso y transparente.</h2>
        </Reveal>
        {/* Horizontal rhythm improves scanability while preserving a restrained premium tone. */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step} delay={index * 0.07}>
              <div className="rounded-2xl border border-smoke/10 bg-charcoal/35 p-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold">0{index + 1}</span>
                <p className="mt-3 font-serif text-2xl text-smoke">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="diferenciales" className="section-shell mt-24">
        <Reveal>
          <p className="section-label">Diferenciales</p>
          <h2 className="section-title">Una firma pensada para decisiones patrimoniales exigentes.</h2>
        </Reveal>
        <Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-4 text-sm text-mist sm:grid-cols-2">
            {differentials.map((item) => (
              <li key={item} className="border-b border-smoke/10 pb-4">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="firma" className="section-shell mt-24">
        <Reveal className="rounded-3xl border border-smoke/10 bg-charcoal/55 p-9 sm:p-12">
          <p className="section-label">Institucional</p>
          <h2 className="section-title mt-3">Atlas Wealth Management</h2>
          <p className="section-copy mt-4 max-w-4xl">
            Estructura profesional orientada a la gestión patrimonial integral. Espacio previsto para presentar founders, comité asesor, partners estratégicos y marco regulatorio aplicable, manteniendo una narrativa institucional sobria.
          </p>
        </Reveal>
      </section>

      <section id="contacto" className="section-shell mt-24">
        <Reveal className="rounded-3xl border border-gold/35 bg-gradient-to-br from-charcoal to-graphite p-10 text-center sm:p-16">
          <p className="section-label">Conversación inicial</p>
          <h2 className="mt-5 font-serif text-4xl text-smoke sm:text-5xl">Agenda una reunión confidencial.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist">
            Una primera instancia para comprender estructura patrimonial, prioridades y nivel de complejidad, sin enfoque comercial ni presión de producto.
          </p>
          <a
            href="mailto:contacto@atlaswm.com"
            className="mt-9 inline-block rounded-full border border-smoke/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-smoke transition hover:border-smoke/60"
          >
            contacto@atlaswm.com
          </a>
        </Reveal>
      </section>
    </main>
  );
}
