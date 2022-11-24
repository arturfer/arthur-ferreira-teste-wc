import { ButtonFooter01, FooterInput, FooterNews, FooterSection01 } from "./style"


const Footer01 = () => {
    return (
        <FooterSection01>
            <FooterNews>Receba nossas<br /> ofertas e novidades</FooterNews>
            <FooterInput type="text" placeholder="Digite seu nome" />
            <FooterInput type="text" placeholder="Digite seu email" />
            <ButtonFooter01>cadastrar</ButtonFooter01>
        </FooterSection01>
    )
}
export default Footer01;