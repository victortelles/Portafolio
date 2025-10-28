import React from 'react';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/types/projects';
import ProjectHeader from '@/components/projects/ProjectDetails/ProjectHeader';
import ProjectGallery from '@/components/projects/ProjectDetails/ProjectGallery';
import ProjectDetails from '@/components/projects/ProjectDetails/ProjectDetails';
import RelatedProjects from '@/components/projects/ProjectDetails/RelatedProjects';

// importar los datos del proyecto
import mythbotsData from './mythbots.json';
import pallinkData from './pallink.json';
import portafolioData from './portfolio.json';
import reviewAnalysisData from './reviewAnalysis.json';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

// mapeando los datos del proyecto
const getProjectData = (slug: string): ProjectDetail | null => {
    const projectsMap: Record<string, ProjectDetail> = {

        //Colocar aqui los nuevos proyectos
        'mythbots': mythbotsData as ProjectDetail,
        'pallink': pallinkData as ProjectDetail,
        'portafolio': portafolioData as ProjectDetail,
        'reviewAnalysis': reviewAnalysisData as ProjectDetail,
    };

    return projectsMap[slug] || null;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectData(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">
            {/* Project Header */}
            <ProjectHeader project={project} />

            {/* Project Gallery */}
            <ProjectGallery
                images={project.images}
                projectTitle={project.title}
            />

            {/* Project Details */}
            <ProjectDetails project={project} />

            {/* Related Projects */}
            {project.relatedProjects && (
                <RelatedProjects projects={project.relatedProjects} />
            )}
        </main>
    );
}