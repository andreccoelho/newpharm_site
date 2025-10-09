import styled from "styled-components";

export const ProductOverlayStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, ${props => props.$isAnimating ? '0.75' : '0'});
    backdrop-filter: ${props => props.$isAnimating ? 'blur(8px)' : 'blur(0px)'};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    transition: ${props => props.$isAnimating
        ? 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'all 0.45s cubic-bezier(0.4, 0, 0.6, 1)'};

    .overlay-content {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 24px;
        max-width: 950px;
        width: 100%;
        max-height: 85vh;
        overflow-y: auto;
        position: relative;
        padding: 50px;
        box-shadow: ${props => props.$isAnimating
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            : '0 0 0 0 rgba(0, 0, 0, 0)'};
        transform: ${props => props.$isAnimating
            ? 'translateY(0) scale(1)'
            : 'translateY(60px) scale(0.92)'};
        opacity: ${props => props.$isAnimating ? '1' : '0'};
        transition: ${props => props.$isAnimating
            ? 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            : 'all 0.45s cubic-bezier(0.32, 0, 0.67, 0)'};

        @media (max-width: 768px) {
            padding: 35px 25px;
            max-height: 90vh;
            border-radius: 20px;
        }

        @media (max-width: 480px) {
            padding: 30px 20px;
            border-radius: 16px;
        }
    }

    .close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.05);
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #64748b;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        line-height: 1;
        border-radius: 50%;
        font-weight: 300;

        &:hover {
            background: rgba(0, 0, 0, 0.08);
            color: #334155;
            transform: rotate(90deg) scale(1.1);
        }

        &:active {
            transform: rotate(90deg) scale(0.95);
        }

        @media (max-width: 768px) {
            top: 15px;
            right: 15px;
            width: 32px;
            height: 32px;
            font-size: 24px;
        }
    }

    .product-details {
        display: grid;
        grid-template-columns: 1fr 1.8fr;
        gap: 50px;
        align-items: start;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 35px;
        }
    }

    .image-section {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

        @media (max-width: 768px) {
            padding: 25px;
        }

        img {
            width: 100%;
            max-width: 280px;
            height: auto;
            max-height: 320px;
            border-radius: 12px;
            object-fit: contain;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08));

            @media (max-width: 768px) {
                max-width: 200px;
                max-height: 240px;
            }

            @media (max-width: 480px) {
                max-width: 160px;
                max-height: 200px;
            }
        }
    }

    .info-section {
        h2 {
            font-size: clamp(1.75rem, 4vw, 2.25rem);
            font-weight: 600;
            background: linear-gradient(135deg, #415AC5 0%, #6846B8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
        }

        .description {
            font-size: clamp(0.95rem, 2vw, 1.05rem);
            color: #64748b;
            margin-bottom: 32px;
            line-height: 1.7;
            font-weight: 400;
        }

        .extra-info {
            display: flex;
            flex-direction: column;
            gap: 24px;

            .detalhe-item {
                background: white;
                padding: 20px 24px;
                border-radius: 12px;
                border-left: 3px solid #415AC5;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                transition: all 0.3s ease;

                &:hover {
                    box-shadow: 0 4px 12px rgba(65, 90, 197, 0.12);
                    transform: translateX(4px);
                }

                h4 {
                    font-size: clamp(1.05rem, 2vw, 1.15rem);
                    font-weight: 600;
                    color: #334155;
                    margin-bottom: 8px;
                    letter-spacing: -0.01em;
                }

                p {
                    font-size: clamp(0.9rem, 1.8vw, 0.98rem);
                    color: #64748b;
                    line-height: 1.7;
                    margin: 0;
                    font-weight: 400;
                }
            }
        }
    }

    /* Scrollbar styling */
    .overlay-content::-webkit-scrollbar {
        width: 6px;
    }

    .overlay-content::-webkit-scrollbar-track {
        background: transparent;
    }

    .overlay-content::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #415AC5 0%, #6846B8 100%);
        border-radius: 10px;
        opacity: 0.6;
    }

    .overlay-content::-webkit-scrollbar-thumb:hover {
        opacity: 1;
    }

    /* Firefox scrollbar */
    .overlay-content {
        scrollbar-width: thin;
        scrollbar-color: #415AC5 transparent;
    }
`;
