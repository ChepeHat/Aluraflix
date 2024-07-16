import styled from "styled-components"
import Logo from "../../components/Logo"
import BotonMain from "../../components/BotonMain"
import { Link } from "react-router-dom"
import { FaHome, FaPlus } from "react-icons/fa";

import { HeaderStyle, BotonHeader, Div } from './Header.styled.js'


const Header = () => {
    return (
        <HeaderStyle>
            <Link className='logo' to='/' >
                    <Logo nombre='Home' /> 
            </Link>
            <Div>
                <Link to='/' >
                    <BotonHeader>
                        <FaHome className="icono" size={40} />
                        <span className="texto">Home</span>
                    </BotonHeader> 
                </Link>
                <Link to='/nuevo-video' >
                    <BotonHeader>
                        <FaPlus className="icono" size={40}  />
                        <span className="texto">Nuevo Video</span>
                    </BotonHeader>
                </Link>
            </Div>
        </HeaderStyle>
    )
}

export default Header