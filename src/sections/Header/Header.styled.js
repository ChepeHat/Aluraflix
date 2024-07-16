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
export const BotonHeader = styled.button`

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

        & .icono {
                display: flex;
                height: 100%;
            }
        
        & .texto {
            display: none;
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

export const Div = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    width: 100%;

    @media (min-width: 730px) {
        width: auto;
    }
`