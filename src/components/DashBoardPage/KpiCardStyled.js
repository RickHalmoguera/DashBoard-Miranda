import styled from "styled-components";

export const KpiCardStyled = styled.div`
    background-color: ${props =>props.theme.cardBg};
    padding: 3em;
    display: flex;
    align-items: center;
    gap:2em;
    max-width: 34rem;
    min-width: 26.5rem;
    border-radius: 1em;
    transition: .3s;

    &:hover{
        scale:1.05;
        box-shadow: 0px 16px 30px #00000014;
        
            & > .icon__container{
                background-color: #E23428;

                & > * {
                color: #fff;
            }
        } 
    }

    .icon__container{
        background-color: #FFEDEC;
        width: 6.5rem;
        height: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
        

       
    }

    .text__container{
        display: flex;
        flex-direction: column;

    }

    p{
        font-size: 3rem;
        line-height: 4.6rem;
        font-weight: 600;
        color: #393939;
        color: ${props =>props.theme.headingText};
    }
    span{
        font-size: 1.4rem;
        line-height: 2.1rem;
        font-weight: 300;
        color: #787878;
    }
`