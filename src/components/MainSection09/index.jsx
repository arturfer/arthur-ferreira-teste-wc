import CardItem from "../CardItem";
import { SectionComponent, SectionTitle, VerMaisBox } from "../MainSection01/style";
import SimpleSlider from "../SimpleCarousel";
import { NewLine, SectionComponentDouble, SectionContent07 } from "./style";
import eye from '../../assets/eye.png'
import item_17 from '../../assets/cards/item_17.png'
import item_18 from '../../assets/cards/item_18.png'
import item_19 from '../../assets/cards/item_19.png'
import item_20 from '../../assets/cards/item_20.png'
import item_21 from '../../assets/cards/item_21.png'
import item_22 from '../../assets/cards/item_22.png'
import item_23 from '../../assets/cards/item_23.png'
import item_24 from '../../assets/cards/item_24.png'
const MainSection09 = () => {
    return (

        <SectionComponentDouble>
            <SectionTitle>fragrâncias</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_17} title={'Lattitude Expeditionㅤㅤㅤㅤㅤㅤ 100ML'} real={'R$ 129'} cents={'00'} old={''} />
                <CardItem image={item_18} title={'Empire VIP ㅤㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_19} title={'Empire ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_20} title={'Lattitude Stamina ㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 129,'} cents={'90'} old={''} />
                <CardItem image={item_17} title={'Lattitude Expeditionㅤㅤㅤㅤㅤㅤ 100ML'} real={'R$ 129'} cents={'00'} old={''} />
                <CardItem image={item_18} title={'Empire VIP ㅤㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_19} title={'Empire ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_20} title={'Lattitude Stamina ㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 129,'} cents={'90'} old={''} />
            </SimpleSlider>
            <NewLine />
            <SimpleSlider show={4} className='line2'>
                <CardItem image={item_21} title={'Empire Gold ㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_22} title={'Colônia Lattitude Origini ㅤㅤㅤㅤ100ml'} real={'R$ 129,'} cents={'00'} old={''} />
                <CardItem image={item_23} title={'Colônia Ella Juicyㅤㅤㅤㅤㅤㅤㅤ  100ml'} real={'R$ 129,'} cents={'00'} old={''} />
                <CardItem image={item_24} title={'Spot For Her ㅤㅤㅤㅤㅤㅤㅤㅤㅤ 75ml'} real={'R$ 129,'} cents={'00'} old={''} />
                <CardItem image={item_21} title={'Empire Gold ㅤㅤㅤㅤㅤㅤㅤㅤ 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_22} title={'Colônia Lattitude Origini ㅤㅤㅤㅤ100ml'} real={'R$ 129,'} cents={'00'} old={''} />
                <CardItem image={item_23} title={'Colônia Ella Juicyㅤㅤㅤㅤㅤㅤㅤ  100ml'} real={'R$ 129,'} cents={'00'} old={''} />
                <CardItem image={item_24} title={'Spot For Her ㅤㅤㅤㅤㅤㅤㅤㅤㅤ 75ml'} real={'R$ 129,'} cents={'00'} old={''} />
            </SimpleSlider>
        </SectionComponentDouble>

    )
}

export default MainSection09;