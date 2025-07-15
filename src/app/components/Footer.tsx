'use client'
import React from 'react';
import {IconContext} from "react-icons";
import {FaApple, FaGooglePlay} from "react-icons/fa";
import Link from "next/link";
import {siteConfig} from "@/utils/siteConfig";

const footerSectionsData = [
    {
        title: "Cassino",
        links: [
            {name: "Pagou Mais Hoje", link: "pagou-mais-hoje"},
            {name: "Jogos Populares", link: "jogos-populares"},
            {name: "Slots", link: "slots"},
            {name: "Cassino ao Vivo", link: "cassino-ao-vivo"},
            {name: "Torneios", link: "torneios"},
        ],
    },
    {
        title: "Esportes",
        links: [
            {name: "Pré-jogo", link: "pre-jogo"},
            {name: "Jogos Ao Vivo", link: "jogos-ao-vivo"},
            {name: "Futebol", link: "futebol"},
            {name: "Basquete", link: "basquete"},
            {name: "Tênis", link: "tenis"},
        ],
    },
    {
        title: "Legal",
        links: [
            {name: "Termos e Condições", link: "termos-e-condicoes"},
            {name: "Termos e Condições Gerais", link: "termos-e-condicoes-gerais"},
            {name: "Política de Privacidade", link: "politica-de-privacidade"},
            {name: "Política de Cookies", link: "politica-de-cookies"},
            {name: "Regras das Apostas Esportivas", link: "regras-das-apostas-esportivas"},
        ],
    },
    {
        title: "Comunidade",
        links: [
            {name: "Afiliados", link: "afiliados"},
            {name: "Blog", link: "blog"},
            {name: "Instagram", link: "instagram"},
            {name: "TikTok", link: "tiktok"},
            {name: "Twitter", link: "twitter"},
            {name: "Telegram", link: "telegram"},
        ],
    },
    {
        title: "Ajuda",
        links: [
            {name: "Central de Ajuda", link: "central-de-ajuda"},
            {name: "Jogo Responsável", link: "jogo-responsavel"},
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="w-full px-4 py-8">
                <div className="grid grid-cols-2 gap-8 mb-8">
                    {footerSectionsData.map((section) => (
                        <div key={section.title}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                {section.title}
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                {section.links.map((link) => (
                                    <li key={link.name} className="mb-4 text-xs">
                                        <Link href={`${siteConfig.defaultLink}${link.link}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ALTERADO: Removido o margin responsivo. */}
                <hr className="my-8 border-gray-200 dark:border-gray-700" />


                <div className="flex flex-col items-center gap-6">
                    <span className="text-sm text-gray-500 text-center dark:text-gray-400"> {/* ALTERADO: 'sm:text-center' para 'text-center' para ser sempre centralizado. */}
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" className="hover:underline">
                            {siteConfig.name}™
                        </Link>
                        . Todos os direitos reservados.
                    </span>
                    {/* ALTERADO: Layout simplificado, removendo margens e alinhamentos responsivos. */}
                    <div className="flex justify-center space-x-4">
                        <Link href={siteConfig.defaultLink} target="_blank" rel="noopener noreferrer"  className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <IconContext.Provider value={{ className: "dark:text-white text-black !h-6 !w-6 mr-2" }}>
                                <FaApple />
                            </IconContext.Provider>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Disponível na</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">App Store</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.defaultLink} target="_blank" rel="noopener noreferrer" className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <IconContext.Provider value={{ className: "dark:text-white text-black !h-6 !w-6 mr-2" }}>
                                <FaGooglePlay />
                            </IconContext.Provider>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Disponível na</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Google Play</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}