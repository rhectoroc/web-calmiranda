import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5 - 0.2, // Drift upwards to simulate dust/cal
                alpha: Math.random() * 0.5 + 0.1,
            });
        }

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.y < 0) p.y = canvas.height;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 245, 240, ${p.alpha})`; // cal-bone color
                ctx.fill();
            });
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

const IMAGES = [
    '/Hero1.png',
    '/Hero2.jpeg',
    '/Hero3.jpeg'
];

export const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        // Initial reveal animation
        const tl = gsap.timeline();
        tl.fromTo('.hero-text-anim',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );

        // Image carousel timer
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
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
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
                    className="absolute inset-0 w-full h-full"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={IMAGES[currentImageIndex]}
                            alt={`Construcción moderna ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                        />
                    </AnimatePresence>
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

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight hero-text-anim leading-tight">
                        Calidad que <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cal-sand to-cal-bone">
                            Construye Confianza
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed hero-text-anim font-light">
                        La marca líder que redefine los estándares de la construcción a través de la cal de más alta pureza y pintura ecológica. 9 años de crecimiento y éxito respaldan nuestro profesionalismo.
                    </p>

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
