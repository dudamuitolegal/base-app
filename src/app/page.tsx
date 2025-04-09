import type {Metadata} from "next";
import Slider from "@/app/components/Slider";
import Options from "@/app/components/Options"
import Info from "@/app/components/Info"
import {siteConfig} from "@/utils/siteConfig"
import {SemanticReadMore} from '@/app/components/SemanticReadmore';

export default function Home() {
    return (
        <>
            <section className={`container mx-auto`}>
                <Slider></Slider>
            </section>


            <section className={`container mx-auto`}>
                <Info></Info>
            </section>

            <section className={`container mx-auto`}>
                <Options></Options>
            </section>

            <section className={`container mx-auto `}>
                <article className="py-8 px-2 mt-8 sm:px-8 md:px-12 xl:px-20 2xl:px-28">
                    <h2 className="text-4xl font-bold mb-6">Meu Artigo Completo</h2>

                    <SemanticReadMore initialHeight="250px">
                        <section className={`text-white`}>
                            <h2 className="text-2xl font-semibold mt-6 mb-4">Introdução</h2>
                            <p className="mb-4">Parágrafo inicial visível com conteúdo importante...</p>

                            <h2 className="text-2xl font-semibold mt-6 mb-4">Desenvolvimento</h2>
                            <p className="mb-4">Texto detalhado com várias seções...</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Item de lista 1</li>
                                <li>Item de lista 2</li>
                            </ul>

                            <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusão</h2>
                            <p>Texto final com considerações importantes...</p>
                        </section>
                    </SemanticReadMore>
                </article>
            </section>

        </>
    );
}