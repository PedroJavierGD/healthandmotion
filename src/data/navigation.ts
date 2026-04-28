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
  { label: "Nutrición", href: "/nutricionista-en-sanlucar-de-barrameda" },
  { label: "Psicología", href: "/psicologa-en-sanlucar-de-barrameda" },
  { label: "Estética", href: "/esteticista-en-sanlucar-de-barrameda" }
];

export const mainNavItems: NavItem[] = [
  ...serviceNavItems,
  { label: "Blog", href: "/blog" }
];
