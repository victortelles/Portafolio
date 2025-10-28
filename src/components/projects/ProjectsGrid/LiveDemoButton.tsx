'use client';

import React from 'react';
import { ButtonData } from '@/types/projects';
import liveDemoButtonData from './LiveDemoButtonData.json';

interface LiveDemoButtonProps {
    url: string;
    className?: string;
}

const LiveDemoButton: React.FC<LiveDemoButtonProps> = ({
    url,
    className = ''
}) => {
    const data = liveDemoButtonData as ButtonData;

    return (
        <a
            href={url}
            target={data.attributes.target}
            rel={data.attributes.rel}
            className={`
                ${data.styles.baseClasses}
                ${data.styles.colors}
                ${data.styles.hover}
                ${data.styles.defaultPadding}
                ${className}
            `}
        >
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox={data.icon.viewBox}
            >
                <path
                    strokeLinecap={data.icon.strokeLinecap}
                    strokeLinejoin={data.icon.strokeLinejoin}
                    strokeWidth={data.icon.strokeWidth}
                    d={data.icon.path}
                />
            </svg>
            {data.text}
        </a>
    );
};

export default LiveDemoButton;