import {ProdutosCardStyle} from "./Style";
import Botao from "../Botao/Botao";

const ProdutosCard = ({ imagem, nome, descricao, link }) => (
    <ProdutosCardStyle>
        <div className="card">
            <div className={"imagem"}>
                <img src={imagem} alt={nome} />
            </div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <Botao
                texto="SAIBA MAIS"
                link={link}
            />
        </div>
    </ProdutosCardStyle>
)

export default ProdutosCard;