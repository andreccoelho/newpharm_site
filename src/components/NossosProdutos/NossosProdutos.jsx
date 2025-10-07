import { useEffect, useRef, useState } from 'react';
import {NossosProdutosStyle} from "./Style";
import ProdutosCard from "../ProdutosCard/ProdutosCard";
import Titulo2 from "../Titulo2/Titulo2";

const NossosProdutos = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const produtosRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (produtosRef.current) {
                const scrollLeft = produtosRef.current.scrollLeft;
                const cardWidth = produtosRef.current.offsetWidth;
                const index = Math.round(scrollLeft / cardWidth);
                setActiveIndex(index);
            }
        };

        const produtosElement = produtosRef.current;
        if (produtosElement) {
            produtosElement.addEventListener('scroll', handleScroll);
            return () => produtosElement.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToCard = (index) => {
        if (produtosRef.current) {
            const cardWidth = produtosRef.current.offsetWidth;
            produtosRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <NossosProdutosStyle>
            <div className="container">
                <div className="header">
                    <Titulo2 texto="Nossos Produtos" />
                    <p>
                        Tecnologia farmacêutica de última geração para auxiliar no
                        controle de peso com segurança e eficácia.
                    </p>
                </div>

                <div className="produtos-wrapper">
                    <div className="produtos" ref={produtosRef}>
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

                    <div className="scroll-indicator">
                        <span
                            className={`dot ${activeIndex === 0 ? 'active' : ''}`}
                            onClick={() => scrollToCard(0)}
                            role="button"
                            aria-label="Ver primeiro produto"
                        />
                        <span
                            className={`dot ${activeIndex === 1 ? 'active' : ''}`}
                            onClick={() => scrollToCard(1)}
                            role="button"
                            aria-label="Ver segundo produto"
                        />
                    </div>
                </div>
            </div>
        </NossosProdutosStyle>
    );
};

export default NossosProdutos;