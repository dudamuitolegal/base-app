export type BannerData = {
    imageSrc: string;
    titleLine1: string;
    titleLine2?: string;
    description: string;
    buttonText: string;
};

const SHARED_DATA_URL = process.env.NEXT_PUBLIC_SHARED_DATA_URL;

export async function getBanners(): Promise<BannerData[]> {
    if (!SHARED_DATA_URL) {
        console.error("ERRO: Variável de ambiente NEXT_PUBLIC_SHARED_DATA_URL não foi encontrada.");
        return [];
    }

    try {
        const res = await fetch(`${SHARED_DATA_URL}/banners.json`, {
            next: { revalidate: 600 },
        });

        if (!res.ok) {
            throw new Error(`Falha ao buscar banners: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Erro ao buscar banners:', error);
        return [];
    }
}