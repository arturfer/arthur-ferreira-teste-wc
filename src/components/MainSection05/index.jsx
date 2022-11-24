
import eye from '../../assets/eye.png'
import item_09 from '../../assets/cards/item_09.png'
import item_10 from '../../assets/cards/item_10.png'
import item_11 from '../../assets/cards/item_11.png'
import item_12 from '../../assets/cards/item_12.png'
import SimpleSlider from "../SimpleCarousel";
import CardItem from "../CardItem";
import { SectionComponent, SectionTitle, VerMaisBox } from '../MainSection01/style'
const MainSection05 = () => {

    return (

        <SectionComponent>
            <SectionTitle>vida saudável</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_09} title={'Café Verde ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ120 cápsulas'} real={'R$ 69,'} cents={'90'} old={''} className="zoom" />
                <CardItem image={item_10} title={'Ácido Hialurônico com Colágeno HND 30 Sachês de 4g'} real={'R$ 175,'} cents={'00'} old={''} />
                <CardItem image={item_11} title={'Slim Max HND ㅤㅤㅤㅤㅤㅤㅤㅤㅤ120 Cápsulas'} real={'R$ 140,'} cents={'00'} old={''} />
                <CardItem image={item_12} title={'Chá H+ Frutas Vermelhasㅤㅤㅤㅤ 150g'} real={'R$ 85,'} cents={'00'} old={''} />
                <CardItem image={item_09} title={'Café Verde ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ120 cápsulas'} real={'R$ 69,'} cents={'90'} old={''} className="zoom" />
                <CardItem image={item_10} title={'Ácido Hialurônico com Colágeno HND 30 Sachês de 4g'} real={'R$ 175,'} cents={'00'} old={''} />
                <CardItem image={item_11} title={'Slim Max HND ㅤㅤㅤㅤㅤㅤㅤㅤㅤ120 Cápsulas'} real={'R$ 140,'} cents={'00'} old={''} />
                <CardItem image={item_12} title={'Chá H+ Frutas Vermelhasㅤㅤㅤㅤ 150g'} real={'R$ 85,'} cents={'00'} old={''} />
            </SimpleSlider>
        </SectionComponent>

    )
}

export default MainSection05;