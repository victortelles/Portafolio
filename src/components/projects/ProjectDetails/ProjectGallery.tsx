'use client';

import React, { useState, useEffect } from 'react';
import { ProjectImage } from '@/types/projects';
import projectGalleryData from './ProjectGallery.json';

interface ProjectGalleryProps {
    images: ProjectImage[];
    projectTitle: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, projectTitle }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Data from JSON for consistency
    const data = projectGalleryData;
    const mainImage = images[selectedImage];

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px'; // Compensate for scrollbar
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isLightboxOpen]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    setIsLightboxOpen(false);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                    break;
            }
        };

        if (isLightboxOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen, images.length]);

    return (
        <section className="relative py-16 bg-[var(--color-base-100)] overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-20 h-20 bg-[var(--color-primary)] rounded-full blur-3xl opacity-5"></div>
                <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-[var(--color-secondary)] transform rotate-45 blur-2xl opacity-8"></div>
                <div className="absolute top-1/2 left-10 w-12 h-12 bg-[var(--color-accent)] rounded-full blur-xl opacity-10"></div>
                <div className="absolute bottom-20 right-20 w-8 h-8 bg-[var(--color-info)] transform rotate-12 blur-lg opacity-15"></div>

                {/* Dotted pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_var(--color-primary)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-mono font-bold text-[var(--color-base-content)] mb-4">
                            {data.title}
                        </h2>
                        <p className="text-[var(--color-base-content)]/60 font-sans">
                            {data.description} {projectTitle}
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="mb-8">
                        <div
                            className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[var(--color-base-200)] shadow-2xl"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <img
                                src={mainImage.src}
                                alt={mainImage.alt}
                                className="w-full h-auto max-h-[600px] object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Zoom Icon */}
                            <div className="absolute top-4 right-4 bg-[var(--color-base-100)]/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 text-[var(--color-base-content)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>

                            {/* Image Info */}
                            {mainImage.title && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-base-100)]/90 to-transparent p-6">
                                    <h3 className="text-lg font-mono font-bold text-[var(--color-base-content)] mb-2">
                                        {mainImage.title}
                                    </h3>
                                    {mainImage.description && (
                                        <p className="text-[var(--color-base-content)]/80 font-sans text-sm">
                                            {mainImage.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setSelectedImage(index)}
                                    className={`
                    relative group rounded-lg overflow-hidden bg-[var(--color-base-200)] aspect-video
                    transition-all duration-300 hover:scale-105
                    ${selectedImage === index
                                            ? 'ring-4 ring-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20'
                                            : 'hover:shadow-lg'
                                        }
                  `}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                                        loading="lazy"
                                    />

                                    {/* Selected Overlay */}
                                    {selectedImage === index && (
                                        <div className="absolute inset-0 bg-[var(--color-primary)]/20 flex items-center justify-center">
                                            <div className="bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-full p-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-[var(--color-base-100)]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] aspect-video flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-4 right-4 bg-[var(--color-base-200)]/90 text-[var(--color-base-content)] rounded-full p-3 z-10 hover:bg-[var(--color-base-300)] transition-colors cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-base-200)]/90 text-[var(--color-base-content)] rounded-full p-3 hover:bg-[var(--color-base-300)] transition-colors cursor-pointer z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-base-200)]/90 text-[var(--color-base-content)] rounded-full p-3 hover:bg-[var(--color-base-300)] transition-colors cursor-pointer z-10"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Container with Scroll */}
                        <div
                            className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[var(--color-base-300)] scrollbar-track-transparent hover:scrollbar-thumb-[var(--color-base-400)] rounded-lg bg-[var(--color-base-200)]/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={mainImage.src}
                                alt={mainImage.alt}
                                className="w-full h-full object-contain rounded-lg cursor-zoom-in"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    minWidth: '100%',
                                    minHeight: '100%'
                                }}
                            />
                        </div>

                        {/* Image Counter */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-base-200)]/90 text-[var(--color-base-content)] px-4 py-2 rounded-full font-mono text-sm z-10">
                                {selectedImage + 1} {data.imageCounter} {images.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectGallery;