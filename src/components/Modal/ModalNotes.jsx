import { getBookingById, setModalBookingId } from "../../features/bookings/bookingsSlice"
import { ButtonStyled } from "../Button/ButtonStyled"
import { ModalContainerStyled, ModalStyled, ModalText, ModalTitle } from "./ModalStyled"
import { useDispatch,useSelector} from "react-redux"

export const ModalNotes = ()=>{
    const dispatch = useDispatch()
    const booking=useSelector(getBookingById) 
    const closeModal =()=>{
        dispatch(setModalBookingId(undefined))
    }

    return(
        <ModalStyled>
            <ModalContainerStyled>
                <ModalTitle>Guest Request</ModalTitle>
                <ModalText>{booking[0].notes}</ModalText>
                <ButtonStyled onClick={closeModal} >Close</ButtonStyled>
            </ModalContainerStyled>
        </ModalStyled>
    )

}