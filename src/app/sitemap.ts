import { MetadataRoute } from 'next'
import { i18n } from '../i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://plantipower.com'
    const locales = i18n.locales

    const pages = ['', '/about', '/products/all12', '/products/shield', '/contact', '/faq']

    const sitemapEntries: MetadataRoute.Sitemap = []

    locales.forEach((locale) => {
        pages.forEach((page) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: page === '' ? 1 : 0.8,
            })
        })
    })

    return sitemapEntries
}
