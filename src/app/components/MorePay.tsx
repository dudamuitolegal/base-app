import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {Autoplay} from 'swiper/modules';
import "swiper/css";
import Link from "next/link";
import {DollarSign, User} from "lucide-react";
import {siteConfig} from "@/utils/siteConfig";
import priceUtils from "@/utils/formatPrice";

const slides = [
    {id: 1, alt: "Ícone do jogo Aviator - caça-níqueis com tema de aviação", image: "/home/games-images/aviator.webp"},
    {
        id: 2,
        alt: "Logo do jogo Big Bass Bonanza - caça-níqueis de pesca com prêmios grandes",
        image: "/home/games-images/big-bass-bonanza.webp"
    },
    {
        id: 3,
        alt: "Imagem do jogo Big Bass Splash - caça-níqueis aquático com bônus especiais",
        image: "/home/games-images/big-bass-splash.webp"
    },
    {
        id: 4,
        alt: "Símbolo do jogo Fortune Ox - caça-níqueis asiático com tema de boi da sorte",
        image: "/home/games-images/fortune-ox.webp"
    },
    {
        id: 5,
        alt: "Ilustração do jogo Fortune Rabbit - caça-níqueis com coelho da fortuna e moedas douradas",
        image: "/home/games-images/fortune-rabbit.webp"
    },
    {
        id: 6,
        alt: "Logo do jogo Fortune Snake - caça-níqueis com serpente chinesa e símbolos de prosperidade",
        image: "/home/games-images/fortune-snake.webp"
    },
    {
        id: 7,
        alt: "Imagem do jogo Gates of Olympus - caça-níqueis mitológico com deuses gregos",
        image: "/home/games-images/gates-of-olympus.webp"
    },
    {
        id: 8,
        alt: "Símbolo do jogo Fortune Tiger - caça-níqueis com tigre asiático e rodas de prêmios",
        image: "/home/games-images/fortune-tiger.webp"
    },
    {
        id: 9,
        alt: "Ícone do jogo Sweet Bonanza - caça-níqueis colorido com doces e frutas explosivas",
        image: "/home/games-images/sweet-bonanza.webp"
    }
];

export default function MorePay() {
    return (
        <>
            <div className="px-2 mt-8 sm:px-8 md:px-12 xl:px-20 2xl:px-28">
                <h2 className="text-white flex items-center gap-1 font-bold text-lg xl:text-2xl">
                    <span className="bg-white rounded-full p-1">
                        <DollarSign className={`xl:hidden`} strokeWidth={2} size={20} color='#000'/>
                        <DollarSign className={`hidden xl:block`} strokeWidth={2} size={24} color='#000'/>
                    </span>
                    Pagando mais hoje
                </h2>
                <Swiper
                    className="mt-2"
                    modules={[Autoplay]}
                    autoplay={{delay: 3000}}
                    spaceBetween={10}
                    slidesPerView={2.5}
                    breakpoints={{
                        640: {
                            slidesPerView: 3.5
                        },
                        768: {
                            slidesPerView: 4.5
                        },
                        1280: {
                            slidesPerView: 5.5
                        }
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide style={{transition: '0.3s'}}
                                     key={slide.id}>
                            <Link className="relative" href={siteConfig.defaultLink} target="_blank"
                                  rel="noopener noreferrer">
                                <span
                                    className="absolute left-2 top-2 flex gap-1 bg-[#000000a8] text-white text-xs items-center rounded-lg p-1 z-10">
                                    <User color="#3CD921" size={20}/>
                                  <span suppressHydrationWarning={true}>
                                    {priceUtils.generateRandomThreeDigits()}
                                  </span>
                                </span>
                                <div className={`rounded-lg border-2 border-[#f6f3f436] overflow-hidden`}>
                                    <Image
                                        className="block transition-transform duration-300 ease-in-out hover:scale-110"
                                        src={slide.image}
                                        width={300}
                                        height={300}
                                        alt={slide.alt}
                                    />
                                </div>
                                <span className="text-white flex items-center gap-1 mt-1">
                                    <span className="bg-yellow-400 rounded-full p-1">
                                        <DollarSign strokeWidth={2} size={14} color='#000'/>
                                    </span>
                                    <div className="flex flex-col">
                                        <span
                                            className="text-gray-300 uppercase font-semibold text-xs">Pagou hoje</span>

                                        <span
                                            className="text-yellow-400 font-bold text-xs">
                                            <span suppressHydrationWarning={true}>
                                            {priceUtils.generateRandomMillion()}
                                            </span>
                                        </span>
                                    </div>
                                </span>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}



