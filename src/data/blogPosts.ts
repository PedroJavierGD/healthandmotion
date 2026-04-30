import imagenEstetica from "../assets/images/estetica/centro-estetica-sanlucar-barrameda.webp";
import imagenEntrenamiento from "../assets/images/entrenamiento-personal-sanlucar-barrameda.webp";
import imagenNutricion from "../assets/images/nutricionista-sanlucar-barrameda.webp";
import imagenPsicologia from "../assets/images/psicologa-sanlucar-barrameda.webp";
import imagenFisioterapia from "../assets/images/tratamiento-fisioterapia-sanlucar-barrameda.webp";

export interface BlogSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  coverImage: string | { src: string };
  coverAlt: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  intro: string;
  highlights: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuando-ir-a-fisioterapia-por-dolor-de-espalda",
    title: "Cuándo acudir a fisioterapia si el dolor de espalda no te deja tranquilo",
    excerpt:
      "Hay molestias de espalda que mejoran solas, pero otras te están avisando de que toca valorar qué está pasando y empezar tratamiento.",
    publishedAt: "2026-04-10",
    readTime: "4 min",
    category: "Fisioterapia",
    coverImage: imagenFisioterapia,
    coverAlt: "Sesión de fisioterapia para dolor de espalda en Health and Motion",
    ctaLabel: "Ver fisioterapia",
    ctaHref: "/clinica-de-fisioterapia-en-sanlucar-de-barrameda",
    secondaryCtaLabel: "Pedir cita por WhatsApp",
    secondaryCtaHref:
      "https://wa.me/34722664982?text=%C2%A1Hola%20Health%26Motion%21%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20fisioterapia%20y%20me%20gustar%C3%ADa%20pedir%20cita%20%3A%29",
    intro:
      "No todo dolor de espalda requiere el mismo abordaje. A veces se trata de una sobrecarga puntual, pero en otras ocasiones la molestia se mantiene, limita tu rutina y empieza a afectar a cómo te mueves, trabajas o descansas.",
    highlights: [
      "Si el dolor dura varios días y no mejora, conviene valorar qué lo está manteniendo.",
      "La limitación al moverte, al sentarte o al dormir es una señal clara para pedir ayuda.",
      "Cuanto antes entiendas el origen de la molestia, más fácil es tratarla con criterio.",
    ],
    sections: [
      {
        title: "No normalices el dolor cuando ya está interfiriendo en tu día",
        paragraphs: [
          "Muchas personas aguantan molestias lumbares, cervicales o dorsales durante semanas porque piensan que es algo normal por el trabajo, el estrés o la postura. El problema es que, mientras tanto, cambian su forma de moverse y muchas veces terminan empeorando la situación.",
          "Cuando una molestia te obliga a evitar gestos cotidianos o te hace sentir rigidez continua, deja de ser una simple incomodidad y merece una valoración profesional.",
        ],
      },
      {
        title: "Señales frecuentes de que conviene pedir cita",
        paragraphs: [
          "No hace falta esperar a estar completamente bloqueado para acudir a fisioterapia. De hecho, es preferible actuar antes de que el dolor se cronifique o te obligue a parar del todo.",
        ],
        bullets: [
          "Dolor que se repite cada semana o cada vez que haces el mismo gesto.",
          "Rigidez al levantarte o al pasar mucho tiempo sentado.",
          "Molestias que bajan hacia glúteo, hombro o pierna.",
          "Sensación de carga constante tras entrenar o trabajar.",
        ],
      },
      {
        title: "Qué puedes esperar en una primera sesión",
        paragraphs: [
          "Una buena primera sesión no consiste solo en tratar la zona que duele. También sirve para entender el contexto: cuándo empezó, qué lo agrava, qué alivio has notado y qué limitaciones tienes ahora mismo.",
          "Con esa información se decide el tratamiento y, sobre todo, qué pasos seguir para que recuperes movilidad y seguridad al moverte.",
        ],
      },
    ],
  },
  {
    slug: "como-empezar-entrenamiento-personal-sin-lesionarte",
    title: "Cómo empezar entrenamiento personal si llevas tiempo sin hacer ejercicio",
    excerpt:
      "Volver a entrenar no debería consistir en castigarte la primera semana. La clave está en empezar con una estructura que tu cuerpo pueda sostener.",
    publishedAt: "2026-04-07",
    readTime: "4 min",
    category: "Entrenamiento personal",
    coverImage: imagenEntrenamiento,
    coverAlt: "Entrenamiento personal guiado en Health and Motion",
    ctaLabel: "Ver entrenamiento personal",
    ctaHref: "/entrenamiento-personal-en-sanlucar",
    secondaryCtaLabel: "Pedir información",
    secondaryCtaHref:
      "https://wa.me/34722664982?text=%C2%A1Hola%20Health%26Motion%21%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20entrenamiento%20personal%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20%3A%29",
    intro:
      "Empezar a entrenar después de mucho tiempo parado genera dudas muy normales: por dónde empiezo, cuánto aguanto, si me voy a lesionar o si seré capaz de mantenerlo más de dos semanas.",
    highlights: [
      "No necesitas entrenar fuerte al principio; necesitas entrenar con sentido.",
      "La progresión importa más que la motivación del primer día.",
      "Un plan guiado te ayuda a ganar seguridad y constancia desde el inicio.",
    ],
    sections: [
      {
        title: "El error más común es querer recuperar el tiempo perdido en una semana",
        paragraphs: [
          "Cuando vienes con ganas, es fácil pensar que cuanto más hagas, mejor. Pero si llevas meses o años sin entrenar, tu cuerpo necesita readaptarse poco a poco.",
          "El exceso de intensidad al inicio suele traducirse en agujetas que te frenan, molestias articulares o sensación de frustración por no poder seguir el ritmo que imaginabas.",
        ],
      },
      {
        title: "Qué debería incluir un buen comienzo",
        paragraphs: [
          "Un inicio bien planteado tiene en cuenta tu nivel actual, tu historial de molestias, tu objetivo y el tiempo real que puedes dedicarle al entrenamiento.",
        ],
        bullets: [
          "Ejercicios básicos que te enseñen a moverte mejor.",
          "Carga progresiva y asumible desde las primeras semanas.",
          "Trabajo de fuerza, movilidad y control, no solo cansancio.",
          "Seguimiento para ajustar si algo molesta o se queda corto.",
        ],
      },
      {
        title: "Por qué el entrenamiento personal ayuda tanto al principio",
        paragraphs: [
          "Cuando alguien te guía, corrige y adapta el plan según cómo respondes, te resulta mucho más fácil mantener el hábito. No solo porque entrenas mejor, sino porque entiendes qué estás haciendo y por qué.",
          "Eso acorta errores, reduce miedo a lesionarte y hace que el proceso tenga más continuidad.",
        ],
      },
    ],
  },
  {
    slug: "como-mejorar-tu-alimentacion-sin-dietas-imposibles",
    title: "Cómo mejorar tu alimentación sin caer en dietas imposibles de mantener",
    excerpt:
      "Comer mejor no debería sentirse como entrar en una cárcel. Un plan nutricional útil es el que puedes aplicar en tu rutina real.",
    publishedAt: "2026-04-04",
    readTime: "5 min",
    category: "Nutrición",
    coverImage: imagenNutricion,
    coverAlt: "Consulta de nutrición personalizada en Health and Motion",
    ctaLabel: "Ver nutrición",
    ctaHref: "/nutricionista-en-sanlucar-de-barrameda",
    secondaryCtaLabel: "Pedir cita con nutrición",
    secondaryCtaHref:
      "https://wa.me/34722664982?text=%C2%A1Hola%20Health%26Motion%21%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20nutrici%C3%B3n%20y%20me%20gustar%C3%ADa%20pedir%20una%20consulta%20%3A%29",
    intro:
      "Si cada intento por comer mejor empieza con muchas normas y termina abandonado a los pocos días, el problema no suele ser tu falta de voluntad. Suele ser que la estrategia no encaja con tu vida real.",
    highlights: [
      "Una pauta útil se adapta a tu horario, tus gustos y tu contexto.",
      "Mejorar hábitos tiene más impacto que hacer una dieta extrema dos semanas.",
      "Comer mejor también implica entender mejor tu relación con la comida.",
    ],
    sections: [
      {
        title: "El plan perfecto sobre el papel no siempre funciona en el día a día",
        paragraphs: [
          "Muchas dietas fallan porque parten de un escenario ideal: tiempo para cocinar, horarios estables, cero estrés y capacidad de organizar cada comida al detalle.",
          "Pero la mayoría de personas viven justo lo contrario. Por eso, si la pauta no contempla tu realidad, es normal que no dure.",
        ],
      },
      {
        title: "Cambios pequeños, pero sostenibles",
        paragraphs: [
          "No hace falta cambiarlo todo a la vez para notar mejora. De hecho, empezar por pocos ajustes claros suele dar mejores resultados que intentar hacerlo perfecto desde mañana.",
        ],
        bullets: [
          "Organizar mejor desayunos o meriendas si llegas con demasiada hambre.",
          "Aprender a montar platos más completos sin complicarte.",
          "Tener opciones rápidas para los días con menos tiempo.",
          "Detectar momentos de picoteo o comida emocional sin culparte.",
        ],
      },
      {
        title: "Por qué la educación alimentaria marca la diferencia",
        paragraphs: [
          "Cuando entiendes qué te está funcionando y qué no, dejas de depender tanto de una hoja cerrada. Eso te permite tomar mejores decisiones incluso cuando cambian tus horarios, tus planes o tu semana.",
          "Ese aprendizaje es lo que hace que la mejora dure y no se quede solo en un intento más.",
        ],
      },
    ],
  },
  {
    slug: "senales-de-que-podrias-necesitar-apoyo-psicologico",
    title: "Señales de que quizá necesitas apoyo psicológico aunque te cueste admitirlo",
    excerpt:
      "No hace falta tocar fondo para pedir ayuda. A veces lo que más pesa no es lo que pasa fuera, sino cómo lo estás sosteniendo por dentro.",
    publishedAt: "2026-04-01",
    readTime: "5 min",
    category: "Psicología",
    coverImage: imagenPsicologia,
    coverAlt: "Consulta de psicología en Health and Motion",
    ctaLabel: "Ver psicología",
    ctaHref: "/psicologa-en-sanlucar-de-barrameda",
    secondaryCtaLabel: "Solicitar cita",
    secondaryCtaHref:
      "https://wa.me/34722664982?text=%C2%A1Hola%20Health%26Motion%21%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20psicolog%C3%ADa%20y%20me%20gustar%C3%ADa%20pedir%20una%20cita%20%3A%29",
    intro:
      "Pedir ayuda psicológica sigue costando mucho a muchas personas. A veces porque minimizan lo que les pasa, otras porque creen que todavía no están tan mal como para dar ese paso.",
    highlights: [
      "No hace falta esperar a una crisis grande para empezar terapia.",
      "Sentirte desbordado, bloqueado o agotado emocionalmente ya es motivo suficiente para parar y mirar.",
      "La terapia también sirve para entenderte mejor y prevenir que el malestar vaya a más.",
    ],
    sections: [
      {
        title: "El malestar no siempre se ve desde fuera",
        paragraphs: [
          "Puedes seguir trabajando, cuidando de los demás y cumpliendo con todo mientras por dentro sientes ansiedad, irritabilidad, tristeza o una sensación constante de no poder más.",
          "Muchas veces el problema no es que no puedas con tu vida, sino que la estás sosteniendo con muchísimo desgaste.",
        ],
      },
      {
        title: "Algunas señales frecuentes que suelen pasarse por alto",
        paragraphs: [
          "Hay indicadores muy comunes que no siempre se identifican como algo que merezca atención psicológica, pero que conviene escuchar.",
        ],
        bullets: [
          "Pensar demasiado en todo y no conseguir desconectar.",
          "Dormir peor, estar más irritable o sentirte sin energía.",
          "Notar que una situación te supera más de lo normal.",
          "Llevar tiempo con el mismo problema y no saber cómo salir de ahí.",
        ],
      },
      {
        title: "Empezar terapia no significa que hayas fallado",
        paragraphs: [
          "Al contrario. Pedir ayuda suele ser un gesto de responsabilidad contigo mismo. Significa reconocer que algo te está costando y que quizá necesitas herramientas nuevas para abordarlo.",
          "No se trata solo de sentirte mejor hoy, sino de entenderte mejor y ganar recursos para lo que venga después.",
        ],
      },
    ],
  },
  {
    slug: "como-elegir-un-tratamiento-facial-segun-tu-piel",
    title: "Cómo elegir un tratamiento facial según lo que notas en tu piel",
    excerpt:
      "No todas las pieles necesitan lo mismo. Elegir bien el tratamiento pasa por observar qué te pide la piel ahora, no por seguir modas.",
    publishedAt: "2026-03-28",
    readTime: "4 min",
    category: "Estética",
    coverImage: imagenEstetica,
    coverAlt: "Cabina de estética en Health and Motion",
    ctaLabel: "Ver estética",
    ctaHref: "/esteticista-en-sanlucar-de-barrameda",
    secondaryCtaLabel: "Pedir cita de estética",
    secondaryCtaHref:
      "https://wa.me/34722664982?text=%C2%A1Hola%20Health%26Motion%21%20He%20le%C3%ADdo%20vuestro%20art%C3%ADculo%20sobre%20est%C3%A9tica%20y%20me%20gustar%C3%ADa%20pedir%20una%20cita%20%3A%29",
    intro:
      "A veces la piel se nota apagada, otras veces más grasa, con textura irregular o con marcas que preocupan más de la cuenta. Elegir un tratamiento facial adecuado empieza por entender qué está pasando y qué quieres mejorar.",
    highlights: [
      "No todo tratamiento facial sirve para cualquier tipo de piel.",
      "La valoración previa ayuda a evitar sesiones que no te aportan lo que buscas.",
      "Constancia y cuidados bien pautados suelen dar mejores resultados que probar cosas al azar.",
    ],
    sections: [
      {
        title: "Escucha lo que tu piel te está mostrando",
        paragraphs: [
          "Sensación de tirantez, exceso de brillo, granitos recurrentes, poros visibles o falta de luminosidad son señales distintas y no deberían tratarse igual.",
          "Por eso tiene sentido partir de una valoración y no de una recomendación genérica vista en redes o repetida por todo el mundo.",
        ],
      },
      {
        title: "Qué se suele buscar con un tratamiento facial",
        paragraphs: [
          "En estética facial, muchas personas buscan limpiar, hidratar, iluminar o mejorar textura. Otras quieren cuidar manchas, marcas o mantener la piel mejor atendida con continuidad.",
        ],
        bullets: [
          "Higiene facial si notas acumulación de impurezas o piel congestionada.",
          "Tratamientos hidratantes o revitalizantes si notas la piel apagada.",
          "Sesiones orientadas a acné, textura o manchas si ese es tu foco principal.",
          "Mantenimiento periódico si quieres cuidar la piel de forma constante.",
        ],
      },
      {
        title: "La clave no es solo la sesión, sino el criterio",
        paragraphs: [
          "Un buen tratamiento no consiste en aplicar lo mismo a todo el mundo. Lo importante es ajustar la sesión a cómo está tu piel hoy y a cómo quieres verla en las próximas semanas.",
          "Eso hace que la experiencia sea más útil, más cómoda y con una lógica mucho más clara.",
        ],
      },
    ],
  },
  {
    slug: "que-servicio-necesitas-segun-tu-objetivo-de-salud",
    title: "Qué servicio puede ayudarte más según tu objetivo de salud y bienestar",
    excerpt:
      "A veces sabes lo que te preocupa, pero no qué profesional necesitas. Entender para qué sirve cada área te ayuda a empezar con más claridad.",
    publishedAt: "2026-03-24",
    readTime: "5 min",
    category: "Bienestar integral",
    coverImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Bienestar integral y trabajo multidisciplinar",
    ctaLabel: "Ver todos los servicios",
    ctaHref: "/#servicios",
    secondaryCtaLabel: "Llamar ahora",
    secondaryCtaHref: "tel:+34722664982",
    intro:
      "No siempre es fácil saber por dónde empezar. Hay personas que llegan pensando en el dolor, otras en el peso, otras en sentirse bloqueadas o en verse mejor, pero no tienen claro qué área del centro les ayudaría más.",
    highlights: [
      "Entender tu objetivo te ayuda a elegir mejor el primer paso.",
      "A veces una sola área es suficiente y otras conviene coordinar varias.",
      "Empezar con claridad evita perder tiempo y sentir que vas dando palos de ciego.",
    ],
    sections: [
      {
        title: "Si tu problema principal es el dolor o la limitación física",
        paragraphs: [
          "Cuando lo que más pesa es una lesión, una contractura que se repite, una molestia lumbar o la sensación de que tu cuerpo no responde bien, lo más lógico suele ser empezar por fisioterapia.",
          "La valoración te ayuda a entender qué está pasando y qué necesitas hacer para recuperar función y moverte con más seguridad.",
        ],
      },
      {
        title: "Si tu objetivo está en hábitos, rendimiento o composición corporal",
        paragraphs: [
          "Entrenamiento personal y nutrición suelen ser las áreas más indicadas cuando quieres mejorar forma física, recuperar tono, rendir mejor o reorganizar tu alimentación.",
          "En algunos casos, trabajar ambas de forma coordinada simplifica mucho el proceso y hace que los resultados tengan más coherencia.",
        ],
      },
      {
        title: "Si lo que más pesa es el bloqueo emocional o el autocuidado",
        paragraphs: [
          "Psicología puede ayudarte cuando el malestar emocional, la ansiedad o los conflictos internos están ocupando demasiado espacio. Estética, por su parte, suele responder mejor a objetivos de cuidado de la piel, imagen y bienestar personal.",
          "No compiten entre sí: son necesidades distintas y cada una tiene su lugar. Lo importante es identificar bien qué es lo que más te preocupa ahora.",
        ],
      },
    ],
  },
];

export const getSortedBlogPosts = () =>
  [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
