// components/GameGrid.tsx
import GameCard from './GameCard';
import type { SlotsData, Slot } from '@/lib/data';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';

// 1. A função 'toId' foi movida para o topo, fora do componente.
// Agora ela está disponível para todo o arquivo.
const toId = (name: string) => name.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');

interface GameGridProps {
  allSlots: SlotsData;
  title: string;
  category?: string;
  pinnedSlots?: string[];
  limit?: number;
}

export default function GameGrid({
  allSlots,
  title,
  category,
  pinnedSlots,
  limit = 12,
}: GameGridProps) {

  let slotsToRender: Slot[];
  const allSlotsList = Object.values(allSlots).flat();

  if (pinnedSlots && pinnedSlots.length > 0) {
    // 2. Agora, quando esta linha é executada, a função 'toId' já existe.
    const slotsMap = new Map(allSlotsList.map(slot => [slot.id || toId(slot.title), slot]));
    slotsToRender = pinnedSlots.map(id => slotsMap.get(id)).filter(Boolean) as Slot[];
  } else if (category && allSlots[category]) {
    slotsToRender = allSlots[category].slice(0, limit);
  } else {
    slotsToRender = [];
  }

  if (slotsToRender.length === 0) {
    return null;
  }

  return (
    <section className="m-4">
      <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
        <ViewModuleOutlinedIcon sx={{ color: 'primary.main', fontSize: '28px' }} />
        <Typography variant="h5" component="h2" fontWeight="bold">
          {title}
        </Typography>
      </Stack>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slotsToRender.map((slot) => (
          <GameCard
            key={slot.id || slot.title}
            title={slot.title}
            imageSrc={slot.imageSrc}
            provider={slot.provider || ''}
          />
        ))}
      </div>
    </section>
  );
}