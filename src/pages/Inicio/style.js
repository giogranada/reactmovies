import styled from "styled-components";

export const ContentHome = styled.div`
    max-width: 850px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    column-gap: 10px;

    position: relative;
    top: -30px;

    img{
        opacity: 0.7;

        &:hover{
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        padding: 20px;
    }
`