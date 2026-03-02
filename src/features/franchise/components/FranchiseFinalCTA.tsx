import React from 'react';
import { motion } from 'framer-motion';
import { useChatContext } from '../../assistant/context/ChatContext';
import { MessageCircleHeart } from 'lucide-react';

export const FranchiseFinalCTA: React.FC = () => {
    const { openChat } = useChatContext();

    return (
        <section className="py-24 bg-cal-charcoal relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <div className="w-20 h-20 bg-cal-emerald rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(13,242,5,0.4)] relative z-10">
                            <span className="text-3xl font-bold">D</span>
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-cal-emerald rounded-full"
                        />
                    </div>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    ¿Tienes el espacio y la visión empresarial?
                </h2>

                <p className="text-xl text-white/70 mb-12 leading-relaxed">
                    Nuestro asistente virtual <span className="text-cal-emerald font-semibold">Diamantín</span> está listo para mostrarte los números exactos, el plan de negocio y la ruta de crecimiento.
                </p>

                <motion.button
                    onClick={openChat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-cal-charcoal rounded-2xl font-bold text-xl shadow-2xl transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                    <MessageCircleHeart className="text-cal-emerald group-hover:scale-125 transition-transform" />
                    Iniciar chat confidencial con Diamantín
                </motion.button>

                <p className="mt-12 text-white/30 text-sm uppercase tracking-widest font-medium">
                    Consulte ahora - Disponibilidad limitada por región
                </p>
            </div>
        </section>
    );
};
