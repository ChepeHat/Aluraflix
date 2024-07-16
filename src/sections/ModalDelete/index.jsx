import React from 'react';
import styled from "styled-components";
import BotonMain from '../../components/BotonMain/index.jsx';
import BotonSec from '../../components/BotonSec/index.jsx';
import { useModal } from "../../context/ModalContext.jsx";
import { Button } from '@mui/material';




const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.100);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogEstilizado = styled.dialog`
    padding: 30px;
    min-width: 300px;
    position: fixed;  /* Cambiar a fixed para centrar respecto a la ventana */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-align: center;

    background-color: #03122f;
    border: solid 5px #6bd1ff;
    border-radius: 15px;
    color: white;
    box-sizing: border-box;
    
    & h4 {
        margin: 0;
        font-size: 1.5em;
    }

    & div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
    }

    & .botonCancelar{    
        height: 54px;
        width: 180px;
        padding: 0 20px;
        border-radius: 10px;
        border: 2px solid #fff;
        background: none;
        cursor: pointer;
        padding: 15px;
        font-weight: 900;
        font-size: 18px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        

            &:hover {
                color: #2271D1;
                background-color: #fff;
                border: none;
                box-shadow: none;
            }
            
            &:focus {
            color: #2271D1;
            border: solid 2px #2271D1;
            box-shadow: inset 0 0 12px 4px #2271D1;
            }
        }
`;


const ModalDelete = () => {
    const { activeModal, handleCloseModal } = useModal();

    if (activeModal !== 'deleteModal') return null;

    return (
        <>
            <Overlay onClick={handleCloseModal} />
            <DialogEstilizado open={true}>
                <h4>¿Deseas eliminar este elemento?</h4>
                <p>Esta acción no se puede revertir, y se eliminará de la sección de inicio.</p>
                <div>
                    <BotonSec nombre='Eliminar' />
                    <div onClick={handleCloseModal}>
                        <button className='botonCancelar'>Cancelar</button>
                    </div>
                </div>
            </DialogEstilizado>
        </>
    );
};

export default ModalDelete;
