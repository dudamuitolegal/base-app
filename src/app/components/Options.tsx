import Link from "next/link";
import Image from "next/image";
import {Star} from "lucide-react"
import {siteConfig} from "@/utils/siteConfig";

const options = [
    {id: 1, alt: "Tigre Sortudo", image: "/home/games-images/tigre-sortudo.webp", title: "Jogos do Mês"},
    {id: 2, alt: "Wild West Duels", image: "/home/games-images/wild-west-duels.webp", title: "Slots Games"},
    {id: 3, alt: "High Flyer", image: "/home/games-images/high-flyer.webp", title: "Crash Games"},
    {id: 4, alt: "Baccarat Live", image: "/home/games-images/baccarat-live.webp", title: "Cassino ao Vivo"},
];


export default function Options() {
    return (
        <>
            <div className="px-2 mt-8 sm:px-8 md:px-12 xl:px-20 2xl:px-28">
                <h2 className="text-white flex items-center gap-1 font-bold text-lg pb-2 xl:text-2xl">
                    <span className="bg-white rounded-full p-1">
                        <Star strokeWidth={2} size={20} color='#000'/>
                    </span>
                    Principais categorias
                </h2>
                <div className={`grid grid-cols-2 gap-2.5 sm:grid-cols-4`}>
                    {options.map((option) => (
                        <Link style={{transition: '0.3s'}} key={option.id} className={`relative col-span-1 overflow-hidden rounded-lg border-2 border-[#f6f3f436] transition-transform ease-in-out hover:-translate-y-1`}
                              href={siteConfig.defaultLink}>
                            <div className={`relative`}>
                            <span
                                className={`absolute left-1 top-1 flex gap-1 bg-[#000000a8] text-white font-bold text-xs items-center rounded-lg p-2`}>{option.title}</span>
                                <Image
                                    className={`w-full h-full object-fit`}
                                    src={option.image}
                                    alt={option.alt}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </Link>
                    ))}


                </div>
            </div>
        </>
    )
}