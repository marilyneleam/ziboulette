import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ziboulette.fr/',
            lastModified: '2024-12-11',
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://ziboulette.fr/qui-sommes-nous',
            lastModified: '2024-12-11',
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://ziboulette.fr/zibnews',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://ziboulette.fr/zibunity',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://ziboulette.fr/mentions-legales',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ziboulette.fr/confidentialite',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ziboulette.fr/cgu',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ziboulette.fr/cookies',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://ziboulette.fr/accessibilite',
            lastModified: '2024-12-11',
            changeFrequency: 'monthly',
            priority: 0.5,
        }
    ]
}