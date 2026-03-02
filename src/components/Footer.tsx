import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contacto" className="bg-cal-charcoal text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cal-earth via-cal-emerald to-cal-earth" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cal-emerald/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cal-earth/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Company Info */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <a href="#inicio" className="mb-6 inline-block group">
                            <img src="/logo.png" alt="CalMiranda" className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </a>

                        <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
                            La marca líder que redefine los estándares de la construcción a través de la cal de más alta pureza y pintura ecológica en Venezuela.
                        </p>

                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-cal-emerald hover:text-white hover:border-cal-emerald transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Contacto</h4>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="text-cal-emerald shrink-0 mt-1" size={20} />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    <span className="block mb-1"><strong>Guatire:</strong> Calle Los Ríos, Galpón Nro. 4, Zona Industrial, Edo. Miranda.</span>
                                    <span className="block"><strong>Caracas:</strong> Hoyo de la Puerta.</span>
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
                                    contacto@calmiranda.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Enlaces</h4>

                        <ul className="space-y-3">
                            {['Inicio', 'Nosotros', 'Productos', 'Franquicias'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-cal-emerald transition-colors inline-block relative overflow-hidden group">
                                        {link}
                                        <span className="absolute bottom-0 left-0 w-full h-px bg-cal-emerald -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold font-montserrat mb-6 uppercase tracking-wider text-cal-bone">Ubicación</h4>

                        <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125587.89932147326!2d-66.92487431265893!3d10.455248888047915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58b66e13ab3b%3A0xc6deea2bca5304af!2sHoyo%20de%20la%20puerta!5e0!3m2!1sen!2sve!4v1709346175058!5m2!1sen!2sve"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} CalMiranda. C.A. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
