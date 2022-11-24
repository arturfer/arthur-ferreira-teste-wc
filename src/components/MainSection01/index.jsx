import { SectionComponent, SectionTitle, VerMaisBox } from "./style";
import eye from '../../assets/eye.png'
import item_01 from '../../assets/cards/item_01.png'
import item_02 from '../../assets/cards/item_02.png'
import item_03 from '../../assets/cards/item_03.png'
import item_04 from '../../assets/cards/item_04.png'
import SimpleSlider from "../SimpleCarousel";
import CardItem from "../CardItem";
const MainSection01 = ({ setCount }) => {

    return (

        <SectionComponent>
            <SectionTitle>mais vendidos</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_01} title={'Esponja 3D Dazzle'} real={'R$ 29,'} cents={'90'} old={'R$ 36,90'} />
                <CardItem image={item_02} title={'Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g'} real={'R$ 89,'} cents={'90'} old={''} />
                <CardItem image={item_03} title={'Grace La Rose Sublime Deo Colônia Pocket 15ml'} real={'R$ 39,'} cents={'90'} old={''} />
                <CardItem image={item_04} title={'Pó Compacto HD Cover ㅤㅤㅤㅤㅤㅤ Claro 2 Dazzle - 12g'} real={'R$ 46,'} cents={'90'} old={''} />
                <CardItem image={item_01} title={'Esponja 3D Dazzle'} real={'R$ 29,'} cents={'90'} old={'R$ 36,90'} />
                <CardItem image={item_02} title={'Base Líquida Hyaluronic Hydra Dazzle Escuro 2 - 500g'} real={'R$ 89,'} cents={'90'} old={''} />
                <CardItem image={item_03} title={'Grace La Rose Sublime Deo Colônia Pocket 15ml'} real={'R$ 39,'} cents={'90'} old={''} />
                <CardItem image={item_04} title={'Pó Compacto HD Cover ㅤㅤㅤㅤㅤㅤ Claro 2 Dazzle - 12g'} real={'R$ 46,'} cents={'90'} old={''} />
            </SimpleSlider>
        </SectionComponent>

    )
}

export default MainSection01;