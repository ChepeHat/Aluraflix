import styled from "styled-components"

const BotonActivo = styled.button`

    width: 54px;
    height: 54px;
    background: none;
    cursor: pointer;
    padding: 15px;
    font-weight: 900;
    font-size: 18px;
    border-radius: 50%;
    border: none;
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

        @media (min-width: 730px) {
            width: 180px;
            padding: 0 20px;
            border-radius: 10px;
            border: 2px solid #fff;

            & .icono {
                display: none;
            }

            & .texto {
                display: flex;
                text-transform: uppercase;
                text-decoration: none;
            }
    }
`
    const Icono = styled.span`
        display: block;
    `;

    const Texto = styled.span`
        display: none;
        outline: none;

        @media (min-width: 730px) {
            display: block;
    }
`

const BotonMain = ({nombre, type, icono }) => {
    return (
        <BotonActivo type={type} >
            <Icono className="icono">{icono}</Icono>
            <Texto className="texto">{nombre}</Texto>
        </BotonActivo>
    )
}

export default BotonMain