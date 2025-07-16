// app/components/MorePay.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DollarSign, User } from "lucide-react";
import { siteConfig } from "@/utils/siteConfig";
import priceUtils from "@/utils/formatPrice";

// NOVO: Importando os componentes do Carousel do Shadcn
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // O mesmo plugin de autoplay

const slides = [
    {
        id: 1,
        alt: "Ícone do jogo Aviator - caça-níqueis com tema de aviação",
        image: "/home/games-images/aviator.webp",
        link: "aviator"
    },
    {
        id: 2,
        alt: "Logo do jogo Big Bass Bonanza - caça-níqueis de pesca com prêmios grandes",
        image: "/home/games-images/big-bass-bonanza.webp",
        link: "big-bass-bonanza"
    },
    {
        id: 3,
        alt: "Imagem do jogo Big Bass Splash - caça-níqueis aquático com bônus especiais",
        image: "/home/games-images/big-bass-splash.webp",
        link: "big-bass-splash"
    },
    {
        id: 4,
        alt: "Símbolo do jogo Fortune Ox - caça-níqueis asiático com tema de boi da sorte",
        image: "/home/games-images/fortune-ox.webp",
        link: "fortune-ox"
    },
    {
        id: 5,
        alt: "Ilustração do jogo Fortune Rabbit - caça-níqueis com coelho da fortuna e moedas douradas",
        image: "/home/games-images/fortune-rabbit.webp",
        link: "fortune-rabbit"
    },
    {
        id: 6,
        alt: "Logo do jogo Fortune Snake - caça-níqueis com serpente chinesa e símbolos de prosperidade",
        image: "/home/games-images/fortune-snake.webp",
        link: "fortune-snake"
    },
    {
        id: 7,
        alt: "Imagem do jogo Gates of Olympus - caça-níqueis mitológico com deuses gregos",
        image: "/home/games-images/gates-of-olympus.webp",
        link: "gates-of-olympus"
    },
    {
        id: 8,
        alt: "Símbolo do jogo Fortune Tiger - caça-níqueis com tigre asiático e rodas de prêmios",
        image: "/home/games-images/fortune-tiger.webp",
        link: "fortune-tiger"
    },
    {
        id: 9,
        alt: "Ícone do jogo Sweet Bonanza - caça-níqueis colorido com doces e frutas explosivas",
        image: "/home/games-images/sweet-bonanza.webp",
        link: "sweet-bonanza"
    }
];

export default function MorePay() {
    return (
        <>
            <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl mt-4">
                <div className="flex items-center gap-4 justify-between">
                    <h2 className="flex gap-2 items-center prose dark:prose-invert font-semibold">
                        <DollarSign className="w-6 h-6"/>Pagando mais hoje
                    </h2>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 6000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="mt-2"
                >
                    <CarouselContent className="-ml-2">
                        {slides.map((slide) => (
                            <CarouselItem key={slide.id} className="basis-2/5 pl-2">
                                <Link className="relative block" href={`${siteConfig.defaultLink}${slide.link}`} target="_blank" rel="noopener noreferrer">
                                    <span className="absolute left-2 top-2 flex gap-1 bg-[#000000a8] text-white text-xs items-center rounded-lg p-1 z-10">
                                        <User color="#3CD921" size={20}/>
                                        <span suppressHydrationWarning={true}>
                                            {priceUtils.generateRandomThreeDigits()}
                                        </span>
                                    </span>
                                    <div className="rounded-lg border-2 border-[#f6f3f436] overflow-hidden">
                                        <Image
                                            className="block transition-transform duration-300 ease-in-out hover:scale-110"
                                            src={slide.image}
                                            width={300}
                                            height={300}
                                            alt={slide.alt}
                                            title={slide.alt}
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-white flex items-center gap-1 mt-1">
                                        <span className="bg-yellow-400 rounded-full p-1">
                                            <DollarSign strokeWidth={2} size={14} color='#000'/>
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-gray-800 dark:text-gray-300 uppercase font-semibold text-xs">
                                                Pagou hoje
                                            </span>
                                            <span className="text-yellow-800 dark:text-yellow-400 font-bold text-xs">
                                                <span suppressHydrationWarning={true}>
                                                    {priceUtils.generateRandomMillion()}
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}