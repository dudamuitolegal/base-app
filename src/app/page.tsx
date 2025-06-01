import {siteConfig} from "@/utils/siteConfig"; // Mantenha este
import Slider from "@/app/components/Slider";
import Options from "@/app/components/Options"
import Info from "@/app/components/Info"
import "swiper/css";

async function fetchBannerData(id: number | string) {
    const BANNER_API_URL = process.env.BANNER_API_URL;

    if (!id || !BANNER_API_URL) {
        console.error("fetchBannerData: ID ou BANNER_API_URL ausente.");
        return null;
    }

    try {
        const siteNameParam = encodeURIComponent(siteConfig.name || 'Website');
        const apiUrl = `${BANNER_API_URL}?id=${id}&siteName=${siteNameParam}`;
        const res = await fetch(apiUrl, {
            next: {
                revalidate: 60 * 5
            }
        });
        if (!res.ok) {
            console.error(`Falha ao buscar banner ${id}: ${res.status} ${res.statusText}`);
            try {
                const errorBody = await res.json();
                console.error("API Error Body:", errorBody);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
            }
            return null;
        }

        const data = await res.json();


        if (!data || !data.id || !data.linkUrl || !data.alt || !data.imageDesktop) {
            console.warn(`Dados incompletos recebidos para banner ID ${id}:`, data);
            return null;
        }
        data.width = data.width || 1536;
        data.height = data.height || 800;
        data.widthMobile = data.widthMobile || data.width;
        data.heightMobile = data.heightMobile || data.height;
        return data;

    } catch (error) {
        console.error(`Erro de rede ou outro ao buscar banner ${id}:`, error);
        return null;
    }
}

export default async function Home() {
    const requiredBannerIds = siteConfig.bannersId;
    const bannerPromises = requiredBannerIds.map(id => fetchBannerData(id));
    const results = await Promise.all(bannerPromises);
    const validBannersData = results.filter(banner => banner !== null);
    return (
        <>
            <div className={`flex flex-col gap-8 px-2 sm:px-8 md:px-12 xl:px-36 2xl:px-44`}>
                <section className={`container mx-auto max-w-screen-xl`}>
                    <Slider bannersData={validBannersData}></Slider>
                </section>


                <section className={`container mx-auto max-w-screen-xl`}>
                    <Info></Info>
                </section>

                <section className={`container mx-auto max-w-screen-xl`}>
                    <Options></Options>
                </section>

                <section className={`container mx-auto max-w-screen-xl`}>
                    <article className="py-8 px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-28 flex justify-center">
                    </article>
                </section>
            </div>
        </>
    );
}