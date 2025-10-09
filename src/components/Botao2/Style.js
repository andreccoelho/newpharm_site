import styled from "styled-components";

export const Botao2Style = styled.div`
    button {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        padding: 0.5rem 0;
        border: none;
        cursor: pointer;
        text-align: center;
        color: #415AC5;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-family: "Montserrat", sans-serif;

        /* Transições suaves */
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        /* Animação de entrada */
        animation: fadeIn 0.6s ease-out;

        .button-text {
            position: relative;
            transition: transform 0.3s ease;
            flex: 1;

            /* Underline animado */
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #415AC5, #6846B8);
                transition: width 0.4s ease;
            }
        }

        .button-arrow {
            display: inline-block;
            transition: transform 0.3s ease;
            flex-shrink: 0;
            white-space: nowrap;
        }

        /* Hover - Efeitos */
        &:hover {
            transform: translateX(5px);
            color: #6846B8;

            .button-text::after {
                width: 100%;
            }

            .button-arrow {
                transform: translateX(8px);
                animation: arrowBounce 0.6s ease infinite;
            }
        }

        /* Active - Clique */
        &:active {
            transform: translateX(2px) scale(0.98);
        }

        /* Focus */
        &:focus-visible {
            outline: 2px solid rgba(65, 90, 197, 0.5);
            outline-offset: 4px;
            border-radius: 4px;
        }
    }

    /* Efeito quando o scroll acontece */
    &.scrolled button {
        color: #3651B5;
        transform: scale(0.95);

        &:hover {
            transform: translateX(5px) scale(0.95);
            color: #5837A8;
        }
    }

    /* Animação de entrada */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Animação da seta */
    @keyframes arrowBounce {
        0%, 100% {
            transform: translateX(8px);
        }
        50% {
            transform: translateX(12px);
        }
    }

    /* Responsividade */
    @media (max-width: 768px) {
        button {
            font-size: 1rem;
            gap: 0.4rem;
            max-width: 100%;
            white-space: normal;
            text-align: left;
        }
    }

    @media (max-width: 480px) {
        button {
            font-size: 1.2rem;
            gap: 0.3rem;
            padding: 0.5rem;

            .button-text {
                line-height: 1.4;
            }

            .button-arrow {
                font-size: 0.85rem;
                align-self: flex-start;
                margin-top: 0.1rem;
            }
        }
    }

    @media (max-width: 360px) {
        button {
            font-size: 0.85rem;

            .button-arrow {
                font-size: 0.8rem;
            }
        }
    }

    /* Modo escuro (opcional) */
    @media (prefers-color-scheme: dark) {
        button {
            color: #6B8AE8;

            &:hover {
                color: #8B6ED8;
            }
        }

        &.scrolled button {
            color: #5875D5;
        }
    }
`;