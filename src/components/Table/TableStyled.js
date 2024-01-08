import styled from "styled-components";

export const TableStyled = styled.table`
    margin: 3em 0;
    width: 100%;
    background-color: #FFF;
    border-radius: 1em;
    text-align: left;
    padding: 1em;
    border-spacing: 1rem 2em;
    height: 50rem;
    background-color: ${props =>props.theme.bodyBg};
`

export const TdUserCardStyled = styled.td`
    width:30rem ;
    display: flex;
    gap: 1em;
    align-items: center;
    img{
        width: 88px;
        height: 88px;
        border-radius:1em;
    }

`
export const TrStyled = styled.tr `
    &:hover{
        box-shadow: 0px 4px 30px #0000001A
    }
`

export const TdStyled = styled.td`
    width: 180px;
`

export const TdFlex = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    gap: 1em;
`
export const TdBtnStyled = styled.td`
    width: 100px;
`

export const TrHeadStyled = styled.th `
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid #F5F5F5;
    padding-bottom:1em ;
    color: ${props =>props.theme.headingText};
    
`

export const TdHeadind = styled.p `
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${props =>props.theme.headingText};

`

export const TdText = styled.p `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: ${props =>props.theme.text};
    max-width:800px;
`

export const TdSubText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: ${props =>props.theme.subText};
`

export const TdIdText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: ${props =>props.theme.idText};
`

export const TableUserBtn = styled.button`
    border: none;
    border-radius: 8px;
    height: 3.5rem;
    background-color:transparent;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({$color})=> $color};
    text-align: left;
    cursor: pointer;
`
export const PaginationContainerStyled = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;

`
export const PaginationText = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: ${props =>props.theme.text};
`