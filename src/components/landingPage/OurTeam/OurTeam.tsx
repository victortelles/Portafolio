"use client";

import React, { useCallback, useEffect, useRef } from "react"
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
// icons
import { FaGithub, FaXTwitter, FaLinkedin, FaDiscord, FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitch, FaReddit, FaPinterest, FaSnapchat, FaTelegram, FaWhatsapp, FaGlobe } from "react-icons/fa6"
import { SiThreads, SiDevdotto, SiMedium, SiDribbble, SiBehance, SiCodepen, SiStackoverflow } from "react-icons/si"
// Components
import * as Avatar from "@radix-ui/react-avatar"
import * as Tooltip from "@radix-ui/react-tooltip"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import content from "./content.json"
import type { TeamMember } from "@/types/content"

const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max);

const OurTeam: React.FC = () => {
    // Returns the appropriate React Icon for a given platform
    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "github":
                return FaGithub
            case "twitter":
                return FaXTwitter
            case "linkedin":
                return FaLinkedin
            case "discord":
                return FaDiscord
            case "youtube":
                return FaYoutube
            case "instagram":
                return FaInstagram
            case "facebook":
                return FaFacebook
            case "tiktok":
                return FaTiktok
            case "twitch":
                return FaTwitch
            case "reddit":
                return FaReddit
            case "pinterest":
                return FaPinterest
            case "snapchat":
                return FaSnapchat
            case "telegram":
                return FaTelegram
            case "whatsapp":
                return FaWhatsapp
            case "threads":
                return SiThreads
            case "dev":
                return SiDevdotto
            case "medium":
                return SiMedium
            case "dribbble":
                return SiDribbble
            case "behance":
                return SiBehance
            case "codepen":
                return SiCodepen
            case "stackoverflow":
                return SiStackoverflow
            case "website":
            case "web":
            case "site":
                return FaGlobe
            default:
                return FaGithub
        }
    }

    // Embla Carousel setup
    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    )
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        slidesToScroll: 1,
        dragFree: false,
    }, [autoplay.current])

    // Tween/scale effect
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode: Element) => {
            return (slideNode.querySelector('.embla__slide__inner') as HTMLElement)
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        if (!emblaApi) return;
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]
            slidesInSnap.forEach((slideIndex: number) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return
                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem: any) => {
                        const target = loopItem.target()
                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)
                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }
                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const scale = numberWithinRange(tweenValue, 0.85, 1).toString()
                const tweenNode = tweenNodes.current[slideIndex]
                if (tweenNode) tweenNode.style.transform = `scale(${scale})`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi, 'reInit')
        emblaApi
            .on('reInit', (api: EmblaCarouselType, evt: EmblaEventType) => { setTweenNodes(api); setTweenFactor(api); tweenScale(api, evt); })
            .on('scroll', (api: EmblaCarouselType, evt: EmblaEventType) => tweenScale(api, evt))
            .on('slideFocus', (api: EmblaCarouselType, evt: EmblaEventType) => tweenScale(api, evt))
    }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor])

    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {content.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--color-neutral-content)] max-w-2xl mx-auto">{content.subtitle}</p>
                </div>

                {/* Team Carousel */}
                <div className="relative">
                    <div className="embla__viewport overflow-hidden px-2" ref={emblaRef}>
                        <div className="embla__container flex touch-pan-x select-none -mx-4">
                            {content.members.map((member: TeamMember) => (
                                <div
                                    key={member.name}
                                    className="embla__slide flex-shrink-0 px-4"
                                    style={{
                                        minWidth: '260px',
                                        maxWidth: '280px',
                                        width: '90vw',
                                        height: '420px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div className="embla__slide__inner bg-[var(--color-base-200)] rounded-[var(--radius-box)] p-6 text-center border border-[var(--color-base-300)] hover:border-[var(--color-primary)]/30 transition-colors flex flex-col h-full justify-between shadow-lg w-full"
                                        style={{
                                            height: '100%',
                                            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                                        }}
                                    >

                                        {/* Avatar: always circular, never stretched */}
                                        <Avatar.Root className="inline-flex items-center justify-center mb-4 mx-auto border-2 border-[var(--color-base-300)]" style={{ width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', flex: 'none' }}>
                                            <Avatar.Image
                                                src={member.avatar || `/placeholder.svg?height=96&width=96&query=${member.name} profile photo`}
                                                alt={`${member.name} avatar`}
                                                className="object-cover"
                                                style={{ width: '96px', height: '96px', borderRadius: '50%', aspectRatio: '1/1', display: 'block' }}
                                            />
                                            <Avatar.Fallback className="bg-[var(--color-base-300)] flex items-center justify-center text-[var(--color-base-content)] font-semibold text-lg" style={{ width: '96px', height: '96px', borderRadius: '50%' }}>
                                                {member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </Avatar.Fallback>
                                        </Avatar.Root>

                                        {/* Info: limit text length for role and bio */}
                                        <h3 className="text-lg font-bold text-[var(--color-base-content)] mb-2">{member.name}</h3>
                                        <div className="text-[var(--color-primary)] font-semibold mb-2">
                                            {(() => {
                                                const paragraphs = member.role.split(/\r?\n/).slice(0, 2);
                                                return paragraphs.map((text, idx) => (
                                                    <p key={idx} className="mb-1 last:mb-0">{text}</p>
                                                ));
                                            })()}
                                        </div>
                                        <p className="text-[var(--color-neutral-content)] text-sm leading-relaxed mb-4">
                                            {member.bio.length > 120 ? member.bio.slice(0, 120) + '...' : member.bio}
                                        </p>

                                        {/* Social Links (always at the bottom, centered) */}
                                        <div className="mt-auto">
                                            <Tooltip.Provider>
                                                <div className="grid grid-cols-4 grid-rows-2 gap-2 justify-center items-center w-full max-w-xs mx-auto">
                                                    {(member.bio.length > 120
                                                        ? Object.entries(member.socials).slice(0, 4)
                                                        : Object.entries(member.socials).slice(0, 8)
                                                    ).map(([platform, url]) => {
                                                        const IconComponent = getSocialIcon(platform)
                                                        return (
                                                            <Tooltip.Root key={platform}>
                                                                <Tooltip.Trigger asChild>
                                                                    <a
                                                                        href={url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex items-center justify-center p-2 bg-[var(--color-base-300)] hover:bg-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary-content)] rounded-[var(--radius-field)] transition-colors"
                                                                        aria-label={`${member.name} on ${platform}`}
                                                                    >
                                                                        <IconComponent size={18} />
                                                                    </a>
                                                                </Tooltip.Trigger>
                                                                <Tooltip.Portal>
                                                                    <Tooltip.Content
                                                                        className="bg-[var(--color-base-300)] text-[var(--color-base-content)] px-2 py-1 rounded-[var(--radius-field)] text-sm"
                                                                        sideOffset={5}
                                                                    >
                                                                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                                        <Tooltip.Arrow className="fill-[var(--color-base-300)]" />
                                                                    </Tooltip.Content>
                                                                </Tooltip.Portal>
                                                            </Tooltip.Root>
                                                        )
                                                    })}
                                                </div>
                                            </Tooltip.Provider>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
