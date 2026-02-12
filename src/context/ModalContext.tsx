'use client';

import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
    isSampleModalOpen: boolean;
    openSampleModal: () => void;
    closeSampleModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

    const openSampleModal = () => setIsSampleModalOpen(true);
    const closeSampleModal = () => setIsSampleModalOpen(false);

    return (
        <ModalContext.Provider value={{ isSampleModalOpen, openSampleModal, closeSampleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModals = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModals must be used within a ModalProvider');
    }
    return context;
};
