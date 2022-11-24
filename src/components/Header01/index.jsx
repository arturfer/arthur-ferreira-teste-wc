import { AnchorLink, BoxComponent, LinkIcon, MainHeader01, WithImageBox } from "./style";
import consultor from '../../assets/consultor.png'
const Header01 = () => {
    return (
        <MainHeader01>
            <AnchorLink href="/#">A Empresa</AnchorLink>
            <BoxComponent>
                <WithImageBox>
                    <LinkIcon src={consultor} alt="seja um consultor" />
                    <AnchorLink upper={true} href="/#">SEJA UM CONSULTOR</AnchorLink>
                </WithImageBox>
                <AnchorLink href="/#">Fale Conosco</AnchorLink>
            </BoxComponent>
        </MainHeader01>
    )
}

export default Header01;