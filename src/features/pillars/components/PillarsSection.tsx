import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Construction, PaintBucket, TrendingUp } from 'lucide-react';
import { TiltCard } from './TiltCard';

const pillars = [
    {
        title: 'Alta Producción',
        description: 'Materiales siempre listos sin demoras, garantizando el flujo constante de su obra.',
        icon: Factory,
        color: 'from-cal-earth to-cal-earth-dark',
        delay: 0,
        image: '/altaproduccion.jpeg',
    },
    {
        title: 'Construcción',
        description: 'Cal esencial para cimentaciones sólidas y mezclas de alta resistencia.',
        icon: Construction,
        color: 'from-cal-sand to-cal-earth',
        delay: 0.1,
        video: '/contruccion.mp4',
    },
    {
        title: 'Pintura Ecológica',
        description: 'Acabados estéticos, duraderos y amigables con el medio ambiente.',
        icon: PaintBucket,
        color: 'from-cal-emerald-dark to-cal-emerald',
        delay: 0.2,
        video: '/pinturaecologica.mp4',
    },
    {
        title: 'Franquicia',
        description: 'Modelo de inversión sólido y rentable en el creciente mercado de agregados.',
        icon: TrendingUp,
        color: 'from-cal-charcoal to-gray-600',
        delay: 0.3,
    }
];

export const PillarsSection: React.FC = () => {
    return (
        <section className="py-24 bg-cal-dark relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-emerald/30 bg-cal-emerald/10 backdrop-blur-sm"
                    >
                        <span className="text-cal-emerald text-sm tracking-wide font-medium uppercase">Fundamentos de CalMiranda</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Nuestros Pilares
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70"
                    >
                        Sustentamos nuestro liderazgo a través de líneas de negocio integradas que garantizan la máxima calidad desde la extracción hasta la aplicación final.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1000 }}>
                    {pillars.map((pillar) => (
                        <TiltCard key={pillar.title} pillar={pillar} />
                    ))}
                </div>
            </div>
        </section>
    );
};
