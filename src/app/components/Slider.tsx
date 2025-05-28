// components/Slider.tsx

'use client'; // ESSENCIAL manter isso aqui

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import Image from 'next/image';
import MorePay from "@/app/components/MorePay";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {siteConfig} from "@/utils/siteConfig";

interface BannerData {
    id: number;
    alt: string;
    imageMobile?: string;
    imageDesktop: string;
    width: number;
    height: number;
}

interface SliderProps {
    bannersData: BannerData[];
}

export default function Slider({bannersData}: SliderProps) {
    return (
        <>
            <div className="w-full mt-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {bannersData.map((banner) => {
                        if (!banner || !banner.id || !banner.imageDesktop || !banner.alt) {
                            console.warn("Banner inválido ou incompleto no map:", banner);
                            return null;
                        }
                        return (
                            <SwiperSlide key={banner.id} className="rounded-lg">
                                <Link target="_blank" rel="noopener noreferrer" href={siteConfig.defaultLink}>
                                    <picture>
                                        {banner.imageMobile && (
                                            <source media="(max-width: 1023px)" srcSet={banner.imageMobile}/>
                                        )}
                                        <source media="(min-width: 1024px)" srcSet={banner.imageDesktop}/>
                                        <Image
                                            className="rounded-2xl border-2 border-[#f6f3f436] object-cover object-contain block"
                                            src={banner.imageDesktop}
                                            width={banner.width}
                                            height={banner.height}
                                            alt={banner.alt}
                                            priority={banner.id === bannersData[0]?.id}

                                        />
                                    </picture>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className={`px-2 mt-4 sm:px-8 md:px-12 xl:px-20  2xl:px-28 flex justify-center`}>
                <h1 className={`uppercase prose dark:prose-invert text-center font-bold text-2xl`}>
                    {siteConfig.name}
                </h1>
            </div>
            <MorePay></MorePay>
        </>

    );
}