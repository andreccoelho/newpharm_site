import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
    <Top>
            <div className={"logo"}>
                <img src="imagens/Logo-horizontal.png" alt={"Logo"}/>
            </div>

            <div className="menu-itens">
                <a href="#">Sobre nós</a>
                <a href="#">Produtos</a>
                <a href="#">Como funciona</a>
                <a href="#">Contato</a>
            </div>
    </Top>
)

export default Header;