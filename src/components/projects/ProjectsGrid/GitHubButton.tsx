'use client';

import React from 'react';
import { ButtonData } from '@/types/projects';
import gitHubButtonData from './GitHubButtonData.json';

interface GitHubButtonProps {
    url: string;
    className?: string;
}

const GitHubButton: React.FC<GitHubButtonProps> = ({
    url,
    className = ''
}) => {
    const data = gitHubButtonData as ButtonData;

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
                fill="currentColor"
                viewBox={data.icon.viewBox}
            >
                <path d={data.icon.path} />
            </svg>
            {data.text}
        </a>
    );
};

export default GitHubButton;