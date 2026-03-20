import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Hammer, Loader2, Brush, Ruler, PackageSearch } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

const products: Product[] = [
    {
        id: 'cal-en-pasta-5kg',
        name: 'Cal en Pasta 5 kg',
        category: 'Construcción',
        image: '/productos/calpasta5k.webp',
        icon: Hammer,
        description: 'Nuestra presentación estrella para grandes proyectos. Cal en pasta líquida de alta pureza, lista para aplicar. Optimizada para flujos de trabajo intensos.',
        features: [
            'Especial para compras mayores a 500 unidades',
            'Saco de 5 kg de fácil manipulación',
            'Acabado ultra liso y máxima blancura',
            'Garantía de adherencia superior'
        ],
        specifications: {
            'Presentación': 'Saco de 5 kg',
            'Venta Mínima': 'Mayorista',
            'Rendimiento': '8-10 m² por saco',
            'Pureza': 'Grado A+'
        }
    },
    {
        id: 'cal-en-pasta-7kg',
        name: 'Cal en Pasta 7 kg',
        category: 'Construcción',
        image: '/productos/calpasta7k.webp',
        icon: Droplets,
        description: 'La solución definitiva para maestros de obra. Mayor volumen que asegura la continuidad en pegado de bloques y revestimientos sin interrupciones.',
        features: [
            'Cuñete de 7 kg de alto rendimiento',
            'Consistencia cremosa perfecta',
            'Ideal para cimentaciones sólidas',
            'Reduce desperdicios en obra'
        ],
        specifications: {
            'Presentación': 'Cuñete de 7 kg',
            'Uso': 'Profesional',
            'Rendimiento': '12-15 m² aprox.',
            'Adherencia': 'Premium'
        }
    },
    {
        id: 'cal-en-polvo-4kg',
        name: 'Cal en Polvo 4 kg',
        category: 'Construcción',
        image: '/Polvo/polvo01.jpg',
        icon: Ruler,
        description: 'Cal hidratada micronizada de alta reactividad. Esencial para estabilización de suelos y mezclas secas que requieren precisión absoluta.',
        features: [
            'Bolsa reforzada de 4 kg',
            'Pureza certificada del 98%',
            'Ideal para mezclas de albañilería',
            'Versatilidad en usos industriales'
        ],
        specifications: {
            'Presentación': 'Bolsa de 4 kg',
            'Pureza': '98% Carbonato',
            'Tipo': 'Cal Hidratada',
            'Granulometría': 'Fina'
        }
    },
    {
        id: 'pintura-ecologica',
        name: 'Pintura Ecológica',
        category: 'Acabados',
        image: '/productos/PinturaE.jpg',
        icon: Brush,
        description: 'Acabado premium artesanal sobre base mineral. Respira salud en tus espacios con nuestra pintura transpirable y 100% libre de químicos tóxicos.',
        features: [
            'Naturalmente antimicrobiana',
            'Previene formación de hongos',
            'Ideal para interiores y fachadas',
            'Sostenible y biodegradable'
        ],
        specifications: {
            'Base': 'Cal de alta pureza',
            'Propiedad': 'Transpirable',
            'Ambiente': 'Multi-superficie',
            'Acabado': 'Mate mineral'
        }
    },
    {
        id: 'pipote-de-cal-en-pasta',
        name: 'Pipote de Cal en Pasta',
        category: 'Suministros',
        image: '/productos/pipotecal.png',
        icon: Loader2,
        description: 'Almacenamiento industrial para obras de gran envergadura. El formato más eficiente para el manejo de grandes volúmenes de cal en pasta líquida.',
        features: [
            'Envase plástico de alta durabilidad',
            'Tapa con sello de seguridad',
            'Fácil transporte con carretilla',
            'Conserva la humedad por meses'
        ],
        specifications: {
            'Formato': 'Industrial',
            'Uso': 'Constructora / Distribuidor',
            'Material': 'Polietileno Alta Densidad',
            'Cierre': 'Hermético'
        }
    },
    {
        id: 'pipote-muestrario',
        name: 'Pipote Muestrario',
        category: 'Exhibición',
        image: '/productos/pipotemuestrario.webp',
        icon: PackageSearch,
        description: 'La herramienta definitiva para el punto de venta. Maximiza tus ventas en ferretería con nuestra unidad de exhibición de alto impacto visual.',
        features: [
            'Diseño optimizado para local',
            'Capacidad para múltiples bolsas',
            'Publicidad integrada CalMiranda',
            'Orden y limpieza en el mostrador'
        ],
        specifications: {
            'Tipo': 'Mobiliario de venta',
            'Uso': 'Ferretería / Retail',
            'Publicidad': 'Logo Full Color',
            'Estructura': 'Ligera y resistente'
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
