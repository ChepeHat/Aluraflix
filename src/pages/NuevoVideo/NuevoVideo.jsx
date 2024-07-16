
import BotonMain from "../../components/BotonMain";
import Campo from '../../components/Campo'
import CampoSeleccion from '../../components/CampoSeleccion'
import CampoTexto from '../../components/CampoTexto'
import { useForm } from "../../context/FormContext";

// import { useVideoContext } from "../../context/VideoContext";

import { SectionStyle, Formulario, DivBotones } from './NuevoVideo.styled'


const FormularioNuevo = () => {

    const {
        titulo, setTitulo,
        categoria, setCategoria,
        imagen, setImagen,
        video, setVideo,
        descripcion, setDescripcion,
        manejarEnvio, handleReset,
    } = useForm();


        // const { addVideo } = useVideoContext();
        // const [ formData, setFormData ] = useState({
        //     titulo: "",
        //     categoria: "",
        //     img: "",
        //     video: "",
        //     descripcion: "",
        // });

        // const handleChange = (e) => {
        //     const { name, value } = e.target;
        //     setFormData({ ...formData, [name]: value });
        // };

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     addVideo(formData);
        //     setFormData({
        //         titulo: "",
        //         categoria: "",
        //         img: "",
        //         video: "",
        //         descripcion: "",
        //     });
        // };

        // const handleReset = () => {
        //     setFormData({
        //         titulo: "",
        //         categoria: "",
        //         img: "",
        //         video: "",
        //         descripcion: "",
        //     });
        // };

    return (
            <SectionStyle>
                <h2>Nuevo Video</h2>
                <h3>Complete el formulario para crear una nueva tarjeta de video.</h3>
                <h4>Crear Tarjeta</h4>
                <Formulario onSubmit={manejarEnvio} >
                        <Campo 
                            type="text" 
                            name='Titulo'
                            placeholder="Ingrese el título"
                            required='required'
                            border='#262626'
                            valor={titulo}
                            actualizarValor={setTitulo}
                        />
                        <CampoSeleccion 
                            border='#262626'  
                            valor={categoria}
                            actualizarValor={setCategoria}
                            
                            />
                        <Campo 
                            name='Imagen'
                            type="url" 
                            placeholder="Ingrese el enlace de la imagen" 
                            required='required'
                            border='#262626'  
                            valor={imagen}
                            actualizarValor={setImagen} 
                        />
                        <Campo 
                            name='Video'
                            type="url" 
                            placeholder="Ingrese el enlace del video"
                            required='required'
                            border='#262626'     
                            valor={video}
                            actualizarValor={setVideo}
                        />
                        <CampoTexto
                            placeholder="¿De qué se trata este video?" 
                            required='required'   
                            border='#262626'      
                            valor={descripcion}
                            actualizarValor={setDescripcion}       
                        />

                        <DivBotones>
                            <BotonMain type="submit" nombre="Guardar" onClick={manejarEnvio}  />
                            <BotonMain type="button" nombre="Limpiar" onClick={handleReset}/>
                        </DivBotones>
                </Formulario>
            </SectionStyle>
    );
};


export default FormularioNuevo
