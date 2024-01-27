import { useDispatch, useSelector } from "react-redux"
import { ButtonStyled } from "../Button/ButtonStyled"
import { BtnContainerStyled, FormStyled, InputStyled, LabelStyled, RoomNumberStyled, TextAreaStyled } from "./FormStyled"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { SelectButtonBigStyled } from "../Button/SelectButtonStyled"
import { toast } from 'react-toastify'
import { getTheme } from "../../features/theme/themeSlice"
import { getRoomsData, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { getRoomsListFromAPIThunk } from "../../features/rooms/roomsThunk"


export const FormRoom = ()=>{
    const themeData = useSelector(getTheme)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const roomsListData = useSelector(getRoomsData)
    const roomsListStatus = useSelector(getRoomsStatus)
    const [newId,setNewId]= useState(0)
    const formRef= useRef()
    const [roomNumber, setRoomNumber] = useState(`Single Bed 12`)

    useEffect(()=>{

    if (roomsListStatus === "idle") {
        dispatch(getRoomsListFromAPIThunk());
      } else if (roomsListStatus === "pending") {
       
      } else if (roomsListStatus === "fulfilled") {
       setNewId(roomsListData.length + 1)
       
      }
  
    },[dispatch, roomsListData, roomsListStatus])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newRoom ={
            id: newId,
            photos:["room1","room2","room3"],
            room_type:e.target.room_type.value,
            room_number: e.target.room_number.value,
            description:e.target.description.value,
            offer:e.target.offer.value === 'true',
            price_night:e.tarprice_night.value,
            discount:e.target.discount.value,
            cancellation: e.target.cancellation.value,
            amenities:e.target.amenities.value,
            status:e.target.status.value
        }
        const theme = themeData? "dark" : "light"
        toast.success('User updated!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        });
        dispatch(addUser(newUser))
        navigate("/root/users")
    }

    const handleClear = (e)=>{
        e.preventDefault()
        formRef.current.room_number.value = ""
        formRef.current.description.value = ""
        formRef.current.price_night.value = ""
        formRef.current.discount.value = ""
        formRef.current.cancellation.value = ""
        formRef.current.amenities1.value = ""
        formRef.current.amenities2.value = ""
        formRef.current.amenities3.value = ""
        formRef.current.amenities4.value = ""
        formRef.current.amenities5.value = ""
        formRef.current.amenities6.value = ""
        formRef.current.amenities7.value = ""
        formRef.current.amenities8.value = ""
        formRef.current.amenities9.value = ""
        formRef.current.amenities10.value = ""
        formRef.current.amenities11.value = ""
        formRef.current.amenities12.value = ""
        formRef.current.amenities13.value = ""

    }


    return(

        <FormStyled onSubmit={handleSubmit} ref={formRef}>    
            <LabelStyled>Room Type</LabelStyled>
            <SelectButtonBigStyled name="room_type" onChange={()=>setRoomNumber(formRef.current.room_type.value + " " + newId)}>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Double Superior">Double Superior</option>
                <option value="Suite">Suite</option>
            </SelectButtonBigStyled>
            <LabelStyled>Room Number</LabelStyled>
            <RoomNumberStyled>{roomNumber}</RoomNumberStyled>
            <LabelStyled>Job Title</LabelStyled>
            <SelectButtonBigStyled name="job_title">
                <option value="manager">Manager</option>
                <option value="manag">Recepcionist</option>
                <option value="manager">Room Service</option>
            </SelectButtonBigStyled>
            <LabelStyled>Description</LabelStyled>
            <TextAreaStyled  name="description" rows={2} required/>
            <LabelStyled>Cancellation</LabelStyled>
            <TextAreaStyled  name="cancellation" rows={2} required/>
            <LabelStyled>Offer</LabelStyled>
            <SelectButtonBigStyled name="offer">
                <option value={true}>Yes</option>
                <option value={false}>no</option>
            </SelectButtonBigStyled>
            <LabelStyled>Price Night</LabelStyled>
            <InputStyled type="number" name="price_night" min={0} required/>
            <LabelStyled>Discount</LabelStyled>
            <InputStyled type="number" name="discount" min={0} required/>
            <LabelStyled>Status</LabelStyled>
            <SelectButtonBigStyled name="is_active" required>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
            </SelectButtonBigStyled>
            <BtnContainerStyled>
                <ButtonStyled
                type="submit" 
                $bg="#135846"
                $fc="#FFF"
                >
                    Create
                </ButtonStyled>
                <ButtonStyled 
                type="submit"
                onClick={handleClear}
                $bg="#E23428"
                $fc="#FFF"
                >
                    Clear
                </ButtonStyled>
            </BtnContainerStyled>
        </FormStyled>
       

    )

}