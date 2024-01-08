import styled from "styled-components"


export const FormStyled = styled.form`
    display: flex;
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const InputStyled = styled.input`
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