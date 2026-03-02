import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MediaItem {
    src: string;
    alt: string;
    type: 'image' | 'video';
    className: string;
    speed: number;
}

const media: MediaItem[] = [
    {
        src: "/eeb1.jpeg",
        alt: "Residencial de lujo construido con Cal en Pasta CalMiranda",
        type: "image",
        className: "col-span-12 md:col-span-7 row-span-2 h-[450px]",
        speed: 0.1
    },
    {
        src: "/cf.mp4",
        alt: "Construyendo con Excelencia - Proceso de obra con CalMiranda",
        type: "video",
        className: "col-span-12 md:col-span-5 row-span-2 h-[450px]",
        speed: -0.05
    },
    {
        src: "/eeb2.jpeg",
        alt: "Obra comercial utilizando agregados CalMiranda",
        type: "image",
        className: "col-span-12 md:col-span-6 row-span-1 h-[250px]",
        speed: -0.02
    },
    {
        src: "/eeb3.jpeg",
        alt: "Proyecto arquitectónico finalizado con pintura ecológica CalMiranda",
        type: "image",
        className: "col-span-12 md:col-span-6 row-span-1 h-[250px]",
        speed: 0.08
    }
];

export const EmbellishedSpaces: React.FC = () => {
    const sectionRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="espacios" ref={sectionRef} className="py-24 bg-cal-bone relative overflow-hidden">
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #2C3539 1px, transparent 1px), linear-gradient(to bottom, #2C3539 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cal-emerald/30 bg-cal-emerald/10 backdrop-blur-sm"
                    >
                        <span className="text-[#0DF205] text-sm tracking-wide font-medium uppercase">Inspiración</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-cal-charcoal mb-6"
                    >
                        Espacios <span className="text-transparent bg-clip-text bg-gradient-to-r from-cal-emerald to-cal-earth">Embellecidos</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-cal-charcoal/70"
                    >
                        Descubra cómo nuestros productos de alta calidad transforman proyectos de construcción en verdaderas obras de arte arquitectónicas.
                    </motion.p>
                </div>

                {/* Animated Bento Grid Collage */}
                <div className="grid grid-cols-12 gap-4 auto-rows-min">
                    {media.map((item, index) => {
                        // Hook is called for each item - this is fine as it's a fixed array mapping to a stable UI
                        // But following rules: hooks should not be inside loops if they are not stable.
                        // Here useTransform is based on the same scrollYProgress. 
                        // It's better to keep it in a sub-component for SRP and cleanliness.
                        return (
                            <MediaCard key={index} item={item} index={index} scrollYProgress={scrollYProgress} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

interface MediaCardProps {
    item: MediaItem;
    index: number;
    scrollYProgress: any; // Using any for MotionValue for simplicity here, but interface would be better
}

const MediaCard: React.FC<MediaCardProps> = ({ item, index, scrollYProgress }) => {
    // Reduce movement on mobile to prevent excessive whitespace/overlap
    const yTransform = useTransform(scrollYProgress, [0, 1], [item.speed * 400, -item.speed * 400]);

    return (
        <motion.div
            style={{ y: yTransform }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden shadow-2xl group ${item.className}`}
        >
            {item.type === 'video' ? (
                <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-cal-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-montserrat font-semibold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                </span>
            </div>
        </motion.div>
    );
};
