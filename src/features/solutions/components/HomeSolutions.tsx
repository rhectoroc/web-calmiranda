import React from 'react';
import { motion } from 'framer-motion';
import { 
    Home, 
    TrendingDown, 
    PiggyBank, 
    ClipboardCheck, 
    BarChart3, 
    PackageSearch, 
    Move, 
    Users, 
    Blocks, 
    BadgePercent, 
    Scale, 
    CheckCircle2, 
    Archive, 
    HelpCircle, 
    Car, 
    ShoppingBag, 
    ShoppingCart 
} from 'lucide-react';

const benefits = [
    { icon: Home, text: "Para facilitar la auto construcción." },
    { icon: TrendingDown, text: "Para evitar comprar demás." },
    { icon: PiggyBank, text: "Para que ahorres tu dinero." },
    { icon: ClipboardCheck, text: "Control total del personal de obra." },
    { icon: BarChart3, text: "Administración eficiente de recursos." },
    { icon: PackageSearch, text: "Evita pérdidas de agregados necesarios." },
    { icon: Move, text: "Facilidades de manipulación y traslado." },
    { icon: Archive, text: "Ahorro de espacio y limpieza en obra." },
    { icon: HelpCircle, text: "Apoyo e información para hacerlo tú mismo." },
    { icon: Blocks, text: "Poder de mezclarlo a tu manera." },
    { icon: BadgePercent, text: "Adquisición a precios moderados." },
    { icon: Scale, text: "Seguridad de compras y despachos justos." },
    { icon: CheckCircle2, text: "Garantía de productos de alta calidad." },
    { icon: ShoppingBag, text: "Todos los agregados en un solo paquete." },
    { icon: Users, text: "Asesoría con tutoriales y redes sociales." },
    { icon: Car, text: "Ahorro de flete: transporta en tu vehículo." },
    { icon: ShoppingCart, text: "Disponible en ferreterías y grandes cadenas." },
    { icon: ShoppingCart, text: "Carga tus agregados en tu carrito de mercado." }
];

export const HomeSolutions: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cal-emerald/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cal-earth/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-emerald/30 bg-cal-emerald/5"
                    >
                        <span className="text-cal-emerald-dark text-sm tracking-wide font-medium uppercase">Soluciones Integrales</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-cal-charcoal mb-6 leading-tight"
                    >
                        ¡Haz realidad tu proyecto!
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-cal-charcoal/70 leading-relaxed"
                    >
                        ¿Tienes una idea? Levantar una pared, mejorar el porche o fachada, tapar una grieta o embellecer tu hogar. 
                        En CalMiranda te ofrecemos la solución perfecta para mejorar tu calidad de vida, incluso en sectores de difícil acceso.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-cal-bone border border-cal-charcoal/5 hover:border-cal-emerald/30 hover:shadow-xl hover:shadow-cal-emerald/5 transition-all duration-300 flex items-start gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white border border-cal-charcoal/5 flex items-center justify-center shrink-0 group-hover:bg-cal-emerald group-hover:text-white transition-colors">
                                <benefit.icon size={24} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-cal-charcoal/80 font-medium leading-snug pt-1">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-linear-to-br from-cal-charcoal to-cal-charcoal/95 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cal-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas agregados para tu construcción?</h3>
                            <p className="text-white/70 text-lg">
                                Te garantizamos productos de calidad que puedes transportar en tu propio vehículo y adquirir en cualquier ferretería, cualquier día de la semana.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-cal-emerald text-white rounded-xl font-bold text-lg hover:bg-cal-emerald-dark transition-all shadow-lg shadow-cal-emerald/20"
                        >
                            Solicitar Asesoría
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
