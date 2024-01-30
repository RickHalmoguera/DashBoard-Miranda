import { useDispatch, useSelector } from 'react-redux'
import { getTheme } from "../../features/theme/themeSlice"
import { getRoomsData} from '../../features/rooms/roomsSlice'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import room1 from "../../assets/images/rooms/room1.jpg"
import room2 from "../../assets/images/rooms/room2.jpg"
import room3 from "../../assets/images/rooms/room3.jpg"
import { BigCardFlex, BigCardFlexColumn, BigCardGrid, BigCardHeading, BigCardId, BigCardPhotoBoxStyled, BigCardSpan, BigCardStyled, BigCardSubHeading, BigCardText, BigCardTextBoxStyled, BigCardToolTip } from '../BigCardStyled/BigCardStyled'
import { SwiperBigCard } from '../SwiperBigCard/SwiperBigCard'

export const RoomInfo = ()=>{
    const roomsListData = useSelector(getRoomsData);
    const themeData = useSelector(getTheme)
    const { id } = useParams()
    const theme = themeData? "dark" : "light"
    const [room, setRoom] = useState({})
    const [price_discount, setPrice_discount] = useState(0);
    const [amenities, setAmenities] = useState([])

    useEffect(() => {
        const searchRoom = roomsListData.find((room) => room.id.toString() === id)
        setRoom(searchRoom)
        const calculatedDiscount = (searchRoom.price_night) - (searchRoom.price_night * searchRoom.discount / 100)
        setPrice_discount(calculatedDiscount)
        setAmenities(room.amenities)
      }, [roomsListData,amenities]) 
    return(

        <BigCardStyled>
            <BigCardTextBoxStyled>
                <div>
                    <BigCardHeading>Room information</BigCardHeading>
                    <BigCardId>ID: {room.id}</BigCardId>
                </div>
                <hr /> 
                <BigCardGrid>
                    <BigCardFlexColumn>
                        <BigCardSubHeading>Room Type</BigCardSubHeading> 
                        <BigCardText>{room.room_type}</BigCardText>
                    </BigCardFlexColumn>
                    <BigCardFlexColumn>
                        <BigCardSubHeading>Room Number</BigCardSubHeading> 
                        <BigCardText>{room.room_number}</BigCardText>
                    </BigCardFlexColumn>
                    <BigCardFlexColumn>
                        <BigCardSubHeading>Rate</BigCardSubHeading> 
                        <BigCardText>${room.price_night}<BigCardSpan>/Night</BigCardSpan></BigCardText>
                    </BigCardFlexColumn>
                    <BigCardFlexColumn>
                        <BigCardSubHeading>Rate with discount</BigCardSubHeading> 
                        <BigCardText>{room.offer? `$${price_discount}` : "No discount available"}</BigCardText>
                    </BigCardFlexColumn>
                </BigCardGrid>
                <hr/>
                <BigCardFlexColumn>
                    <BigCardSubHeading>Room description</BigCardSubHeading>
                    <BigCardText>{room.description}</BigCardText>
                
                    <BigCardSubHeading>Amenities</BigCardSubHeading>
                    <BigCardGrid>
                        {amenities?.map((amenity, index) => (
                            <BigCardToolTip key={index}>{amenity}</BigCardToolTip>
                        ))}
                    </BigCardGrid>
                    
                </BigCardFlexColumn>
            </BigCardTextBoxStyled>
            <BigCardPhotoBoxStyled>
                <SwiperBigCard room1={room1} room2={room2} room3={room3}/>
            </BigCardPhotoBoxStyled>

        </BigCardStyled>

    )
}