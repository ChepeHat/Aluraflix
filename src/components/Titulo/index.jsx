import styled from "styled-components"

const TituloStyle = styled.h1`
    font-weight: 300;
    font-size: 35px;
    color: white;
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 45px;
        text-align: start;
    }

    @media (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
    }
`


const Titulo = ({text}) => {
    return (
        <TituloStyle>{text}</TituloStyle>
    )
}

export default Titulo