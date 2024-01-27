import { PaginationContainerStyled, PaginationText, TableUserBtn, TableUserImg, TableRoomsStyled, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled, TableRoomImg, TdRoomCardStyled, TableRoomBtn, TdAmenitiesStyled } from './TableStyled';
import { EditRoomBtn, EditUserBtn, PhoneStyledIcon, TrashStyledBtn, ViewRoomBtn } from '../../components/Icons/IconsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsData, getRoomsError, getRoomsStatus } from '../../features/rooms/roomsSlice';
import { useEffect, useState } from 'react';
import { getRoomsListFromAPIThunk } from '../../features/rooms/roomsThunk';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from '../Button/ButtonStyled';
import { getTheme } from "../../features/theme/themeSlice"
import room1 from "../../assets/images/rooms/room1.jpg"
import room2 from "../../assets/images/rooms/room2.jpg"
import room3 from "../../assets/images/rooms/room3.jpg"

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

  const handleDeleteUser = (id)=>{
    dispatch(deleteUser(id))
  }

  const handleViewUser = (id)=>{
    navigate(`/root/rooms/room/${id}`)
  }
  const FormatDate = (date) => {
    const inputDate = new Date(date);
    const formatedDate = `${inputDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(inputDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${inputDate.getFullYear()} 
    ` 
    return formatedDate;
  };

  useEffect(()=>{
    let newFilteredRoomsList=[]
    if (roomsListStatus === "idle") {
      dispatch(getRoomsListFromAPIThunk());
    } else if (roomsListStatus === "pending") {
      setSpinner(true);
    } else if (roomsListStatus === "fulfilled") {
      
      if(FilterOption ==="active"){
        newFilteredRoomsList = roomsListData.filter((room) => room.is_active === true )
      }else if(FilterOption ==="inactive"){
        newFilteredRoomsList = roomsListData.filter((room) => room.is_active === false )
      }else{
        newFilteredRoomsList = [...roomsListData]
      }
     
      
      
      if (selectedSortOption === "status") {
        newFilteredRoomsList.sort((a, b) => b.status- a.status)
      }else if (selectedSortOption === "price") {
        newFilteredRoomsList.sort((a, b) => b.priceNight - a.priceNight)
      }

      setFilteredRoomsList(newFilteredRoomsList)
      setSpinner(false)
      setCurrentPage(1)
    }


  },[dispatch, roomsListData, roomsListStatus, FilterOption,selectedSortOption])

  return (
    <>
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
                  {room.status === "booked" && <TableRoomBtn $bg="#E23428" $color="#FFF">INACTIVE</TableRoomBtn>}
                  {room.status === "available" && <TableRoomBtn $bg="#5AD07A" $color="#FFF">ACTIVE</TableRoomBtn>}
              </TdBtnStyled>
              <td>
              <TdFlex>
                <EditRoomBtn   onClick={()=>handleDeleteUser(room.id)}/>
                <ViewRoomBtn   onClick={()=> handleEditUser(room.id)}/>
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
