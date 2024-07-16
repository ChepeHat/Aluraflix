import React from 'react';
import styled from 'styled-components';
import bannerFoto from '/img/bannerok.png'
import Descripcion from '../../components/Descripcion'
import Titulo from '../../components/Titulo'
import Miniatura from '../../components/Miniatura'
import CategoriaTitulo from '../../components/CategoriaTitulo';

const BannerWrapper = styled.section`
  background-image: url(${bannerFoto}); 
  background-size: cover;
  
  min-height: 600px;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  

  color: white;
  box-shadow: inset 10px0 10px 25px 5px black ;

  @media (min-width: 768px) {
    background-position: center;
    flex-flow: row;
    gap: 30px;
    justify-content: space-between;
  }


  @media (min-width: 1280px) {
    padding: 0 10vw;

}

  
`;

const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  & :nth-child(1) {
    padding: 0 2em;
  }

  @media (min-width: 750px) {
    align-items: start;

  
  }
`


const Banner = () => {
  return (
    <BannerWrapper>

        <DivTexto>
          <CategoriaTitulo
            categoria="Front End"
            $color='#6BD1FF'
            >Front End</CategoriaTitulo>
          <Titulo 
            text='Challenge React'
          />
          <Descripcion 
            text='Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React'
            />
        </DivTexto>
        <div>
          <Miniatura />
        </div>
    </BannerWrapper>
  );
};

export default Banner;
