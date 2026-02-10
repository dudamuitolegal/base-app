import DaySlots from '@/components/dayComponent/DaySlots';
import BannerCarousel from '@/components/BannerCarousel';
import { getBanners, getSlots } from '@/lib/data';
import PopularSlots from '@/components/popularComponent/PopularSlots';
import MarqueeComponent from '@/components/Marquee';
import GameGrid from '@/components/gridComponent/GameGrid';

export default async function HomePage() {
  const [banners, slotsData] = await Promise.all([
    getBanners(),
    getSlots()
  ]);
  const favoriteSlotIds = [
    "fortune-tiger",
    "gates-of-olympus",
    "sugar-rush",
    "fortune-ox",
    "sweet-bonanza",
    "wild-bandito"
  ];
  const pgSlots = [
    "fortune-ox",
    "double-fortune",
    "fortune-mouse",
    "fortune-rabbit",
    "fortune-tiger",
    "ganesha-gold",
    "genie-3-wishes",
    "mahjong-ways",
    "shaolin-soccer",
    "wild-bounty-showdown",
    "fortune-dragon",
    "dragon-hatch"
  ];
  const pragmaticSlots = [
    "gates-of-olympus",
    "gates-of-olympus-2",
    "sweet-bonanza",
    "big-bass-splash",
    "sugar-rush",
    "starlight-princess-1000",
    "starlight-princess",
    "gems-bonanza",
    "jokers-jewels",
    "spaceman",
    "zeus-vs-hades-gods-of-war",
    "wisdom-of-athena"
  ];

  const tadaGamingSlots = [
    "fortune-gems",
    "fortune-gems-2",
    "fortune-gems-500",
    "money-coming",
    "super-ace",
    "golden-empire",
    "ascent-charge-buffalo",
    "mayan-empire"
  ];
  return (
    <>
      <main className="flex flex-col">
        <MarqueeComponent />

        <BannerCarousel banners={banners} />

        <DaySlots
          allSlots={slotsData}
          category="betabet"
        />

        <PopularSlots
          allSlots={slotsData}
          pinnedSlots={favoriteSlotIds}
        />
        
        <GameGrid
          allSlots={slotsData}
          title="Pragmatic Play"
          pinnedSlots={pragmaticSlots}
        />

        <GameGrid
          allSlots={slotsData}
          title="Tada Gaming"
          pinnedSlots={tadaGamingSlots}
        />

        <GameGrid
          allSlots={slotsData}
          title="PG Soft"
          pinnedSlots={pgSlots}
        />

      </main>
    </>
  );
}