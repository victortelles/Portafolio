import React from "react"
import { Monitor, Server, Database, GitBranch, LucideIcon } from "lucide-react"
import type { Badge } from "@/types/landingPage"

interface BadgeComponentProps {
    badge: Badge
}

const iconMap: Record<string, LucideIcon> = {
    monitor: Monitor,
    server: Server,
    database: Database,
    "git-branch": GitBranch,
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({ badge }) => {
    const IconComponent = iconMap[badge.icon]

    return (
        <div className="group flex flex-col items-center gap-3 p-6 rounded-lg transition-all duration-300 hover:scale-105">
            {/* Icon Container */}
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                    backgroundColor: `${badge.color}20`,
                    border: `2px solid ${badge.color}30`,
                }}
            >
                <IconComponent
                    size={28}
                    style={{ color: badge.color }}
                    className="transition-all duration-300 group-hover:scale-110"
                />
            </div>

            {/* Title */}
            <span className="font-mono text-md font-semibold text-[var(--color-base-content)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                {badge.title}
            </span>
        </div>
    )
}

export default BadgeComponent