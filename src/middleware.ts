import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales
    )

    const locale = matchLocale(languages, locales, i18n.defaultLocale)

    return locale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check of de URL een taal bevat (nl of en)
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Alleen doorsturen naar /nl of /en als de locale mist
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        )
    }
}

export const config = {
    // Matcher negeert systeembestanden en mappen met spaties in bestandsnamen
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|docs|PP Shield info|assets|van gog logo .png).*)'],
}