import styled from "styled-components"
import Logo from "../../components/Logo"

const FooterStyle = styled.header`
    background-color: #262626;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    padding: 0 30px;
    box-sizing: border-box;
    box-shadow: 0px -5px 29px 0px rgba(34, 113, 209, 0.7);
    border-top: 5px;
    ;
`

const Footer = () => {
    return (
        <FooterStyle>
            <Logo />
        </FooterStyle>
    )
}

export default Footer