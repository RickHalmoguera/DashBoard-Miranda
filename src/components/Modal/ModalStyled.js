import styled from "styled-components";

export const ModalStyled = styled.div`
    position: absolute;
    z-index: 999;
    background-color:#0005;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainerStyled = styled.div`
    border-radius: 1em;
    padding: 2em;
    max-width: 600px;
    
    z-index: 999;
    position: absolute;
    top:50%;
    left:50%;
    background-color: ${props =>props.theme.bodyBg};
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    

`
export const ModalTitle = styled.p`
    color: ${props =>props.theme.headingText};
    font-size:3rem;
    line-height: 2.8rem;
    font-weight: 600;
`

export const ModalText = styled.p`
    color: ${props =>props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.6rem;
    line-height: 2.8rem;
    font-weight: 400;
`
