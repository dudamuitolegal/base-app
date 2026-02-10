// components/PopularSlotsGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PopularCard from '@/components/popularComponent/PopularCard';
import { shuffleArray } from '@/lib/utils';
import type { SlotsData, Slot } from '@/lib/data';

const toId = (name: string) => name.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');

interface PopularSlotsGridProps {
  allSlots: SlotsData;
  title?: string;
  pinnedSlots?: string[];
}

export default function PopularSlotsGrid({
  allSlots,
  title = "Slots Populares",
  pinnedSlots,
}: PopularSlotsGridProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  let slotsToRender: Slot[];

  if (pinnedSlots && pinnedSlots.length > 0) {
    const allSlotsList = Object.values(allSlots).flat();
    const slotsMap = new Map(allSlotsList.map(slot => [toId(slot.title), slot]));
    slotsToRender = pinnedSlots.map(id => slotsMap.get(id)).filter(Boolean) as Slot[];

  } else {
    if (!isMounted) {
      return null;
    }
    const allSlotsList = Object.values(allSlots).flat();
    slotsToRender = shuffleArray(allSlotsList).slice(0, 6);
  }

  if (!slotsToRender || slotsToRender.length === 0) {
    return null;
  }

  return (
    <section className="m-4">
      <div className="flex items-center gap-2 mb-4">
        <EmojiEventsOutlinedIcon className="text-primary" />
        <h2 className="text-xl font-bold text-text">{title}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {slotsToRender.map((slot) => (
          <PopularCard
            key={slot.title}
            title={slot.title}
            imageSrc={slot.imageSrc}
            provider={slot.provider || ''}
          />
        ))}
      </div>
    </section>
  );
}