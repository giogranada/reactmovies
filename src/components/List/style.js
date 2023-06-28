import styled from "styled-components";
import searchIcon from "../../images/search.png";

export const Search = styled.input`
    position: absolute;
    bottom: 40px;
    max-width: 460px;
    width: 70%;
    height: 40px;
    padding-left: 55px;
    padding-right: 12px;
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;

    background: url(${searchIcon}) transparent no-repeat left;
    background-size: 20px;
    background-position: 12px 10px;

    ::placeholder{
        font-style: italic;
    }

    :focus{
        outline: none;
    }

    @media (max-width: 640px) {
        bottom: 10px;
    }
`

export const CardsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: center;

    @media (max-width: 640px) {
        padding: 10px;
    }
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

    .envelope{
        max-width: 360px;
        height: 200px;

        @media (max-width: 360px) {
            //
        }
    }
    .envelopeButton{
        width: 360px;
        height: 200px;
        text-align: center;
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
        cursor: pointer;

        &:hover{
            background-color: #0000AA;
            /* p::after {
                content: " >";
            } */
        }

        :disabled{
            background-color: #000044;
            cursor: auto;
            &:hover{
                //cursor: not-allowed;
            }
        }
    }
`