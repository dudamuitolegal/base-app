export const dynamic = "force-static"

import {MetadataRoute} from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
import {siteConfig} from '@/utils/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 1,
        }
    ]
}