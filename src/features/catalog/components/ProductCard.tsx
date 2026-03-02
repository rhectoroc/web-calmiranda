import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    index: number;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ product, index }) => {
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
});

ProductCard.displayName = 'ProductCard';
