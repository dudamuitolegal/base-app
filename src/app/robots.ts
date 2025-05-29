export const dynamic = "force-static";

import { MetadataRoute } from 'next';
import { siteConfig } from "@/utils/siteConfig"; // Certifique-se que este caminho está correto

export default function robots(): MetadataRoute.Robots {
    const siteUrl = siteConfig.url;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}