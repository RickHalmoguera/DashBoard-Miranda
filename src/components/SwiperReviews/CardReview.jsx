import React from "react"
import { CardReviewStyled, CardReviewUserContainer, CommentText, ReviewTime, UserImg, UserName } from "./CardReviewStyled"
import { XCircleStyledIcon } from "../Icons/IconsStyled"
import {useDispatch, useSelector} from "react-redux"
import { setModalCommentId,changeCommentStatus } from "../../features/comments/commentsSlice"
import { getTheme } from "../../features/theme/themeSlice"
import { ToastContainer, toast } from 'react-toastify'



export const CardReview = ({comment})=>{
    const dispatch = useDispatch()
    const themeData = useSelector(getTheme)
    const givenDateString = comment.date
    const givenDate = new Date(givenDateString)
    let elapsedTime = ""
    const currentDate = new Date()
    const timeDifference = currentDate.getTime() - givenDate.getTime()
    const minutes = Math.floor(timeDifference / (1000 * 60))
    const days = Math.floor(minutes / (24 * 60))

    if (days > 0) {
    elapsedTime= `${days} days ago`
    } else {
    elapsedTime=`${minutes} minutes ago`
    }
    
    const openModal = (commentId) => {
        dispatch(setModalCommentId(commentId))
        
    };
    
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

    return(
        <>
           
            <CardReviewStyled>
                
                <CommentText onClick={()=>openModal(comment.id)} >
                    {comment.text}
                </CommentText>
                
                <CardReviewUserContainer >
                    <UserImg src={comment.photo} alt="Profile pic" />
                    <UserName>{comment.first_name} {comment.last_name} <br /><ReviewTime>{elapsedTime}</ReviewTime></UserName>
                    <XCircleStyledIcon onClick={()=> handleStatusChange(comment.id)} />
                </CardReviewUserContainer>
                

            </CardReviewStyled>
        
        </>
    )
}
