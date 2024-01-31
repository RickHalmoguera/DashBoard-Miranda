
import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: none;
    border-radius: 8px;
    width: 16rem;
    height: 3.5rem;
    background-color: ${props => props.theme.buttonBg};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.buttonText};
    cursor: pointer;
`


export const ButtonFormStyled = styled.button`
    cursor: pointer;
    margin-top: 1em;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 3.5rem;
    background-color:${props =>props.theme.buttonBg};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props =>props.theme.buttonText};

` 

export const ButtonNotesStyled = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0 1em;
    height: 3.5rem;
    background-color: ${props => props.theme.buttonBg};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.buttonText};
    cursor: pointer;
    ${props => props.disabled && `
        background-color: transparent; 
        color: #799283;
        cursor: not-allowed;
        border: 1px solid #799283;
    `}
`