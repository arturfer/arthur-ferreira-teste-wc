
import { ButtonFooter02, Footer02Card, Footer02ItemLink, Footer02ItemTitle, Footer02text, FooterIcon, FooterIconsBox, FooterSection02 } from "./style";
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'


const Footer02 = () => {
    return (
        <FooterSection02>
            <Footer02Card>

                <Footer02ItemTitle>grupo <strong>hinode</strong></Footer02ItemTitle>
                <Footer02ItemLink>A Empresa</Footer02ItemLink>
                <Footer02ItemLink>Catálogo <strong>Hinode</strong></Footer02ItemLink>
                <Footer02ItemLink>Seja um Consultor</Footer02ItemLink>
                <Footer02ItemLink>Hinode Prime</Footer02ItemLink>
                <Footer02ItemLink>Frete Inteligente</Footer02ItemLink>

            </Footer02Card>


            <Footer02Card>

                <Footer02ItemTitle>mais vendidos</Footer02ItemTitle>
                <Footer02ItemLink>Corps Lígnea Body Contour Gel Modelador</Footer02ItemLink>
                <Footer02ItemLink>Shake de Vanilla H+ HND</Footer02ItemLink>
                <Footer02ItemLink>Shake de Morango H+ HND</Footer02ItemLink>
                <Footer02ItemLink>Luva de Silicone Creme para as Mãos Hands</Footer02ItemLink>
                <Footer02ItemLink>Empire Gold</Footer02ItemLink>
                <Footer02ItemLink>Empire VIP</Footer02ItemLink>
            </Footer02Card>

            <Footer02Card>
                <Footer02ItemTitle>dúvidas frequentes</Footer02ItemTitle>
                <Footer02ItemLink>Fale Conosco</Footer02ItemLink>
                <Footer02ItemLink>Entrega, Trocas e Devoluções</Footer02ItemLink>
                <Footer02ItemLink>Compra e Venda</Footer02ItemLink>
                <Footer02ItemLink>Política de Privacidade</Footer02ItemLink>
                <Footer02ItemLink>Remover Consentimento</Footer02ItemLink>
            </Footer02Card>

            <Footer02Card>
                <ButtonFooter02>central de atendimento</ButtonFooter02>

                <Footer02text>De segunda a sexta das 9h às 21h</Footer02text>
                <Footer02text>Capitas e regiões metropolitanas 4020-2424</Footer02text>
                <Footer02text>Demais localidades: 0800-144-6633</Footer02text>
                <FooterIconsBox>
                    <FooterIcon src={instagram} alt="" />
                    <FooterIcon src={youtube} alt="" />
                    <FooterIcon src={facebook} alt="" />

                </FooterIconsBox>

            </Footer02Card>


        </FooterSection02>
    )
}
export default Footer02;