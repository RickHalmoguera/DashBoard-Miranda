import React from 'react';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CardReview } from './CardReview';
import { SwiperReviewStyled } from './SwiperReviewStyled';

import { useDispatch, useSelector } from "react-redux"
import { getCommentsData, getCommentsError, getCommentsStatus } from "../../features/comments/commentsSlice"
import { useEffect, useState } from "react"
import { getCommentsListFromAPIThunk } from '../../features/comments/commentsThunk';
import { ThreeDots } from 'react-loader-spinner';

export const SwiperReviews = ()=>{
  const dispatch = useDispatch()
  const commentsListData = useSelector(getCommentsData)
  const commentsListError = useSelector(getCommentsError)
  const commentsListStatus = useSelector(getCommentsStatus)
  const [spinner,setSpinner] = useState(true)
  const [commentsList,setCommentsList] = useState([])
  
  useEffect(() => {
      if (commentsListStatus === "idle"){
          dispatch(getCommentsListFromAPIThunk()) 
      }
      else if (commentsListStatus === "pending"){
          setSpinner(true)
      }
      else if (commentsListStatus === "fulfilled"){
          let components = []
          commentsListData.forEach((comment) => {
            if(!comment.is_archived){
              components.push(
                  <SwiperSlide key={comment.id} >
                    <CardReview  comment={comment}/>
                  </SwiperSlide>
              )
            }
            
          });
          setSpinner(false)
          setCommentsList(components)
      }
      
  },[dispatch,commentsListData,commentsListStatus])

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

      <SwiperReviewStyled
        slidesPerView={3}
        spaceBetween={30}
        loop ={true}
      >
        {commentsList}

      </SwiperReviewStyled>
    </>  
    )
}