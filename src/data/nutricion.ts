export type ConsultaNutricionIcon = "apple" | "dumbbell" | "heart-pulse";

export type VentajaNutricionIcon =
  | "apple"
  | "users"
  | "badge-check"
  | "monitor-smartphone";

export interface ConsultaNutricion {
  titulo: string;
  descripcion: string;
  icon: ConsultaNutricionIcon;
  color: string;
  items: string[];
}

export interface VentajaNutricion {
  titulo: string;
  texto: string;
  icon: VentajaNutricionIcon;
}

export interface PasoNutricion {
  titulo: string;
  texto: string;
}

export interface FaqNutricion {
  pregunta: string;
  respuesta: string;
}

export const consultasNutricion: ConsultaNutricion[] = [
  {
    titulo: "Pérdida de peso",
    descripcion:
      "Te ayudamos a bajar grasa y mejorar hábitos con una estrategia realista, sin recurrir a dietas restrictivas imposibles de mantener.",
    icon: "apple",
    color: "from-primary-500 to-primary-700",
    items: ["Plan personalizado", "Cambios sostenibles"],
  },
  {
    titulo: "Nutrición deportiva",
    descripcion:
      "Mejora tu rendimiento, recuperación y composición corporal con una alimentación adaptada a tu entrenamiento.",
    icon: "dumbbell",
    color: "from-accent-300 to-accent-500",
    items: ["Más energía", "Mejor recuperación"],
  },
  {
    titulo: "Nutrición clínica y digestiva",
    descripcion:
      "Abordamos molestias digestivas, intolerancias, inflamación o necesidades específicas desde una pauta individualizada.",
    icon: "heart-pulse",
    color: "from-ink-500 to-ink-700",
    items: ["Mejora digestiva", "Pauta adaptada a tu caso"],
  },
];

export const ventajasNutricion: VentajaNutricion[] = [
  {
    titulo: "Plan nutricional a medida",
    texto:
      "No trabajamos con plantillas genéricas. Ajustamos la pauta a tus necesidades, gustos y objetivos.",
    icon: "apple",
  },
  {
    titulo: "Seguimiento cercano",
    texto:
      "Te acompañamos durante el proceso para ayudarte a mantener constancia y resolver bloqueos.",
    icon: "users",
  },
  {
    titulo: "Aprendes a comer mejor",
    texto:
      "No solo sigues una pauta: entiendes cómo organizar tu alimentación para sostener resultados.",
    icon: "badge-check",
  },
  {
    titulo: "Formato presencial u online",
    texto:
      "Puedes realizar el seguimiento en clínica o a distancia según lo que mejor te venga.",
    icon: "monitor-smartphone",
  },
];

export const pasosProcesoNutricion: PasoNutricion[] = [
  {
    titulo: "Valoración inicial",
    texto:
      "Hablamos de tus hábitos, tu objetivo, tu historial y el contexto real en el que comes cada día.",
  },
  {
    titulo: "Diseño del plan",
    texto:
      "Preparamos una pauta personalizada con recomendaciones prácticas, estructura y objetivos claros.",
  },
  {
    titulo: "Aplicación a tu rutina",
    texto:
      "Adaptamos la estrategia a tus horarios, gustos, nivel de actividad y necesidades para que sea sostenible.",
  },
  {
    titulo: "Seguimiento y ajustes",
    texto:
      "Revisamos evolución, resolvemos dudas y hacemos cambios cuando hace falta para seguir avanzando.",
  },
];

export const faqNutricion: FaqNutricion[] = [
  {
    pregunta: "¿Necesito ir a nutrición solo si quiero perder peso?",
    respuesta:
      "No. La nutrición también puede ayudarte a mejorar hábitos, ganar masa muscular, rendir mejor en el deporte, cuidar tu salud digestiva o aprender a comer de forma más equilibrada y sostenible.",
  },
  {
    pregunta: "¿La primera consulta incluye valoración?",
    respuesta:
      "Sí. En la primera consulta valoramos tu situación actual, tus objetivos, tus hábitos y el contexto en el que comes para poder plantear una estrategia nutricional ajustada a ti.",
  },
  {
    pregunta: "¿Trabajáis nutrición deportiva?",
    respuesta:
      "Sí. Adaptamos la alimentación a tu nivel de entrenamiento, objetivos de rendimiento, recuperación y composición corporal para que la nutrición apoye de verdad tu práctica deportiva.",
  },
  {
    pregunta: "¿Las pautas son muy restrictivas?",
    respuesta:
      "No buscamos dietas imposibles ni cambios extremos. Trabajamos con pautas realistas, sostenibles y adaptadas a tu día a día para que puedas mantener resultados en el tiempo.",
  },
  {
    pregunta: "¿Puedo hacer el seguimiento de forma online?",
    respuesta:
      "Sí. También ofrecemos consultas online para que puedas hacer seguimiento nutricional si te resulta más cómodo o no puedes desplazarte al centro.",
  },
];
