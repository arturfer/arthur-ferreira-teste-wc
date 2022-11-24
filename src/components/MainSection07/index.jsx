import CardItem from "../CardItem";
import { SectionComponent, SectionTitle, VerMaisBox } from "../MainSection01/style";
import SimpleSlider from "../SimpleCarousel";
import { NewLine, SectionContent07 } from "./style";
import eye from '../../assets/eye.png'
import item_13 from '../../assets/cards/item_13.png'
import item_14 from '../../assets/cards/item_14.png'
import item_15 from '../../assets/cards/item_15.png'
import item_16 from '../../assets/cards/item_16.png'
import item_13b from '../../assets/cards/item_13b.png'
import item_14b from '../../assets/cards/item_14b.png'
import item_15b from '../../assets/cards/item_15b.png'
import item_16b from '../../assets/cards/item_16b.png'
import { SectionComponentDouble } from "../MainSection09/style";
const MainSection07 = () => {
    return (

        <SectionComponentDouble>
            <SectionTitle>corpo e banho</SectionTitle>
            <VerMaisBox>
                <img src={eye} alt="" />
                <span>ver todos</span>
            </VerMaisBox>
            <SimpleSlider show={4}>
                <CardItem image={item_13} title={'Corps Lígnea Wonderful Gold Óleo para as Pernas - 150ml '} real={'R$ 45,'} cents={'00'} old={''} />
                <CardItem image={item_14} title={'Corps Lígnea Body Contour Esfoliante Corporal - 200g'} real={'R$ 49,'} cents={'00'} old={''} />
                <CardItem image={item_15} title={'Gel para Massagem Feelin Hot Morango 60ml'} real={'R$ 27,'} cents={'00'} old={''} />
                <CardItem image={item_16} title={'Óleo para as Pernas Wonderful ㅤㅤ140ml'} real={'R$ 39,'} cents={'90'} old={''} />
                <CardItem image={item_13} title={'Corps Lígnea Wonderful Gold Óleo para as Pernas - 150ml '} real={'R$ 45,'} cents={'00'} old={''} />
                <CardItem image={item_14} title={'Corps Lígnea Body Contour Esfoliante Corporal - 200g'} real={'R$ 49,'} cents={'00'} old={''} />
                <CardItem image={item_15} title={'Gel para Massagem Feelin Hot Morango 60ml'} real={'R$ 27,'} cents={'00'} old={''} />
                <CardItem image={item_16} title={'Óleo para as Pernas Wonderful ㅤㅤ140ml'} real={'R$ 39,'} cents={'90'} old={''} />
            </SimpleSlider>
            <newLine />
            <SimpleSlider show={4} className='line2'>
                <CardItem image={item_13b} title={'Corps Lígnea Body Contour Gel Modelador 500g '} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_14b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_15b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_16b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_13b} title={'Corps Lígnea Body Contour Gel Modelador 500g '} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_14b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_15b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
                <CardItem image={item_16b} title={'Corps Lígnea Body Contour Gel Modelador 500g'} real={'R$ 60,'} cents={'00'} old={''} />
            </SimpleSlider>
        </SectionComponentDouble>

    )
}

export default MainSection07;