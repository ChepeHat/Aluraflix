import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [activeModal, setActiveModal] = useState(null);

    const handleOpenModal = (modalName) => setActiveModal(modalName);
    const handleCloseModal = () => setActiveModal(null);

    return (
        <ModalContext.Provider value={{ activeModal, handleOpenModal, handleCloseModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
