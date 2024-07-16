import styled from "styled-components"

const Parrafo = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    max-width: 600px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 18px;    
        line-height: 21px;
        text-align: start;
    }
`


const Descripcion = ({text}) => {
    return (
        <Parrafo>{text}</Parrafo>
    )
}

export default Descripcion