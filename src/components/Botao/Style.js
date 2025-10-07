import styled from 'styled-components';

export const BotaoStyle = styled.div`
    button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        text-align: center;
        border-radius: 0.9375rem;
        background: linear-gradient(90deg, #415AC5 0%, #6846B8 78.67%, #7241B4 100%);
        color: #FFF;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 164.723%;
        width: 28.5rem;
        height: 4.6875rem;
        flex-shrink: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        overflow: hidden;
        font-family: "Montserrat", sans-serif;

        /* Transições suaves */
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        /* Animação de entrada */
        animation: fadeInUp 0.6s ease-out;

        .button-content {
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease;
        }

        /* Efeito de brilho */
        .button-shine {
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
            transition: left 0.5s ease;
        }

        /* Hover - Efeitos */
        &:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow:
                    rgba(65, 90, 197, 0.4) 0px 8px 24px,
                    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;

            .button-content {
                transform: scale(1.05);
            }

            .button-shine {
                left: 100%;
            }
        }

        /* Active - Clique */
        &:active {
            transform: translateY(-1px) scale(0.98);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
        }

        /* Focus */
        &:focus-visible {
            outline: 3px solid rgba(65, 90, 197, 0.5);
            outline-offset: 3px;
        }
    }

    /* Efeito quando o scroll acontece */
    &.scrolled button {
        transform: scale(0.95);
        box-shadow:
                rgba(0, 0, 0, 0.15) 0px 2px 4px,
                rgba(65, 90, 197, 0.2) 0px 0px 12px;
        background: linear-gradient(90deg, #3651B5 0%, #5837A8 78.67%, #6232A4 100%);

        &:hover {
            transform: translateY(-3px) scale(0.97);
            box-shadow:
                    rgba(65, 90, 197, 0.5) 0px 8px 24px,
                    rgba(0, 0, 0, 0.15) 0px 4px 8px;
        }
    }

    /* Animação de entrada */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Responsividade */
    @media (max-width: 768px) {
        button {
            width: 100%;
            max-width: 24rem;
            height: 4rem;
            font-size: 1.25rem;
            padding: 10px 20px;
        }
    }

    @media (max-width: 480px) {
        button {
            max-width: 20rem;
            height: 3.5rem;
            font-size: 1.1rem;
            padding: 8px 16px;
            border-radius: 0.75rem;
        }
    }

    @media (max-width: 360px) {
        button {
            max-width: 18rem;
            height: 3.2rem;
            font-size: 1rem;
            padding: 8px 12px;
        }
    }

    /* Modo escuro (opcional) */
    @media (prefers-color-scheme: dark) {
        &.scrolled button {
            box-shadow:
                    rgba(0, 0, 0, 0.3) 0px 2px 4px,
                    rgba(65, 90, 197, 0.3) 0px 0px 16px;
        }
    }
`;