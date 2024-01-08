import styled from "styled-components";

export const SideMenuStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props =>props.theme.bodyBg};
    padding: 2em;
`

export const SideMenuFooter = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;

    p{
        font-size: 1.8rem;
        font-weight:400;
        color:#799283;
        line-height: 2.1rem;
    }

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.5rem;
        color:${props =>props.theme.headingText};
    }
`