export const dynamic = "force-static";

import { MetadataRoute } from 'next';
import { siteConfig } from "@/utils/siteConfig";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = siteConfig.url;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/go'
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}