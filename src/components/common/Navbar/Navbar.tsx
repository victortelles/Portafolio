"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import content from "./content.json"
import type { NavItem } from "@/types/content"

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-[var(--color-base-100)]/95 backdrop-blur-sm border-b border-[var(--color-base-300)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <a
                            href="/"
                            className="text-xl font-bold transition-colors flex items-center gap-2"
                            aria-label="PalLink Home"
                        >
                            <img
                                src={content.brandLogo}
                                alt="Logo PalLink"
                                className="h-8 w-8 object-contain"
                            />
                            <span className="font-sans">
                                <span className="text-[var(--color-base-content)]">AH</span>
                                <span className="text-[var(--color-primary)]">Tyler</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu.Root className="hidden md:block">
                        <NavigationMenu.List className="flex space-x-8">
                            {content.navigation.map((item: NavItem) => (
                                <NavigationMenu.Item key={item.label}>
                                    <NavigationMenu.Link
                                        href={item.href}
                                        className="font-mono text-[var(--color-base-content)] hover:text-[var(--color-primary)] transition-colors px-3 py-2 text-sm font-medium"
                                    >
                                        {item.label}
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                            ))}
                        </NavigationMenu.List>
                    </NavigationMenu.Root>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[var(--color-base-content)] hover:text-[var(--color-primary)] p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t border-[var(--color-base-300)]">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {content.navigation.map((item: NavItem) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="font-mono block px-3 py-2 text-[var(--color-base-content)] hover:text-[var(--color-primary)] hover:bg-[var(--color-base-200)] rounded-[var(--radius-field)] transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
