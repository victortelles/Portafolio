"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import data from "./aboutHeroData.json";

const iconMap = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub
};

const ProfileImageCard: React.FC = () => {
    const { profileImage, socialIcons } = data;
    const { imageSrc, alt } = profileImage;

    return (
        <div className="relative w-full max-w-lg mx-auto">

            {/* Contenedor principal de la imagen */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-96 h-96 mx-auto"
            >

                {/* Imagen de perfil */}
                <div className="relative z-20 w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-2xl bg-[var(--color-base-200)]">
                    <Image
                        src={imageSrc}
                        alt={alt}
                        width={384}
                        height={384}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* Animaciones orbitales */}
                {socialIcons.map((social, index) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap];

                    return (
                        <motion.div
                            key={social.name}
                            className="absolute top-1/2 left-1/2 z-10"
                            style={{
                                width: social.orbitRadius * 2,
                                height: social.orbitRadius * 2,
                                marginTop: -social.orbitRadius,
                                marginLeft: -social.orbitRadius,
                            }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: social.speed,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >

                            {/* Línea orbital sutil */}
                            <div
                                className="absolute inset-0 rounded-full border opacity-20"
                                style={{
                                    borderColor: social.color,
                                    borderWidth: '1px',
                                }}
                            />

                            {/* Icono de red social */}
                            <motion.a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                                style={{
                                    backgroundColor: social.color,
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: social.speed,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <IconComponent
                                    size={16}
                                    className="text-[var(--color-base-content)]"
                                />
                            </motion.a>
                        </motion.div>
                    );
                })}

                {/* Glow effect sutil */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 blur-xl"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default ProfileImageCard;