"use client"

import React from "react";
import { FaBullseye } from "react-icons/fa";
import globalData from "../../../data/globalData.json";
import aboutData from "./aboutHeroData.json";


const CurrentStatusCard: React.FC = () => {
    const { availability } = globalData; return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-4 hover:border-[var(--color-success)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-success)]/20">
            <h3 className="font-mono text-lg font-bold text-[var(--color-base-content)] mb-3">
                Estado actual
            </h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                            backgroundColor: availability.status === "Disponible" ? "var(--color-success)" :
                                availability.status === "Medio Ocupado" ? "var(--color-warning)" : "var(--color-error)"
                        }}
                    ></div>
                    <p className="font-mono text-sm" style={{
                        color: availability.status === "Disponible" ? "var(--color-success)" :
                            availability.status === "Medio Ocupado" ? "var(--color-warning)" : "var(--color-error)"
                    }}>
                        {availability.status}
                    </p>
                </div>
                <p className="font-sans text-xs text-[var(--color-neutral-content)] leading-relaxed">
                    {availability.messages[availability.status as keyof typeof availability.messages]}
                </p>
            </div>
        </div>
    );
};

export default CurrentStatusCard;