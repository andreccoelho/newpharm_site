import {ComoFuncionaCardStyle} from "./Style";

const ComoFuncionaCard = ({ icone, titulo, descricao }) => (
    <ComoFuncionaCardStyle>
        <div className="card-inner">
            <div className="icone-wrapper">
                <div className="icone">{icone}</div>
            </div>
            <div className="conteudo">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    </ComoFuncionaCardStyle>
)

export default ComoFuncionaCard