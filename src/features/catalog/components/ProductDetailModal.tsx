import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import type { Product } from '../types';
import { useChatContext } from '../../assistant/context/ChatContext';

interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
    const { sendMessage, openChat } = useChatContext();

    if (!product) return null;

    const handleQuoteRequest = () => {
        onClose();
        setTimeout(() => {
            openChat();
            sendMessage(`Hola, me gustaría solicitar una cotización para el producto: ${product.name}`);
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-cal-charcoal/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Section */}
                        <div className="md:w-2/5 bg-cal-bone/30 p-8 flex items-center justify-center relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-[300px] object-contain drop-shadow-xl"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-cal-emerald/10 text-cal-emerald text-xs font-bold rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-3/5 p-8 overflow-y-auto">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-cal-bone transition-colors text-cal-charcoal/40 hover:text-cal-charcoal"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-3xl font-bold text-cal-charcoal mb-4">{product.name}</h3>
                            <p className="text-cal-charcoal/70 text-sm leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Specifications Grid */}
                            {product.specifications && (
                                <div className="mb-8">
                                    <h4 className="text-xs font-bold text-cal-charcoal/40 uppercase tracking-widest mb-4">Especificaciones Técnicas</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="bg-cal-bone/50 p-3 rounded-xl">
                                                <span className="block text-[10px] text-cal-charcoal/50 uppercase font-bold mb-1">{key}</span>
                                                <span className="text-sm font-semibold text-cal-charcoal">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features List */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-cal-charcoal/40 uppercase tracking-widest mb-4">Beneficios Clave</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-cal-charcoal/80">
                                            <CheckCircle2 size={16} className="text-cal-emerald shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Action */}
                            <button
                                onClick={handleQuoteRequest}
                                className="w-full py-4 bg-cal-emerald text-white font-bold rounded-2xl shadow-lg shadow-cal-emerald/20 hover:bg-cal-emerald-dark hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <MessageSquare size={18} />
                                Solicitar Cotización con Diamantín
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
