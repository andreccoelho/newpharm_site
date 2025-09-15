import {SobreNosStyle} from "./Style";
import Titulo from "../Titulo/Titulo";
import Botao from "../Botao/Botao";
import Botao2 from "../Botao2/Botao2";

const SobreNos = () => (
    <SobreNosStyle>

        <div className={"imagem"}>
            <img src="imagens/sobre_nos.png" alt={"img"}/>
        </div>
        <div className={"conteudo"}>
            <Titulo texto="Sobre Nós"/>

            <div className={"texto1"}>
                <p>
                    Nossa missão é transformar seu objetivo em realidade.
                </p>
            </div>

            <div className={"texto2"}>
                <p>
                    A New Pharm oferece as mais modernas terapias para perda de peso atuam em harmonia com o seu corpo. Elas ajudam a regular os sinais de fome e saciedade, tornando o processo de emagrecimento mais natural e sustentável. Com o nosso suporte e a eficácia de tratamentos comprovados, você estará mais perto de conquistar a saúde e a qualidade de vida que sempre desejou.
                </p>
            </div>

            <Botao2
                link=""
            />
        </div>

    </SobreNosStyle>

);

export default SobreNos;