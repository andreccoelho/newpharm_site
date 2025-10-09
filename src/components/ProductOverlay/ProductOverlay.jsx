import { useState, useEffect } from "react";
import { ProductOverlayStyle } from "./Style";

const ProductOverlay = ({ isOpen, onClose, produto }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Pequeno delay para garantir que a animação aconteça
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            // Aguarda a animação terminar antes de desmontar (aumentado para 450ms)
            const timer = setTimeout(() => setShouldRender(false), 450);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!shouldRender || !produto) return null;

    return (
        <ProductOverlayStyle $isAnimating={isAnimating} onClick={onClose}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <div className="product-details">
                    <div className="image-section">
                        <img src={produto.imagem} alt={produto.nome} />
                    </div>
                    <div className="info-section">
                        <h2>{produto.nome}</h2>
                        <p className="description">{produto.descricao}</p>
                        {produto.detalhes && (
                            <div className="extra-info">
                                {produto.detalhes.map((detalhe, index) => (
                                    <div key={index} className="detalhe-item">
                                        <h4>{detalhe.titulo}</h4>
                                        <p>{detalhe.texto}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ProductOverlayStyle>
    );
};

export default ProductOverlay;
