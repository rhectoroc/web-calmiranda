import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!textContainerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: textContainerRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, textContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="nosotros" ref={sectionRef} className="py-24 bg-cal-bone relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cal-earth/5 -skew-x-12 translate-x-16 rounded-l-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Images Asymmetric Layout */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center mb-12 lg:mb-0">
                        {/* Background shape */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-0 bg-cal-emerald/10 rounded-full blur-3xl opacity-50"
                        />

                        {/* Main Video */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute right-10 top-10 w-3/4 h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white"
                        >
                            <video
                                src="/cf.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Secondary Image Overlapping */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute left-0 bottom-20 w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white"
                        >
                            <img
                                src="/cf1.jpeg"
                                alt="Experiencia CalMiranda"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                            className="absolute top-0 left-4 md:left-10 bg-cal-emerald text-white p-4 md:p-6 rounded-full shadow-xl z-30 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32"
                        >
                            <span className="text-2xl md:text-4xl font-bold font-montserrat">9</span>
                            <span className="text-[10px] md:text-xs text-center font-medium mt-1 leading-tight uppercase">Años de<br />Experiencia</span>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2" ref={textContainerRef}>
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-earth/30 bg-cal-earth/5 about-text">
                            <span className="text-cal-earth-dark font-medium text-sm tracking-wide uppercase">Nuestra Historia</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cal-charcoal about-text leading-tight">
                            Construyendo el futuro con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cal-earth to-cal-emerald">Excelencia</span>
                        </h2>

                        <p className="text-lg text-cal-charcoal/80 mb-6 leading-relaxed about-text">
                            En CalMiranda, no solo producimos materiales; construimos las bases de los sueños de nuestros clientes. Durante 9 años, hemos mantenido un crecimiento sostenido basado en cuatro valores fundamentales:
                        </p>

                        <blockquote className="border-l-4 border-cal-emerald pl-6 my-8 py-2 about-text">
                            <p className="text-xl italic font-medium text-cal-earth-dark">
                                "Pasión, mística, profesionalismo y resiliencia."
                            </p>
                        </blockquote>

                        <p className="text-cal-charcoal/70 mb-8 leading-relaxed about-text">
                            Nuestra cal de alta pureza y nuestra pintura ecológica no son solo productos, son el resultado de años de investigación y compromiso con el medio ambiente y la calidad constructiva de nuestro país.
                        </p>

                        <div className="flex items-center gap-6 about-text pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-cal-emerald">100%</span>
                                <span className="text-sm text-cal-charcoal/60 uppercase tracking-wide font-medium">Calidad Garantizada</span>
                            </div>
                            <div className="w-px h-12 bg-cal-charcoal/10"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-cal-earth">+500</span>
                                <span className="text-sm text-cal-charcoal/60 uppercase tracking-wide font-medium">Proyectos Exitosos</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
