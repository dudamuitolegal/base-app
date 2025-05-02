import {siteConfig} from "@/utils/siteConfig"; // Mantenha este
import Slider from "@/app/components/Slider";
import Options from "@/app/components/Options"
import Info from "@/app/components/Info"
import {SemanticReadMore} from '@/app/components/SemanticReadmore';
import "swiper/css";

async function fetchBannerData(id: number | string) {
    const BANNER_API_URL = process.env.BANNER_API_URL;

    if (!id || !BANNER_API_URL) {
        console.error("fetchBannerData: ID ou BANNER_API_URL ausente.");
        return null;
    }

    try {
        const siteNameParam = encodeURIComponent(siteConfig.name || 'Website');
        const apiUrl = `${BANNER_API_URL}?id=${id}&siteName=${siteNameParam}`;
        const res = await fetch(apiUrl, {
            next: {
                revalidate: 60 * 5
            }
        });
        if (!res.ok) {
            console.error(`Falha ao buscar banner ${id}: ${res.status} ${res.statusText}`);
            try {
                const errorBody = await res.json();
                console.error("API Error Body:", errorBody);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
            }
            return null;
        }

        const data = await res.json();


        if (!data || !data.id || !data.linkUrl || !data.alt || !data.imageDesktop) {
            console.warn(`Dados incompletos recebidos para banner ID ${id}:`, data);
            return null;
        }
        data.width = data.width || 1536;
        data.height = data.height || 800;
        data.widthMobile = data.widthMobile || data.width;
        data.heightMobile = data.heightMobile || data.height;
        return data;

    } catch (error) {
        console.error(`Erro de rede ou outro ao buscar banner ${id}:`, error);
        return null;
    }
}

export default async function Home() {
    const requiredBannerIds = siteConfig.bannersId;
    const bannerPromises = requiredBannerIds.map(id => fetchBannerData(id));
    const results = await Promise.all(bannerPromises);
    const validBannersData = results.filter(banner => banner !== null);
    return (
        <>
            <section className={`container mx-auto`}>
                <Slider bannersData={validBannersData}></Slider>
            </section>


            <section className={`container mx-auto`}>
                <Info></Info>
            </section>

            <section className={`container mx-auto`}>
                <Options></Options>
            </section>

            <section className={`container mx-auto `}>
                <article className="py-8 px-2 mt-8 sm:px-8 md:px-12 xl:px-20 2xl:px-28 flex justify-center">

                    <SemanticReadMore initialHeight="160px">
                        <section className={`prose prose-invert`}>
                            <h2>
                                468bet: Sua Plataforma Definitiva de Apostas e Cassino Online!
                            </h2>

                            <p>
                                Bem-vindo à <strong>468bet</strong>! Se você estava
                                procurando por nós, chegou ao lugar certo para encontrar a melhor experiência em apostas
                                esportivas e jogos de cassino na internet. A <strong>468bet</strong> foi criada pensando
                                em você, jogador
                                brasileiro, oferecendo um ambiente seguro, moderno, repleto de opções e com grandes
                                chances de vitória.
                            </p>

                            <h3>
                                Por Que a 468bet é a Sua Melhor Aposta?
                            </h3>

                            <p>
                                Escolher a <strong>468bet</strong> significa optar por
                                qualidade, segurança e diversão garantida. Confira nossos diferenciais:
                            </p>

                            <ul>
                                <li>
                                    <strong>Universo Completo 468bet:</strong> Aqui você
                                    encontra tudo em um só lugar! Uma vasta seleção dos melhores slots, jogos de mesa
                                    clássicos (como Roleta e Blackjack), a emoção do cassino ao vivo com dealers reais e
                                    uma cobertura esportiva completa para suas apostas, incluindo futebol, basquete,
                                    eSports e muito mais.
                                </li>
                                <li>
                                    <strong>Segurança Blindada:</strong> A proteção dos seus
                                    dados é fundamental na <strong>468bet</strong>.
                                    Utilizamos as mais avançadas tecnologias de segurança e criptografia para garantir
                                    que suas informações e transações estejam sempre protegidas.
                                </li>
                                <li>
                                    <strong>Bônus e Promoções Imperdíveis:</strong> Turbine
                                    sua experiência na <strong>468bet</strong> desde o
                                    início! Oferecemos um excelente bônus de boas-vindas, além de promoções regulares,
                                    cashback e ofertas exclusivas para nossos jogadores.
                                </li>
                                <li>
                                    <strong>Jogue Onde Quiser:</strong> A plataforma <strong>468bet</strong> é
                                    totalmente otimizada para dispositivos
                                    móveis. Acesse do seu celular ou tablet com a mesma qualidade e fluidez, sem
                                    precisar baixar nada.
                                </li>
                                <li>
                                    <strong>Suporte ao Cliente 468bet:</strong> Nossa equipe
                                    de suporte está sempre pronta para te ajudar! Conte com atendimento rápido,
                                    eficiente e em português para solucionar qualquer dúvida.
                                </li>
                            </ul>

                            <h3>
                                Explore a Variedade de Jogos e Mercados na 468bet
                            </h3>

                            <p>
                                A diversidade é a marca registrada da <strong>468bet</strong>. Navegue por centenas de
                                slots com temas
                                incríveis e recursos bônus. Sinta a adrenalina das mesas de cassino ao vivo, interagindo
                                com dealers profissionais. Ou mostre seu conhecimento esportivo apostando nos seus times
                                e atletas favoritos com odds competitivas e uma ampla gama de mercados.
                                Na <strong>468bet</strong>, sempre há algo novo para você!
                            </p>


                            <h3>
                                Faça Parte da 468bet Hoje Mesmo!
                            </h3>

                            <p>
                                Não espere mais para entrar na ação! O cadastro na <strong>468bet</strong> é simples,
                                rápido e totalmente seguro. Crie
                                sua conta em poucos minutos, faça seu primeiro depósito, garanta seu bônus de
                                boas-vindas e descubra um mundo de entretenimento e possibilidades de ganho que só
                                a <strong>468bet</strong> oferece. Sua próxima grande
                                vitória pode estar aqui!
                            </p>

                        </section>
                    </SemanticReadMore>
                </article>
            </section>
        </>
    );
}