"use client";

import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import sidebarDataRaw from "./floating-social-sidebar.json";

type SidebarItem = {
    label: string;
    url: string;
    description?: string;
    icon?: string;
    image?: string;
};

const sidebarData: SidebarItem[] = sidebarDataRaw;

const FloatingSocialSidebar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="fixed z-50 bottom-6 right-6 flex flex-col-reverse items-end">
            {/* Toggle Button: ALWAYS AT THE BOTTOM */}
            <button
                className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-[var(--color-primary)] text-[var(--color-primary-content)] transition-transform duration-300 focus:outline-none`}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close social sidebar" : "Open social sidebar"}
                style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
            >
                {/* Notification badge */}
                {!open && (
                    <span className="absolute top-2 right-2 w-6 h-6 bg-[var(--color-error)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-error-content)] animate-pulse border-2 border-[var(--color-primary)]">
                        1
                    </span>
                )}
                {/* Bell or X icon */}
                {open ? (
                    <FaX size={32} />
                ) : (
                    <FaBell size={32} />
                )}
            </button>
            {/* Social icons list (expands upward) */}
            <div
                className={`flex flex-col items-end transition-all duration-400 ease-in-out origin-bottom ${open ? "scale-y-100 opacity-100 mb-4" : "scale-y-0 opacity-0 pointer-events-none"}`}
                style={{ minWidth: "4rem" }}
            >
                {/* Render sidebar items only once */}
                {sidebarData.map((item) => {
                    // Only show the description field (max 3 lines)
                    const tooltipLines: string[] = item.description
                        ? item.description.split(/\r?\n/).slice(0, 3)
                        : [];

                    // Icon logic: try to resolve react-icon by string
                    let IconComponent: React.ElementType | null = null;
                    if (item.icon) {
                        switch (item.icon) {
                            case "FaDiscord":
                                IconComponent = FaDiscord;
                                break;
                            case "FaInstagram":
                                IconComponent = FaInstagram;
                                break;
                            case "FaXTwitter":
                                IconComponent = FaXTwitter;
                                break;
                            case "FaFacebookF":
                                IconComponent = FaFacebookF;
                                break;
                            default:
                                IconComponent = FaRegFaceSmileWink;
                        }
                    }

                    return (
                        <div key={item.label} className="relative my-2 flex items-center group">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                                onMouseEnter={() => setHovered(item.label)}
                                onMouseLeave={() => setHovered(null)}
                                tabIndex={open ? 0 : -1}
                                aria-label={item.label}
                            >
                                {/* Tooltip aligned left, icon/image right */}
                                <span
                                    className={`absolute right-16 px-5 py-3 rounded-[var(--radius-box)] bg-[var(--color-base-200)] text-[var(--color-primary)] shadow-xl text-base font-semibold transition-all duration-300 pointer-events-none select-none border border-[var(--color-primary)] flex flex-col items-start gap-1 ${hovered === item.label ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                    style={{
                                        filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.13))",
                                        minWidth: '180px',
                                        maxWidth: '260px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {tooltipLines.length > 0 && (
                                        <div className="text-[var(--color-base-content)] text-sm font-normal whitespace-pre-line leading-snug">
                                            {tooltipLines.map((line: string, i: number) => (
                                                <p key={i} className="truncate max-w-full mb-0.5 last:mb-0">{line}</p>
                                            ))}
                                        </div>
                                    )}
                                </span>
                                <div
                                    className={`w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-base-100)] shadow-md text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ml-2`}
                                >
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.label}
                                            className="w-8 h-8 object-contain"
                                            draggable="false"
                                        />
                                    ) : IconComponent ? (
                                        <IconComponent size={32} />
                                    ) : (
                                        <FaRegFaceSmileWink size={32} />
                                    )}
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FloatingSocialSidebar;
