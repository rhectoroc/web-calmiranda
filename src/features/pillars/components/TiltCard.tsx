import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useMouseTilt } from '../hooks/useMouseTilt';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    delay: number;
    image?: string;
    video?: string;
}

interface TiltCardProps {
    pillar: Pillar;
}

export const TiltCard: React.FC<TiltCardProps> = memo(({ pillar }) => {
    const { ref, handleMouseMove, handleMouseLeave, rotateX, rotateY } = useMouseTilt();

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
                        <img
                            src={pillar.image}
                            alt={pillar.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    )}
                    {pillar.video && (
                        <video
                            src={pillar.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                </>
            )}

            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 p-8 flex flex-col justify-between z-10"
            >
                <div className="w-16 h-16 rounded-2xl bg-[#9FA2A6] flex items-center justify-center text-[#0DF205] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
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
});

TiltCard.displayName = 'TiltCard';
