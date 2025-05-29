'use client'
import {Poppins} from "next/font/google";
import Link from 'next/link';
import Image from "next/image";
import {siteConfig} from "@/utils/siteConfig";
import "@/app/globals.css";
import {
    Dices,
    Gift,
    Trophy, Tv, Volleyball,
    Calendar, Star, User, NotebookPen,
} from "lucide-react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {buttonVariants} from "@/components/ui/button";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],

})
export const itemsNav = [
    {
        title: "Cassino",
        icon: Dices,
    },
    {
        title: "Live cassino",
        icon: Tv,
    },
    {
        title: "Esportes",
        icon: Volleyball,
    },
    {
        title: "Torneios",
        icon: Trophy,
    },
    {
        title: "Promoções",
        icon: Gift,
    },
    {
        title: "Calendário",
        icon: Calendar,
    },
    {
        title: "Hall da fama",
        icon: Star,
    }
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Header({children}) {
    return (
        <header className={`${poppins.className} bg-gray-100 dark:bg-gray-900 py-2`}>
            <nav
                className="flex flex-col gap-4 py-2 px-2 sm:px-8 md:px-12 xl:px-36 2xl:px-44 container mx-auto lg:grid lg:grid-cols-2 xl:grid-cols-3">
                <div
                    className="flex flex-col justify-between items-center gap-4 md:grid md:grid-cols-3 lg:flex lg:flex-row lg:justify-start xl:grid xl:grid-cols-2 xl:col-span-2">
                    <div className={`absolute left-0 md:relative md:col-span-1`}>
                        {children}
                    </div>
                    <div className={`flex items-center md:col-span-1 justify-center`}>
                        <Link href="/" target="_blank" rel="noopener noreferrer"
                              className="flex items-center flex-col">
                            <Image
                                className={`dark:invert`}
                                src={siteConfig.logo}
                                alt="Logo"
                                width={siteConfig.logoWidth}
                                height={siteConfig.logoHeight}
                            />
                        </Link>
                    </div>

                </div>
                <div className={`flex gap-4 w-full justify-center items-center lg:justify-end`}>
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
                        <span className={`flex items-center gap-2 main_gradient`}>
                            <NotebookPen className={`text-[#de35ea]`}/> Cadastrar
                        </span>
                    </Link>
                </div>
                <ScrollArea className={`w-full whitespace-nowrap lg:col-span-full lg:mt-2`}>
                    <div className={`flex gap-5 items-center justify-center sm:gap-8`}>
                        {itemsNav.map((item) => (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={siteConfig.defaultLink}
                                key={item.title}
                                className={`group flex flex-col gap-1 items-center md:flex-row transition-colors duration-200`}
                            >
        <span>
            {item.icon && (
                <item.icon
                    className={`text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200`} // Added transition here too for consistency
                />
            )}
        </span>
                                <span
                                    className={`text-gray-500 dark:text-gray-400 text-xs group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200`} // Added transition here too
                                >
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