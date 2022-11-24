import { BigCardButton, BigCardInfos, BigCardItemMain, BigCardTitle, FiveStars } from "./style";
import fiveStars from '../../assets/cards/fiveStars.png'
import { PriceWithCents } from "../CardItem/style";
const BigCardItem = ({ image, title, real, parcelado }) => {
    return (
        <BigCardItemMain style={{ backgroundImage: `url(${image})` }}>
            <BigCardInfos>
                {title === 1 ? <BigCardTitle>Venyx L’Or <br /> 100ml</BigCardTitle> : <BigCardTitle>Multi- Vit Complex A-Z Mulheres<br />60 Cápsulas</BigCardTitle>}
                <FiveStars src={fiveStars} alt="" />
                <PriceWithCents>
                    <span className="real">{real}</span>
                    <span className="centavos">00</span>
                </PriceWithCents>
                <span className="parcelado">{parcelado}</span>
            </BigCardInfos>
            <BigCardButton>comprar</BigCardButton>
        </BigCardItemMain>
    )
}

export default BigCardItem;