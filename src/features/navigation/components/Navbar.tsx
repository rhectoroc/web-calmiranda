import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Espacios Embellecidos', href: '#espacios' },
    { name: 'Franquicias', href: '#franquicias' },
    { name: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
    const isScrolled = useScroll(50);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#inicio" className="flex items-center gap-2 group">
                    <img
                        src="/logo.png"
                        alt="CalMiranda"
                        className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-sm lg:text-base transition-colors duration-300 hover:text-cal-emerald ${isScrolled ? 'text-cal-charcoal' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#productos"
                        className="px-6 py-2.5 rounded-full bg-cal-emerald text-white font-medium text-sm transition-all duration-300 hover:bg-cal-emerald-dark hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Ver Catálogo
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-cal-charcoal p-2 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <X size={24} className={isScrolled ? 'text-cal-charcoal' : 'text-white'} />
                    ) : (
                        <Menu size={24} className={isScrolled ? 'text-cal-charcoal' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glassmorphism border-t border-white/20 mt-3"
                    >
                        <nav className="flex flex-col container mx-auto px-4 py-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-medium text-cal-charcoal p-2 hover:bg-white/50 rounded-lg transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#productos"
                                className="mt-2 text-center w-full px-6 py-3 rounded-xl bg-cal-emerald text-white font-medium transition-colors hover:bg-cal-emerald-dark"
                                onClick={closeMobileMenu}
                            >
                                Ver Catálogo
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
