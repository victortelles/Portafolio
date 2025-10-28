'use client';

import React from 'react';
import { Technology } from '@/types/projects';

interface TechTagProps {
    technology: Technology;
    size?: 'sm' | 'md';
}

const TechTag: React.FC<TechTagProps> = ({
    technology,
    size = 'sm'
}) => {
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm'
    };

    return (
        <span
            className={`
        inline-flex items-center gap-1 rounded-full font-mono font-medium
        bg-[var(--color-base-200)]/80 text-[var(--color-base-content)] backdrop-blur-sm
        ${sizeClasses[size]}
      `}
            style={{
                borderLeft: `3px solid ${technology.color || 'var(--color-primary)'}`
            }}
        >
            {technology.icon && (
                <span className="text-current">
                    {technology.icon}
                </span>
            )}
            {technology.name}
        </span>
    );
};

export default TechTag;