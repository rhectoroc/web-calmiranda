import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Hammer, Loader2 } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

const products: Product[] = [
    {
        id: 'cal-en-pasta-5kg',
        name: 'Cal en Pasta 5 kg',
        category: 'Construcción',
        image: '/productos/calpasta5k.png',
        icon: Hammer,
        description: 'Cal en pasta líquida de alta pureza, lista para usar. Formulada para garantizar la máxima adherencia en frisos y pegado de bloques, optimizando el tiempo en obra.',
        features: [
            'Empaque práctico de 5 kg',
            'Excelente trabajabilidad',
            'No requiere reposo largo',
            'Acabado ultra liso'
        ]
    },
    {
        id: 'cal-en-pasta-7kg',
        name: 'Cal en Pasta 7 kg',
        category: 'Construcción',
        image: '/productos/calpasta7k.jpeg',
        icon: Droplets,
        description: 'Presentación de 7 kg para proyectos de mayor escala. Mantiene la misma pureza y calidad que nuestra línea estándar, asegurando paredes resistentes y duraderas.',
        features: [
            'Rendimiento optimizado',
            'Alta concentración de cal',
            'Ideal para superficies grandes',
            'Fácil aplicación'
        ]
    },
    {
        id: 'pipote-de-cal',
        name: 'Pipote de Cal',
        category: 'Materia Prima',
        image: '/productos/pipotedecal.jpeg',
        icon: Loader2,
        description: 'Venta por volumen en formato de pipote. Ideal para contratistas y retail que buscan abastecerse con el agregado esencial para sus mezclas comerciales.',
        features: [
            'Formato industrial',
            'Ahorro por volumen',
            'Calidad certificada CalMiranda',
            'Disponible para despacho inmediato'
        ]
    }
];

export const ProductsCatalog: React.FC = () => {
    return (
        <section id="productos" className="py-24 bg-cal-bone relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-earth/30 bg-cal-earth/5"
                        >
                            <span className="text-cal-earth-dark text-sm tracking-wide font-medium uppercase">Catálogo</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-cal-charcoal mb-4"
                        >
                            Nuestra línea de productos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-cal-charcoal/70"
                        >
                            Soluciones integrales para la construcción. Desde la cimentación hasta los acabados finales, CalMiranda le acompaña con la más alta calidad.
                        </motion.p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};
