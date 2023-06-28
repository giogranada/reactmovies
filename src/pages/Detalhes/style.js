import styled from "styled-components";

export const DetailsBanner = styled.div`
    height: 500px;
    background-image: url(${(props => props.url)});
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    opacity: 0.6;
`

export const DetailsContent = styled.div`
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(5px);
    max-width: 850px;
    margin: auto;

    display: flex;
    align-items: center;
    column-gap: 30px;
    
    border-radius: 10px;
    padding: 30px;

    position: relative;
    margin-top: -200px;

    ul{
        list-style: none;
        margin: 20px 20px;
        li{
            margin-bottom: 8px;
        }
    }

    h1{
        font-size: 30px;
    }

    h2{
        font-size: 18px;
        font-style: italic;
    }

    p{
        line-height: 140%;
    }

    button{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #0033AA;
        color: #EEEEEE;
        border-radius: 10px;
        border: 0px;
        cursor: pointer;

        &:hover{
            background-color: #0000AA;
        }
    }

    @media (max-width: 767px) {
        > img{
            display: none;
        }
        margin-top: -400px;
        margin-left: 20px;
        margin-right: 20px;
    }
`