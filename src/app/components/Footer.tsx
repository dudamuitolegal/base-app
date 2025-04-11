import Link from "next/link";
import {siteConfig} from "@/utils/siteConfig";

export default function Footer() {
    return (
        <>


            <div
                className="bg-white rounded-lg shadow-sm mx-2  my-8 dark:bg-gray-800 sm:mx-8 md:mx-12 xl:mx-20 2xl:mx-28">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 -
                         <span className="hover:underline"> {siteConfig.name}™</span>. Todos os direitos reservados.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link rel="noopener noreferrer" href={siteConfig.defaultLink}
                                  className="hover:underline me-4 md:me-6">Cassino</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href={siteConfig.defaultLink}
                                  className="hover:underline me-4 md:me-6">Esportes</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href={siteConfig.defaultLink}
                                  className="hover:underline me-4 md:me-6">Termos e
                                Condições</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href={siteConfig.defaultLink}
                                  className="hover:underline">Comunidade</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}