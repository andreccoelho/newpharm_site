import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";

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
            </div>
        </Texto>
    </BannerStyle>
)

export default Banner;