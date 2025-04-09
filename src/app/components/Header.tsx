'use client' // Apenas se precisar de interactividade (estados, efeitos)
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
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],

})

export default function Header() {
    return (
        <header className={`${poppins.className} bg-[#061D47] rounded-b-md`}>
            <nav className="flex flex-col gap-2 px-8 py-2 md:px-12 container mx-auto xl:px-20 2xl:px-28 xl:py-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href={siteConfig.defaultLink} className="flex items-center flex-col">
                        <Image
                        src={siteConfig.logo}
                        alt="Logo"
                        width={siteConfig.logoWidth}
                        height={siteConfig.logoHeight}
                        />
                    </Link>
                    <div className={`hidden xl:flex gap-4`}>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Receipt size={22}  /> <span className={`text-xs 2xl:text-base`}>Slots</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Dices size={22} /> <span className={`text-xs 2xl:text-base`}>Cassino</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Volleyball size={22} /> <span className={`text-xs 2xl:text-base`}>Esportes</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Gamepad2 size={22} /> <span className={`text-xs 2xl:text-base`}>E-sports</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Trophy size={22} /> <span className={`text-xs 2xl:text-base`}>Torneios</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 text-white lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Tag size={22}/> <span className={`text-xs 2xl:text-base`}>Promoções</span></Link>
                    </div>
                    <div className={`flex gap-1.5`}>
                        <Link href={siteConfig.defaultLink} className="hover:bg-[#3970ca] duration-300 transition-colors text-sm border border-[#f6f3f436] rounded-md p-2 bg-[#0B2559]">
                            <span className={`flex items-center text-white font-light`}><User
                               /> Entrar</span>
                        </Link>
                        <Link href={siteConfig.defaultLink}  className="hover:bg-[#3970ca] duration-300 transition-colors text-sm border border-[#f6f3f436] rounded-md p-2 bg-[#0B2559]">
                            <span className={`flex items-center text-white font-light`}><NotebookPen
                               /> Cadastrar</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className={`fixed bottom-0 bg-[#061D47] px-8 w-full rounded-t-md border border-[#f6f3f436] z-10 flex justify-center md:px-12 lg:relative lg:rounded-none lg:border-none lg:container lg:mx-auto xl:hidden`}>
                <div className="scrollbar-ghost lg:w-full">
                    <div className="flex gap-10 text-white font-light min-w-max py-2 lg:justify-between lg:w-full lg:gap-4">
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Receipt size={24}  /> <span className={`text-xs`}>Slots</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Dices size={24} /> <span className={`text-xs`}>Cassino</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Volleyball size={24} /> <span className={`text-xs`}>Esportes</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Gamepad2 size={24} /> <span className={`text-xs`}>E-sports</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Trophy size={24} /> <span className={`text-xs`}>Torneios</span></Link>
                        <Link className={`hover:bg-[#3970ca] duration-300 transition-colors flex flex-col items-center gap-2 lg:flex-row lg:p-2 lg:border-[0.5px] border-[#f6f3f436] rounded-lg`} href={siteConfig.defaultLink} ><Tag size={24}/> <span className={`text-xs`}>Promoções</span></Link>
                    </div>
                </div>

            </nav>

        </header>
    )
}