'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { siteConfig } from "@/utils/siteConfig";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

interface BannerData {
    linkUrl?: string;
    id: number;
    alt: string;
    imageMobile?: string;
    imageDesktop: string;
    width: number;
    height: number;
    widthMobile?: number;
    heightMobile?: number;
}

interface SliderProps {
    bannersData: BannerData[];
}

export default function Slider({ bannersData }: SliderProps) {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHydrated(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!bannersData || bannersData.length === 0) {
        return null;
    }

    const firstBanner = bannersData[0];

    return (
        <>
            <div className="w-full mt-4 relative">
                {!isHydrated ? (
                    <div className="rounded-lg">
                        <Link target="_blank" rel="noopener noreferrer" href={firstBanner.linkUrl || siteConfig.defaultLink}>
                            <Image
                                className="w-full h-auto rounded-2xl border-2 border-[#f6f3f436] object-cover"
                                src={firstBanner.imageMobile || firstBanner.imageDesktop}
                                width={firstBanner.widthMobile || firstBanner.width}
                                height={firstBanner.heightMobile || firstBanner.height}
                                alt={firstBanner.alt}
                                title={firstBanner.alt}
                                priority={true}
                            />
                        </Link>
                    </div>
                ) : (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {bannersData.map((banner) => (
                                <CarouselItem key={banner.id}>
                                    <Link target="_blank" rel="noopener noreferrer" href={banner.linkUrl || siteConfig.defaultLink}>
                                        <Image
                                            className="w-full h-auto rounded-2xl border-2 border-[#f6f3f436] object-cover"
                                            src={banner.imageMobile || banner.imageDesktop}
                                            width={banner.widthMobile || banner.width}
                                            height={banner.heightMobile || banner.height}
                                            alt={banner.alt}
                                            title={banner.alt}
                                            loading="lazy"
                                        />
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                )}
            </div>
        </>
    );
}