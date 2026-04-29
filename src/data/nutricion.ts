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
    pregunta: "¿Necesito hacer dieta estricta para conseguir resultados?",
    respuesta:
      "No. Para conseguir resultados no necesitas vivir con una dieta estricta, pasar hambre ni eliminar todos los alimentos que te gustan.\n\nUn buen plan nutricional debe adaptarse a ti, a tu rutina, a tus gustos y a tu objetivo. La clave no está en hacer una dieta perfecta durante dos semanas, sino en crear una forma de comer que puedas mantener en el tiempo.\n\nTrabajaremos para que mejores tu alimentación de manera realista, sin prohibiciones innecesarias y sin que sientas que estás castigándote.",
  },
  {
    pregunta: "¿Voy a pasar hambre con el plan nutricional?",
    respuesta:
      "No deberías pasar hambre. Un plan de nutrición bien planteado debe ayudarte a sentirte saciado, con energía y con una buena relación con la comida.\n\nSi pasas hambre constantemente, es mucho más difícil mantener el proceso y acabarás abandonando tarde o temprano.\n\nPor eso, adaptamos el plan a tus necesidades, horarios, preferencias y estilo de vida, buscando que puedas avanzar hacia tu objetivo sin sufrir cada comida.",
  },
  {
    pregunta:
      "¿Puedo perder peso sin dejar de comer pan, pasta o alimentos que me gustan?",
    respuesta:
      "Sí. Perder peso no significa eliminar por completo el pan, la pasta, el arroz o cualquier alimento que disfrutes.\n\nLo importante es aprender a organizar mejor tus comidas, ajustar cantidades, mejorar la calidad de tu alimentación y encontrar un equilibrio que puedas mantener.\n\nNo se trata de prohibir, sino de enseñarte a comer de forma más consciente y adaptada a tu objetivo.",
  },
  {
    pregunta:
      "¿Qué pasa si ya he probado muchas dietas y ninguna me ha funcionado?",
    respuesta:
      "Es algo muy habitual. Muchas personas llegan después de haber probado varias dietas, haber perdido peso durante un tiempo y haberlo recuperado después.\n\nEl problema muchas veces no eres tú, sino el enfoque: dietas demasiado restrictivas, poco realistas o que no se adaptan a tu vida.\n\nNuestro objetivo es ayudarte a construir hábitos sostenibles, entender qué está fallando y crear un plan que puedas seguir sin sentir que estás empezando otra dieta más.",
  },
  {
    pregunta: "¿El plan de nutrición será personalizado para mí?",
    respuesta:
      "Sí. Cada persona tiene una rutina, unos gustos, un objetivo y unas necesidades diferentes.\n\nPor eso, el plan se adapta a ti: a tus horarios, tus preferencias, tu actividad física, tu estado de salud y tu relación actual con la comida.\n\nNo trabajamos con dietas genéricas. La idea es que tengas una guía clara, realista y pensada para tu caso concreto.",
  },
  {
    pregunta: "¿Cuánto tiempo tardaré en ver resultados?",
    respuesta:
      "Depende de tu objetivo, tu punto de partida, tu constancia y tu estilo de vida.\n\nAlgunas personas empiezan a notar cambios en pocas semanas, como menos hinchazón, más energía, mejores digestiones o una mejor sensación de control con la comida.\n\nLos cambios físicos más visibles requieren algo más de tiempo, pero el objetivo no es conseguir resultados rápidos y temporales, sino cambios reales que puedas mantener.",
  },
  {
    pregunta: "¿Me ayudarás si tengo ansiedad por la comida o como por estrés?",
    respuesta:
      "Sí. Muchas veces el problema no es solo qué comes, sino cuándo, por qué y cómo te relacionas con la comida.\n\nSi comes por ansiedad, estrés, aburrimiento o sensación de descontrol, trabajaremos para entender qué está pasando y buscar estrategias que te ayuden en tu día a día.\n\nNo se trata de juzgarte ni de prohibirte alimentos, sino de darte herramientas para recuperar el control de una forma más tranquila y sostenible.",
  },
  {
    pregunta: "¿Puedo seguir saliendo a comer fuera o tener vida social?",
    respuesta:
      "Sí. Un plan nutricional no debería aislarte ni impedirte disfrutar de tu vida social.\n\nAprenderás a tomar mejores decisiones cuando comas fuera, a organizarte mejor y a encontrar equilibrio sin sentir que “lo has estropeado todo” por una comida diferente.\n\nLa nutrición debe formar parte de tu vida, no convertirse en una cárcel.",
  },
  {
    pregunta:
      "¿Qué diferencia hay entre ir a un nutricionista y seguir una dieta de internet?",
    respuesta:
      "Una dieta de internet no conoce tu cuerpo, tus horarios, tus gustos, tu salud ni tu relación con la comida.\n\nCon un nutricionista tienes un plan adaptado a ti, seguimiento, ajustes según tu evolución y una estrategia pensada para tu objetivo real.\n\nAdemás, no solo recibirás una pauta de comidas: aprenderás a entender mejor tu alimentación para poder mantener los resultados a largo plazo.",
  },
  {
    pregunta: "¿Cómo puedo pedir una cita con el nutricionista?",
    respuesta:
      "Puedes pedir tu cita llamándonos, escribiéndonos por WhatsApp o rellenando el formulario de contacto de la web.\n\nEn esa primera toma de contacto conoceremos tu situación, tus objetivos y aquello que te gustaría mejorar.\n\nA partir de ahí, te orientaremos sobre el mejor camino para empezar y resolveremos tus dudas antes de comenzar el proceso.",
  },
];
