import {ProdutosCardStyle} from "./Style";
import Botao from "../Botao/Botao";

const ProdutosCard = ({ imagem, nome, descricao, link, onSaibaMais }) => {
    const handleClick = (e) => {
        if (onSaibaMais) {
            e.preventDefault();
            e.stopPropagation();
            onSaibaMais();
        }
    };

    return (
        <ProdutosCardStyle>
            <div className="card">
                <div className="imagem-wrapper">
                    <div className="imagem">
                        <img src={imagem} alt={nome} />
                    </div>
                </div>
                <div className="info">
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <div className="botao-wrapper">
                        {onSaibaMais ? (
                            <button className="saiba-mais-btn" onClick={handleClick}>
                                <span className="button-content">SAIBA MAIS</span>
                                <span className="button-shine"></span>
                            </button>
                        ) : (
                            <Botao texto="SAIBA MAIS" link={link} />
                        )}
                    </div>
                </div>
            </div>
        </ProdutosCardStyle>
    );
};

export default ProdutosCard;