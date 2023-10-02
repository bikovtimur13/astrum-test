import { styled } from "styled-components";
import  bannerBgr from "../../assets/images/banner-section-bgr.webp";

export const Container = styled.div`
    background-image: url(${bannerBgr});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
`;

export const ContentBox = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 35px;
`;

export const GameCharacterLeft = styled.img`
    position: absolute;
    bottom: 0;
    left: -13%;
`;

export const GameCharacterRight = styled.img`
    position: absolute;
    bottom: 0;
    right: -22%;
`;

export const GameBox = styled.img``;

export const TextContentWrapper = styled.div`
    z-index: 5;
    h4{
        color: #FFF;
        text-align: center;
        font-family: Roboto Regular;
        font-size: Clamp(30px, 6vw, 42px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }
    span{
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: Clamp(18px, 4vw, 20px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;