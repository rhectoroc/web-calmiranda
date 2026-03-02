import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { Particles } from './Particles';
import { useCarousel } from '../hooks/useCarousel';

const IMAGES = [
    '/Hero1.png',
    '/Hero2.jpeg',
    '/Hero3.jpeg'
];

export const HeroSection: React.FC = () => {
    const { currentImageIndex } = useCarousel(IMAGES);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    useEffect(() => {
        // Initial reveal animation
        const tl = gsap.timeline();
        tl.fromTo('.hero-text-anim',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cal-dark"
        >
            {/* Background Image Carousel with Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y: yBg }}
                    className="absolute inset-0 w-full h-full"
                >
                    {IMAGES.map((src, index) => (
                        <motion.img
                            key={src}
                            src={src}
                            alt={`Construcción moderna ${index + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: index === currentImageIndex ? 0.4 : 0,
                                scale: index === currentImageIndex ? 1 : 1.05
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                        />
                    ))}
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-cal-dark/80 via-cal-dark/60 to-cal-dark"></div>
            </div>

            <Particles />

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
                <motion.div
                    style={{ y: yText, opacity }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-emerald/30 bg-cal-emerald/10 backdrop-blur-sm hero-text-anim">
                        <span className="text-cal-emerald-light font-medium text-sm tracking-wide text-white/90">
                            LÍDERES EN AGREGADOS PARA LA CONSTRUCCIÓN
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-9xl font-bold mb-6 text-white tracking-tighter hero-text-anim leading-tight">
                        <span className="text-cal-emerald">CAL</span>MIRANDA
                        <span className="sr-only"> - Cal de Alta Pureza y Pintura Ecológica en Venezuela</span>
                    </h1>

                    <div className="relative max-w-2xl mx-auto hero-text-anim">
                        <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed font-light px-4">
                            La marca líder que redefine los estándares de la construcción a través de la cal de más alta pureza y pintura ecológica. 9 años de crecimiento y éxito respaldan nuestro profesionalismo.
                        </p>
                        {/* Brand Signature / Slogan - 3D Zoom Effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.1, z: -500, rotate: -45 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                z: 0,
                                y: [0, -10, 0] // Subtle infinite float
                            }}
                            transition={{
                                opacity: { duration: 1, delay: 5 },
                                scale: { duration: 1.5, delay: 5, type: "spring", damping: 10 },
                                z: { duration: 1.5, delay: 5 },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 6.5 }
                            }}
                            className="absolute -right-8 md:-right-80 -top-8 md:top-4 pointer-events-none z-20"
                            style={{ perspective: "1000px" }}
                        >
                            <span
                                className="block text-3xl md:text-7xl text-cal-emerald-light font-bold drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] select-none italic"
                                style={{ fontFamily: "'Caveat', cursive", color: '#0DF205', textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}
                            >
                                ¡Vamos positivos!
                            </span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-text-anim">
                        <a
                            href="#productos"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-cal-emerald text-white rounded-xl font-semibold transition-all duration-300 hover:bg-cal-emerald-dark hover:shadow-lg hover:shadow-cal-emerald/20 hover:-translate-y-1"
                        >
                            Explorar Productos
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#franquicias"
                            className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                        >
                            <Play size={20} className="mr-2 fill-white/20 transition-transform group-hover:scale-110" />
                            Modelo de Inversión
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-2 bg-cal-emerald rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};
