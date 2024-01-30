import styled from "styled-components"


export const BigCardStyled = styled.div`
    background-color: ${props =>props.theme.bodyBg};
    width: 80%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    border-radius: 1em;
`

export const BigCardTextBoxStyled =  styled.div`
    width: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em;
`

export const BigCardHeading = styled.h1`
    font-size: 4.6rem;
    color: ${props =>props.theme.headingText};
`

export const BigCardId = styled.h3`
    font-size: 2.1rem;
    color: ${props =>props.theme.idText};
`

export const BigCardSubHeading = styled.h2`
    color: ${props =>props.theme.subText};
    font-size: 2.5rem;
    font-weight: 300;
`
export const BigCardFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2em;
    flex-wrap: wrap;
`

export const BigCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(50px, 260px));
    grid-template-rows: 1fr 1fr;
    gap: 2em;
`

export const BigCardFlexColumn = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
`

export const BigCardText = styled.p`
    font-size: 1.8rem;
    color: ${props =>props.theme.text};
`

export const BigCardSpan = styled.span`
    font-size: 1.8rem;
    color: ${props =>props.theme.idText};
`

export const BigCardToolTip = styled.div`
    font-size: 1.8rem;
    border-radius: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em .9em;
    font-size: 1.3rem;
    background-color: ${props =>props.theme.buttonBg};
    color: ${props =>props.theme.buttonText};
`
export const BigCardPhotoBoxStyled =  styled.div`
    width: 50%;
    background-color: transparent;
    
`
