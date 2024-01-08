import styled from "styled-components";

export const ContactStyled = styled.div`
    padding: 3em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    background-color: ${props =>props.theme.rootBg};
`

export const ContactTopContainerStyled = styled.div`
   display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    max-height: 27.5rem;
    width: 100%;
    max-width: 150rem;
    margin: 0 auto;
`