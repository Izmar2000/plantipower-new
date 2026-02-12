'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import MobileMenu from './MobileMenu'
import SampleModal from './SampleModal'
import Footer from './Footer'

export default function ClientLayout({
    children,
    dict,
    lang,
}: {
    children: React.ReactNode
    dict: any
    lang: string
}) {
    const [isSampleModalOpen, setIsSampleModalOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <div className="site-header-wrapper">
                <Header
                    dict={dict}
                    lang={lang}
                    onOpenSample={() => setIsSampleModalOpen(true)}
                    onOpenMenu={() => setIsMobileMenuOpen(true)}
                />
                <MobileMenu
                    open={isMobileMenuOpen}
                    dict={dict}
                    lang={lang}
                    onClose={() => setIsMobileMenuOpen(false)}
                    onOpenSample={() => setIsSampleModalOpen(true)}
                />
            </div>

            <div className="min-h-screen flex flex-col">
                <div className="site-scale-container flex-grow flex flex-col">
                    <main className="flex-grow pt-28">{children}</main>
                    <Footer dict={dict} lang={lang} />
                </div>
                <SampleModal
                    isOpen={isSampleModalOpen}
                    onClose={() => setIsSampleModalOpen(false)}
                />
            </div>
        </>
    )
}
