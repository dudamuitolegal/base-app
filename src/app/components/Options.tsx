import Link from "next/link";
import Image from "next/image";
import {Star} from "lucide-react"
import {siteConfig} from "@/utils/siteConfig";
import React from "react";

const options = [
    {
        id: 1,
        alt: "Tigre Sortudo",
        image: "/home/games-images/tigre-sortudo.webp",
        title: "Jogos do Mês",
        link: "jogos-do-mes"
    },
    {
        id: 2,
        alt: "Wild West Duels",
        image: "/home/games-images/wild-west-duels.webp",
        title: "Slots Games",
        link: "slots-games"
    },
    {
        id: 3,
        alt: "High Flyer",
        image: "/home/games-images/high-flyer.webp",
        title: "Crash Games",
        link: "crash-games"
    },
    {
        id: 4,
        alt: "Baccarat Live",
        image: "/home/games-images/baccarat-live.webp",
        title: "Cassino ao Vivo",
        link: "cassino-ao-vivo"
    },
];

export default function Options() {
    return (
        <>
            <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl">
                <div className="flex items-center gap-4 justify-between">
                    <h2 className="flex gap-2 items-center prose dark:prose-invert font-semibold">
                        <Star className="w-6 h-6"/>Mais populares
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mt-2">
                    {options.map((option) => (
                        <Link style={{transition: '0.3s'}} key={option.id}
                              className="relative col-span-1 overflow-hidden rounded-lg border-2 border-[#f6f3f436]"
                              href={`${siteConfig.defaultLink}${option.link}`}
                              target="_blank" rel="noopener noreferrer"
                        >
                            <div className="relative">
                                <span className="absolute left-1 top-1 flex gap-1 bg-[#000000a8] text-white font-bold text-xs items-center rounded-lg p-2 z-10">
                                    {option.title}
                                </span>
                                <div className="block overflow-hidden">
                                    <Image
                                        className="w-full h-full object-cover block transition-transform duration-300 ease-in-out hover:scale-110" // ALTERADO: object-fit para object-cover para melhor preenchimento.
                                        src={option.image}
                                        alt={option.alt}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}