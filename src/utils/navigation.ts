import { Locale } from '@/i18n-config';

const slugMap: Record<string, Record<string, string>> = {
    en: {
        'about': 'about-us',
        'products/all12': 'plantipower-all12',
        'products/shield': 'plantipower-shield',
        'faq': 'faq',
        'contact': 'contact'
    },
    nl: {
        'about': 'over-ons',
        'products/all12': 'plantipower-all12',
        'products/shield': 'plantipower-shield',
        'faq': 'faq',
        'contact': 'contact'
    }
};

export function getLocalizedPath(path: string, targetLocale: Locale): string {
    // Remove leading slash and locale segment
    const segments = path.split('/').filter(Boolean);

    // Determine current locale and internal path
    let currentLocale: Locale = 'en';
    let rest = '';

    if (segments.length > 0 && (segments[0] === 'nl' || segments[0] === 'en')) {
        currentLocale = segments[0] as Locale;
        rest = segments.slice(1).join('/');
    } else {
        currentLocale = 'en';
        rest = segments.join('/');
    }

    if (!rest) return targetLocale === 'en' ? '/' : `/${targetLocale}`;

    // Find the internal key for the current path
    const internalKey = Object.keys(slugMap[currentLocale]).find(
        key => slugMap[currentLocale][key] === rest
    );

    const targetSlug = internalKey && slugMap[targetLocale][internalKey]
        ? slugMap[targetLocale][internalKey]
        : rest;

    if (targetLocale === 'en') {
        return `/${targetSlug}`;
    }

    return `/${targetLocale}/${targetSlug}`;
}

export function getPath(key: string, locale: string): string {
    const segments = key.split('/').filter(Boolean).join('/');
    const slug = (slugMap[locale] && slugMap[locale][segments]) || segments;

    if (locale === 'en') {
        return slug === '/' ? '/' : `/${slug}`;
    }

    return `/${locale}/${slug}`;
}
