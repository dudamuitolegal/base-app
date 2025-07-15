import Slider from "@/app/components/Slider";
import Options from "@/app/components/Options"
import Info from "@/app/components/Info"
import LazyMorePay from "@/app/components/LazyMorePay"
import {siteConfig} from "@/utils/siteConfig";
import React from "react";


interface BannerData {
    linkUrl?: string;
    id: number;
    alt: string;
    imageMobile?: string;
    imageDesktop: string;
    width: number;
    height: number;
    widthMobile?: number;
    heightMobile?: number;
}

async function fetchBannersList(): Promise<BannerData[]> {
    const BANNERS_API_URL = "https://blog.up.bet.br/banner.json";

    try {
        const response = await fetch(`${BANNERS_API_URL}?v=${Date.now()}`, {
            next: {revalidate: 300}
        });

        if (!response.ok) {
            throw new Error("falha ao buscar a lista de banners.");
        }

        const data: BannerData[] = await response.json();
        return Array.isArray(data) ? data : [];

    } catch (error) {
        console.error("erro ao processar dados dos banners:", error);
        return [];
    }
}


export default async function Home() {
    const bannersData = await fetchBannersList();
    return (
        <>
            <div className="flex flex-col gap-8 p-4 relative">
                <section>
                    <Slider bannersData={bannersData}/>
                </section>

                <section>
                    <h1 className="sr-only">
                        {siteConfig.name}
                    </h1>
                    <LazyMorePay/>
                </section>

                <section>
                    <Info/>
                </section>

                <section>
                    <Options/>
                </section>

                <section>
                    <article className="py-8 flex justify-center">
                    </article>
                </section>
            </div>
        </>
    );
}