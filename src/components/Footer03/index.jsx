import { Footer03Column01, Footer03Column02, FooterSection03 } from "./style";
import logo from '../../assets/logo.png'


const Footer03 = () => {
    return (
        <FooterSection03>
            <Footer03Column01>
                <img src={logo} alt="" />
                <span>OBJETIVO - CNPJ n 30.318.916/0001-55, Presidente Getulio Vargas, 146 - Centro, Itapeva-MG - CEP: 37655-000</span>
            </Footer03Column01>
            <Footer03Column02>
                <p>As regras, ofertas e condições de pagamento praticadas no e-commerce oficial da marca são exclusivas para os pedidos realizados através do site www.hinode.com.br, podendo os preços e benefícios divergirem dos que são praticados pelos consultores do Grupo Hinode.</p>

                <p>Todas as promoções, descontos e preços são válidos somente por um período limitado e podem ser alterados ou encerrados a qualquer momento sem prévio aviso. O desconto oferecido para pagamentos por Boleto bancário não se aplica aos pedidos com desconto Hinode Prime.</p>

                <p>Com o objetivo de personalizar a experiência de compra e oferecer um site melhor, cookies e outras tecnologias poderão ser utilizados durante a navegação, para coletar informações técnicas e compilar estatísticas de monitoramento de uso do site. Os usuários que pretendam bloquear esses recursos, deverão acessar as configurações necessários no navegador de Internet ou realizar o procedimento explicitado na Política de Privacidade do site.</p>
            </Footer03Column02>
        </FooterSection03>

    )
}
export default Footer03;