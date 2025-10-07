import {PorQueEscolherCardStyle} from "./Style";

const PorQueEscolherCard = ({ icone, titulo, descricao, delay }) => (
    <PorQueEscolherCardStyle delay={delay}>
        <div className="icone">{icone}</div>
        <div className="conteudo">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    </PorQueEscolherCardStyle>
);

export default PorQueEscolherCard;