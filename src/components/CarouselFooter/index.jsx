import { DivCarouselFooterBox, MainCarouselFooter, SpanCarouselFooter } from "./style"
import bfCard from "../../assets/bfCard.png"
import bfFrete from '../../assets/bfFrete.png'
import bfPrime from '../../assets/bfPrime.png'
import bfBox from '../../assets/bfBox.png'
const CarouselFooter = () => {
    return (
        <MainCarouselFooter>
            <DivCarouselFooterBox>
                <img src={bfCard} alt="icone cartão" />
                <SpanCarouselFooter>Tudo em até<br /> 6x sem juros</SpanCarouselFooter>
            </DivCarouselFooterBox>
            <DivCarouselFooterBox>
                <img src={bfFrete} alt="icone frete" />
                <SpanCarouselFooter>FRETE GRÁTIS nas compras acima <br />de R$ 49,00 para todo o Brasil</SpanCarouselFooter>
            </DivCarouselFooterBox>
            <DivCarouselFooterBox>
                <img src={bfPrime} alt="icone prime" />
                <SpanCarouselFooter>Hinode Prime: Receba em casa todo<br /> mês com 20% OFF</SpanCarouselFooter>
            </DivCarouselFooterBox>
            <DivCarouselFooterBox>
                <img src={bfBox} alt="icone caixa" />
                <SpanCarouselFooter>Garanta mais economia <br /> com frete inteligente</SpanCarouselFooter>
            </DivCarouselFooterBox>
        </MainCarouselFooter>
    )
}

export default CarouselFooter