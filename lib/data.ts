const SHARED_DATA_URL = process.env.NEXT_PUBLIC_SHARED_DATA_URL;

export type BannerData = {
  imageSrc: string;
  titleLine1: string;
  titleLine2?: string;
  description: string;
  buttonText: string;
};

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

    return await res.json();

  } catch (error) {
    console.error('Erro ao buscar banners:', error);
    return [];
  }
}

export type Slot = {
  imageSrc: string;
  title: string;
  id?: string;
  provider?: string;
  tags?: string[];
};

export type SlotsData = {
  [category: string]: Slot[];
};

export async function getSlots(): Promise<SlotsData> {
  if (!SHARED_DATA_URL) {
    console.error("ERRO: Variável de ambiente NEXT_PUBLIC_SHARED_DATA_URL não foi encontrada.");
    return {};
  }

  try {
    const res = await fetch(`${SHARED_DATA_URL}/slots.json`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      throw new Error(`Falha ao buscar slots: ${res.status}`);
    }

    return await res.json();

  } catch (error) {
    console.error('Erro ao buscar slots:', error);
    return {};
  }
}