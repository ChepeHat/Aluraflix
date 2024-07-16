import React from 'react';
import { useModal } from './ModalContext';

const SomeOtherComponent = () => {
    const { handleOpenModal } = useModal();

    return (
        <div>
            <button onClick={handleOpenModal}>Open Modal</button>
        </div>
    );
};

export default SomeOtherComponent;
