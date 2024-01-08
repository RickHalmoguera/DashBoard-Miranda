import styled from "styled-components";

export const ThemeSelectorStyled = styled.button`
    width: 24px;
    
    color: ${props =>props.theme.theme};
` 
export const ThemeSelectorAbsoluteStyled = styled.div`
    width: 40px;
    
    position: absolute;
    top: .2em;
    right: .5em;
    color:${props =>props.theme.theme};
`