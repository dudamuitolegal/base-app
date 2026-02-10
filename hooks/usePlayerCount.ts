// hooks/usePlayerCount.ts
'use client';

import { useState, useEffect } from 'react';
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


export const usePlayerCount = (seed: string) => {
    const [playerCount, setPlayerCount] = useState(() => getCurrentPlayerCount(seed));

    useEffect(() => {
        const randomInterval = Math.random() * 4000 + 3000;

        const interval = setInterval(() => {
            setPlayerCount((prevCount) => {
                if (prevCount < 990) {
                    const increment = Math.floor(Math.random() * 3) + 1;
                    return prevCount + increment;
                }
                const fluctuation = Math.floor(Math.random() * 11) - 5;
                let newCount = prevCount + fluctuation;

                if (newCount < 900) newCount = 900;
                if (newCount > 1000) newCount = 1000;

                return newCount;
            });
        }, randomInterval);
        
        return () => clearInterval(interval);
    }, [seed]);

    return playerCount;
};