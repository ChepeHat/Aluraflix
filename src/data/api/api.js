import axios  from "axios";

const api = axios.create({
    baseURL: "https://6691e89926c2a69f6e91020e.mockapi.io/api/",
});

export const getCategorias = async () => {
    try {
        const response = await api.get("/categorias");
        return response.data;
    } catch (error) {
        console.error("Error al buscar las categorias", error);
        throw error;
    }
};

export const getVideos = async () => {
    try {
        const response = await api.get("/videos");
        return response.data;
    } catch (error) {
        console.error("Error al buscar los videos", error);
        throw error;
    }
};


export const saveVideo = async (video) => {
    try {
        const response = await api.post("/videos", video);
        return response.data;
    } catch (error) {
        console.error("Error al crear nuevo video", error);
        throw error;
    }
};
export default api;
