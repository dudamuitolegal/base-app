import Slider from "@/app/components/Slider";
import Options from "@/app/components/Options"
import Info from "@/app/components/Info"
import {SemanticReadMore} from '@/app/components/SemanticReadmore';
import "swiper/css";
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

                    <SemanticReadMore initialHeight="250px">
                        <section className="py-8 text-white">

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 ">
                                468bet9: Sua Plataforma Definitiva de Apostas Online e Cassino
                            </h2>

                            <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                                Bem-vindo ao universo de emoção e prêmios da <strong className="font-semibold">468bet9</strong>! Se você busca uma experiência completa em apostas esportivas e jogos de cassino online, com segurança, variedade e as melhores odds, você encontrou o lugar certo. A <strong className="font-semibold">468bet9</strong> foi criada pensando em você, jogador exigente, que não abre mão de qualidade e diversão.
                            </p>

                            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 ">
                                Por Que a 468bet9 é a Sua Melhor Escolha?
                            </h3>

                            <p className="text-base lg:text-lg mb-6 leading-relaxed">
                                Na <strong className="font-semibold">468bet9</strong>, combinamos tecnologia de ponta com uma paixão por entretenimento para oferecer uma plataforma incomparável. Entendemos o que os jogadores brasileiros procuram e nos esforçamos para superar suas expectativas. Veja alguns dos nossos diferenciais:
                            </p>

                            <ul className="list-disc list-inside space-y-3 mb-8 text-base lg:text-lg  pl-4">
                                <li>
                                    <strong className="font-medium ">Variedade Imbatível:</strong> Explore milhares de eventos esportivos diariamente e uma vasta seleção de jogos de cassino, incluindo slots, roleta, blackjack e cassino ao vivo, tudo na <strong className="font-semibold">468bet9</strong>.
                                </li>
                                <li>
                                    <strong className="font-medium ">Segurança e Confiança:</strong> Operamos com licenças rigorosas e utilizamos as mais avançadas tecnologias de criptografia para garantir a proteção dos seus dados e transações na <strong className="font-semibold">468bet9</strong>.
                                </li>
                                <li>
                                    <strong className="font-medium ">Bônus e Promoções Generosas:</strong> Oferecemos um pacote de boas-vindas atrativo e promoções regulares para maximizar suas chances de ganhar na <strong className="font-semibold">468bet9</strong>.
                                </li>
                                <li>
                                    <strong className="font-medium ">Interface Intuitiva:</strong> Navegue facilmente pela nossa plataforma, seja no desktop ou no celular. A experiência <strong className="font-semibold">468bet9</strong> é otimizada para todos os dispositivos.
                                </li>
                                <li>
                                    <strong className="font-medium ">Suporte ao Cliente Dedicado:</strong> Nossa equipe de suporte está pronta para ajudar com qualquer dúvida ou questão sobre a <strong className="font-semibold">468bet9</strong>.
                                </li>
                            </ul>

                            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 ">
                                Apostas Esportivas na 468bet9: Viva a Emoção do Jogo
                            </h3>

                            <p className="text-base lg:text-lg mb-6 leading-relaxed">
                                Sinta a adrenalina de cada partida com as apostas esportivas da <strong className="font-semibold">468bet9</strong>. Cobrimos uma ampla gama de modalidades, desde futebol, basquete e tênis até eSports e muito mais. Oferecemos odds competitivas e diversos mercados de aposta para você montar sua estratégia vencedora na <strong className="font-semibold">468bet9</strong>. Aposte pré-jogo ou ao vivo e acompanhe os resultados em tempo real.
                            </p>

                            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 ">
                                Cassino Online 468bet9: Diversão e Prêmios a Qualquer Hora
                            </h3>

                            <p className="text-base lg:text-lg  mb-6 leading-relaxed">
                                Entre no nosso cassino online e descubra um mundo de entretenimento. A <strong className="font-semibold">468bet9</strong> traz os melhores jogos dos provedores mais renomados do mercado. Gire os rolos nos slots mais populares, teste sua sorte na roleta, desafie o dealer no blackjack ou experimente a imersão do nosso cassino ao vivo com dealers reais. A diversão é garantida na <strong className="font-semibold">468bet9</strong>!
                            </p>

                            <h3 className="text-2xl lg:text-3xl font-semibold mt-10 mb-4 ">
                                Comece a Jogar na 468bet9 Hoje Mesmo!
                            </h3>

                            <p className="text-base lg:text-lg  mb-6 leading-relaxed">
                                Registrar-se na <strong className="font-semibold">468bet9</strong> é rápido e fácil. Siga estes passos simples:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 mb-8 text-base lg:text-lg  pl-4">
                                <li>Acesse o site oficial da <strong className="font-semibold">468bet9</strong>.</li>
                                <li>Clique no botão de registro.</li>
                                <li>Preencha o formulário com seus dados.</li>
                                <li>Faça seu primeiro depósito e aproveite nosso bônus de boas-vindas!</li>
                            </ol>
                            <p className="text-lg lg:text-xl mt-10 mb-4 font-medium">
                                Não perca mais tempo! Junte-se à crescente comunidade de jogadores satisfeitos da <strong className="font-semibold">468bet9</strong> e descubra por que somos a melhor opção para suas apostas e jogos de cassino online.
                            </p>

                        </section>
                    </SemanticReadMore>
                </article>
            </section>

        </>
    );
}