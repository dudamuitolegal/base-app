// components/BannerCarousel.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import PromoBanner from '@/components/PromoBanner';
import type { BannerData } from '@/lib/data';

import 'swiper/css';
import 'swiper/css/pagination';

interface BannerCarouselProps {
  banners: BannerData[];
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <div className="m-2 custom-swiper-pagination">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <PromoBanner
              imageSrc={banner.imageSrc}
              titleLine1={banner.titleLine1}
              titleLine2={banner.titleLine2}
              description={banner.description}
              buttonText={banner.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}