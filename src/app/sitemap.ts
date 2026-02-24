import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kaiper.io';

const pages = ['/', '/shop', '/faq', '/terms', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of routing.locales) {
      const path = locale === routing.defaultLocale ? page : `/${locale}${page}`;

      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: page === '/' || page === '/shop' ? 'weekly' : 'monthly',
        priority: page === '/' ? 1 : page === '/shop' ? 0.9 : 0.5,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${BASE_URL}${l === routing.defaultLocale ? page : `/${l}${page}`}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
