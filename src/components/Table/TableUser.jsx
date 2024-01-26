import { PaginationContainerStyled, PaginationText, TableUserBtn, TableUserImg, TableUsersStyled, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled } from './TableStyled';
import { EditUserBtn, PhoneStyledIcon, TrashStyledBtn } from '../../components/Icons/IconsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser,getUsersData, getUsersError, getUsersStatus } from '../../features/users/usersSlice';
import { useEffect, useState } from 'react';
import { getUsersListFromAPIThunk } from '../../features/users/usersThunk';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from '../Button/ButtonStyled';
import { getTheme } from "../../features/theme/themeSlice"

export const TableUser = ({FilterOption, selectedSortOption, SearchName}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usersListData = useSelector(getUsersData)
  const usersListError = useSelector(getUsersError)
  const usersListStatus = useSelector(getUsersStatus)
  const [spinner, setSpinner] = useState(true)
  const [filteredUsersList, setFilteredUsersList] = useState([])
  const themeData = useSelector(getTheme)
  const theme = themeData? "dark" : "light"
  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = filteredUsersList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredUsersList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleDeleteUser = (id)=>{
    dispatch(deleteUser(id))
  }

  const handleEditUser = (id)=>{
    navigate(`/root/users/edituser/${id}`)
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
    let newFilteredUsersList=[]
    if (usersListStatus === "idle") {
      dispatch(getUsersListFromAPIThunk());
    } else if (usersListStatus === "pending") {
      setSpinner(true);
    } else if (usersListStatus === "fulfilled") {
      
      if(FilterOption ==="active"){
        newFilteredUsersList = usersListData.filter((user) => user.is_active === true )
      }else if(FilterOption ==="inactive"){
        newFilteredUsersList = usersListData.filter((user) => user.is_active === false )
      }else{
        newFilteredUsersList = [...usersListData]
      }
     
      if (SearchName) {
        const searchNameLowerCase = SearchName.toLowerCase();
        newFilteredUsersList = newFilteredUsersList.filter((user) => user.first_name.toLowerCase().includes(searchNameLowerCase));
      }
      
      
      if (selectedSortOption === "newest") {
        newFilteredUsersList.sort((a, b) => new Date(b.date) - new Date(a.startDate));
      }else if (selectedSortOption === "abc") {
        newFilteredUsersList.sort((a, b) => a.name.localeCompare(b.name))
      }

      setFilteredUsersList(newFilteredUsersList)
      setSpinner(false)
      setCurrentPage(1)
    }


  },[dispatch, usersListData, usersListStatus, FilterOption,selectedSortOption, SearchName])

  return (
    <>
      <TableUsersStyled>
        <thead>
          <tr>
            <TrHeadStyled>Employee</TrHeadStyled>
            <TrHeadStyled>Job Description</TrHeadStyled>
            <TrHeadStyled>Contact</TrHeadStyled>
            <TrHeadStyled>Status</TrHeadStyled>
            <TrHeadStyled>Action</TrHeadStyled>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user) => (
            <TrStyled key={user.id}>
              <TdUserCardStyled>
                <TableUserImg src={user.photo} alt="" />
                <div>
                    <TdHeadind>{user.first_name} {user.last_name}</TdHeadind>
                    <TdIdText># {user.id}</TdIdText>
                    <TdSubText>{user.email}</TdSubText>
                    <TdSubText>{FormatDate(user.start_date)}</TdSubText>
                </div>
              </TdUserCardStyled>
              <td>
                <TdText>{user.description}</TdText>
              </td>
              <td>
                <TdFlex>
                  <PhoneStyledIcon/>
                  <TdText>{user.phone}</TdText>
                </TdFlex>
              </td>

              <TdBtnStyled>
                  {!user.is_active && <TableUserBtn $bg="transparent" $color="#E23428">INACTIVE</TableUserBtn>}
                  {user.is_active  && <TableUserBtn $bg="transparent" $color="#5AD07A">ACTIVE</TableUserBtn>}
              </TdBtnStyled>
              <td>
              <TdFlex>
                <TrashStyledBtn onClick={()=>handleDeleteUser(user.id)}/>
                <EditUserBtn onClick={()=> handleEditUser(user.id)}/>
              </TdFlex>
              </td>
            </TrStyled>
          ))}
        </tbody>
      </TableUsersStyled>

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
