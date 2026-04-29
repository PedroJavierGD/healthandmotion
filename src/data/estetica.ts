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
    pregunta: "¿Qué tratamiento estético necesito si no sé por dónde empezar?",
    respuesta:
      "No te preocupes, es algo muy habitual. Muchas personas saben que quieren mejorar su piel, verse mejor o cuidar su imagen, pero no tienen claro qué tratamiento necesitan.\n\nPor eso, antes de recomendarte nada, valoramos tu caso, tu tipo de piel, tus objetivos y aquello que te gustaría mejorar. A partir de ahí, te orientamos sobre el tratamiento más adecuado para ti.\n\nLa idea no es que elijas a ciegas, sino que tomes una decisión segura y acompañada por profesionales.",
  },
  {
    pregunta:
      "¿Los tratamientos son personalizados según mi piel y mis objetivos?",
    respuesta:
      "Sí. Cada piel es diferente y cada persona tiene unas necesidades concretas.\n\nNo trabajamos con tratamientos genéricos, sino con recomendaciones adaptadas a tu piel, tu edad, tu estilo de vida y el resultado que quieres conseguir.\n\nAntes de empezar, analizamos tu caso para proponerte la opción más adecuada, siempre buscando resultados naturales, seguros y acordes a ti.",
  },
  {
    pregunta: "¿El tratamiento duele?",
    respuesta:
      "Depende del tipo de tratamiento, pero en la mayoría de los casos las molestias son leves y totalmente llevaderas.\n\nAntes de comenzar, te explicamos cómo será el proceso, qué sensaciones puedes notar y qué debes tener en cuenta. Nuestro objetivo es que te sientas cómoda, tranquila y segura durante toda la sesión.\n\nSi tienes especial sensibilidad o miedo al dolor, también lo tendremos en cuenta para adaptar el tratamiento lo máximo posible.",
  },
  {
    pregunta: "¿Cuándo empezaré a ver resultados?",
    respuesta:
      "Depende del tratamiento y del estado inicial de tu piel, pero algunos resultados pueden apreciarse desde la primera sesión, especialmente en tratamientos de limpieza, hidratación, luminosidad o cuidado facial.\n\nEn otros casos, como tratamientos más progresivos, los resultados se van notando con el paso de las sesiones.\n\nSiempre te explicaremos qué puedes esperar, en qué plazos y cuántas sesiones pueden ser necesarias para conseguir un resultado realista y natural.",
  },
  {
    pregunta: "¿Cuántas sesiones necesito para notar resultados?",
    respuesta:
      "El número de sesiones depende del tratamiento, de tu piel y del objetivo que quieras conseguir.\n\nHay tratamientos que pueden ofrecer una mejora visible desde la primera sesión, mientras que otros necesitan varias sesiones para conseguir un resultado más completo y duradero.\n\nDurante la valoración inicial te indicaremos una recomendación personalizada, para que sepas desde el principio qué proceso seguir y qué expectativas tener.",
  },
  {
    pregunta: "¿Los resultados son naturales?",
    respuesta:
      "Sí. Nuestro objetivo no es cambiar tu rostro ni hacer que parezcas otra persona, sino ayudarte a verte mejor manteniendo tu esencia.\n\nBuscamos resultados cuidados, favorecedores y naturales, evitando efectos artificiales o exagerados.\n\nLa estética bien trabajada no debería hacerte sentir rara, sino más segura, más luminosa y más cómoda con tu imagen.",
  },
  {
    pregunta: "¿Qué pasa si tengo la piel sensible?",
    respuesta:
      "Si tienes la piel sensible, reactiva, con rojeces o tendencia a irritarse, es importante elegir bien el tratamiento.\n\nPor eso, antes de comenzar valoramos el estado de tu piel y adaptamos el protocolo para evitar molestias innecesarias.\n\nTambién te indicaremos qué cuidados seguir antes y después del tratamiento para proteger tu piel y conseguir el mejor resultado posible.",
  },
  {
    pregunta: "¿Puedo volver a mi rutina después del tratamiento?",
    respuesta:
      "En muchos tratamientos sí puedes volver a tu rutina con normalidad el mismo día.\n\nAun así, dependerá del tipo de tratamiento realizado. Algunos pueden dejar una ligera rojez, sensibilidad o sensación de calor durante unas horas, mientras que otros requieren evitar el sol, el maquillaje o el ejercicio intenso durante un tiempo.\n\nAntes de irte, te explicaremos claramente qué puedes hacer y qué debes evitar para cuidar tu piel correctamente.",
  },
  {
    pregunta: "¿Qué cuidados debo seguir después de un tratamiento estético?",
    respuesta:
      "Después de un tratamiento estético es importante seguir unas pautas básicas para proteger la piel y potenciar los resultados.\n\nSegún el tratamiento, puede ser recomendable evitar el sol, usar protección solar, hidratar bien la piel, no aplicar ciertos productos durante unas horas o evitar exfoliaciones agresivas.\n\nNo te irás con dudas: te explicaremos los cuidados posteriores de forma sencilla para que sepas exactamente cómo cuidar tu piel en casa.",
  },
  {
    pregunta: "¿Cómo puedo pedir una valoración estética?",
    respuesta:
      "Puedes ponerte en contacto con nosotros por teléfono, WhatsApp o a través del formulario de la web.\n\nEn esa primera toma de contacto hablaremos contigo para conocer qué te preocupa, qué te gustaría mejorar y qué tipo de resultado buscas.\n\nA partir de ahí, te orientaremos sobre el tratamiento más adecuado para tu caso y resolveremos cualquier duda antes de empezar.",
  },
];
