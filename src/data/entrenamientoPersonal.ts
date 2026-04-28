export type ProgramaEntrenamientoIcon =
  | "heart-handshake"
  | "users"
  | "target"
  | "dumbbell";

export type VentajaEntrenamientoIcon =
  | "heart-handshake"
  | "users"
  | "target"
  | "badge-check";

export interface ProgramaEntrenamiento {
  slug: string;
  nombre: string;
  precio: string;
  duracion: string;
  frecuencia: string;
  descripcion: string;
  icon: ProgramaEntrenamientoIcon;
  featured?: boolean;
}

export interface VentajaEntrenamiento {
  titulo: string;
  texto: string;
  icon: VentajaEntrenamientoIcon;
}

export interface PasoEntrenamiento {
  titulo: string;
  texto: string;
}

export interface FaqEntrenamiento {
  pregunta: string;
  respuesta: string;
}

export const estadisticasHeroEntrenamiento = [
  { value: "4", label: "Programas específicos" },
  { value: "2", label: "Días por semana" },
  { value: "1", label: "Equipo para orientarte" },
];

export const programasEntrenamiento: ProgramaEntrenamiento[] = [
  {
    slug: "taller-de-embarazo",
    nombre: "Taller de embarazo",
    precio: "75€ mensuales",
    duracion: "1 hora y media",
    frecuencia: "2 días en semana",
    descripcion:
      "Entrenamiento adaptado al embarazo para mejorar movilidad, fuerza, control postural y preparación física de cara al parto.",
    icon: "heart-handshake",
  },
  {
    slug: "taller-post-parto",
    nombre: "Taller post parto",
    precio: "75€ mensuales",
    duracion: "1 hora y media",
    frecuencia: "2 días en semana",
    descripcion:
      "Trabajo guiado para recuperar suelo pélvico, abdomen, postura y condición física tras el embarazo con supervisión profesional.",
    icon: "users",
  },
  {
    slug: "escuela-de-espalda",
    nombre: "Escuela de espalda",
    precio: "75€ mensuales",
    duracion: "1 hora y media",
    frecuencia: "2 días en semana",
    descripcion:
      "Sesiones enfocadas en prevenir y aliviar dolor de espalda, mejorar la movilidad y reforzar la musculatura que protege tu columna.",
    icon: "target",
  },
  {
    slug: "grupo-de-rehabilitacion",
    nombre: "Grupo de rehabilitación",
    precio: "166€ bono de 20 sesiones",
    duracion: "Sesiones supervisadas",
    frecuencia: "2 días en semana",
    descripcion:
      "Programa de readaptación para personas que necesitan recuperar función, fuerza y confianza después de una lesión o proceso clínico.",
    icon: "dumbbell",
    featured: true,
  },
];

export const opcionesProgramaEntrenamiento = [
  ...programasEntrenamiento.map(({ slug, nombre }) => ({
    value: slug,
    label: nombre,
  })),
  {
    value: "asesoramiento",
    label: "No lo tengo claro, quiero asesoramiento",
  },
];

export const razonesEntrenamiento = [
  "Valoramos tu caso y te orientamos al grupo adecuado",
  "Entrenamiento adaptado a patología, etapa vital u objetivo",
  "Acompañamiento por profesionales de la clínica",
  "Seguimiento cercano en grupos reducidos",
];

export const ventajasEntrenamiento: VentajaEntrenamiento[] = [
  {
    titulo: "Acompañamiento real",
    texto:
      "Resolvemos tus dudas antes de empezar y te orientamos según tu momento y necesidad.",
    icon: "heart-handshake",
  },
  {
    titulo: "Grupos específicos",
    texto:
      "Cada sección tiene su lógica propia para que el trabajo sea útil, asumible y progresivo.",
    icon: "users",
  },
  {
    titulo: "Objetivo claro",
    texto:
      "Mejorar dolor, recuperar función, prepararte para el parto o volver a entrenar con confianza.",
    icon: "target",
  },
  {
    titulo: "Información clara",
    texto:
      "Te explicamos precio, frecuencia y disponibilidad para que puedas decidir con todos los datos.",
    icon: "badge-check",
  },
];

export const pasosProcesoEntrenamiento: PasoEntrenamiento[] = [
  {
    titulo: "Cuéntanos tu caso",
    texto: "Déjanos tus datos y dinos qué taller o grupo te interesa.",
  },
  {
    titulo: "Te llamamos",
    texto: "Resolvemos dudas, precios y disponibilidad sin compromiso.",
  },
  {
    titulo: "Te incorporas",
    texto: "Te asignamos el grupo que mejor encaja contigo y empezamos.",
  },
];

