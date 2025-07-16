'use client'
import {Poppins} from "next/font/google";
import Link from 'next/link';
import Image from "next/image";
import {siteConfig} from "@/utils/siteConfig";
import "@/app/globals.css";
import {
    Dices, Gift, Trophy, Tv, Volleyball,
    Calendar, Star, User, NotebookPen,
} from "lucide-react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {buttonVariants} from "@/components/ui/button";
import React from "react";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})

export const itemsNav = [
    {
        title: "Cassino",
        icon: Dices,
        link: "cassino",
    },
    {
        title: "Live cassino",
        icon: Tv,
        link: "live-cassino",
    },
    {
        title: "Esportes",
        icon: Volleyball,
        link: "esportes",
    },
    {
        title: "Torneios",
        icon: Trophy,
        link: "torneios",
    },
    {
        title: "Promoções",
        icon: Gift,
        link: "promocoes",
    },
    {
        title: "Calendário",
        icon: Calendar,
        link: "calendario",
    },
    {
        title: "Hall da fama",
        icon: Star,
        link: "hall-da-fama",
    }
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Header({children}) {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                element.scrollTo({
                    left: element.scrollLeft + e.deltaY,
                    behavior: 'smooth'
                });
            };
            element.addEventListener('wheel', onWheel);
            return () => element.removeEventListener('wheel', onWheel);
        }
    }, []);


    return (
        <header className={`${poppins.className} bg-gray-100 dark:bg-surface py-2 border-b border-gray-50/10`}>
            <nav className="flex flex-col gap-4 py-2 px-4">
                <div className="flex justify-between items-center w-full">
                    <div>
                        {children}
                    </div>

                    <Link href="/" className="flex-shrink-0">
                        <Image
                            className="dark:invert"
                            src={siteConfig.logo}
                            alt="Logo"
                            width={siteConfig.logoWidth}
                            height={siteConfig.logoHeight}
                        />
                    </Link>

                    <div className="flex gap-2 items-center">
                        <Link href={siteConfig.defaultLink}
                              target="_blank" rel="noopener noreferrer"
                              className={`${buttonVariants({variant: "outline"})} duration-300 transition-colors hover:bg-gray-700 cursor-pointer`}
                        >
                            <User/> Entrar
                        </Link>

                        <Link href={siteConfig.defaultLink}
                              target="_blank" rel="noopener noreferrer"
                              className={`${buttonVariants({variant: "default"})} bg-[#f3edf7] cursor-pointer`}
                        >
                            <span className="flex items-center gap-2 main_gradient">
                                <NotebookPen className="text-[#de35ea]"/> Cadastrar
                            </span>
                        </Link>
                    </div>
                </div>

                <ScrollArea className="w-full whitespace-nowrap">
                    <div ref={scrollRef} className="flex gap-6 items-center justify-start">
                        {itemsNav.map((item) => (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${siteConfig.defaultLink}${item.link}`}
                                key={item.title}
                                className="group flex flex-col gap-1 items-center transition-colors duration-200"
                            >
                                <span>
                                    {item.icon && (
                                        <item.icon
                                            className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200"
                                        />
                                    )}
                                </span>
                                <span
                                    className="text-gray-500 dark:text-gray-400 text-xs group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                    {item.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
            </nav>
        </header>
    )
}