import React from 'react';
import styled from "styled-components";
import FormEdit from "../FormEdit/index.jsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useModal } from "../../context/ModalContext.jsx";



const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.100);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogEstilizado = styled.dialog`
    padding: 5%;
    min-width: 300px;
    position: fixed;  /* Cambiar a fixed para centrar respecto a la ventana */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;

    background-color: #03122f;
    border: solid 5px #6bd1ff;
    border-radius: 15px;
    color: white;
    box-sizing: border-box;
    

`;

const BotonCerrar = styled.div`
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 40px;
        cursor: pointer;

        &:hover {
            color: #dc3a3a;
        }
    
`
const ModalEdit = () => {

    const { activeModal, handleCloseModal } = useModal();

    if (activeModal !== 'editModal') return null;

    return (
        <>
            <Overlay onClick={handleCloseModal} />
            <DialogEstilizado open={true} >
                <BotonCerrar onClick={handleCloseModal}>
                    <IoMdCloseCircleOutline className="icon" />
                </BotonCerrar>
                <FormEdit />
            </DialogEstilizado>
        </>
    );
};

export default ModalEdit;
