import { PaginationContainerStyled, PaginationText, TableRoomsStyled, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdText, TrHeadStyled, TrStyled, TableRoomImg, TdRoomCardStyled, TableRoomBtn, TdAmenitiesStyled, TrHeadStyledCentered, TdSpan, TableBookingBtn, TdBookingCardStyled } from './TableStyled';
import { ViewRoomBtn } from '../../components/Icons/IconsStyled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonNotesStyled, ButtonStyled } from '../Button/ButtonStyled'
import { getTheme } from "../../features/theme/themeSlice"
import { ThreeDots } from 'react-loader-spinner'
import { getBookingsData, getBookingsError, getBookingsStatus } from '../../features/bookings/bookingsSlice';
import { getBookingsListFromAPIThunk } from '../../features/bookings/bookingsThunk';
import { getRoomsListFromAPIThunk } from '../../features/rooms/roomsThunk';
import { getRoomsData } from '../../features/rooms/roomsSlice';

export const TableBookings = ({FilterOption, selectedSortOption}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bookingsListData = useSelector(getBookingsData)
  const bookingsListError = useSelector(getBookingsError)
  const bookingsListStatus = useSelector(getBookingsStatus)
  const roomsListData= useSelector(getRoomsData)
  const [spinner, setSpinner] = useState(true)
  const [filteredBookingsList, setFilteredBookingsList] = useState([])
  const themeData = useSelector(getTheme)
  const theme = themeData? "dark" : "light"
  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedBookings = filteredBookingsList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredBookingsList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleViewBooking = (id)=>{
    navigate(`/root/bookins/booking/${id}`)
  }

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


  const getRoomType = (id)=>{
    const room = roomsListData.find((room) => room.id === id)

    return room.room_type
  }
  useEffect(()=>{
    let newFilteredBookingsList=[]
    if (bookingsListStatus === "idle") {
      dispatch(getBookingsListFromAPIThunk());
      dispatch(getRoomsListFromAPIThunk())
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      
      if(FilterOption ==="checkin"){
        newFilteredBookingsList = bookingsListData.filter((booking) => booking.status === "check in" )
      }else if(FilterOption ==="checkout"){
        newFilteredBookingsList = bookingsListData.filter((booking) => booking.status === "check out" )
      }else if(FilterOption ==="progress"){
        newFilteredBookingsList = bookingsListData.filter((booking) => booking.status === "in progress" )
      }else{
        newFilteredBookingsList = [...bookingsListData]
      }
     
      if (selectedSortOption === "guest") {
        newFilteredBookingsList.sort((a, b) => a.status.localeCompare(b.status))
      }else if (selectedSortOption === "checkin") {
        newFilteredBookingsList.sort((a, b) => new Date(b.date_in) - new Date(a.date_in))
      }
      else if (selectedSortOption === "checkout") {
        newFilteredBookingsList.sort((a, b) => new Date(b.date_out) - new Date(a.date_out))
      }
      else if (selectedSortOption === "date") {
        newFilteredBookingsList.sort((a, b) => new Date(b.order_date) - new Date(a.order_date))
      }

      setFilteredBookingsList(newFilteredBookingsList)
      setSpinner(false)
      setCurrentPage(1)
    }


  },[dispatch, bookingsListData, bookingsListStatus, FilterOption,selectedSortOption])

  return (
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
      <TableRoomsStyled>
        <thead>
          <tr>
            <TrHeadStyled>Guest Name</TrHeadStyled>
            <TrHeadStyled>Order Date</TrHeadStyled>
            <TrHeadStyled>Check In</TrHeadStyled>
            <TrHeadStyled>Check Out</TrHeadStyled>
            <TrHeadStyled>Special Request</TrHeadStyled>
            <TrHeadStyled>Room Type</TrHeadStyled>
            <TrHeadStyled>Status</TrHeadStyled>
            <TrHeadStyledCentered>Action</TrHeadStyledCentered>
          </tr>
        </thead>
        <tbody>
          {displayedBookings.map((booking) => (
            <TrStyled key={booking.id}>
              <td>
                <TdBookingCardStyled>
                    <TdHeadind>{booking.first_name} {booking.last_name}</TdHeadind>
                    <TdIdText># {booking.id}</TdIdText>
                </TdBookingCardStyled>

              </td>

              
              <td>
                <TdText>{FormatDate(booking.order_date)}</TdText>
              </td>
              
              <td>
                <TdText>{FormatDate(booking.date_in)}</TdText>
              </td>
              <td>
                <TdText>{checkOut(booking.status,booking.date_out)}</TdText>
              </td>
              <TdBtnStyled>
                  <ButtonNotesStyled disabled={booking.notes === null}>Notes</ButtonNotesStyled>
              </TdBtnStyled>
              <td>
                <TdText>{getRoomType(booking.id)}</TdText>
              </td>
              <TdBtnStyled>
                  {booking.status === "check out" && <TableBookingBtn $bg="#E23428" $color="#FFF">Check Out</TableBookingBtn>}
                  {booking.status === "check in" && <TableBookingBtn $bg="#5AD07A" $color="#FFF">Check In</TableBookingBtn>}
                  {booking.status === "in progress" && <TableBookingBtn $bg="#FF9C3A" $color="#FFF">In Progress</TableBookingBtn>}
              </TdBtnStyled>
              <td>
              <TdFlex>
                <ViewRoomBtn   onClick={()=> handleViewBooking(booking.id)}/>
              </TdFlex>
              </td>
            </TrStyled>
          ))}
        </tbody>
      </TableRoomsStyled>

      <PaginationContainerStyled>
        <PaginationText>
          Page {currentPage} of {totalPages}
        </PaginationText>
        <ButtonStyled
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </ButtonStyled>
        <ButtonStyled
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </ButtonStyled>
      </PaginationContainerStyled>
      
    </>
    
  )



}
