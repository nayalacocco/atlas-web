export const navItems = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Proceso", href: "#proceso" },
  { label: "Firma", href: "#firma" }
] as const;

export const services = [
  {
    title: "Wealth Management",
    description:
      "Mandatos patrimoniales con arquitectura abierta, disciplina de riesgo y lectura estratégica del patrimonio total."
  },
  {
    title: "Planificación patrimonial",
    description:
      "Diseño patrimonial, fiscal y sucesorio para preservar continuidad familiar y eficiencia en escenarios complejos."
  },
  {
    title: "Advisory estratégico",
    description:
      "Asesoramiento para empresarios y familias en liquidez, diversificación, gobierno patrimonial y decisiones extraordinarias."
  }
] as const;

export const clientProfiles = [
  "Familias con visión intergeneracional y necesidad de orden patrimonial.",
  "Empresarios con patrimonio concentrado y procesos de diversificación.",
  "Ejecutivos con ingresos variables, equity y objetivos de preservación.",
  "Estructuras patrimoniales complejas con múltiples vehículos o jurisdicciones."
] as const;

export const processSteps = ["Diagnóstico", "Estrategia", "Implementación", "Seguimiento"] as const;

export const differentiators = [
  "Atención verdaderamente personalizada",
  "Independencia de criterio",
  "Visión integral del patrimonio",
  "Disciplina de largo plazo",
  "Discreción y reserva profesional",
  "Relación de confianza sostenida"
] as const;
