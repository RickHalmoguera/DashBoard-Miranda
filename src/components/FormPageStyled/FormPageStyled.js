import styled from "styled-components"

export const FormPageStyled = styled.div`
    padding: 3em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    background-color: ${props =>props.theme.rootBg};
`