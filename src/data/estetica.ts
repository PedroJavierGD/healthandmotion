export type TratamientoEsteticaIcon =
  | "heart"
  | "shield"
  | "sparkles"
  | "sun"
  | "waves";

export type VentajaEsteticaIcon = "heart" | "shield" | "sparkles" | "users";

export interface TratamientoEstetica {
  titulo: string;
  descripcion: string;
  icon: TratamientoEsteticaIcon;
  color: string;
  items: string[];
}

export interface VentajaEstetica {
  titulo: string;
  texto: string;
  icon: VentajaEsteticaIcon;
}

export interface PasoEstetica {
  titulo: string;
  texto: string;
}

export interface FaqEstetica {
  pregunta: string;
  respuesta: string;
}

export const tratamientosEstetica: TratamientoEstetica[] = [
  {
    titulo: "Higiene facial",
    descripcion:
      "Limpieza profunda para mejorar el estado de la piel, retirar impurezas y favorecer un aspecto más cuidado y luminoso.",
    icon: "sparkles",
    color: "from-primary-500 to-primary-700",
    items: ["Limpieza y renovación", "Piel más fresca"],
  },
  {
    titulo: "Tratamientos faciales personalizados",
    descripcion:
      "Sesiones adaptadas al estado de tu piel y al objetivo que quieras trabajar, desde hidratación hasta luminosidad.",
    icon: "heart",
    color: "from-accent-300 to-accent-500",
    items: ["Adaptado a tu piel", "Objetivo concreto"],
  },
  {
    titulo: "Tratamientos corporales",
    descripcion:
      "Cuidados orientados a mejorar textura, bienestar y aspecto general de distintas zonas del cuerpo.",
    icon: "waves",
    color: "from-ink-500 to-ink-700",
    items: ["Trabajo corporal", "Sesiones personalizadas"],
  },
  {
    titulo: "Acné, textura y manchas",
    descripcion:
      "Abordamos necesidades frecuentes de la piel con un protocolo cuidado y progresivo según tu caso.",
    icon: "shield",
    color: "from-primary-400 to-primary-600",
    items: ["Mejora del aspecto", "Seguimiento del proceso"],
  },
  {
    titulo: "Luminosidad y cuidado antiedad",
    descripcion:
      "Tratamientos enfocados en revitalizar la piel, mejorar su aspecto y potenciar una imagen más cuidada.",
    icon: "sun",
    color: "from-accent-400 to-accent-600",
    items: ["Piel más luminosa", "Cuidado continuado"],
  },
  {
    titulo: "Sesiones de mantenimiento",
    descripcion:
      "Programas de continuidad para cuidar resultados, mantener tu piel atendida y adaptar el tratamiento cuando haga falta.",
    icon: "sparkles",
    color: "from-ink-600 to-ink-800",
    items: ["Constancia", "Plan ajustado a ti"],
  },
];

export const ventajasEstetica: VentajaEstetica[] = [
  {
    titulo: "Tratamientos personalizados",
    texto:
      "Cada sesión se adapta al estado de tu piel, la zona a tratar y el objetivo que quieras conseguir.",
    icon: "sparkles",
  },
  {
    titulo: "Atención cercana y cuidada",
    texto:
      "Queremos que cada visita sea cómoda, agradable y centrada en lo que realmente necesitas.",
    icon: "heart",
  },
  {
    titulo: "Seguimiento y continuidad",
    texto:
      "Te orientamos sobre cómo mantener resultados y cuándo conviene ajustar o repetir el tratamiento.",
    icon: "users",
  },
  {
    titulo: "Entorno profesional",
    texto:
      "Trabajamos en una cabina cuidada y con protocolos enfocados en el bienestar y el cuidado de tu piel.",
    icon: "shield",
  },
];

export const pasosProcesoEstetica: PasoEstetica[] = [
  {
    titulo: "Valoramos tu piel y tu objetivo",
    texto:
      "Analizamos qué necesitas mejorar y qué tratamiento puede ayudarte mejor según tu caso.",
  },
  {
    titulo: "Te proponemos el tratamiento",
    texto:
      "Definimos una sesión o una pauta de trabajo adaptada al resultado que buscas.",
  },
  {
    titulo: "Realizamos la sesión",
    texto:
      "Aplicamos el tratamiento de forma cuidada, respetando las necesidades de tu piel y tu comodidad.",
  },
  {
    titulo: "Seguimiento y recomendaciones",
    texto:
      "Te orientamos sobre continuidad, mantenimiento y cuidados para potenciar resultados.",
  },
];

export const faqEstetica: FaqEstetica[] = [
  {
    pregunta: "¿Cómo sé qué tratamiento de estética necesito?",
    respuesta:
      "Si no tienes claro qué sesión encaja mejor contigo, no pasa nada. Valoramos tu piel, tu objetivo y el resultado que buscas para orientarte sobre el tratamiento más adecuado desde la primera toma de contacto.",
  },
  {
    pregunta: "¿Trabajáis tratamientos faciales y corporales?",
    respuesta:
      "Sí. Ofrecemos sesiones tanto faciales como corporales, siempre adaptando el tratamiento a la zona, al estado de la piel y al objetivo concreto que quieras mejorar.",
  },
  {
    pregunta: "¿Cuántas sesiones voy a necesitar?",
    respuesta:
      "Depende del tratamiento y del punto de partida. Hay casos en los que una sesión puede aportar mejora, y otros en los que conviene hacer seguimiento o continuidad para consolidar resultados.",
  },
  {
    pregunta: "¿Puedo tratar acné, manchas o textura de la piel?",
    respuesta:
      "Sí. Son consultas frecuentes dentro del servicio de estética. Valoramos tu caso para proponerte una sesión o un protocolo adaptado a lo que necesita tu piel en ese momento.",
  },
  {
    pregunta: "¿La primera cita sirve también para asesoramiento?",
    respuesta:
      "Sí. Si tienes dudas sobre qué hacerte, la primera cita también sirve para orientarte, explicarte opciones y ayudarte a decidir qué tratamiento puede venirte mejor.",
  },
];
