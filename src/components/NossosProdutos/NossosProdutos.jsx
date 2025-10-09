import { useEffect, useRef, useState } from 'react';
import {NossosProdutosStyle} from "./Style";
import ProdutosCard from "../ProdutosCard/ProdutosCard";
import Titulo2 from "../Titulo2/Titulo2";
import Botao2 from "../Botao2/Botao2";
import ProductOverlay from "../ProductOverlay/ProductOverlay";

const NossosProdutos = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const produtosRef = useRef(null);

    const produtosData = [
        {
            imagem: "imagens/tirzepatide_img.png",
            nome: "Tirzepatide",
            descricao: "Novo agonista dual para controle do peso e melhora metabólica.",
            detalhes: [
                {
                    titulo: "O que é?",
                    texto: "O Tirzepatide é um agonista duplo dos receptores GIP e GLP-1, representando uma inovação no tratamento do controle de peso e diabetes tipo 2."
                },
                {
                    titulo: "Como funciona?",
                    texto: "Atua em dois receptores importantes: GIP e GLP-1, aumentando a saciedade, reduzindo o apetite e melhorando o controle glicêmico de forma sinérgica."
                },
                {
                    titulo: "Benefícios",
                    texto: "Redução significativa de peso, melhora do controle glicêmico, redução de fatores de risco cardiovascular e melhora nos marcadores metabólicos."
                }
            ]
        },
        {
            imagem: "imagens/retatrutide_img.png",
            nome: "Retatrutide",
            descricao: "Molécula inovadora em pesquisa para emagrecimento eficaz.",
            detalhes: [
                {
                    titulo: "O que é?",
                    texto: "O Retatrutide é um agonista triplo dos receptores GIP, GLP-1 e glucagon, representando a próxima geração de medicamentos para controle de peso."
                },
                {
                    titulo: "Como funciona?",
                    texto: "Combina ação em três receptores metabólicos importantes, promovendo redução do apetite, aumento do gasto energético e melhora da sensibilidade à insulina."
                },
                {
                    titulo: "Benefícios",
                    texto: "Potencial para perda de peso superior aos tratamentos atuais, melhora metabólica abrangente e perfil de segurança promissor em estudos clínicos."
                }
            ]
        }
    ];

    const handleOpenOverlay = (produto) => {
        setSelectedProduct(produto);
        setOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setOverlayOpen(false);
        setSelectedProduct(null);
    };

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
                        {produtosData.map((produto, index) => (
                            <ProdutosCard
                                key={index}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                onSaibaMais={() => handleOpenOverlay(produto)}
                            />
                        ))}
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
                <div className="pureza">
                    <Botao2
                        texto={"Confira nosso teste de pureza"}
                        link="https://chromate.org/verify?c=28139_4GAR2HL9ZRF2"
                    />
                </div>
            </div>
            <ProductOverlay
                isOpen={overlayOpen}
                onClose={handleCloseOverlay}
                produto={selectedProduct}
            />
        </NossosProdutosStyle>
    );
};

export default NossosProdutos;