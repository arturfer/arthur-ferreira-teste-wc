
import DoubleCarousel from "../DoubleCarousel";
import { ContainerSection03, SectionMain03 } from "./style";
import BigCardItem from "../BigCardItem";
import bigcard_01 from '../../assets/cards/bigcard_01.png';
import bigcard_02 from '../../assets/cards/bigcard_02.png';

const MainSection03 = () => {
    return (
        <SectionMain03>
            <ContainerSection03>
                <DoubleCarousel>
                    <BigCardItem image={bigcard_01} title={1} real={'R$ 150,'} parcelado={'em até 2x de R$ 75,00'} />
                    <BigCardItem image={bigcard_02} title={2} real={'R$ 85,'} parcelado={'em até 2x de R$ 42,50'} />
                    <BigCardItem image={bigcard_01} title={1} real={'R$ 150,'} parcelado={'em até 2x de R$ 75,00'} />
                    <BigCardItem image={bigcard_02} title={2} real={'R$ 85,'} parcelado={'em até 2x de R$ 42,50'} />

                </DoubleCarousel>
            </ContainerSection03>
        </SectionMain03>
    )
}

export default MainSection03;