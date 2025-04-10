
'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';
import Link from "next/link";
import Image from 'next/image';
import {siteConfig} from "@/utils/siteConfig";
import MorePay from "@/app/components/MorePay";
export default function Slider() {
    const banners = [
        {
            id: 1,
            alt: `Cassino ao vivo no ${siteConfig.name} - Jogue com dealers reais em tempo real`,
            imageMobile: "/home/banner-1.webp",
            imageDesktop: "/home/banner-1-desk.webp",
        },
        {
            id: 2,
            alt: `Depósitos e saques via PIX no ${siteConfig.name} - Transações rápidas e seguras`,
            imageMobile: "/home/banner-4.webp",
            imageDesktop: "/home/banner-4-desk.webp",
        }
    ];

    return (
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 3000}}
                spaceBetween={10}
                className="mySwiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="rounded-lg px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-28">
                        <Link href={siteConfig.defaultLink}>
                            <picture>
                                <source media="(max-width: 1023px)" srcSet={banner.imageMobile}/>
                                <source media="(min-width: 1024px)" srcSet={banner.imageDesktop}/>
                            <Image
                                className="rounded-lg border-2 border-[#f6f3f436] object-cover"
                                src={banner.imageDesktop}
                                width={1536}
                                height={800}
                                alt={banner.alt}
                            />
                            </picture>
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>

            <MorePay></MorePay>


        </>
    );
}