'use client'
import {Poppins} from "next/font/google";
import Link from 'next/link';
import Image from "next/image";
import {siteConfig} from "@/utils/siteConfig";
import "@/app/globals.css";
import {
    User,
    NotebookPen,
    Receipt,
    Dices,
    Volleyball,
    Gamepad2,
    Trophy,
    Tag,

} from "lucide-react"

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],

})

export default function Header() {
    return (
        <header className={`${poppins.className} bg-[#154633] rounded-b-md`}>
            <nav className="flex flex-col gap-2 px-8 py-2 md:px-12 container mx-auto xl:px-20 2xl:px-28 xl:py-6">
                <div className="flex justify-between items-center">

                    <Link href={siteConfig.defaultLink} className="flex items-center flex-col">
                        <Image
                            src={siteConfig.logo}
                            alt="Logo"
                            width={siteConfig.logoWidth}
                            height={siteConfig.logoHeight}
                        />
                    </Link>
                    <div className={`hidden xl:flex gap-4`}>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Receipt size={22}/> <span
                            className={`text-xs 2xl:text-base`}>Slots</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Dices size={22}/> <span
                            className={`text-xs 2xl:text-base`}>Cassino</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Volleyball size={22}/> <span
                            className={`text-xs 2xl:text-base`}>Esportes</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Gamepad2 size={22}/> <span
                            className={`text-xs 2xl:text-base`}>E-sports</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Trophy size={22}/> <span
                            className={`text-xs 2xl:text-base`}>Torneios</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Tag size={22}/> <span
                            className={`text-xs 2xl:text-base`}>Promoções</span></Link>
                    </div>
                    <div className={`flex justify-center gap-1.5 w-full max-w-58`}>
                        <Link href={siteConfig.defaultLink}
                              className="flex justify-center flex-1 hover:bg-transparent text-[#22674B] hover:text-white duration-300 transition-colors text-sm border border-[#F9FD4E] rounded-md p-2 bg-[#F9FD4E]">
                        <span className={`flex items-center gap-2`}>
                            <User/> Entrar
                        </span>
                        </Link>
                        <Link href={siteConfig.defaultLink}
                              className="flex justify-center flex-1 text-[#F9FD4E] hover:text-white duration-300 transition-colors text-sm border border-[#F9FD4E] rounded-md p-2">
                        <span className={`flex items-center gap-2`}>
                            <NotebookPen/> Cadastrar
                        </span>
                        </Link>
                    </div>
                </div>
            </nav>
            <nav
                className={`fixed bottom-0 bg-[#1C533E] px-8 w-full rounded-t-md border border-[#f6f3f436] z-10 flex justify-center md:px-12 lg:bg-[#154633] lg:relative lg:rounded-none lg:border-none lg:container lg:mx-auto xl:hidden `}>
                <div className="scrollbar-ghost lg:w-full">
                    <div
                        className="flex gap-10 text-[#70A291] font-light min-w-max py-2 lg:justify-between lg:w-full lg:gap-4">
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Receipt size={24}/> <span className={`text-xs`}>Slots</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Dices size={24}/> <span className={`text-xs`}>Cassino</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Volleyball size={24}/> <span
                            className={`text-xs`}>Esportes</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Gamepad2 size={24}/> <span
                            className={`text-xs`}>E-sports</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Trophy size={24}/> <span
                            className={`text-xs`}>Torneios</span></Link>
                        <Link
                            className={`hover:text-[#F9FD4E] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`}
                            href={siteConfig.defaultLink}><Tag size={24}/> <span className={`text-xs`}>Promoções</span></Link>
                    </div>
                </div>

            </nav>

        </header>
    )
}