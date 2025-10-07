import styled from "styled-components"

export const ProdutosCardStyle = styled.div`
    width: 100%;
    max-width: 24.3125rem;
    flex-shrink: 0;

    .card {
        width: 100%;
        height: 100%;
        border-radius: 0.875rem;
        background: #FFF;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
            0 10px 10px -5px rgba(0, 0, 0, 0.08);
        }
    }

    .imagem-wrapper {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        padding: 2.5rem 0;
        transition: background 0.4s ease;

        .card:hover & {
            background: linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%);
        }
    }

    .imagem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            height: 16rem;
            width: auto;
            max-width: 90%;
            object-fit: contain;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

            .card:hover & {
                transform: scale(1.05);
            }
        }
    }

    .info {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex-grow: 1;
    }

    h3 {
        color: #333;
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-weight: 600;
        line-height: 1.3;
        margin: 0;
        transition: color 0.3s ease;

        .card:hover & {
            color: #007bff;
        }
    }

    p {
        color: #737373;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        font-weight: 400;
        line-height: 1.6;
        margin: 0;
        text-align: left;
        flex-grow: 1;
    }

    .botao-wrapper {
        margin-top: 0.5rem;

        button {
            width: 100%;
            max-width: 14.4375rem;
            height: clamp(3.5rem, 5vw, 4.6875rem);
            color: #FFF;
            font-size: clamp(1.125rem, 1.5vw, 1.5rem);
            font-weight: 700;
            line-height: 1.3;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }
    }

    /* Desktop grande */
    @media (min-width: 1400px) {
        max-width: 26rem;

        .imagem img {
            height: 17rem;
        }
    }

    /* Desktop médio */
    @media (max-width: 1200px) {
        max-width: 22rem;

        .imagem img {
            height: 15rem;
        }

        .info {
            padding: 1.75rem;
        }
    }

    /* Tablet */
    @media (max-width: 992px) {
        max-width: 20rem;

        .imagem-wrapper {
            padding: 2rem 0;
        }

        .imagem img {
            height: 14rem;
        }

        .info {
            padding: 1.5rem;
            gap: 0.875rem;
        }
    }

    /* Mobile landscape / Tablet pequeno */
    @media (max-width: 768px) {
        max-width: 100%;

        .card {
            flex-direction: row;

            &:hover {
                transform: translateY(-4px);
            }
        }

        .imagem-wrapper {
            flex: 0 0 40%;
            padding: 1.5rem;
            display: flex;
            align-items: center;
        }

        .imagem {
            width: 100%;

            img {
                height: 12rem;
                max-width: 100%;
            }
        }

        .info {
            flex: 1;
            padding: 1.5rem;
        }

        .botao-wrapper button {
            max-width: 12rem;
        }
    }

    /* Mobile portrait */
    @media (max-width: 576px) {
        .card {
            flex-direction: column;
        }

        .imagem-wrapper {
            flex: none;
            padding: 2rem 1rem 1rem;
        }

        .imagem img {
            height: 10rem;
        }

        .info {
            padding: 1.25rem;
            gap: 0.75rem;
        }

        .botao-wrapper {
            display: flex;
            justify-content: center;

            button {
                max-width: 100%;
                height: 3.5rem;
            }
        }
    }

    /* Mobile pequeno */
    @media (max-width: 400px) {
        .imagem-wrapper {
            padding: 1.5rem 0.75rem 0.75rem;
        }

        .imagem img {
            height: 9rem;
        }

        .info {
            padding: 1rem;
        }

        .botao-wrapper button {
            height: 3.25rem;
        }
    }

    /* Animação de entrada */
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

    /* Aplicar animação de entrada (opcional) */
    animation: fadeInUp 0.6s ease-out forwards;

    /* Delay progressivo para múltiplos cards */
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
    &:nth-child(6) { animation-delay: 0.6s; }
`