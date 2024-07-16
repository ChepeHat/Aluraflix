import styled from "styled-components";
import BotonMain from "../../components/BotonMain";
import Campo from '../../components/Campo'
import CampoSeleccion from '../../components/CampoSeleccion'
import CampoTexto from '../../components/CampoTexto'
import { useForm } from "../../context/FormContext";

const Formulario = styled.form`
    display: flex;
    flex-direction: column;

    & h2 {
        
        text-transform: uppercase;
        font-size: 35px;
        color: #2271d1;
        margin: 60px 0 20px;

        @media screen and (min-width: 768px) {
            font-size: 50px;
            margin: 20px 0 20px;
        }
    }

`;

const DivBotones = styled.div`
    scale: 0.8;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

        @media screen and (min-width: 768px) {
            scale: 1;
            flex-direction: row;
        }
`;

const FormEdit = () => {

    const {
        titulo, setTitulo,
        categoria, setCategoria,
        imagen, setImagen,
        video, setVideo,
        descripcion, setDescripcion,
        manejarCambio
    } = useForm();


    return (
        <>
                <Formulario method="dialog" onSubmit={manejarCambio}>
                <h2>Editar card</h2>
                    <Campo 
                        type="text" 
                        id="titulo" 
                        name="Titulo" 
                        placeholder="¿Qué es javascript?" 
                        required='required'
                        border='#2271d1' 
                        valor={titulo}
                        actualizarValor={setTitulo} 
                    />
                    <CampoSeleccion 
                        border='#2271d1' 
                        valor={categoria}
                        actualizarValor={setCategoria}                 
                    />
                    <Campo 
                        type="url" 
                        id="imagen" 
                        name="Imagen" 
                        placeholder="https://www.google.com/url?..." 
                        required='required'
                        border='#2271d1'  
                        valor={imagen}
                        actualizarValor={setImagen} 
                    />
                    <Campo 
                        type="url" 
                        id="video" 
                        name="Video" 
                        placeholder="https://www.youtube.com/url?..."
                        required='required'
                        border='#2271d1' 
                        valor={video}
                        actualizarValor={setVideo} 
                    />
                    <CampoTexto
                        id="descripcion" 
                        name="Descripción" 
                        placeholder="lorem ipsum blah blah blah" 
                        required='required'     
                        border='#2271d1' 
                        valor={descripcion}
                        actualizarValor={setDescripcion}                    
                    />

                    <DivBotones>
                        <BotonMain nombre="Guardar" formMethod="dialog" />
                        <BotonMain nombre="Limpiar" formMethod="dialog" />
                    </DivBotones>
                </Formulario>
        </>
    );
};

export default FormEdit;
