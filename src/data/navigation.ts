export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const serviceNavItems: NavChildItem[] = [
  { label: "Fisioterapia", href: "/clinica-de-fisioterapia-en-sanlucar-de-barrameda" },
  { label: "Entrenamiento personal", href: "/entrenamiento-personal-en-sanlucar" },
  { label: "Nutrición", href: "/#servicios" },
  { label: "Psicología", href: "/#servicios" },
  { label: "Estética", href: "/#servicios" }
];

export const mainNavItems: NavItem[] = [
  ...serviceNavItems,
  { label: "Equipo", href: "/#nosotros" },
  { label: "Blog", href: "/blog" }
];
