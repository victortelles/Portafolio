'use client';

import React, { useState } from 'react';
import { SortType } from '@/types/projects';
import ProjectsHero from '@/components/projects/ProjectsHero/ProjectsHero';
import ProjectsFilter from '@/components/projects/ProjectsFilter/ProjectsFilter';
import ProjectsGrid from '@/components/projects/ProjectsGrid/ProjectsGrid';
import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [activeSort, setActiveSort] = useState<SortType>('newest');
    const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleSortChange = (sort: SortType) => {
        setActiveSort(sort);
    };

    const handleViewChange = (view: 'grid' | 'list') => {
        setActiveView(view);
    };

    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">

            <Navbar />

            {/* Hero Section */}
            <ProjectsHero />

            {/* Filter Section */}
            <ProjectsFilter
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
                onViewChange={handleViewChange}
                activeFilter={activeFilter}
                activeSort={activeSort}
                activeView={activeView}
            />

            {/* Projects Grid */}
            <ProjectsGrid
                activeFilter={activeFilter}
                activeSort={activeSort}
                activeView={activeView}
            />

            {/* Footer */}
            <Footer />
        </main>

    );
};

export default ProjectsPage;