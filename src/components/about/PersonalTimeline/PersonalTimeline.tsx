"use client"

import React from "react"
import { FaCalendarAlt, FaCode, FaProjectDiagram, FaRocket, FaBullseye, FaComments } from "react-icons/fa"
import TimelineVertical from "./TimelineVertical"
import personalTimelineData from "./personalTimelineData.json"

const PersonalTimeline: React.FC = () => {
    const { sectionTitle, sectionDescription, timelineEvents, stats, lifePhilosophy } = personalTimelineData

    return (
        <section className="py-20 lg:py-32 px-4 lg:px-8 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {sectionTitle}
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-3xl mx-auto mb-8">
                        {sectionDescription}
                    </p>

                    {/* Estadísticas del timeline */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] p-4">
                            <FaCalendarAlt className="text-[var(--color-primary)] text-2xl mx-auto mb-2" />
                            <div className="font-mono text-2xl font-bold text-[var(--color-primary)]">
                                {stats.totalYears}
                            </div>
                            <div className="font-sans text-sm text-[var(--color-neutral-content)]">
                                Años en tech
                            </div>
                        </div>
                        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] p-4">
                            <FaRocket className="text-[var(--color-secondary)] text-2xl mx-auto mb-2" />
                            <div className="font-mono text-2xl font-bold text-[var(--color-secondary)]">
                                {stats.majorMilestones}
                            </div>
                            <div className="font-sans text-sm text-[var(--color-neutral-content)]">
                                Hitos importantes
                            </div>
                        </div>
                        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] p-4">
                            <FaCode className="text-[var(--color-accent)] text-2xl mx-auto mb-2" />
                            <div className="font-mono text-2xl font-bold text-[var(--color-accent)]">
                                {stats.technologiesLearned}+
                            </div>
                            <div className="font-sans text-sm text-[var(--color-neutral-content)]">
                                Tecnologías aprendidas
                            </div>
                        </div>
                        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] p-4">
                            <FaProjectDiagram className="text-[var(--color-success)] text-2xl mx-auto mb-2" />
                            <div className="font-mono text-2xl font-bold text-[var(--color-success)]">
                                {stats.projectsCompleted}+
                            </div>
                            <div className="font-sans text-sm text-[var(--color-neutral-content)]">
                                Proyectos completados
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leyenda de tipos de eventos */}
                <div className="mb-12">
                    <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6">
                        <h3 className="font-mono text-lg font-bold text-[var(--color-base-content)] mb-4 text-center">
                            Tipos de eventos
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                                <span className="font-sans text-sm text-[var(--color-neutral-content)]">Educación</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[var(--color-secondary)] rounded-full"></div>
                                <span className="font-sans text-sm text-[var(--color-neutral-content)]">Aprendizaje</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[var(--color-success)] rounded-full"></div>
                                <span className="font-sans text-sm text-[var(--color-neutral-content)]">Trabajo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
                                <span className="font-sans text-sm text-[var(--color-neutral-content)]">Proyecto</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[var(--color-warning)] rounded-full"></div>
                                <span className="font-sans text-sm text-[var(--color-neutral-content)]">Futuro</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline vertical */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Timeline principal */}
                    <div className="lg:col-span-2">
                        <TimelineVertical events={timelineEvents} />
                    </div>

                    {/* Información adicional */}
                    <div className="space-y-8">
                        {/* Enfoque actual */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-primary)] rounded-[var(--radius-box)] p-6">
                            <h3 className="font-mono text-lg font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                <FaBullseye /> Enfoque actual
                            </h3>
                            <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed">
                                {stats.currentFocus}
                            </p>
                        </div>

                        {/* Filosofía de vida */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-secondary)] rounded-[var(--radius-box)] p-6">
                            <h3 className="font-mono text-lg font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                                <FaComments /> Mi filosofía
                            </h3>
                            <blockquote className="font-sans text-[var(--color-neutral-content)] italic leading-relaxed mb-4">
                                "{lifePhilosophy.quote}"
                            </blockquote>
                            <div className="space-y-2">
                                <h4 className="font-mono text-sm font-bold text-[var(--color-base-content)]">
                                    Valores clave:
                                </h4>
                                {lifePhilosophy.values.map((value, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></div>
                                        <span className="font-sans text-sm text-[var(--color-neutral-content)]">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Próximos pasos */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-warning)] rounded-[var(--radius-box)] p-6">
                            <h3 className="font-mono text-lg font-bold text-[var(--color-warning)] mb-4 flex items-center gap-2">
                                <FaRocket /> Próximos pasos
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[var(--color-warning)] rounded-full mt-2"></div>
                                    <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                        Dominar React Native para desarrollo móvil
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[var(--color-warning)] rounded-full mt-2"></div>
                                    <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                        Contribuir más a proyectos open source
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[var(--color-warning)] rounded-full mt-2"></div>
                                    <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                        Especializarme en performance web
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mensaje final */}
                <div className="text-center">
                    <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-accent)] rounded-[var(--radius-box)] p-8 max-w-4xl mx-auto">
                        <h3 className="font-mono text-xl font-bold text-[var(--color-accent)] mb-4">
                            El viaje continúa...
                        </h3>
                        <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed">
                            Esta línea de tiempo representa mi crecimiento hasta ahora, pero la historia está lejos de terminar.
                            Cada día es una oportunidad para aprender algo nuevo, enfrentar desafíos más grandes y contribuir
                            a crear tecnología que impacte positivamente en el mundo. ¿Quieres ser parte de mi próximo capítulo?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonalTimeline