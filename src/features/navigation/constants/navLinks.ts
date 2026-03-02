export interface NavLink {
    name: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Espacios Embellecidos', href: '/#espacios' },
    { name: 'Franquicias', href: '/franquicias' },
    { name: 'Contacto', href: '/#contacto' },
];
