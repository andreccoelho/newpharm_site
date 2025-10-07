import styled from "styled-components"

export const ComoFuncionaCardStyle = styled.div`
    width: 100%;
    max-width: 60rem;

    .card-inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 0.875rem;
        background: #FFF;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: clamp(1.25rem, 2vw, 2rem) clamp(1.5rem, 2.5vw, 2.5rem);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        gap: clamp(1.5rem, 3vw, 3rem);
        overflow: hidden;
        position: relative;

        /* Efeito de brilho sutil no fundo */
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255, 255, 255, 0.3),
                    transparent
            );
            transition: left 0.6s ease;
        }

        &:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.12),
            0 10px 10px -5px rgba(0, 0, 0, 0.06);

            &::before {
                left: 100%;
            }

            .icone-wrapper {
                transform: scale(1.1) rotate(5deg);
            }

            .icone {
                animation: pulse 0.6s ease-in-out;
            }
        }
    }

    .icone-wrapper {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(3.5rem, 6vw, 5rem);
        height: clamp(3.5rem, 6vw, 5rem);
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;

        /* Anel decorativo */
        &::after {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 2px solid transparent;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .card-inner:hover &::after {
            opacity: 0.5;
        }
    }

    .icone {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(1.75rem, 3vw, 2.5rem);
        color: #3b82f6;
        transition: all 0.3s ease;
    }

    .conteudo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 0;
    }

    h3 {
        color: #1f2937;
        font-size: clamp(1.125rem, 1.8vw, 1.5rem);
        font-weight: 700;
        line-height: 1.4;
        margin: 0;
        transition: color 0.3s ease;

        .card-inner:hover & {
            color: #3b82f6;
        }
    }

    p {
        color: #6b7280;
        font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
        font-weight: 400;
        line-height: 1.65;
        margin: 0;
        transition: color 0.3s ease;

        .card-inner:hover & {
            color: #374151;
        }
    }

    /* Animação de pulso para o ícone */
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
    }

    /* Desktop grande */
    @media (min-width: 1600px) {
        max-width: 65rem;

        .card-inner {
            padding: 2.5rem 3rem;
            gap: 3.5rem;
        }
    }

    /* Desktop médio */
    @media (max-width: 1200px) {
        max-width: 55rem;

        .card-inner {
            padding: 1.75rem 2.25rem;
            gap: 2.5rem;
        }
    }

    /* Tablet landscape */
    @media (max-width: 1024px) {
        max-width: 50rem;

        .card-inner {
            padding: 1.5rem 2rem;
            gap: 2rem;
        }

        .icone-wrapper {
            width: 4rem;
            height: 4rem;
        }
    }

    /* Tablet portrait */
    @media (max-width: 768px) {
        max-width: 100%;

        .card-inner {
            padding: 1.5rem;
            gap: 1.5rem;

            &:hover {
                transform: translateY(-4px);
            }
        }

        .icone-wrapper {
            width: 3.75rem;
            height: 3.75rem;
        }
    }

    /* Mobile landscape */
    @media (max-width: 640px) {
        .card-inner {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1.5rem;
        }

        .icone-wrapper {
            width: 4.5rem;
            height: 4.5rem;
        }

        .conteudo {
            align-items: center;
        }

        h3 {
            text-align: center;
        }

        p {
            text-align: center;
            max-width: 100%;
        }
    }

    /* Mobile portrait */
    @media (max-width: 480px) {
        .card-inner {
            padding: 1.75rem 1.25rem;
            gap: 1.25rem;
        }

        .icone-wrapper {
            width: 4rem;
            height: 4rem;
        }
    }

    /* Mobile pequeno */
    @media (max-width: 360px) {
        .card-inner {
            padding: 1.5rem 1rem;
            gap: 1rem;
        }

        .icone-wrapper {
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    /* Animação de entrada progressiva */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    animation: fadeInUp 0.6s ease-out forwards;

    /* Delay progressivo para múltiplos cards */
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
    &:nth-child(6) { animation-delay: 0.6s; }
`