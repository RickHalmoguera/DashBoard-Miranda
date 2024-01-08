import styled from "styled-components";

export const UserCardStyled = styled.div`
    margin: 0 auto;
    max-width: 30rem;
    border-radius: 2em ;
    box-shadow: 0px 0px 30px 15px #00000014;
    padding: 3em;
    text-align: center;
    gap: 3em;
    background-color: ${props =>props.theme.cardBg};

    img{
        width: 30%;
        border-radius: 1em;
    }

    h2{
        margin: .5em 0 ;
        font-size: 1.8rem;
        color: ${props =>props.theme.headingText};
    }

    p{
        margin: .5em 0 1em 0 ;
        font-size: 1.2rem;
        color: ${props =>props.theme.subText};
    }


`
