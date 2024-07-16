import styled from "styled-components"

const Imagen = styled.img`
    display: flex;
    width: 100%;
    border-radius: 15px;
    border: solid 2px #2271D1;
    box-shadow: inset 0 0 12px 4px #2271D1;
    flex-grow: 1;
    max-width: 600px;
`

const Miniatura = () => {
    return (
        <Imagen
            src='/img/mini1.png' 
            title="YouTube video player" 
            allowFullScreen
        />
    )
}

export default Miniatura

