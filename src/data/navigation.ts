export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

export const serviceNavItems: NavChildItem[] = [
  { label: "Entrenamiento personal", href: "/entrenamiento-personal-en-sanlucar" },
  { label: "Fisioterapia", href: "/clinica-de-fisioterapia-en-sanlucar-de-barrameda" },
  { label: "Nutrición", href: "/#servicios" },
  { label: "Psicología", href: "/#servicios" },
  { label: "Estética", href: "/#servicios" }
];

export const mainNavItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios", children: serviceNavItems },
  { label: "Conócenos", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Blog", href: "/blog" }
];
