import styled from "styled-components"


export const FormStyled = styled.form`
    display: flex;
    gap: 1em;
    flex-direction: column;
    margin:  0 auto ;
    width: 50rem;
    justify-content: center;
    align-items: center;
`

export const FormLoginStyled = styled.form`
    max-width: 25rem;
    display: flex;
    gap: 1em;
    flex-direction: column;
    margin:  0 auto ;
    width: 50rem;
    justify-content: center;
    align-items: center;
`

export const InputStyled = styled.input`
    width: 100%;
    height: 3.5rem; 
    border: 2px solid #135846;
    border-radius: 8px ;
    padding: 1em;
    background-color:${props =>props.theme.inputBg};
    text-align:left;
    font-size: 1.6rem;
    color:${props =>props.theme.text}
`



export const LabelStyled = styled.label`
    color:${props =>props.theme.text};
    text-align: left;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3rem;   
`

export const RoomNumberStyled = styled.p`
    color:${props =>props.theme.text};
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;   
`

export const TextAreaStyled = styled.textarea `
    width: 100%;
    border: 2px solid #135846;
    border-radius: 8px ;
    padding: 1em;
    background-color:${props =>props.theme.inputBg};
    text-align:left;
    font-size: 1.6rem;
    color:${props =>props.theme.text}
`

export const BtnContainerStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-top: 3em;
`