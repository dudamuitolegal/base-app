'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SlotCard from './SlotCard';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import 'swiper/css';

const mockData = [
    { imageSrc: 'https://picsum.photos/seed/spinmaster/100', userName: 'spinmaster' },
    { imageSrc: 'https://picsum.photos/seed/luckyace/100', userName: 'luckyace' },
    { imageSrc: 'https://picsum.photos/seed/reelrider/100', userName: 'reelrider' },
    { imageSrc: 'https://picsum.photos/seed/betking/100', userName: 'betking' },
    { imageSrc: 'https://picsum.photos/seed/goldfever/100', userName: 'goldfever' },
];

export default function PopularSlots() {
    return (
        <section className="relative m-4 p-4 rounded-2xl bg-gradient-to-b from-surface to-background">
            <div className="flex items-center gap-2 mb-4">
                <EmojiEventsOutlinedIcon className="text-primary" />
                <h2 className="text-xl font-bold text-text">Slots Populares</h2>
            </div>
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                freeMode={true}
                className="!pb-2"
            >
                {mockData.map((slot) => (
                    <SwiperSlide key={slot.userName} style={{ width: 'auto' }}>
                        <SlotCard
                            imageSrc={slot.imageSrc}
                            userName={slot.userName}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}