import {MetadataRoute} from 'next'
import {siteConfig} from '@/utils/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${siteConfig.url}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        }
    ]
}