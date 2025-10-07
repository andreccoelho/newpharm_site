import styled from 'styled-components';

// Styled Components
export const PorQueEscolherStyle = styled.div`
        background: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: clamp(2rem, 8vw, 5rem) clamp(1rem, 5vw, 15rem);

        @media (max-width: 1200px) {
                padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 8rem);
        }

        @media (max-width: 768px) {
                padding: 2rem 0;
        }
`;

export const CardsContainer = styled.div`
        width: 100%;
        margin: clamp(2rem, 5vw, 5rem) 0;

        @media (min-width: 769px) {
                .cards-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: clamp(2rem, 4vw, 4rem);
                        row-gap: clamp(2rem, 4vw, 4rem);
                        max-width: 1200px;
                        margin: 0 auto;
                }
        }

        @media (max-width: 768px) {
                position: relative;
                overflow: hidden;
                padding: 0;
                width: 100%;
        }
`;

export const CarouselWrapper = styled.div`
        @media (min-width: 769px) {
                display: contents;
        }

        @media (max-width: 768px) {
                display: flex;
                transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                transform: translateX(-${props => props.activeIndex * 100}%);
                width: 100%;
        }
`;

export const CardWrapper = styled.div`
        @media (min-width: 769px) {
                display: contents;
        }

        @media (max-width: 768px) {
                min-width: 100%;
                width: 100%;
                flex-shrink: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 1.5rem;
                box-sizing: border-box;
        }
`;

export const NavigationButton = styled.button`
        display: none;

        @media (max-width: 768px) {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                ${props => props.direction === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                background: #415AC5;
                border: none;
                cursor: pointer;
                z-index: 10;
                box-shadow: 0 4px 12px rgba(65, 90, 197, 0.3);
                transition: all 0.3s ease;

                &:hover:not(:disabled) {
                        background: #6846B8;
                        transform: translateY(-50%) scale(1.1);
                }

                &:active:not(:disabled) {
                        transform: translateY(-50%) scale(0.95);
                }

                &:disabled {
                        opacity: 0.3;
                        cursor: not-allowed;
                }

                svg {
                        width: 1.25rem;
                        height: 1.25rem;
                        fill: white;
                }
        }
`;

export const DotsContainer = styled.div`
        display: none;

        @media (max-width: 768px) {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 2rem;
                margin-bottom: 1rem;
                padding: 0 1rem;
        }
`;

export const Dot = styled.button`
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        border: none;
        background: ${props => props.active ? '#415AC5' : '#D1D5DB'};
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;

        &:hover {
                background: ${props => props.active ? '#415AC5' : '#9CA3AF'};
                transform: scale(1.2);
        }
`;

export const PorQueEscolherCardStyle = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: clamp(1.5rem, 4vw, 2.5rem);
        border-radius: 1rem;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        height: 100%;

        @media (max-width: 768px) {
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
        }

        &:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 24px rgba(65, 90, 197, 0.15);

                .icone svg {
                        transform: scale(1.05);
                }

                h3 {
                        color: #415AC5;
                }
        }

        .icone {
                width: clamp(4rem, 12vw, 6.25rem);
                height: clamp(4rem, 12vw, 6.25rem);
                flex-shrink: 0;
                margin-bottom: 1.5rem;

                svg {
                        width: 100%;
                        height: 100%;
                        transition: transform 0.3s ease;
                }
        }

        .conteudo {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
        }

        h3 {
                color: #333;
                text-align: center;
                font-size: clamp(1rem, 2.5vw, 1.25rem);
                font-weight: 700;
                line-height: 1.4;
                margin: 0;
                transition: color 0.3s ease;
        }

        p {
                color: #737373;
                text-align: center;
                font-size: clamp(0.875rem, 2vw, 1rem);
                font-weight: 400;
                line-height: 1.65;
                margin: 0;

                @media (max-width: 768px) {
                        max-width: 100%;
                }
        }
`;

export const TituloWrapper = styled.div`
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
                padding: 0 1rem;
        }
`;

export const Decoracao = styled.span`
        color: #415AC5;
        font-size: clamp(1rem, 3vw, 1.5rem);
        font-weight: 700;
        flex-shrink: 0;
`;

export const TituloText = styled.h2`
        color: #333;
        font-size: clamp(1.25rem, 3.5vw, 1.875rem);
        font-weight: 700;
        line-height: 1.4;
        text-transform: uppercase;
        margin: 0;

        @media (max-width: 768px) {
                font-size: clamp(1.125rem, 4vw, 1.5rem);
        }
`;