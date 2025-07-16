"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Rocket, Play, Heart} from "lucide-react";
import {siteConfig} from "@/utils/siteConfig";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const releaseSlides = [
    {id: 2, alt: "1001 Mystery Genie Fortunes", image: "/home/games-images/1001mysterygeniefortunes_icon.webp", link: "1001-mystery-genie-fortunes"},
    {id: 3, alt: "Anubisii Double Max", image: "/home/games-images/anubisiidoublemax_icon.webp", link: "anubisii-double-max"},
    {id: 4, alt: "Dragons Blessings Loot Link", image: "/home/games-images/dragonsblessingslootlink_icon.webp", link: "dragons-blessings-loot-link"},
    {id: 5, alt: "Easter Classics", image: "/home/games-images/easterclassics_icon.webp", link: "easter-classics"},
    {id: 6, alt: "Fortune Crown", image: "/home/games-images/fortunecrown_icon.webp", link: "fortune-crown"},
    {id: 7, alt: "King Of The Sky", image: "/home/games-images/kingofthesky_icon.webp", link: "king-of-the-sky"},
    {id: 8, alt: "Lava Burst", image: "/home/games-images/lavaburst_icon.webp", link: "lava-burst"},
    {id: 9, alt: "Piggy Mania", image: "/home/games-images/piggymania_icon.webp", link: "piggy-mania"},
    {id: 10, alt: "Ride The Lightning", image: "/home/games-images/ridethelightning_icon.webp", link: "ride-the-lightning"},
    {id: 11, alt: "Rush Riches", image: "/home/games-images/rushriches_icon.webp", link: "rush-riches"},
    {id: 12, alt: "Trinity Pharaoh Link Running Wins", image: "/home/games-images/trinitypharaohlinkrunningwins_icon.webp", link: "trinity-pharaoh-link-running-wins"},
    {id: 13, alt: "Vikings Go To Olympus Wild Fight", image: "/home/games-images/vikingsgotoolympuswildfight_icon.webp", link: "vikings-go-to-olympus-wild-fight"},
    {id: 14, alt: "Wild Calacas", image: "/home/games-images/wildcalacas_icon.webp", link: "wild-calacas"}
];

export default function ReleaseSlider() {
    return (
        <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl">
            <div className="flex items-center gap-4 justify-between">
                <h2 className="flex gap-2 items-center prose dark:prose-invert font-semibold">
                    <Rocket className="w-6 h-6"/>Lançamentos
                </h2>
            </div>
            <Carousel
                opts={{align: "start", loop: true}}
                plugins={[Autoplay({delay: 3000, stopOnInteraction: true})]}
                className="mt-2"
            >
                <CarouselContent className="-ml-2">
                    {releaseSlides.map((slide) => (
                        <CarouselItem key={slide.id} className="basis-2/5 pl-2">
                            <Link rel="noopener noreferrer"
                                  className="relative block effect-cards overflow-hidden rounded-lg"
                                  href={`${siteConfig.defaultLink}${slide.link}`}>
                                <Image className="block" src={slide.image} width={140} height={95}
                                       alt={slide.alt} title={slide.alt} loading="lazy"/>
                                <div className="overlay" aria-hidden="true"></div>
                                <div className="play"><Play className="text-white"/></div>
                                <div className="heart"><Heart className="text-white" size={20}/></div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}