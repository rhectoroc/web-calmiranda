import React from 'react';
import { motion } from 'framer-motion';
import { useChatContext } from '../../assistant/context/ChatContext';
import { Zap } from 'lucide-react';

export const FranchiseHero: React.FC = () => {
    const { openChat } = useChatContext();

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-cal-bone">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-cal-emerald/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cal-earth/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cal-emerald/10 border border-cal-emerald/20 text-cal-emerald-dark font-semibold text-sm mb-8 animate-pulse"
                >
                    <Zap size={16} className="fill-cal-emerald" />
                    <span>Te acompañamos en la instalación de tu propia planta</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-cal-charcoal mb-8 leading-tight tracking-tight"
                >
                    Domina el Mercado de la <br className="hidden md:block" />
                    <span className="text-cal-emerald">Construcción</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-cal-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Únete al modelo de franquicias CalMiranda. Una oportunidad llave en mano con alta demanda, producción continua y rentabilidad garantizada.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    <button
                        onClick={() => openChat()}
                        className="group relative inline-flex items-center justify-center px-8 py-5 bg-cal-emerald text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-cal-emerald-dark hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(13,242,5,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(13,242,5,0.4)]"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-cal-emerald blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />

                        <span className="relative flex items-center gap-3">
                            Habla con Diamantín y descubre tu potencial de ganancia
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Zap size={20} className="fill-white" />
                            </motion.div>
                        </span>
                    </button>

                    <p className="mt-6 text-sm text-cal-charcoal/40 font-medium italic">
                        * Sin compromisos iniciales. Consulta privada y confidencial.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
