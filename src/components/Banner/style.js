import styled from "styled-components";
import background from '../../images/background.jpg'

export const BannerApp = styled.div`
    background-image: url(${background});
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 135px 0px;
    position: relative;

    h1{
        font-size: 48px;
    }

    p{
        font-size: 18px;
        max-width: 460px;
        text-align: center;
    }

    @media (max-width: 640px) {
        padding: 70px 0;
        h1{
            font-size: 36px;
        }
        p{
            font-size: 14px;
        }
    }
`