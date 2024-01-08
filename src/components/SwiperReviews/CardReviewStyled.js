import styled from "styled-components";


export const CardReviewStyled = styled.div`
    border: 1px solid #EBEBEB;
    height:23rem;
    border-radius: 1em;
    background-color: #FFF;
    padding: 2em;
    max-width: 43rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props =>props.theme.bodyBg};
`

export const CommentText = styled.p`
    color: ${props =>props.theme.text};
    font-size:1.6rem;
    line-height: 2.8rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    font-weight: 400;
`

export const CardReviewUserContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 2em;
    margin-top: 2em;
`

export const UserImg = styled.img`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 1em;
`

export const UserName = styled.p`
    color:${props =>props.theme.headingText};
    font-size: 1.6rem;
    font-weight:600;
    line-height: 2.5rem;
`

export const ReviewTime = styled.span `
    color:${props =>props.theme.subText};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: #799283;
`