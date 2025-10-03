import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";
import Botao from "../Botao/Botao";

const Banner = () => (
    <BannerStyle>
        <Texto>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    Soluções farmacêuticas
                    inovadoras para
                    emagrecimento seguro
                </div>
                <div className={"Subtitulo"}>
                    Você está cansado de tentar de tudo e não conseguir resultados? Chegou a hora de mudar isso de vez!
                </div>

                <div className={"botao"}>
                    <Botao
                        texto="CLIQUE AQUI E SAIBA MAIS"
                        link=""
                    />
                </div>

                <div className={"img_mobile"}/>
            </div>
        </Texto>
    </BannerStyle>
)

export default Banner;