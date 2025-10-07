import styled from "styled-components"

export const ComoFuncionaStyle = styled.div`
    width: 100%;
    padding: 5rem 0;
    background: #F9F9F9;

    /* Container centralizado */
    > * {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(1.5rem, 5vw, 15rem);
    }

    p {
        max-width: 57.4375rem;
        color: #737373;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        font-weight: 500;
        line-height: 1.65;
        margin: clamp(1.5rem, 3vw, 3rem) 0 clamp(2.5rem, 4vw, 4rem);
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(2rem, 3.5vw, 3.5rem);
        width: 100%;
    }

    .cards > *:nth-child(odd) {
        justify-self: start;
        animation: slideInLeft 0.6s ease-out forwards;
    }

    .cards > *:nth-child(even) {
        justify-self: end;
        animation: slideInRight 0.6s ease-out forwards;
    }

    /* Delays progressivos para animação */
    .cards > *:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
    .cards > *:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
    .cards > *:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
    .cards > *:nth-child(4) { animation-delay: 0.4s; opacity: 0; }

    /* Animações */
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Desktop grande */
    @media (min-width: 1600px) {
        padding: 6rem 0;

        p {
            margin: 3.5rem 0 4.5rem;
        }

        .cards {
            gap: 4rem;
        }
    }

    /* Desktop médio */
    @media (max-width: 1400px) {
        > * {
            padding: 0 clamp(2rem, 4vw, 10rem);
        }

        .cards {
            gap: 3rem;
        }
    }

    /* Desktop pequeno */
    @media (max-width: 1200px) {
        padding: 4rem 0;

        > * {
            padding: 0 3rem;
        }

        .cards {
            gap: 2.5rem;
        }

        p {
            margin: 2rem 0 3rem;
        }
    }

    /* Tablet landscape */
    @media (max-width: 1024px) {
        padding: 3.5rem 0;

        > * {
            padding: 0 2.5rem;
        }

        .cards {
            gap: 2rem;
        }
    }

    /* Tablet portrait - mantém 2 colunas mas centraliza */
    @media (max-width: 900px) {
        padding: 3rem 0;

        > * {
            padding: 0 2rem;
        }

        .cards {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 650px;
            margin: 0 auto;
        }

        .cards > *:nth-child(odd),
        .cards > *:nth-child(even) {
            justify-self: center;
            animation: fadeInUp 0.6s ease-out forwards;
        }
    }

    /* Mobile landscape */
    @media (max-width: 768px) {
        padding: 2.5rem 0;

        > * {
            padding: 0 1.5rem;
        }

        p {
            margin: 1.5rem 0 2.5rem;
            line-height: 1.5;
            text-align: center;
        }

        .cards {
            gap: 1.75rem;
            max-width: 550px;
        }
    }

    /* Mobile portrait */
    @media (max-width: 576px) {
        padding: 2rem 0;

        > * {
            padding: 0 1.25rem;
        }

        p {
            margin: 1.25rem 0 2rem;
            font-size: 1rem;
        }

        .cards {
            gap: 1.5rem;
            max-width: 100%;
        }
    }

    /* Mobile pequeno */
    @media (max-width: 400px) {
        padding: 1.5rem 0;

        > * {
            padding: 0 1rem;
        }

        p {
            margin: 1rem 0 1.5rem;
        }

        .cards {
            gap: 1.25rem;
        }
    }

    /* Animação alternativa para mobile */
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
`