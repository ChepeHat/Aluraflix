import styled from "styled-components"

const TituloStyle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 432px;
    height: 70px;
    border-radius: 15px;
    background-color: ${props => props.$color};
    margin: 0;
    color: white;
    
    text-transform: uppercase;
    font-weight: 800;
    font-size: 32px;
    font-family: "Source Sans 3", sans-serif;
    
    @media (min-width: 750px) {
        padding: 0 40px;
    }
`
const CategoriaTitulo = ({ children, $color }) => {
    return (
    <TituloStyle style={{ backgroundColor: $color }}>
        {children}
    </TituloStyle>
    )
}


export default CategoriaTitulo

