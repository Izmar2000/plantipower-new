'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import MobileMenu from './MobileMenu'
import SampleModal from './SampleModal'
import Footer from './Footer'

import { ModalProvider, useModals } from '../context/ModalContext'

function LayoutContent({
    children,
    dict,
    lang,
}: {
    children: React.ReactNode
    dict: any
    lang: string
}) {
    const { isSampleModalOpen, openSampleModal, closeSampleModal } = useModals()
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
                    onOpenSample={openSampleModal}
                    onOpenMenu={() => setIsMobileMenuOpen(true)}
                />
            </div>
            <MobileMenu
                open={isMobileMenuOpen}
                dict={dict}
                lang={lang}
                onClose={() => setIsMobileMenuOpen(false)}
                onOpenSample={openSampleModal}
            />

            <div className="min-h-screen flex flex-col">
                <div className="site-scale-container flex-grow flex flex-col">
                    <main className="flex-grow pt-28">{children}</main>
                    <Footer dict={dict} lang={lang} />
                </div>
                <SampleModal
                    isOpen={isSampleModalOpen}
                    onClose={closeSampleModal}
                />
            </div>
        </>
    )
}

export default function ClientLayout(props: {
    children: React.ReactNode
    dict: any
    lang: string
}) {
    return (
        <ModalProvider>
            <LayoutContent {...props} />
        </ModalProvider>
    )
}
