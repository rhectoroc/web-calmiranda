import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalSection {
    title: string;
    content: string;
}

interface LegalPageProps {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
    type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, sections, type }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cal-bone pt-40 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-cal-earth hover:text-cal-emerald-dark font-medium mb-8 transition-colors group cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Volver al Inicio
                    </motion.div>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glassmorphism p-8 rounded-3xl border-cal-earth/10 mb-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cal-emerald/5 rounded-full -mr-16 -mt-16 blur-3xl" />

                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-cal-emerald/10 flex items-center justify-center text-cal-emerald">
                            {type === 'privacy' ? <ShieldCheck className="w-8 h-8" /> : <FileText className="w-8 h-8" />}
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-cal-charcoal mb-2">{title}</h1>
                            <p className="text-cal-earth/60 font-medium">Última actualización: {lastUpdated}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-cal-earth/5 shadow-sm"
                        >
                            <h2 className="text-xl font-bold text-cal-earth mb-4">{section.title}</h2>
                            <p className="text-cal-charcoal/80 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {section.content}
                            </p>
                        </motion.section>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center text-cal-earth/50 text-sm italic"
                >
                    <p>© 2026 Inversiones Miranda 1311, C.A. Todos los derechos reservados.</p>
                    <p>Jurisdicción: Circunscripción Judicial del Estado Miranda, Venezuela.</p>
                </motion.div>
            </div>
        </div>
    );
};
