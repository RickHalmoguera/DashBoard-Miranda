import { getCommentById, getCommentId, setModalCommentId } from "../../features/comments/commentsSlice"
import { ButtonStyled } from "../Button/ButtonStyled"
import { ModalContainerStyled, ModalStyled, ModalText, ModalTitle } from "./ModalStyled"
import { useDispatch,useSelector} from "react-redux"

export const Modal = ()=>{
    const dispatch = useDispatch()
    const comment=useSelector(getCommentById) 
    const closeModal =()=>{
        dispatch(setModalCommentId(undefined))
    }

    return(
        <ModalStyled>
            {console.log(comment)}
            <ModalContainerStyled>
                <ModalTitle>{comment[0].title}</ModalTitle>
                <ModalText>{comment[0].text}</ModalText>
                <ButtonStyled onClick={closeModal} >Close</ButtonStyled>
            </ModalContainerStyled>
        </ModalStyled>
    )

}