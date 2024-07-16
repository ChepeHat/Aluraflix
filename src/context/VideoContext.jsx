import { createContext, useContext, useEffect, useState } from "react";
import { getVideos, saveVideo as addVideoService } from "../data/api/api.js";

const VideosContext = createContext();

export const useVideoContext = () => {
    return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
        try {
            const videoData = await getVideos();
            setVideos(videoData);
            setLoading(false);
        } catch (error) {
            console.error("Error al buscar videos", error);
            setLoading(false);
        }
        };
        fetchVideos();
    }, []);

    const addVideo = async (newVideo) => {
        try {
        const addedVideo = await addVideoService(newVideo);
        setVideos((prevVideos) => [...prevVideos, addedVideo]);
        } catch (error) {
        console.error("Erro ao adicionar vídeo", error);
        }
    };

    const videoCategory = {};

    videos.forEach((video) => {
        const category = video.categoria;
        if (!videoCategory[category]) {
        videoCategory[category] = [];
        }
        videoCategory[category].push(video);
    });

    return (
        <VideosContext.Provider
        value={{ videos, loading, videoCategory, addVideo }}
        >
        {children}
        </VideosContext.Provider>
    );
    };
