import styled from "styled-components"
import Logo from "../../components/Logo"
import BotonMain from "../../components/BotonMain"
import { Link } from "react-router-dom"
import { FaHome, FaPlus } from "react-icons/fa";

import { HeaderStyle, Div } from './Header.styled.js'


const Header = () => {
    return (
        <HeaderStyle>
            <Link className='logo' to='/' >
                    <Logo nombre='Home' /> 
            </Link>
            <Div>
                <Link to='/' >
                    <BotonMain nombre='Home' icono={<FaHome size={40} />} /> 
                </Link>
                <Link to='/nuevo-video' >
                    <BotonMain nombre='Nuevo video' icono={<FaPlus size={40} />} />
                </Link>
            </Div>
        </HeaderStyle>
    )
}

export default Header