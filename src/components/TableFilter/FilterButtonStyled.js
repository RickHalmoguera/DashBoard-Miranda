import styled from 'styled-components'

export const FilterButtonStyled = styled.button`
    display: inline;
    font-size: 1.6rem;
    font-weight: 500;
    background: transparent;
    border: none;
    border-bottom: #d4d4d4;
    color: #d4d4d4;
    margin-right: 1em;
    cursor: pointer;


    &:focus {
        outline: none;
        color: #135846;
        border-bottom:2px solid #135846 ;
    }
`