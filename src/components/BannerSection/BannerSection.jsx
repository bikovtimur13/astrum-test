import * as S from './styles';
import  gameCharacterLeft from "../../assets/images/game-character-left.webp";
import  gameCharacterRight from "../../assets/images/game-character-right.webp";
import gameBox from "../../assets/images/gameBox.webp";
import { Logo } from "../Logo/Logo";

export function BannerSection() {
    return (
        <S.Container>
            <S.ContentBox className='content-box'>
                <S.GameCharacterLeft src={gameCharacterLeft} />
                <S.GameCharacterRight src={gameCharacterRight} />
                <Logo/>
                <S.GameBox src={gameBox} />
                <S.TextContentWrapper>
                    <h4>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h4>
                    <span>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</span>
                </S.TextContentWrapper>
            </S.ContentBox>
        </S.Container>
    );
}