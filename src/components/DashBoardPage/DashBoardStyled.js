import styled from "styled-components";

export const DashBoardStyled = styled.div`
    padding: 3em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    background-color: ${props =>props.theme.rootBg};
`

export const DashBoardTopContainerStyled =  styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:2em
`
export const DashBoardBottomContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props =>props.theme.cardBg};
    height: 36.5rem;
    margin: 0 auto;
    width: 100%;
    padding: 2em;
    border-radius: 1em;
    max-width: 150rem;
`
export const DashBoardHeading= styled.div`
    font-size: 2rem;
    margin-bottom: 1em;
    line-height: 3rem;
    font-weight: 500;
    color:${props =>props.theme.headingText};
`