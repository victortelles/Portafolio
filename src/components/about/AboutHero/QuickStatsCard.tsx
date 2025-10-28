"use client"

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaRegClock, FaCheckCircle, FaCode, FaCoffee } from "react-icons/fa";
import data from "./aboutHeroData.json";

const iconMap = {
    FaRegClock: FaRegClock,
    FaCheckCircle: FaCheckCircle,
    FaCode: FaCode,
    FaCoffee: FaCoffee,
};

interface AnimatedCounterProps {
    value: number;
    suffix: string;
    special?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix, special }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                if (special) {
                    if (latest >= value) {
                        ref.current.textContent = "∞";
                    } else {
                        ref.current.textContent = Math.floor(latest).toString();
                    }
                } else {
                    ref.current.textContent = Math.floor(latest).toString() + suffix;
                }
            }
        });

        return unsubscribe;
    }, [springValue, suffix, special, value]);

    return <span ref={ref} className="font-mono text-2xl font-bold" />;
};


interface QuickStatsCardProps {
    stats?: any[];
}

const QuickStatsCard: React.FC<QuickStatsCardProps> = ({ stats: customStats }) => {
    const { stats, sectionTexts } = data;
    const displayStats = customStats || stats;

    return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-6 text-center">
                {sectionTexts.quickStatsTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {displayStats.map((stat, index) => {
                    const IconComponent = iconMap[stat.icon as keyof typeof iconMap];

                    // Cada tarjeta estadística
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col gap-2 p-4 rounded-lg bg-[var(--color-base-300)] hover:bg-[var(--color-base-100)] transition-colors duration-200"
                        >
                            {/* Icono y Número */}
                            <div className="flex items-center justify-center gap-2">
                                <IconComponent
                                    size={20}
                                    style={{ color: stat.color }}
                                />
                                <div className="text-[var(--color-base-content)]">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        special={stat.special}
                                    />
                                </div>
                            </div>

                            {/* texto inferior */}
                            <span className="font-sans text-xs text-[var(--color-neutral-content)] text-center leading-tight">
                                {stat.label}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuickStatsCard;