"use client"

import React from "react"
import { FaGlobeAmericas, FaLanguage } from "react-icons/fa"
import data from "./aboutHeroData.json"
import type { LanguageData } from "@/types/about-me"

const LanguageCard: React.FC = () => {
    const { languageData } = data as { languageData: LanguageData }

    const getLevelColor = (levelType: string) => {
        switch (levelType) {
            case "native":
                return "var(--color-success)"
            case "advanced":
                return "var(--color-primary)"
            case "intermediate":
                return "var(--color-info)"
            case "basic":
                return "var(--color-warning)"
            default:
                return "var(--color-neutral-content)"
        }
    }

    return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-4 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            <h3 className="font-mono text-lg font-bold text-[var(--color-base-content)] mb-3">
                {languageData.title}
            </h3>
            <div className="space-y-2">
                {languageData.languages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FaLanguage className="text-[var(--color-secondary)]" />
                            <span className="font-sans text-sm text-[var(--color-base-content)]">
                                {language.name}
                            </span>
                        </div>
                        <span
                            className="font-mono text-xs px-2 py-1 rounded-full"
                            style={{
                                color: getLevelColor(language.levelType),
                                backgroundColor: `${getLevelColor(language.levelType)}20`
                            }}
                        >
                            {language.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageCard
