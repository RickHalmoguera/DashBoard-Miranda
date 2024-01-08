import styled from "styled-components";

export const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    text-align: left;
`

export const LogoImg = styled.img `
    width: 3rem;  
`

export const LogoImgSolo = styled.img `
    width: 5rem;  
`

export const LogoHeading = styled.p `
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.5rem;
    color:${props =>props.theme.headingText};
`

export  const LogoSubHeading = styled.span`
    font-size: 1.2rem;
    font-weight: 300;
    color:${props =>props.theme.subText};
`