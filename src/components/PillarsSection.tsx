import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Factory, Construction, PaintBucket, TrendingUp } from 'lucide-react';

const pillars = [
    {
        title: 'Alta Producción',
        description: 'Materiales siempre listos sin demoras, garantizando el flujo constante de su obra.',
        icon: Factory,
        color: 'from-cal-earth to-cal-earth-dark',
        delay: 0,
        image: '/altaproduccion.jpeg',
    },
    {
        title: 'Construcción',
        description: 'Cal esencial para cimentaciones sólidas y mezclas de alta resistencia.',
        icon: Construction,
        color: 'from-cal-sand to-cal-earth',
        delay: 0.1,
        video: '/contruccion.mp4',
    },
    {
        title: 'Pintura Ecológica',
        description: 'Acabados estéticos, duraderos y amigables con el medio ambiente.',
        icon: PaintBucket,
        color: 'from-cal-emerald-dark to-cal-emerald',
        delay: 0.2,
        video: '/pinturaecologica.mp4',
    },
    {
        title: 'Franquicia',
        description: 'Modelo de inversión sólido y rentable en el creciente mercado de agregados.',
        icon: TrendingUp,
        color: 'from-cal-charcoal to-gray-600',
        delay: 0.3,
    }
];

const TiltCard = ({ pillar }: { pillar: typeof pillars[0] & { image?: string; video?: string } }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = pillar.icon;
    const hasMedia = !!(pillar.image || pillar.video);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: pillar.delay }}
            className={`relative w-full h-[320px] rounded-2xl shadow-xl cursor-pointer group overflow-hidden ${hasMedia ? '' : 'bg-white'}`}
        >
            {hasMedia && (
                <>
                    {pillar.image && (
                        <img src={pillar.image} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    )}
                    {pillar.video && (
                        <video src={pillar.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                </>
            )}

            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 p-8 flex flex-col justify-between z-10"
            >
                <div className={`w-16 h-16 rounded-2xl bg-[#9FA2A6] flex items-center justify-center text-[#0DF205] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                </div>

                <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${hasMedia ? 'text-white' : 'text-cal-charcoal group-hover:text-cal-emerald'}`}>
                        {pillar.title}
                    </h3>
                    <p className={`leading-relaxed font-medium ${hasMedia ? 'text-white/90' : 'text-cal-charcoal/70'}`}>
                        {pillar.description}
                    </p>
                </div>

                {/* Decorative corner element */}
                {!hasMedia && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-cal-bone/50 rounded-tr-2xl rounded-bl-full -z-[1] transition-all duration-300 group-hover:scale-150 origin-top-right opacity-0 group-hover:opacity-100" />
                )}
            </div>
        </motion.div>
    );
};

export const PillarsSection = () => {
    return (
        <section className="py-24 bg-cal-dark relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-emerald/30 bg-cal-emerald/10 backdrop-blur-sm"
                    >
                        <span className="text-cal-emerald text-sm tracking-wide font-medium uppercase">Fundamentos de CalMiranda</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Nuestros Pilares
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70"
                    >
                        Sustentamos nuestro liderazgo a través de líneas de negocio integradas que garantizan la máxima calidad desde la extracción hasta la aplicación final.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1000 }}>
                    {pillars.map((pillar) => (
                        <TiltCard key={pillar.title} pillar={pillar} />
                    ))}
                </div>
            </div>
        </section>
    );
};
