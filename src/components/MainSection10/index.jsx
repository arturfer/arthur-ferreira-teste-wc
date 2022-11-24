
import eye from '../../assets/eye.png'
import item_25 from '../../assets/cards/item_25.png'
import item_26 from '../../assets/cards/item_26.png'
import item_27 from '../../assets/cards/item_27.png'
import item_28 from '../../assets/cards/item_28.png'
import SimpleSlider from "../SimpleCarousel";
import CardItem from "../CardItem";
import { SectionComponent, SectionTitle, VerMaisBox } from '../MainSection01/style'
const MainSection10 = () => {

    return (
        <SectionComponent style={{ backgroundColor: '#F8F8F8' }}>
            <SectionTitle>acabaram de chegar</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_25} title={'Deo Colônia Venyx L’Or 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_26} title={'Desodorante Roll On Dynamic'} real={'R$ 17,'} cents={'90'} old={''} />
                <CardItem image={item_27} title={'Erva Doce Sabonete Cremoso Facial Hinode 250ml'} real={'R$ 33,'} cents={'40'} old={''} />
                <CardItem image={item_28} title={'HND Shake Triple Chocolate 450g'} real={'R$ 109,'} cents={'90'} old={''} />
                <CardItem image={item_25} title={'Deo Colônia Venyx L’Or 100ml'} real={'R$ 150,'} cents={'00'} old={''} />
                <CardItem image={item_26} title={'Desodorante Roll On Dynamic'} real={'R$ 17,'} cents={'90'} old={''} />
                <CardItem image={item_27} title={'Erva Doce Sabonete Cremoso Facial Hinode 250ml'} real={'R$ 33,'} cents={'40'} old={''} />
                <CardItem image={item_28} title={'HND Shake Triple Chocolate 450g'} real={'R$ 109,'} cents={'90'} old={''} />
            </SimpleSlider>
        </SectionComponent>

    )
}

export default MainSection10;