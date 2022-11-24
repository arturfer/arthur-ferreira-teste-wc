
import eye from '../../assets/eye.png'
import item_05 from '../../assets/cards/item_05.png'
import item_06 from '../../assets/cards/item_06.png'
import item_07 from '../../assets/cards/item_07.png'
import item_08 from '../../assets/cards/item_08.png'
import SimpleSlider from "../SimpleCarousel";
import CardItem from "../CardItem";
import { SectionComponent, SectionTitle, VerMaisBox } from '../MainSection01/style'
const MainSection04 = () => {

    return (

        <SectionComponent>
            <SectionTitle>os mais desejados</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_05} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 29,'} cents={'90'} old={''} className="zoom" />
                <CardItem image={item_06} title={'Shake de Vanilla H+ HND - 550g'} real={'R$ 89,'} cents={'90'} old={'R$ 99,90'} off={true} />
                <CardItem image={item_07} title={'Shake de Morango H+ HND - 550g'} real={'R$ 39,'} cents={'90'} old={'R$ 99,90'} off={true} />
                <CardItem image={item_08} title={'Luva de Silicone Creme para as Mãos Hands 100g'} real={'R$ 46,'} cents={'90'} old={''} />
                <CardItem image={item_05} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 29,'} cents={'90'} old={''} className="zoom" />
                <CardItem image={item_06} title={'Shake de Vanilla H+ HND - 550g'} real={'R$ 89,'} cents={'90'} old={'R$ 99,90'} off={true} />
                <CardItem image={item_07} title={'Shake de Morango H+ HND - 550g'} real={'R$ 39,'} cents={'90'} old={'R$ 99,90'} off={true} />
                <CardItem image={item_08} title={'Luva de Silicone Creme para as Mãos Hands 100g'} real={'R$ 46,'} cents={'90'} old={''} />
            </SimpleSlider>
        </SectionComponent>

    )
}

export default MainSection04;