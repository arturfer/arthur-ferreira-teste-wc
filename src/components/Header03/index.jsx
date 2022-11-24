import { AnchorLink03, HeaderMain03, LinkIcon03, WithIconLink03 } from "./style"
import menu from '../../assets/menu.png'
const Header03 = () => {
    return (
        <>
            <HeaderMain03>
                <WithIconLink03>
                    <LinkIcon03 src={menu} alt="todas as categorias" />
                    <AnchorLink03 href="/#">Todas as categorias</AnchorLink03>
                </WithIconLink03>
                <AnchorLink03 href="/#">FRAGRÂNCIAS</AnchorLink03>
                <AnchorLink03 href="/#">MAQUIAGEM</AnchorLink03>
                <AnchorLink03 href="/#">CORPO & BANHO</AnchorLink03>
                <AnchorLink03 href="/#">VIDA SAUDÁVEL</AnchorLink03>
                <AnchorLink03 href="/#">ENERGIA E PERFORMANCE</AnchorLink03>
            </HeaderMain03>
        </>
    )
}

export default Header03