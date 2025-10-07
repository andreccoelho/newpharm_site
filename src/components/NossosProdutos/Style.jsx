import styled from "styled-components"

export const NossosProdutosStyle = styled.div`
    width: 100%;
    background: #F9F9F9;
    padding: 5rem 0;
    overflow: hidden;

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(1.5rem, 5vw, 15rem);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 3rem;

        p {
            max-width: 44.4375rem;
            color: #737373;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            font-weight: 500;
            line-height: 1.65;
            margin-top: 1rem;
        }
    }

    .produtos-wrapper {
        width: 100%;
        position: relative;
    }

    .produtos {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: clamp(2rem, 5vw, 10rem);
        padding: 1rem 0;
    }

    /* Indicadores de scroll - escondidos por padrão */
    .scroll-indicator {
        display: none;
        justify-content: center;
        gap: 0.75rem;
        margin-top: 2rem;

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #d1d5db;
            transition: all 0.3s ease;
            cursor: pointer;

            &.active {
                background: #007bff;
                transform: scale(1.2);
            }

            &:hover {
                background: #6b7280;
            }
        }
    }

    /* Desktop grande */
    @media (min-width: 1600px) {
        padding: 6rem 0;

        .header {
            margin-bottom: 4rem;
        }
    }

    /* Desktop médio */
    @media (max-width: 1400px) {
        .container {
            padding: 0 clamp(2rem, 4vw, 10rem);
        }
    }

    /* Desktop pequeno */
    @media (max-width: 1200px) {
        padding: 4rem 0;

        .container {
            padding: 0 3rem;
        }

        .produtos {
            gap: 4rem;
        }

        .header {
            margin-bottom: 2.5rem;
        }
    }

    /* Tablet grande - ainda lado a lado */
    @media (max-width: 1024px) {
        padding: 3.5rem 0;

        .container {
            padding: 0 2.5rem;
        }

        .produtos {
            gap: 3rem;
        }
    }

    /* Tablet - início do swiper */
    @media (max-width: 900px) {
        padding: 3rem 0;

        .container {
            padding: 0;
        }

        .header {
            padding: 0 2rem;
            margin-bottom: 2rem;
        }

        .produtos-wrapper {
            display: flex;
            height: 24rem;
            width: 100%;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
        }

        .produtos {
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            gap: 2rem;
            padding: 1rem 2rem;
            justify-content: flex-start;

            /* Esconder scrollbar mas manter funcionalidade */
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            /* Cada card ocupa toda a largura visível */
            > * {
                scroll-snap-align: center;
                flex: 0 0 calc(100% - 4rem);
                max-width: 28rem;
            }
        }

        .scroll-indicator {
            display: flex;
        }
    }

    /* Mobile landscape */
    @media (max-width: 768px) {
        padding: 2.5rem 0;

        .header {
            padding: 0 1.5rem;

            p {
                line-height: 1.5;
            }
        }

        .produtos {
            padding: 1rem 1.5rem;
            gap: 1.5rem;

            > * {
                flex: 0 0 calc(100% - 3rem);
                max-width: 26rem;
            }
        }
    }

    /* Mobile portrait */
    @media (max-width: 576px) {
        padding: 2rem 0;

        .header {
            padding: 0 1.25rem;
            margin-bottom: 1.5rem;

            p {
                font-size: 1rem;
            }
        }

        .produtos {
            padding: 1rem 1.25rem;
            gap: 1.25rem;

            > * {
                flex: 0 0 calc(100% - 2.5rem);
                max-width: 24rem;
            }
        }

        .scroll-indicator {
            margin-top: 1.5rem;

            .dot {
                width: 8px;
                height: 8px;
            }
        }
    }

    /* Mobile pequeno */
    @media (max-width: 400px) {
        padding: 1.5rem 0;

        .header {
            padding: 0 1rem;
        }

        .produtos {
            padding: 1rem;
            gap: 1rem;

            > * {
                flex: 0 0 calc(100% - 2rem);
            }
        }
    }

    /* Animação de fade in para a seção */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    animation: fadeIn 0.6s ease-out;
`