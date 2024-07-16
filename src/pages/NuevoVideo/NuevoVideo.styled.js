import styled from "styled-components";


export const SectionStyle = styled.section`
    color: white;
    padding: 40px;
    background: #191919;

    @media (min-width: 765px) {
        height: 80vh;
};

    
    @media (min-width: 1280px) {
        padding: 0 10vw;
};

    & h2, & h3 {  
        text-transform: uppercase;
        text-align: center;
        font-size: 45px;
        margin: 20px 0;
        font-weight: 900;
        }
    
    & h3 {
        font-size: 15px;
        font-weight: 400;
        
        }
    & h4 {
        padding: 20px 0;
        font-size: 36px;
        font-weight: 600;
        font-family: "Source Sans 3", sans-serif;
        border-top: solid 5px  #262626;
        border-bottom: solid 5px  #262626;
    }
    
`;

export const Formulario = styled.form`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    color: white;
    box-sizing: border-box;

    & > * {
        
        width: 100%;
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        & > * {
            width: calc(50% - 10px);
        }
        & > *:nth-child(odd) {
            margin-right: 20px;
            
        }
    }

`

export const DivBotones = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
    
    & > * {
        flex: 1;
    }

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;
