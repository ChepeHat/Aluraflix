import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import styled from "styled-components";
import { useModal } from "../../../context/ModalContext";
import ModalDelete from '../../../sections/ModalDelete'
import ModalEdit from '../../../sections/ModalEdit'


const PieStyle = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #03122F;
    border-top: solid 5px ${props => props.$color};
    box-shadow: 0 0 12px 4px ${props => props.$color};
    border-radius: 0 0 10px 10px;
`

const Boton = styled.button`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    flex-grow: 1;

    &:hover {
    
        box-shadow: 0 0 12px 4px ${props => props.$color};
        background-color: ${props => props.$color};
    }

    .icon {
        margin-right: 8px;
        font-size: 20px;
    }
`

const PieCard = ( {color} ) => {

    const { handleOpenModal } = useModal();

    return (
        <PieStyle $color={color}>
            <Boton  $color={color} onClick={() => handleOpenModal('deleteModal')}>
                <MdOutlineDeleteForever className="icon" />
                BORRAR
            </Boton>
            <Boton $color={color} onClick={() => handleOpenModal('editModal')}>
                <BiEditAlt className="icon" />
                EDITAR
            </Boton>
 
            <ModalDelete />
            <ModalEdit />

        </PieStyle>
    );
};

export default PieCard;

