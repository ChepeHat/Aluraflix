import styled from "styled-components"



export const HeaderStyle = styled.header`
    background-color: #262626;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 125px;
    padding: 0 30px;
    box-sizing: border-box;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
    margin: 0;
    position: fixed;
    bottom: 0%;
    
        & .logo{
            display: none;
        }

        @media (min-width: 730px) {
            position: relative;
            top: auto;
            bottom: auto;

            & .logo{
                display: flex;
                
            }
    }

    @media (min-width: 1280px) {
        padding: 0 10vw;
    }
    
`

export const Div = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    width: 100%;

    @media (min-width: 730px) {
        width: auto;
    }
`