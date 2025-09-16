import {NossosProdutosStyle} from "./Style";
import ProdutosCard from "../ProdutosCard/ProdutosCard";
import Titulo2 from "../Titulo2/Titulo2";
import Botao from "../Botao/Botao";

const NossosProdutos = () => (
    <NossosProdutosStyle>
        <Titulo2
            texto="Nossos Produtos"
        />

        <p>Tecnologia farmacêutica de última geração para auxiliar no controle de peso com segurança e eficácia.</p>
        <div className={"produtos"}>
            <ProdutosCard
                imagem="imagens/tirzepatide_img.png"
                nome="Tirzepatide"
                descricao="Novo agonista dual para controle do peso e melhora metabólica."
                link=""
            />
            <ProdutosCard
                imagem="imagens/retatrutide_img.png"
                nome="Retatrutide"
                descricao="Molécula inovadora em pesquisa para emagrecimento eficaz."
                link=""
            />
        </div>


    </NossosProdutosStyle>

)

export default NossosProdutos;