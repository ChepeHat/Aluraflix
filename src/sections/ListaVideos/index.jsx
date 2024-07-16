import styled from "styled-components";
import CategoriaTitulo from "../../components/CategoriaTitulo";
import Card from "../../components/Card";

import { useState, useEffect } from 'react'
import { getVideos } from "../../data/api/api.js";

// Importa el archivo JSON completo
// import data from '../../data/db.json';

const WrapperVideos = styled.section`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 40px;

    @media (min-width: 1280px) {
        padding: 0 10vw;
    }
`
const Videos = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

const ListaVideos = ({ titulo, color}) => {

    // const { videos } = data; --> Get de forma Local con db.json
    
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videos = await getVideos();
                setVideos(videos);
            } catch (error) {
                setError(error);
            }
        };
        fetchVideos();
    }, []);
    
    if (error) {
        return <div>Error Fetching videos: {error.message}</div>;
    }
    
    const videosFiltrados = videos.filter(video => video.categoria === titulo);

    return (

        <WrapperVideos>

            <CategoriaTitulo $color={color}>
                {titulo}
            </CategoriaTitulo>

            <Videos>
                {videosFiltrados.map((video) => {
                    return <Card {...video} key={video.id} color={color} />;
                })}
            </Videos>
        </WrapperVideos>
        
    )
}

export default ListaVideos