import styled from "styled-components";

const BotonActivo = styled.button`
    width: 180px;
    height: 54px;
    background: red;
    cursor: pointer;
    text-transform: uppercase;
    padding: 15px;
    font-weight: 900;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    color: white;
    

    &:hover {
        background-color: #c40303;
    }

`;

const BotonSec = ({nombre}) => {
    return (
        <>
        <BotonActivo>{nombre}</BotonActivo>
        </>
    )
}

export default BotonSec