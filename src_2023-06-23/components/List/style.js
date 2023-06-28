import styled from "styled-components";

export const CardsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: center;
`

export const CardItem = styled.div`
    max-width: 360px;
    position: relative;

    img{
        border-radius: 10px;
        opacity: 0.7;
        &:hover{
            opacity: 1;
        }
    }

    .card-content{
        position: absolute; //Posicionameno em relação ao elemento pai, DESDE QUE ELE TENHA POSITION ATRIBUÍDO.
        bottom: 15px;
        left: 15px;

        color: #FFFFFF;
        text-shadow: 2px 2px 2px #222222;

        h2{
            font-size: 24;
        }

        h3{
            text-shadow: #000000;
            font-size: 16px;
        }
    }
`

export const BotaoPaginacao = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    column-gap: 10px;

    button{
        padding: 10px 20px;
        background-color: #0033AA;
        color: #EEEEEE;
        //text-shadow: 1px 1px 1px #000000;
        border-radius: 10px;
        border: 0px;

        &:hover{
            background-color: #0000AA;
            /* p::after {
                content: " >";
            } */
        }
    }
`