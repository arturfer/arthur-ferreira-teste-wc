import { AnchorLink2, BoxComponent02, BoxVisitante, InputHeader, LogoHinode, LupaIcon, MainHeader02, WithImageBox2 } from "./style"
import logotipo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import user from '../../assets/user.png'
import heart from '../../assets/heart.png'
import shop from '../../assets/shop.png'
import circle from '../../assets/circle.png'
import { LinkIcon, WithImageBox } from "../Header01/style"
const Header02 = () => {


    return (
        <>
            <MainHeader02>
                <LogoHinode src={logotipo} alt="" />
                <div>
                    <InputHeader placeholder="Busque aqui o produto de seu interesse" />

                </div>
                <button type="submit"><LupaIcon src={lupa} alt="" /></button>
                <BoxComponent02>
                    <WithImageBox2 >
                        <LinkIcon src={user} alt="usuário" />
                        <BoxVisitante>
                            <span>Olá Visitante,</span>
                            <AnchorLink2 href="/#">ENTRE OU CADASTRE-SE</AnchorLink2>
                        </BoxVisitante>
                    </WithImageBox2>
                    <WithImageBox2>
                        <LinkIcon src={heart} alt="favoritos" />
                        <AnchorLink2 href="/#">FAVORITOS</AnchorLink2>
                    </WithImageBox2>
                    <WithImageBox>
                        <LinkIcon className="zindex" src={circle} alt="favoritos" />
                        <LinkIcon src={shop} alt="favoritos" />
                        <span className="zindex2">0</span>
                        <AnchorLink2 href="/#">SACOLA</AnchorLink2>
                    </WithImageBox>
                </BoxComponent02>

            </MainHeader02>
        </>
    )
}

export default Header02