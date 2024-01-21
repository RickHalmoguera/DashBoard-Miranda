import { PaginationContainerStyled, PaginationText, TableStyled, TableUserBtn, TableUserImg, TableUsersStyled, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdStyled, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled, UserNotFoundContainer, UserNotFoundText } from './TableStyled';
import { DotsStyledIcon, PhoneStyledIcon } from '../../components/Icons/IconsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData, getUsersError, getUsersStatus } from '../../features/users/usersSlice';
import { useEffect, useState } from 'react';
import { getUsersListFromAPIThunk } from '../../features/users/usersThunk';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from '../Button/ButtonStyled';


export const TableUser = ({FilterOption, selectedSortOption, SearchName}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usersListData = useSelector(getUsersData)
  const usersListError = useSelector(getUsersError)
  const usersListStatus = useSelector(getUsersStatus)
  const [spinner, setSpinner] = useState(true)
  const [filteredUsersList, setFilteredUsersList] = useState([])
  
  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = filteredUsersList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredUsersList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
        newFilteredUsersList = newFilteredUsersList.filter((user) => user.name.toLowerCase().includes(searchNameLowerCase));
      }
      
      if (selectedSortOption === "newest") {
        newFilteredUsersList.sort((a, b) => new Date(b.date) - new Date(a.startDate));
      }else if (selectedSortOption === "abc") {
        newFilteredUsersList.sort((a, b) => a.name.localeCompare(b.name))
      }

      setFilteredUsersList(newFilteredUsersList)
      setSpinner(false)
      setCurrentPage(1)
      console.log(filteredUsersList)
    }

  },[dispatch, usersListData, usersListStatus, FilterOption,selectedSortOption, SearchName])

  return (
    <>
      <UserNotFoundContainer>
        {filteredUsersList.length === 0 && (
          <UserNotFoundText>No users found.</UserNotFoundText>
        )}
      </UserNotFoundContainer>
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
            <TrStyled key={user._id}>
              <TdUserCardStyled>
                <TableUserImg src={user.photo} alt="" />
                <div>
                    <TdHeadind>{user.name} {user.surname}</TdHeadind>
                    <TdIdText># {user._id}</TdIdText>
                    <TdSubText>{user.email}</TdSubText>
                    <TdSubText>{FormatDate(user.startDate)}</TdSubText>
                </div>
              </TdUserCardStyled>
              <td>
                <TdText>{user.descriptionJob}</TdText>
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
              <DotsStyledIcon />
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
