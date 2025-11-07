
import BannerCarousel from '@/components/BannerCarousel';
import MarqueeComponent from '@/components/Marquee';
import PopularSlots from '@/components/PopularSlots';
import { getBanners } from '@/lib/data';

const banners = await getBanners();

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-2 mt-2">
      <section>
        <MarqueeComponent />
      </section>
      <section>
        <BannerCarousel banners={banners} />
      </section>
      <section>
        <PopularSlots />
      </section>
    </main>
  );
}