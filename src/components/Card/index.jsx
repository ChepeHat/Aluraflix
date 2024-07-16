import styled from "styled-components"
import PieCard from './PieCard'

const WrapperCard = styled.div`
    width: 320px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 5px ${props => props.$color};
    box-shadow: 0 0 12px 4px ${props => props.$color};
    border-radius: 15px;
    flex-grow: 1;
    background-color: #000; // Fondo negro para que se vea mejor el resplandor 
`;

const Imagen = styled.img`
    height: 100%;
    width: auto;
    border: none;
    border-radius: 10px 10px 0 0;
`;

// const Datos = styled.div`
//     display: none;
// `;

const Card = ({ titulo, color, linkImagenVideo, linkVideo, id }) => {
    return (
        <WrapperCard $color={color}>
            <Imagen 
                href={linkVideo}
                $color={color}
                src={linkImagenVideo} 
                alt={titulo}
                id={id}
                />
            {/* <Datos>
                    <h2>{titulo}</h2>
                    <p>{categoria}</p>
                    <p>{descripcion}</p>
            </Datos> */}
            <PieCard color={color} />
        </WrapperCard>
    )
}

export default Card

