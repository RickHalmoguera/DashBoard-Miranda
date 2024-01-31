import { useDispatch, useSelector } from 'react-redux'
import { getTheme } from "../../features/theme/themeSlice"
import { getRoomsData, getRoomsError, getRoomsStatus} from '../../features/rooms/roomsSlice'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import room1 from "../../assets/images/rooms/room1.jpg"
import room2 from "../../assets/images/rooms/room2.jpg"
import room3 from "../../assets/images/rooms/room3.jpg"
import { BigCardFlexColumn, BigCardGrid, BigCardHeading, BigCardId, BigCardPhotoBoxStyled, BigCardSpan, BigCardStyled, BigCardSubHeading, BigCardText, BigCardTextBoxStyled, BigCardToolTip } from '../BigCardStyled/BigCardStyled'
import { SwiperBigCard } from '../SwiperBigCard/SwiperBigCard'
import { ThreeDots } from 'react-loader-spinner'
import { getRoomsListFromAPIThunk } from '../../features/rooms/roomsThunk'
import { getBookingsData, getBookingsError, getBookingsStatus } from '../../features/bookings/bookingsSlice'
import { getBookingsListFromAPIThunk } from '../../features/bookings/bookingsThunk'

export const BookingInfo = ()=>{
    const dispatch = useDispatch()
    const bookingsListData = useSelector(getBookingsData)
    const bookingsListError = useSelector(getBookingsError)
    const bookingsListStatus = useSelector(getBookingsStatus)
    const roomsListData = useSelector(getRoomsData)
    const roomsListError = useSelector(getRoomsError)
    const roomsListStatus = useSelector(getRoomsStatus)
    const themeData = useSelector(getTheme)
    const { id } = useParams()
    const [spinner, setSpinner] = useState(true)
    const theme = themeData? "dark" : "light"
    const [room, setRoom] = useState({})
    const [booking, setBooking] = useState({})
    const [price_discount, setPrice_discount] = useState(0)
    const [amenities, setAmenities] = useState([])

    const FormatDate = (date) => {
        const inputDate = new Date(date);
        const formatedDate = `${inputDate
          .getDate()
          .toString()
          .padStart(2, "0")}-${(inputDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${inputDate.getFullYear()} 
        ${inputDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}`;
    
        return formatedDate;
      }

      const checkOut = (status,dateOut)=>{
        if(status ==="in progress" || status == "check in"){
          return "Guests still in Hotel"
        }
        else{
          return FormatDate(dateOut)
        }
      }

    useEffect(() => {
        if (bookingsListStatus === "idle") {
            dispatch(getRoomsListFromAPIThunk())
            dispatch(getBookingsListFromAPIThunk())
          } else if (bookingsListStatus === "pending") {
           
          } else if (bookingsListStatus === "fulfilled") {
            const searchBooking = bookingsListData.find((booking) => booking.id.toString() === id)
            const searchRoom = roomsListData.find((room)=> room.id === searchBooking.room_id)
            setRoom(searchRoom)
            setBooking(searchBooking)
            console.log(room)
            const calculatedDiscount = (searchRoom.price_night) - (searchRoom.price_night * searchRoom.discount / 100)
            setPrice_discount(calculatedDiscount)
            setAmenities(searchRoom.amenities)
            setSpinner(false)
        }
      }, [roomsListData,amenities,dispatch,bookingsListData]) 
    return(
        <>
            {spinner && <ThreeDots
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#135846" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{ margin:"auto auto" }}
                        visible={true}
                        />}
             { !spinner &&  <BigCardStyled>
            
                <BigCardTextBoxStyled>
                    <div>
                        <BigCardHeading>{booking.first_name} {booking.last_name}</BigCardHeading>
                        <BigCardId>ID: {booking.id}</BigCardId>
                    </div>
                    <BigCardGrid>
                        <BigCardFlexColumn>
                            <BigCardSubHeading>Check in</BigCardSubHeading> 
                            <BigCardText>{FormatDate(booking.date_in)}</BigCardText>
                        </BigCardFlexColumn>
                        <BigCardFlexColumn>
                            <BigCardSubHeading>Check out</BigCardSubHeading> 
                            <BigCardText>{checkOut(booking.status,booking.date_out)}</BigCardText>
                        </BigCardFlexColumn>
                        <BigCardFlexColumn>
                            <BigCardSubHeading>Room</BigCardSubHeading> 
                            <BigCardText>{room.room_number}</BigCardText>
                        </BigCardFlexColumn>
                        <BigCardFlexColumn>
                            <BigCardSubHeading>Price</BigCardSubHeading> 
                            <BigCardText>{booking.offer? `$${price_discount}` : `$${room.price_night}`}<BigCardSpan>/Night</BigCardSpan></BigCardText>
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

            </BigCardStyled>}
        </>

    )
}