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

                    <SemanticReadMore initialHeight="160px">
                        {/* Mantendo a estrutura interna sem padding/mx-auto, como no exemplo */}
                        <section className="text-white">

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
                                468bet: Sua Plataforma Definitiva de Apostas e Cassino Online!
                            </h2>

                            <p className="mb-6 text-lg leading-relaxed">
                                Bem-vindo à <strong className="font-semibold">468bet</strong>! Se você estava
                                procurando por nós, chegou ao lugar certo para encontrar a melhor experiência em apostas
                                esportivas e jogos de cassino na internet. A <strong
                                className="font-semibold">468bet</strong> foi criada pensando em você, jogador
                                brasileiro, oferecendo um ambiente seguro, moderno, repleto de opções e com grandes
                                chances de vitória.
                            </p>

                            <h3 className="text-2xl font-bold mt-8 mb-4">
                                Por Que a 468bet é a Sua Melhor Aposta?
                            </h3>

                            <p className="mb-4 leading-relaxed">
                                Escolher a <strong className="font-semibold">468bet</strong> significa optar por
                                qualidade, segurança e diversão garantida. Confira nossos diferenciais:
                            </p>

                            <ul className="list-disc list-inside mb-6 space-y-3 pl-4">
                                <li className="leading-relaxed">
                                    <strong className="font-semibold">Universo Completo 468bet:</strong> Aqui você
                                    encontra tudo em um só lugar! Uma vasta seleção dos melhores slots, jogos de mesa
                                    clássicos (como Roleta e Blackjack), a emoção do cassino ao vivo com dealers reais e
                                    uma cobertura esportiva completa para suas apostas, incluindo futebol, basquete,
                                    eSports e muito mais.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="font-semibold">Segurança Blindada:</strong> A proteção dos seus
                                    dados é fundamental na <strong className="font-semibold">468bet</strong>.
                                    Utilizamos as mais avançadas tecnologias de segurança e criptografia para garantir
                                    que suas informações e transações estejam sempre protegidas.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="font-semibold">Bônus e Promoções Imperdíveis:</strong> Turbine
                                    sua experiência na <strong className="font-semibold">468bet</strong> desde o
                                    início! Oferecemos um excelente bônus de boas-vindas, além de promoções regulares,
                                    cashback e ofertas exclusivas para nossos jogadores.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="font-semibold">Jogue Onde Quiser:</strong> A plataforma <strong
                                    className="font-semibold">468bet</strong> é totalmente otimizada para dispositivos
                                    móveis. Acesse do seu celular ou tablet com a mesma qualidade e fluidez, sem
                                    precisar baixar nada.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="font-semibold">Suporte ao Cliente 468bet:</strong> Nossa equipe
                                    de suporte está sempre pronta para te ajudar! Conte com atendimento rápido,
                                    eficiente e em português para solucionar qualquer dúvida.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold mt-8 mb-4">
                                Explore a Variedade de Jogos e Mercados na 468bet
                            </h3>

                            <p className="mb-6 leading-relaxed">
                                A diversidade é a marca registrada da <strong
                                className="font-semibold">468bet</strong>. Navegue por centenas de slots com temas
                                incríveis e recursos bônus. Sinta a adrenalina das mesas de cassino ao vivo, interagindo
                                com dealers profissionais. Ou mostre seu conhecimento esportivo apostando nos seus times
                                e atletas favoritos com odds competitivas e uma ampla gama de mercados. Na <strong
                                className="font-semibold">468bet</strong>, sempre há algo novo para você!
                            </p>


                            <h3 className="text-2xl font-bold mt-8 mb-4">
                                Faça Parte da 468bet Hoje Mesmo!
                            </h3>

                            <p className="mb-6 text-lg leading-relaxed">
                                Não espere mais para entrar na ação! O cadastro na <strong
                                className="font-semibold">468bet</strong> é simples, rápido e totalmente seguro. Crie
                                sua conta em poucos minutos, faça seu primeiro depósito, garanta seu bônus de
                                boas-vindas e descubra um mundo de entretenimento e possibilidades de ganho que só
                                a <strong className="font-semibold">468bet</strong> oferece. Sua próxima grande
                                vitória pode estar aqui!
                            </p>

                        </section>
                    </SemanticReadMore>
                </article>
            </section>
        </>
    );
}