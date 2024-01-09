import styled from "styled-components";

export const UsersPageStyled = styled.div`
    padding: 3em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    background-color: ${props =>props.theme.rootBg};
`