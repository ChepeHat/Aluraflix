import styled from 'styled-components'
import logo from './aluraflix.svg'

const LogoStyle = styled.img`
    height: 40px;
    width: auto;
    margin: 10px;
    cursor: pointer;

    :hover {
        transform: scale(1.5);

    }
`

const Logo = () => {
    return (
        <LogoStyle src={logo} alt='logo' />
    )
}

export default Logo