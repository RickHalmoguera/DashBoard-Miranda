import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'
import {
  PaginationContainerStyled,
  PaginationText,
  TableStyled,
  TableUserBtn,
  TdBtnStyled,
  TdHeadind,
  TdIdText,
  TdSubText,
  TdText,
  TrHeadStyled,
  TrStyled,
} from "./TableStyled";


import { useDispatch, useSelector } from "react-redux";
import {
  changeCommentStatus,
  getCommentsData,
  getCommentsError,
  getCommentsStatus,
} from "../../features/comments/commentsSlice";

import { getCommentsListFromAPIThunk } from "../../features/comments/commentsThunk";
import { ButtonStyled } from "../Button/ButtonStyled";
import { getTheme } from "../../features/theme/themeSlice"
import { ThreeDots } from "react-loader-spinner";

export const TableContact = ({ isFiltered, selectedSortOption }) => {
  const dispatch = useDispatch()
  const commentsListData = useSelector(getCommentsData)
  const commentsListError = useSelector(getCommentsError)
  const commentsListStatus = useSelector(getCommentsStatus)
  const [spinner, setSpinner] = useState(true)
  const themeData = useSelector(getTheme)


  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredCommentList, setFilteredCommentList] = useState([])
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedComments = filteredCommentList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredCommentList.length / itemsPerPage);

  const handleStatusChange =(id)=>{
    const theme = themeData? "dark" : "light"
    toast.success('Comment updated!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      });
    dispatch(changeCommentStatus(id))
  }
  
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

  useEffect(() => {
  
    if (commentsListStatus === "idle") {
      dispatch(getCommentsListFromAPIThunk());
    } else if (commentsListStatus === "pending") {
      setSpinner(true);
    } else if (commentsListStatus === "fulfilled") {
      const newFilteredCommentList = isFiltered
        ? commentsListData.filter((comment) => comment.is_archived === true)
        : commentsListData.filter((comment) => comment.is_archived === false|| true) ;
      
        if (selectedSortOption === "newest") {
          newFilteredCommentList.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (selectedSortOption === "oldest") {
          newFilteredCommentList.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

      setFilteredCommentList(newFilteredCommentList);
      setSpinner(false)
      setCurrentPage(1)
    }
    

  }, [dispatch, commentsListData, commentsListStatus, isFiltered,selectedSortOption]);

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
      <ToastContainer/>
      <TableStyled>
        <thead>
          <tr>
            <TrHeadStyled>Date & Id</TrHeadStyled>
            <TrHeadStyled>Customer, Email & Phone</TrHeadStyled>
            <TrHeadStyled>Comment</TrHeadStyled>
            <TrHeadStyled>Action</TrHeadStyled>
          </tr>
        </thead>
        <tbody>
          {displayedComments.map((comment) => (
            <TrStyled key={comment.id}>
              <td>
                <TdHeadind>{FormatDate(comment.date)}</TdHeadind>
                <TdIdText># {comment.id}</TdIdText>
              </td>

              <td>
                <TdHeadind>{comment.first_name} {comment.last_name}</TdHeadind>
                <TdText>{comment.email}</TdText>
                <TdSubText>{comment.phone}</TdSubText>
              </td>

              <td>
                <TdHeadind>{comment.title}</TdHeadind>
                <TdText>{comment.text}</TdText>
              </td>
              <TdBtnStyled>
                <TableUserBtn onClick={() => handleStatusChange(comment.id)} 
                  $color={comment.is_archived?"#5AD07A":"#E23428"}
                >
                  {comment.is_archived?"Publish":"Archive"}
                </TableUserBtn>
              </TdBtnStyled>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>
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
  );
};
