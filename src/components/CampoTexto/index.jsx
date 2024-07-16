import styled from "styled-components";
import { useState } from "react";

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    
    & label {
        font-size: 20px;
        margin-bottom: 5px;
    }

`;

const TextStyle = styled.textarea`
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        border: solid 3px;
        border-color: ${props => props.$border};
        border-radius: 5px;
        background: transparent;
        color: white;
        font-size: 14px;
        flex-flow: row;
        resize: none;
    
    ::placeholder {
        color: #999;
    }
`;


const CampoTexto = ({ placeholder, required, border, actualizarValor, valor }) => {

    const manejarCambio = (e) => {
        actualizarValor(e.target.value);
    }

    return (
        <>
        <DivInput >
            <label htmlFor="descripcion">Descripción</label>
            <TextStyle 
                placeholder={placeholder}
                $border={border}
                value={valor}
                onChange={manejarCambio}
                required={required}
                rows="3" 
            />
        </DivInput>
        </>
    )
}

export default CampoTexto