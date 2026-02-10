'use client';

import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { usePlayerCount } from '@/hooks/usePlayerCount';
import { toTitleCase } from '@/lib/utils';

type SlotCardProps = {
    imageSrc: string;
    userName: string;
};

export default function SlotCard({ imageSrc, userName }: SlotCardProps) {
    const playerCount = usePlayerCount(userName);
   const titleCasedUserName = toTitleCase(userName);
    return (
           <div className="bg-gradient-to-b from-surface/60 to-surface/30 backdrop-blur-sm rounded-2xl p-2 w-52 flex-shrink-0 flex items-center gap-3 border border-white/10">
            <Image
                src={imageSrc}
                alt={`Imagem do slot ${userName}`}
                width={64}
                height={64}
                className="rounded-lg flex-shrink-0"
            />
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-text truncate">{titleCasedUserName}</p>
                <div className="flex items-center gap-1 mt-1">
                    <PersonOutlineIcon sx={{ fontSize: 18, color: 'var(--text-muted)' }} />
                    <p className="text-lg font-bold text-text-muted truncate">{playerCount}</p>
                </div>
            </div>
        </div>
    );
}