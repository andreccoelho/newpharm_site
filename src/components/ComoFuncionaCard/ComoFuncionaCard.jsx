import {ComoFuncionaCardStyle} from "./Style";

const ComoFuncionaCard = ({ icone, titulo, descricao }) => (
    <ComoFuncionaCardStyle>
        <div className="icone">{icone}</div>
        <div className="conteudo">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>

    </ComoFuncionaCardStyle>
)

export default ComoFuncionaCard