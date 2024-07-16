import styled from "styled-components";


const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    
    & label {
        font-size: 20px;
        margin-bottom: 5px;
    }
`;

const SelectStyle = styled.select`
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        border: solid 3px;
        border-color: ${props => props.$border};
        border-radius: 5px;
        background: transparent;
        color: white;
        font-size: 14px;
        flex-flow: row;
`;

const CampoSeleccion = ({ border, actualizarValor, valor}) => {


    const manejarCambio = (e) => {
        console.log('cambio', e.target.value);
        actualizarValor(e.target.value);
    }

    return (
        <>
        <DivInput >
            <label htmlFor="categoria">Categoría</label>
            <SelectStyle 
                $border={border}
                value={valor}
                onChange={manejarCambio}
                required>
                    <option value="">Selecciona una categoría</option>
                    <option value="frontEnd">Front End</option>
                    <option value="backEnd">Back End</option>
                    <option value="innovacion">Innovación y Gestión</option>
            </SelectStyle>
        </DivInput>
        </>
    )
} 

export default CampoSeleccion