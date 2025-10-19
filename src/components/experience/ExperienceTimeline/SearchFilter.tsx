"use client"

import React from "react"
import { FaSearch } from "react-icons/fa"
import type { SearchFilterProps } from "@/types/experience"

const SearchFilter: React.FC<SearchFilterProps> = ({
    searchTerm,
    onSearchChange,
    placeholder = "Buscar experiencias..."
}) => {
    return (
        <div className="relative mb-6">
            <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm" style={{ color: "var(--color-neutral-content)" }} />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg font-mono focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{
                        backgroundColor: "var(--color-base-200)",
                        borderColor: "var(--color-base-300)",
                        color: "var(--color-base-content)"
                    } as React.CSSProperties}
                />
            </div>

            {searchTerm && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => onSearchChange("")}
                        className="transition-colors duration-200"
                        style={{ 
                            color: "var(--color-neutral-content)"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = "var(--color-base-content)"
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = "var(--color-neutral-content)"
                        }}
                        aria-label="Limpiar búsqueda"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    )
}

export default SearchFilter