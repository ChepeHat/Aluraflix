import styled from "styled-components"

const BotonActivo = styled.button`

    width: 180px;
    padding: 0 20px;
    border-radius: 10px;
    border: 2px solid #fff;

    height: 54px;
    background: none;
    cursor: pointer;

    font-weight: 900;
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

        &:hover {
            color: #2271D1;
            background-color: #fff;
            border: none;
            box-shadow: none;
            text-decoration: none;
        }
        
        &:focus {
            color: #2271D1;
            border: solid 2px #2271D1;
            box-shadow: inset 0 0 12px 4px #2271D1;
            text-decoration: none;
            
        }
`

const BotonMain = ({nombre, type }) => {
    return (
        <BotonActivo type={type} >{nombre}</BotonActivo>
    )
}

export default BotonMain