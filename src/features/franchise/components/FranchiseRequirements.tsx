import React from 'react';
import { motion } from 'framer-motion';
import { Maximize, Truck, Zap } from 'lucide-react';

const requirements = [
    {
        title: 'Espacio Operativo',
        detail: 'Terreno de 500m² con un mínimo de 150m² techados para planta y almacenamiento.',
        icon: Maximize,
        delay: 0
    },
    {
        title: 'Acceso Logístico',
        detail: 'Vías aptas para la maniobra de gandolas de hasta 30 toneladas de carga.',
        icon: Truck,
        delay: 0.1
    },
    {
        title: 'Servicios de Energía',
        detail: 'Suministro eléctrico trifásico y conexión activa de agua potable.',
        icon: Zap,
        delay: 0.2
    }
];

export const FranchiseRequirements: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-cal-emerald font-semibold text-sm tracking-widest uppercase mb-2 block">Perfil Técnico</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-cal-charcoal mb-6">Lo que necesitas para empezar</h2>
                    <p className="text-cal-charcoal/60 max-w-2xl mx-auto">
                        Evaluamos la viabilidad técnica de tu ubicación para asegurar el éxito operativo de la planta desde el primer día.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {requirements.map((req, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: req.delay }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className="w-24 h-24 bg-cal-bone rounded-full flex items-center justify-center text-cal-emerald mb-8 shadow-inner ring-8 ring-cal-bone/50 transition-transform duration-500 hover:rotate-12">
                                <req.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-cal-charcoal mb-3">{req.title}</h3>
                            <p className="text-cal-charcoal/70 leading-relaxed text-sm">
                                {req.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
