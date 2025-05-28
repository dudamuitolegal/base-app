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
            <div
                className="p-4 bg-[#6a728217] dark:bg-[#ffffff1c] rounded-xl mt-4">
                <div className="flex items-center gap-4 justify-between">
                    <h2 className={`flex gap-0.5 items-center prose dark:prose-invert sm:font-semibold sm:gap-2`}><DollarSign
                        className={`w-5 h-5 sm:h-7 sm:w-7`}/>Pagando mais hoje</h2>
                </div>
                <Swiper
                    className="mt-2 max-h-84 sm:max-h-64 md:max-h-94 2xl:max-h-120"
                    modules={[Autoplay]}
                    autoplay={{delay: 6000}}
                    spaceBetween={10}
                    slidesPerView={2.5}
                    breakpoints={{
                        640: {
                            slidesPerView: 3.5
                        },
                        768: {
                            slidesPerView: 2.8
                        },
                        1024: {
                            slidesPerView: 4.2
                        },
                        1280: {
                          slidesPerView: 5.1
                        },
                        1536: {
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
                                        title={slide.alt}
                                        priority={true}
                                    />
                                </div>
                                <span className="text-white flex items-center gap-1 mt-1">
                                    <span className="bg-yellow-400 rounded-full p-1">
                                        <DollarSign strokeWidth={2} size={14} color='#000'/>
                                    </span>
                                    <div className="flex flex-col">
                                        <span
                                            className="text-gray-800 dark:text-gray-300 uppercase font-semibold text-[10px] sm:text-sm">Pagou hoje</span>
                                        <span
                                            className="text-yellow-800 dark:text-yellow-400 font-bold text-[10px] sm:text-xs">
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



