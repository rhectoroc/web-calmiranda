import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
    const location = useLocation();

    const getHref = (href: string) => {
        if (location.pathname !== '/') {
            return '/' + href;
        }
        return href;
    };

    return (
        <footer id="contacto" className="bg-cal-charcoal text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cal-earth via-cal-emerald to-cal-earth" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cal-emerald/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cal-earth/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Company Info */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link to="/" className="mb-6 inline-block group">
                            <img
                                src="/logo.webp"
                                alt="CalMiranda"
                                className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>

                        <p className="text-white/70 mb-8 max-w-sm leading-relaxed italic font-medium">
                            "La belleza es el resplandor de la verdad. Sin la verdad no hay arte." — <span className="text-cal-emerald-light">Antoni Gaudí</span>
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/agregadosmiranda?igsh=MWFiajJhZjVxejg3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-cal-emerald hover:text-white hover:border-cal-emerald transition-all duration-300 hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.facebook.com/agregadosmiranda/?_rdr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-cal-emerald hover:text-white hover:border-cal-emerald transition-all duration-300 hover:-translate-y-1"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Contacto</h4>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="text-cal-emerald shrink-0 mt-1" size={20} />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    <span className="block mb-1"><strong>Guatire:</strong> Sector La Mura, Calle Los Ríos, Galpón Nro. 4, Zona Industrial, Edo. Miranda.</span>
                                    <span className="block"><strong>Caracas:</strong> Av. Principal, Edif. Abuela Flora, Piso 1, Apt 1A, Sector Hoyo de la Puerta, Caracas, Miranda, Zona Postal 1080.</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone className="text-cal-emerald shrink-0" size={20} />
                                <span className="text-white/70 group-hover:text-white transition-colors flex flex-col">
                                    <span>0424 2574698</span>
                                    <span>0412 3883692</span>
                                    <span>0212 7703788</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail className="text-cal-emerald shrink-0" size={20} />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    inversionesmiranda1311@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Enlaces</h4>

                        <ul className="space-y-3">
                            {[
                                { name: 'Inicio', href: '#inicio' },
                                { name: 'Nosotros', href: '#nosotros' },
                                { name: 'Productos', href: '#productos' },
                                { name: 'Espacios', href: '#espacios' },
                                { name: 'Franquicias', href: '#franquicias' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={getHref(link.href)}
                                        className="text-white/70 hover:text-cal-emerald transition-colors inline-block relative overflow-hidden group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-full h-px bg-cal-emerald -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-sm font-bold font-montserrat mb-4 uppercase tracking-widest text-cal-bone">Horario de Trabajo</h4>
                            <ul className="text-xs text-white/60 space-y-1">
                                <li className="flex justify-between"><span>Lun - Vie:</span> <span>8:00 AM - 5:00 PM</span></li>
                                <li className="flex justify-between"><span>Sab:</span> <span>8:00 AM - 12:00 PM</span></li>
                                <li className="flex justify-between text-red-400/60 italic"><span>Dom:</span> <span>Cerrado</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Ubicación</h4>

                        <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6200236034176!2d-66.54313552414739!3d10.463061291880572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzQ3LjAiTiA2NsKwMzInMjYuMCJX!5e0!3m2!1sen!2sve!4v1709346175058!5m2!1sen!2sve"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CalMiranda Location"
                            ></iframe>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} CalMiranda, C.A. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-2 group">
                        <span>Desarrollado por</span>
                        <a
                            href="https://adrielssystems.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cal-emerald font-semibold hover:text-cal-emerald-light transition-colors flex items-center gap-1"
                        >
                            Adriel's Systems
                            <span className="w-1 h-1 bg-cal-emerald rounded-full animate-pulse" />
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link to="/terminos-de-servicio" className="hover:text-white transition-colors">Términos de Servicio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
