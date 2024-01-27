import { PaginationContainerStyled, PaginationText, TableUserBtn, TableUserImg, TableRoomsStyled, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled, TableRoomImg, TdRoomCardStyled, TableRoomBtn, TdAmenitiesStyled } from './TableStyled';
import { EditRoomBtn, EditUserBtn, PhoneStyledIcon, TrashStyledBtn, ViewRoomBtn } from '../../components/Icons/IconsStyled'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomsData, getRoomsError, getRoomsStatus } from '../../features/rooms/roomsSlice'
import { useEffect, useState } from 'react'
import { getRoomsListFromAPIThunk } from '../../features/rooms/roomsThunk'
import { useNavigate } from 'react-router-dom'
import { ButtonStyled } from '../Button/ButtonStyled'
import { getTheme } from "../../features/theme/themeSlice"
import room1 from "../../assets/images/rooms/room1.jpg"
import { ThreeDots } from 'react-loader-spinner'

export const TableRoom = ({FilterOption, selectedSortOption}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const roomsListData = useSelector(getRoomsData)
  const roomsListError = useSelector(getRoomsError)
  const roomsListStatus = useSelector(getRoomsStatus)
  const [spinner, setSpinner] = useState(true)
  const [filteredRoomsList, setFilteredRoomsList] = useState([])
  const themeData = useSelector(getTheme)
  const theme = themeData? "dark" : "light"
  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedRooms = filteredRoomsList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredRoomsList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleViewRoom = (id)=>{
    navigate(`/root/rooms/room/${id}`)
  }

  
  useEffect(()=>{
    let newFilteredRoomsList=[]
    if (roomsListStatus === "idle") {
      dispatch(getRoomsListFromAPIThunk());
    } else if (roomsListStatus === "pending") {
      setSpinner(true);
    } else if (roomsListStatus === "fulfilled") {
      
      if(FilterOption ==="available"){
        newFilteredRoomsList = roomsListData.filter((room) => room.status === "available" )
      }else if(FilterOption ==="booked"){
        newFilteredRoomsList = roomsListData.filter((room) => room.status === "booked" )
      }else{
        newFilteredRoomsList = [...roomsListData]
      }
     
      if (selectedSortOption === "status") {
        newFilteredRoomsList.sort((a, b) => a.status.localeCompare(b.status))
      }else if (selectedSortOption === "price") {
        newFilteredRoomsList.sort((a, b) => b.price_night - a.price_night)
      }

   
      setFilteredRoomsList(newFilteredRoomsList)
      setSpinner(false)
      setCurrentPage(1)
    }


  },[dispatch, roomsListData, roomsListStatus, FilterOption,selectedSortOption])

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
            <TrHeadStyled>Room Name</TrHeadStyled>
            <TrHeadStyled>Room Type</TrHeadStyled>
            <TrHeadStyled>Amenities</TrHeadStyled>
            <TrHeadStyled>Price</TrHeadStyled>
            <TrHeadStyled>Status</TrHeadStyled>
            <TrHeadStyled>Action</TrHeadStyled>
          </tr>
        </thead>
        <tbody>
          {displayedRooms.map((room) => (
            <TrStyled key={room.id}>
              
              <TdRoomCardStyled>
                <TableRoomImg src={room1}  alt="" />
                <div>
                    <TdIdText># {room.id}</TdIdText>
                    <TdHeadind>{room.room_number}</TdHeadind>
                </div>
              </TdRoomCardStyled>

              
              <td>
                <TdText>{room.room_type}</TdText>
              </td>
              <TdAmenitiesStyled>
                <TdText>{room.amenities.join(", ")}</TdText>
              </TdAmenitiesStyled>
              <td>
                <TdText>{room.price_night}/Night</TdText>
              </td>
              <TdBtnStyled>
                  {room.status === "booked" && <TableRoomBtn $bg="#E23428" $color="#FFF">Booked</TableRoomBtn>}
                  {room.status === "available" && <TableRoomBtn $bg="#5AD07A" $color="#FFF">Available</TableRoomBtn>}
              </TdBtnStyled>
              <td>
              <TdFlex>
                <ViewRoomBtn   onClick={()=> handleViewRoom(room.id)}/>
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
