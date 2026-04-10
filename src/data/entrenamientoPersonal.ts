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
    titulo: "Más conversión",
    texto:
      "La página presenta precio, frecuencia y propuesta concreta para facilitar el contacto de quien ya está interesado.",
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
    pregunta: "¿Cuál es el precio de cada programa?",
    respuesta:
      "Taller de embarazo, taller post parto y escuela de espalda cuestan 75€ al mes. El grupo de rehabilitación funciona con bono de 20 sesiones por 166€.",
  },
  {
    pregunta: "¿Cuántos días se entrena?",
    respuesta:
      "Todos los programas indicados trabajan dos días por semana. Los talleres mensuales duran 1 hora y media por sesión.",
  },
  {
    pregunta: "¿Puedo preguntar antes de apuntarme?",
    respuesta:
      "Sí. Esta página está pensada precisamente para que nos pidas información, disponibilidad o precio antes de decidir.",
  },
  {
    pregunta: "¿Qué programa me conviene si tengo dolor o vengo de lesión?",
    respuesta:
      "Si hay una lesión, limitación funcional o un proceso de recuperación, lo habitual es valorar si encajas mejor en escuela de espalda o en grupo de rehabilitación.",
  },
];
