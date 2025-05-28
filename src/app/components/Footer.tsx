'use client'
import React from 'react';
import { IconContext } from "react-icons";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/utils/siteConfig";



const footerSectionsData = [
    
    {
        title: "Cassino",
        links: [
            {name: "Pagou Mais Hoje"},
            {name: "Jogos Populares"},
            {name: "Slots"},
            {name: "Cassino ao Vivo"},
            {name: "Torneios"},
        ],
    },
    {
        title: "Esportes",
        links: [
            {name: "Pré-jogo"},
            {name: "Jogos Ao Vivo"},
            {name: "Futebol"},
            {name: "Basquete"},
            {name: "Tênis"},
        ],
    },
    {
        title: "Legal",
        links: [
            {name: "Termos e Condições"},
            {name: "Termos e Condições Gerais"},
            {name: "Política de Privacidade"},
            {name: "Política de Cookies"},
            {name: "Regras das Apostas Esportivas"},
        ],
    },
    {
        title: "Comunidade",
        links: [
            {name: "Afiliados"},
            {name: "Blog"},
            {name: "Instagram"},
            {name: "TikTok"},
            {name: "Twitter"},
            {name: "Telegram"},
        ],
    },
    {
        title: "Ajuda",
        links: [
            {name: "Central de Ajuda"},
            {name: "Jogo Responsável"},
        ],
    },
];


export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl mx-auto px-2 sm:px-8 md:px-12 xl:px-36 2xl:px-44 py-6 lg:py-8">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-8">
                    {footerSectionsData.map((section) => (
                        <div key={section.title}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                {section.title}
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                {section.links.map((link) => (
                                    <li key={link.name} className="mb-4 text-xs">
                                        <Link href={siteConfig.defaultLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" className="hover:underline">
                            {siteConfig.name}™
                        </Link>
                        . Todos os direitos reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
                        <Link href={siteConfig.defaultLink} target="_blank" rel="noopener noreferrer"  className={`flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors`}>
                            <IconContext.Provider value={{ className: "dark:text-white text-black !h-6 !w-6 mr-2", }}>
                                <FaApple />
                            </IconContext.Provider>
                            <div className="flex flex-col justify-center">
                                <span className={`text-xs text-gray-600 dark:text-gray-400`}>Disponível na</span>
                                <span className={`text-sm font-semibold text-gray-900 dark:text-white`}>App Store</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.defaultLink} target="_blank" rel="noopener noreferrer" className={`flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors`}>
                            <IconContext.Provider value={{ className: "dark:text-white text-black !h-6 !w-6 mr-2", }}>
                                <FaGooglePlay />
                            </IconContext.Provider>
                            <div className="flex flex-col justify-center">
                                <span className={`text-xs text-gray-600 dark:text-gray-400`}>Disponível na</span>
                                <span className={`text-sm font-semibold text-gray-900 dark:text-white`}>Google Play</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}