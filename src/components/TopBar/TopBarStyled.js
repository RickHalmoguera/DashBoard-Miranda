import styled from "styled-components";

export const TopBarStyled = styled.div`
    
    background-color: ${props =>props.theme.bodyBg};
    display: flex;
    align-items: center;
    padding: 1em 2em;
    gap: 3em;

    h1{
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 4.2rem;
        color:${props =>props.theme.headingText}
    }

    button{
        background: none;
        border: none;
    }

`