import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Banner from '../sections/Banner'
import ListaVideos from '../sections/ListaVideos'

import { getCategorias } from '../data/api/api.js'


// import data from '../data/db.json';


const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
    box-sizing: border-box;
`

const Home = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCategorias()
            .then((categorias) => setCategorias(categorias))
            .catch((error) => console.error('Error fetching videos:', error));
    }, []);

    // const { categorias } = data;

    return (
        <MainWrapper>
            <Banner />
            {categorias.map((categoria) => {
                return <ListaVideos { ...categoria} key={categoria.id} />;
            })};
        </MainWrapper>
    );
};

export default Home
