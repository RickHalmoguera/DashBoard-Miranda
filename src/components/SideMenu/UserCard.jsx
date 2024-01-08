import { UserCardStyled } from "./UserCardStyled"
import RicardoPhoto from "../../assets/images/users/ricardo.jpg"
import { ButtonStyled } from "../Button/ButtonStyled"
import { useNavigate } from "react-router-dom"


export const UserCard = ()=>{

    const navigate= useNavigate()

    const handleClick = ()=>{
        navigate("/root/edituser")
    }

    return(
        <UserCardStyled>
            <img src={RicardoPhoto} alt="" />
            <h2>Ricardo Halmoguera</h2>
            <p>halmoguerar@gmail.com</p>
            <ButtonStyled $bg="#EBF1EF" $fc="#135846" onClick={handleClick}>
                Edit
            </ButtonStyled>
        </UserCardStyled>
    )
}