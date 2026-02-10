'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DayCard from '@/components/dayComponent/DayCard';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import type { SlotsData } from '@/lib/data';
import { shuffleArray } from '@/lib/utils';

import 'swiper/css';

interface DaySlotsProps {
    allSlots: SlotsData;
    title?: string;
    category?: string;
}

export default function DaySlots({
    allSlots,
    title = "Destaques do Dia",
    category,
}: DaySlotsProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const slotsToDisplay = category && allSlots[category]
        ? allSlots[category]
        : Object.values(allSlots).flat();

    const limitedSlots = shuffleArray(slotsToDisplay).slice(0, 10);

    if (limitedSlots.length === 0) {
        return null;
    }

    return (
        <section className="relative m-4 rounded-2xl shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 mb-4">
                <AutoAwesomeOutlinedIcon className="text-primary" />
                <h2 className="text-xl font-bold text-text">{title}</h2>
            </div>
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                freeMode={true}
                className="!pb-2"
            >
                {limitedSlots.map((slot, index) => (
                    <SwiperSlide key={slot.title + index} style={{ width: 'auto' }}>
                        <DayCard
                            imageSrc={slot.imageSrc}
                            userName={slot.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}