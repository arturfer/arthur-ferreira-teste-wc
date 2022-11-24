import { SectionComponent, SectionTitle } from "../MainSection01/style"
import { Section02Cards, Section02CardTitle, Section02Content } from "./style"
import section2_item01 from '../../assets/cards/section2_item01.png'
import section2_item02 from '../../assets/cards/section2_item02.png'
import section2_item03 from '../../assets/cards/section2_item03.png'
import section2_item04 from '../../assets/cards/section2_item04.png'
const MainSection02 = () => {
    return (

        <SectionComponent>
            <SectionTitle>isso pode ser do seu interesse</SectionTitle>
            <Section02Content>


                <Section02Cards style={{ backgroundImage: `url(${section2_item01})` }}>
                    <div className="gradient" />
                    <div className="black" />
                    <Section02CardTitle className="cardTitle">maquiagens</Section02CardTitle>
                    <a>VER MAIS</a>
                </Section02Cards>


                <Section02Cards style={{ backgroundImage: `url(${section2_item02})` }}>
                    <div className="gradient" />
                    <div className="black" />
                    <Section02CardTitle className="cardTitle">fragrâncias</Section02CardTitle>
                    <a>VER MAIS</a>
                </Section02Cards>


                <Section02Cards style={{ backgroundImage: `url(${section2_item03})` }}>
                    <div className="gradient" />
                    <div className="black" />
                    <Section02CardTitle className="cardTitle">energia & <br />performance</Section02CardTitle>
                    <a>VER MAIS</a>
                </Section02Cards>


                <Section02Cards style={{ backgroundImage: `url(${section2_item04})` }}>
                    <div className="gradient" />
                    <div className="black" />
                    <Section02CardTitle className="cardTitle">corpo & <br />banho</Section02CardTitle>
                    <a>VER MAIS</a>
                </Section02Cards>


            </Section02Content>
        </SectionComponent>
    )
}

export default MainSection02