import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Hammer, Loader2, Brush, Ruler } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

const products: Product[] = [
    {
        id: 'cal-en-pasta-5kg',
        name: 'Cal en Pasta 5 kg',
        category: 'Construcción',
        image: '/productos/calpasta5k.webp',
        icon: Hammer,
        description: 'Cal en pasta líquida de alta pureza, lista para usar. Ideal para clientes mayoristas (compras mayores a 500 unidades).',
        features: [
            'Empaque práctico de 5 kg',
            'Excelente trabajabilidad',
            'No requiere reposo largo',
            'Acabado ultra liso'
        ],
        specifications: {
            'Presentación': 'Saco de 5 kg',
            'Color': 'Blanco extra puro',
            'Rendimiento': '8-10 m² por saco',
            'Secado': '2-4 horas'
        }
    },
    {
        id: 'cal-en-pasta-7kg',
        name: 'Cal en Pasta 7 kg',
        category: 'Construcción',
        image: '/productos/calpasta7k.webp',
        icon: Droplets,
        description: 'Presentación de 7 kg para proyectos de mayor escala. Mantiene la misma pureza y calidad que nuestra línea estándar, asegurando paredes resistentes y duraderas.',
        features: [
            'Rendimiento optimizado',
            'Alta concentración de cal',
            'Ideal para superficies grandes',
            'Fácil aplicación'
        ],
        specifications: {
            'Presentación': 'Cuñete de 7 kg',
            'Color': 'Blanco extra puro',
            'Rendimiento': '12-15 m² por bulto',
            'Adherencia': 'Alta'
        }
    },
    {
        id: 'cal-en-polvo-4kg',
        name: 'Cal en Polvo 4 kg',
        category: 'Construcción',
        image: '/Polvo/polvo01.jpeg',
        icon: Ruler,
        description: 'Cal hidratada de alta pureza en formato de 4 kg. Perfecta para estabilización de suelos y mezclas secas.',
        features: [
            'Alta pureza',
            'Fácil de mezclar',
            'Empaque resistente',
            '98% Carbonato'
        ],
        specifications: {
            'Presentación': 'Bolsa de 4 kg',
            'Tipo': 'Cal Hidratada',
            'Uso': 'Multiuso / Estabilización',
            'Pureza': '98% Carbonato'
        }
    },
    {
        id: 'pintura-ecologica',
        name: 'Pintura Ecológica',
        category: 'Acabados',
        image: '/Hero2.webp', // Using a generic placeholder for now, or I could use Pintura specific if found
        icon: Brush,
        description: 'Pintura base cal 100% natural, transpirable y antimicrobiana. La mejor opción sostenible para interiores y exteriores.',
        features: [
            '100% Natural',
            'Antimicrobiana',
            'Transpirable',
            'Bajo COV'
        ],
        specifications: {
            'Base': 'Cal de alta pureza',
            'Propiedad': 'Antimicrobiana',
            'Ambiente': 'Interiores / Exteriores',
            'Sostenibilidad': '100% Ecológica'
        }
    },
    {
        id: 'pipote-de-cal-en-pasta',
        name: 'Pipote de Cal en Pasta',
        category: 'Exhibición',
        image: '/productos/pipotedecal.webp',
        icon: Loader2,
        description: 'Pipote muestrario grande diseñado para ferreterías. Permite exhibir y almacenar bolsas de cal de manera eficiente.',
        features: [
            'Formato industrial',
            'Ideal para ferreterías',
            'Almacenamiento optimizado',
            'Presencia de marca'
        ],
        specifications: {
            'Formato': 'Pipote industrial',
            'Uso': 'Exhibición / Almacenaje',
            'Capacidad': 'Gran formato',
            'Material': 'Plástico reforzado'
        }
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
                            Soluciones integrales para la construcción.
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
