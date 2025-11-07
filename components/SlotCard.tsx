'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

type SlotCardProps = {
    imageSrc: string;
    userName: string;
};

const getDailyInitialCount = (seed: string): number => {
    const today = new Date().toISOString().slice(0, 10);
    const combinedSeed = seed + today;
    let hash = 0;
    for (let i = 0; i < combinedSeed.length; i++) {
        const char = combinedSeed.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return 100 + (Math.abs(hash) % 100);
};

const getCurrentPlayerCount = (seed: string): number => {
    const initialCount = getDailyInitialCount(seed);
    const targetCount = 999;

    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const totalMillisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsPassed = now.getTime() - startOfDay.getTime();

    const progress = millisecondsPassed / totalMillisecondsInDay;

    const currentIncrease = (targetCount - initialCount) * progress;

    const calculatedCount = Math.floor(initialCount + currentIncrease);

    return Math.min(calculatedCount, targetCount);
};

export default function SlotCard({ imageSrc, userName }: SlotCardProps) {
    const [playerCount, setPlayerCount] = useState(() => getCurrentPlayerCount(userName));

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerCount((prevCount) => {
                if (prevCount < 990) {
                    const increment = Math.floor(Math.random() * 3) + 1;
                    return prevCount + increment;
                }
                else {
                    const fluctuation = Math.floor(Math.random() * 11) - 5;
                    let newCount = prevCount + fluctuation;

                    if (newCount < 900) newCount = 900;
                    if (newCount > 1000) newCount = 1000;

                    return newCount;
                }
            });
        }, Math.random() * 4000 + 3000);

        return () => clearInterval(interval);
    }, [userName]);

    return (
        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-2 w-52 flex-shrink-0 flex items-center gap-3">
            <Image
                src={imageSrc}
                alt={`Game thumbnail for ${userName}`}
                width={64}
                height={64}
                className="rounded-lg flex-shrink-0"
            />
            <div className="flex-1 overflow-hidden">
                <p className="text-sm text-text-muted truncate">@{userName}</p>
                <div className="flex items-center gap-1 mt-1">
                    <PersonOutlineIcon sx={{ fontSize: 18, color: 'var(--text-muted)' }} />
                    <p className="text-lg font-bold text-text truncate">{playerCount}</p>
                </div>
            </div>
        </div>
    );
}