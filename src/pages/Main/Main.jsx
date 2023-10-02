import { styled } from 'styled-components';
import { BannerSection } from '../../components/BannerSection';

export function Main() {
    return (
        <ContainerBox>
            <BannerSection/>
        </ContainerBox>
    );
};

const ContainerBox = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
`;