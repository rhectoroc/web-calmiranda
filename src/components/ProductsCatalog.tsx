import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Droplets, Hammer, Loader2 } from 'lucide-react';

const products = [
    {
        id: 'cal-alta-pureza',
        name: 'Cal de Alta Pureza',
        category: 'Construcción',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        icon: Hammer,
        description: 'Nuestra cal hidratada de alta pureza (>90% hidróxido de calcio) garantiza la máxima adherencia y durabilidad en todas sus obras. Ideal para frisos, bloques y estabilización de suelos.',
        features: [
            'Mayor rendimiento por saco',
            'Excelente plasticidad',
            'Previene fisuras y grietas',
            'Protección natural contra humedad'
        ]
    },
    {
        id: 'pintura-ecologica',
        name: 'Pintura Ecológica',
        category: 'Acabados',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        icon: Droplets,
        description: 'Revolucionaria pintura base cal que permite respirar a sus paredes mientras proporciona un acabado mate elegante. 100% natural y libre de VOCs (Compuestos Orgánicos Volátiles).',
        features: [
            'Acción bactericida natural',
            'Regula la humedad interior',
            'No se descascara',
            'Alta reflectancia solar (blanco)'
        ]
    },
    {
        id: 'agregados-premium',
        name: 'Agregados Premium',
        category: 'Materia Prima',
        image: 'https://images.unsplash.com/photo-1621644783313-f420cb05efde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        icon: Loader2,
        description: 'Arena y piedra picada con granulometría estrictamente controlada. Lavada y clasificada para asegurar la resistencia estructural óptima en concretos y morteros.',
        features: [
            'Libre de impurezas orgánicas',
            'Granulometría certificada',
            'Alta resistencia a la compresión',
            'Disponible a granel o ensacado'
        ]
    }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const Icon = product.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full h-[500px]"
            style={{ perspective: 1000 }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
            >
                {/* Front of Card */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white border border-cal-bone"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(1px)" }}
                >
                    <div className="h-3/5 w-full relative">
                        <div className="absolute inset-0 bg-cal-charcoal/20 z-10" />
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        <div
                            className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cal-emerald uppercase tracking-wider shadow-sm"
                            style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(2px)" }}
                        >
                            {product.category}
                        </div>
                    </div>
                    <div className="h-2/5 p-6 flex flex-col justify-center items-center text-center bg-white relative">
                        <div
                            className="absolute -top-8 w-16 h-16 bg-cal-emerald rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg z-30"
                            style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(2px)" }}
                        >
                            <Icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-cal-charcoal mt-4 mb-2">{product.name}</h3>
                        <p className="text-cal-emerald font-medium flex items-center gap-1 group cursor-pointer">
                            Ver especificaciones técnicas
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </p>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-cal-dark text-white border border-cal-emerald/30 p-8 flex flex-col justify-between"
                    style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: 'rotateY(180deg) translateZ(1px)' }}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-cal-emerald/20 text-cal-emerald rounded-full flex items-center justify-center">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">{product.name}</h3>
                        </div>

                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>

                        <ul className="space-y-3">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cal-emerald flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-full py-3 bg-cal-emerald text-white font-medium rounded-xl hover:bg-cal-emerald-dark transition-colors duration-300">
                        Solicitar Cotización
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const ProductsCatalog = () => {
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a href="#" className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-cal-dark text-white rounded-xl font-medium hover:bg-cal-charcoal transition-colors">
                            Descargar Fichas Técnicas
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-cal-dark text-white rounded-xl font-medium hover:bg-cal-charcoal transition-colors">
                        Descargar Fichas Técnicas
                    </a>
                </div>
            </div>
        </section>
    );
};
