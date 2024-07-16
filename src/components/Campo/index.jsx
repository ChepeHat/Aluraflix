import { useState } from "react";
import styled from "styled-components";

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    
    & label {
        font-size: 20px;
        margin-bottom: 5px;
    }
`;

const InputStyle = styled.input`
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
    
    ::placeholder {
        color: #999;
    }
`


const Campo = ({ type, name, placeholder, required, border, actualizarValor, valor }) => {


    const manejarCambio = (e) => {
        actualizarValor(e.target.value);
    }


    return (
        <>
        <DivInput >
            <label htmlFor={name}>{name}</label>
            <InputStyle 
                type={type}
                placeholder={placeholder}
                required={required} 
                $border={border}
                value={valor}
                onChange={manejarCambio}
                />
        </DivInput>
        </>
    )
}

export default Campo