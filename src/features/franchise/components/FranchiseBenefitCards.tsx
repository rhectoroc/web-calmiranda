import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, TrendingUp } from 'lucide-react';

const benefits = [
    {
        title: 'Demanda Constante',
        description: 'Productos de cal y pintura ecológica esenciales para cualquier obra y desarrollo infraestructural.',
        icon: BarChart3,
        delay: 0
    },
    {
        title: 'Planta Llave en Mano',
        description: 'Te asesoramos íntegramente en la instalación de maquinaria de alta tecnología y líneas de producción optimizadas.',
        icon: Settings,
        delay: 0.2
    },
    {
        title: 'Rápida Recuperación',
        description: 'Un modelo de negocio diseñado para que el retorno de tu inversión se manifieste en un tiempo récord.',
        icon: TrendingUp,
        delay: 0.4
    }
];

export const FranchiseBenefitCards: React.FC = () => {
    return (
        <section className="py-24 bg-cal-bone">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-cal-charcoal mb-4">¿Por qué elegir CalMiranda?</h2>
                    <div className="w-24 h-1.5 bg-cal-emerald mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: benefit.delay }}
                            className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cal-emerald/5 rounded-full blur-2xl group-hover:bg-cal-emerald/10 transition-colors" />

                            <div className="w-16 h-16 bg-cal-emerald/10 rounded-2xl flex items-center justify-center text-cal-emerald mb-6 group-hover:scale-110 transition-transform duration-300">
                                <benefit.icon size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-cal-charcoal mb-4">{benefit.title}</h3>
                            <p className="text-cal-charcoal/70 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
