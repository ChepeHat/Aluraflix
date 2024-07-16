import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        img: "",
        video: "",
        descricao: "",
    });

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Manejar el envio');
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        };
        console.log(datosAEnviar);
    };

    const manejarCambio = (e) => {
        e.preventDefault();
        console.log('Manejar el cambio');
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        };
        console.log(datosAEnviar);
    };

    const handleReset = () => {
        console.log('Borrar los datos del formulario');
        setFormData({
            titulo: "",
            categoria: "",
            imagen: "",
            video: "",
            descripcion: "",
        });
    };

    return (
        <FormContext.Provider value={{
            titulo, setTitulo,
            categoria, setCategoria,
            imagen, setImagen,
            video, setVideo,
            descripcion, setDescripcion,
            manejarEnvio, manejarCambio, handleReset
        }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    return useContext(FormContext);
};