export const faqEntrenamiento: FaqEntrenamiento[] = [
  {
    pregunta: "¿Necesito estar en forma para empezar con entrenamiento personal?",
    respuesta:
      "No. De hecho, muchas personas empiezan precisamente porque no se sienten en forma, llevan tiempo sin entrenar o no saben por dónde comenzar.\n\nEl entrenamiento personal se adapta a tu nivel actual, a tu condición física y a tus objetivos. No se trata de exigirte desde el primer día, sino de ayudarte a avanzar con seguridad, técnica y constancia.\n\nEl objetivo es que empieces donde estás ahora y vayas mejorando paso a paso.",
  },
  {
    pregunta: "¿Qué pasa si nunca he entrenado antes?",
    respuesta:
      "No pasa nada. No necesitas experiencia previa para empezar.\n\nEn las primeras sesiones te enseñaremos cómo moverte, cómo hacer los ejercicios correctamente y qué intensidad es adecuada para ti. Así evitarás entrenar por tu cuenta sin saber si lo estás haciendo bien o si puedes lesionarte.\n\nNuestro trabajo es acompañarte, corregirte y ayudarte a ganar confianza desde el primer día.",
  },
  {
    pregunta:
      "¿Los entrenamientos se adaptan si tengo dolores, lesiones o molestias?",
    respuesta:
      "Sí. Antes de empezar, valoramos tu situación para adaptar el entrenamiento a tus necesidades.\n\nSi tienes molestias de espalda, rodilla, cuello, hombro o vienes de una lesión, ajustaremos los ejercicios para que puedas entrenar de forma segura y progresiva.\n\nLa idea no es forzar tu cuerpo, sino ayudarte a moverte mejor, ganar fuerza y mejorar tu calidad de vida sin poner en riesgo tu salud.",
  },
  {
    pregunta:
      "¿Cuántos días a la semana necesito entrenar para notar resultados?",
    respuesta:
      "Depende de tu objetivo, tu punto de partida y tu disponibilidad, pero no necesitas entrenar todos los días para empezar a mejorar.\n\nCon 2 o 3 sesiones semanales bien planificadas ya puedes notar avances en fuerza, energía, movilidad y condición física. Lo importante no es entrenar muchísimo durante dos semanas, sino mantener una rutina que puedas sostener en el tiempo.\n\nLa constancia gana a la intensidad sin cabeza.",
  },
  {
    pregunta: "¿Cuándo empezaré a notar cambios?",
    respuesta:
      "Los primeros cambios suelen notarse en pocas semanas, sobre todo en energía, movilidad, fuerza y sensación de bienestar.\n\nLos cambios físicos, como pérdida de grasa, tonificación o mejora de la composición corporal, dependen de varios factores: entrenamiento, alimentación, descanso, constancia y punto de partida.\n\nNo prometemos resultados milagro. Trabajamos para que consigas cambios reales, seguros y sostenibles.",
  },
  {
    pregunta:
      "¿Qué diferencia hay entre entrenar por mi cuenta y hacerlo con un entrenador personal?",
    respuesta:
      "La diferencia está en que no entrenas a ciegas.\n\nCon un entrenador personal tienes una planificación adaptada a ti, corrección de técnica, control de la intensidad y seguimiento de tu evolución. Esto te ayuda a entrenar mejor, evitar errores, reducir el riesgo de lesión y mantener la constancia.\n\nEntrenar por tu cuenta puede funcionar, pero si no sabes qué hacer, cómo hacerlo o cómo progresar, es fácil estancarse o abandonar.",
  },
  {
    pregunta: "¿Puedo entrenar si tengo poco tiempo?",
    respuesta:
      "Sí. De hecho, el entrenamiento personal es ideal si tienes poco tiempo, porque cada sesión está pensada para aprovecharla al máximo.\n\nNo necesitas pasar horas entrenando. Con una buena planificación, podemos trabajar fuerza, movilidad, resistencia y salud de forma eficiente.\n\nAdaptamos el entrenamiento a tu vida real, no a una rutina imposible que acabes dejando a las dos semanas.",
  },
  {
    pregunta:
      "¿Qué pasa si me da vergüenza entrenar delante de otras personas?",
    respuesta:
      "Es más común de lo que parece. Muchas personas sienten inseguridad al empezar porque creen que no están en forma, que no sabrán hacer los ejercicios o que los demás van a mirarles.\n\nAquí no vienes a ser juzgado. Vienes a mejorar.\n\nTe acompañamos desde tu nivel, con un trato cercano y respetuoso, para que ganes confianza poco a poco y te sientas cómodo durante todo el proceso.",
  },
  {
    pregunta:
      "¿Puedo empezar aunque tenga sobrepeso o lleve años sin entrenar?",
    respuesta:
      "Sí. Puedes empezar aunque tengas sobrepeso, lleves años sin entrenar o sientas que tu forma física está muy lejos de donde te gustaría estar.\n\nPrecisamente en esos casos es donde más importante es entrenar con una planificación adaptada, progresiva y segura.\n\nNo buscamos que hagas de golpe todo lo que no has hecho en años. Buscamos ayudarte a recuperar movilidad, fuerza, energía y confianza paso a paso.",
  },
  {
    pregunta: "¿Cómo puedo empezar con el entrenamiento personal?",
    respuesta:
      "El primer paso es ponerte en contacto con nosotros para conocer tu caso, tus objetivos y tu situación actual.\n\nA partir de ahí, te orientaremos sobre la mejor forma de empezar según tu nivel, disponibilidad y necesidades.\n\nPuedes escribirnos, llamarnos o rellenar el formulario de contacto. Te ayudaremos a dar el primer paso de forma sencilla, sin compromiso y sin complicaciones.",
  },
];
