import { useDispatch, useSelector } from "react-redux"
import { ButtonStyled } from "../Button/ButtonStyled"
import { BtnContainerStyled, FormFlexStyled, FormOptionStyled, FormStyled, InputStyled, LabelStyled, RoomNumberStyled, TextAreaStyled } from "./FormStyled"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { SelectButtonBigStyled, SelectButtonMultipleStyled } from "../Button/SelectButtonStyled"
import { toast } from 'react-toastify'
import { getTheme } from "../../features/theme/themeSlice"
import { addRoom, getRoomsData, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { getRoomsListFromAPIThunk } from "../../features/rooms/roomsThunk"


export const FormRoom = ()=>{
    const themeData = useSelector(getTheme)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const roomsListData = useSelector(getRoomsData)
    const roomsListStatus = useSelector(getRoomsStatus)
    const [newId,setNewId]= useState(12)
    const formRef= useRef()
    const [roomNumber, setRoomNumber] = useState(`Single Bed-${newId}`)

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
        const selectedAmenities = Array.from(e.target.amenities.options)
        .filter(option => option.selected)
        .map(option => option.value)
        const newRoom ={
            id: newId,
            photos:["room1","room2","room3"],
            room_type:e.target.room_type.value,
            room_number: roomNumber,
            description:e.target.description.value,
            offer:e.target.offer.value === 'true',
            price_night:e.target.price_night.value,
            discount:e.target.discount.value,
            cancellation: e.target.cancellation.value,
            amenities:selectedAmenities,
            status:"available"
        }
        const theme = themeData? "dark" : "light"
        toast.success('Room created!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        });
        dispatch(addRoom(newRoom))
        console.log(newRoom)
        navigate("/root/rooms")
    }

    const handleClear = (e)=>{
        e.preventDefault()
        formRef.current.room_type.value = "Single Bed"
        formRef.current.description.value = ""
        formRef.current.price_night.value = ""
        formRef.current.discount.value = ""
        formRef.current.cancellation.value = ""
        setRoomNumber(formRef.current.room_type.value + "-" + newId)

    }


    return(

        <FormStyled onSubmit={handleSubmit} ref={formRef}>    
            <LabelStyled>Room Type</LabelStyled>
            <SelectButtonBigStyled name="room_type" onChange={()=>setRoomNumber(formRef.current.room_type.value + "-" + newId)}>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Double Superior">Double Superior</option>
                <option value="Suite">Suite</option>
            </SelectButtonBigStyled>
            <LabelStyled>Room Number</LabelStyled>
            <RoomNumberStyled>{roomNumber}</RoomNumberStyled>
            <LabelStyled>Description</LabelStyled>
            <TextAreaStyled  name="description" rows={2} required/>
            <LabelStyled>Cancellation</LabelStyled>
            <TextAreaStyled  name="cancellation" rows={2} required/>
            <FormFlexStyled>
                <div>
                    <LabelStyled>Offer</LabelStyled>
                    <SelectButtonBigStyled name="offer" defaultValue="true">
                        <option value={true}>Yes</option>
                        <option value={false}>no</option>
                </SelectButtonBigStyled>

                </div>
                <div>
                    <LabelStyled>Price Night</LabelStyled>
                    <InputStyled type="number" name="price_night" min={0} required/>

                </div>
                <div>
                    <LabelStyled>Discount</LabelStyled>
                    <InputStyled type="number" name="discount" min={0} />

                </div>

            </FormFlexStyled>
            <LabelStyled>Status</LabelStyled>
            <SelectButtonMultipleStyled name="amenities"  multiple required>
                <FormOptionStyled value="Air conditioner">Air Conditioner</FormOptionStyled>
                <FormOptionStyled value="Breakfast">Breakfast</FormOptionStyled>
                <FormOptionStyled value="Cleaning">Cleaning</FormOptionStyled>
                <FormOptionStyled value="Grocery">Grocery</FormOptionStyled>
                <FormOptionStyled value="Shop near">Shop near</FormOptionStyled>
                <FormOptionStyled value="24/7 Online Suppor">24/7 Online Suppor</FormOptionStyled>
                <FormOptionStyled value="Smart Security">Smart Security</FormOptionStyled>
                <FormOptionStyled value="High-speed Wifi">High-speed Wifi</FormOptionStyled>
                <FormOptionStyled value="Kitchen">Kitchen</FormOptionStyled>
                <FormOptionStyled value="Shower">Shower</FormOptionStyled>
                <FormOptionStyled value="Towels">Towels</FormOptionStyled>
                <FormOptionStyled value="Strong Locker">Strong Locker</FormOptionStyled>
                <FormOptionStyled value="Expert Team">Expert Team</FormOptionStyled>
            </SelectButtonMultipleStyled>
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