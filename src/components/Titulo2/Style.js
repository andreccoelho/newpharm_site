import styled from "styled-components";

export const Titulo2Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.5rem, 1vw, 0.75rem);
    width: 100%;

    h1 {
        color: #333;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        letter-spacing: 0.02em;
        transition: color 0.3s ease;

        /* Animação sutil ao aparecer */
        animation: fadeInDown 0.6s ease-out;
    }

    a {
        color: #415AC5;
        font-size: clamp(1.125rem, 2vw, 1.5rem);
        font-weight: 700;
        line-height: 1.4;
        text-decoration: none;
        text-align: center;
        transition: all 0.3s ease;
        position: relative;
        padding: 0.25rem 0.5rem;
        margin: 0;

        &:hover {
            color: #2d3e8f;
            transform: translateY(-2px);
        }

        /* Underline animado */
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: #415AC5;
            transform: translateX(-50%);
            transition: width 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }
    }

    .linha {
        background: linear-gradient(90deg, #415AC5 0%, #6846B8 100%);
        width: clamp(4rem, 8vw, 5.5rem);
        height: 0.25rem;
        border-radius: 2px;
        transition: all 0.3s ease;
        animation: scaleIn 0.6s ease-out 0.3s backwards;

        /* Efeito de brilho */
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255, 255, 255, 0.4),
                    transparent
            );
            transition: left 0.6s ease;
        }

        &:hover::after {
            left: 100%;
        }
    }

    /* Animações */
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scaleX(0);
        }
        to {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    /* Desktop grande */
    @media (min-width: 1600px) {
        gap: 1rem;

        h1 {
            font-size: 1.5rem;
            letter-spacing: 0.03em;
        }

        a {
            font-size: 1.625rem;
        }

        .linha {
            width: 6rem;
            height: 0.3125rem;
        }
    }

    /* Desktop médio */
    @media (max-width: 1200px) {
        gap: 0.625rem;

        h1 {
            letter-spacing: 0.015em;
        }
    }

    /* Tablet landscape */
    @media (max-width: 1024px) {
        gap: 0.5rem;

        h1 {
            font-size: clamp(1.375rem, 2.8vw, 2rem);
        }

        a {
            font-size: clamp(1rem, 1.8vw, 1.375rem);
        }

        .linha {
            width: clamp(3.5rem, 7vw, 5rem);
        }
    }

    /* Tablet portrait */
    @media (max-width: 768px) {
        gap: 0.5rem;
        padding: 0 1rem;

        h1 {
            font-size: clamp(1.25rem, 2.5vw, 1.75rem);
            line-height: 1.25;
            max-width: 14rem;
        }

        a {
            font-size: clamp(0.9375rem, 1.6vw, 1.25rem);
            padding: 0.25rem 0.375rem;
        }

        .linha {
            width: clamp(3rem, 6vw, 4.5rem);
            height: 0.1875rem;
        }
    }

    /* Mobile landscape */
    @media (max-width: 640px) {
        gap: 0.375rem;

        h1 {
            font-size: clamp(1.125rem, 4vw, 1.5rem);
            letter-spacing: 0.01em;
        }

        a {
            font-size: clamp(0.875rem, 3vw, 1.125rem);
        }

        .linha {
            width: clamp(2.5rem, 10vw, 4rem);
        }
    }

    /* Mobile portrait */
    @media (max-width: 480px) {
        gap: 0.375rem;
        padding: 0 0.75rem;

        h1 {
            font-size: 1.25rem;
            line-height: 1.2;
        }

        a {
            font-size: 1rem;
            padding: 0.25rem;
        }

        .linha {
            width: 3rem;
            height: 0.1875rem;
        }
    }

    /* Mobile pequeno */
    @media (max-width: 360px) {
        gap: 0.3125rem;
        padding: 0 0.5rem;

        h1 {
            font-size: 1.125rem;
            letter-spacing: 0;
        }

        a {
            font-size: 0.9375rem;
        }

        .linha {
            width: 2.5rem;
            height: 0.125rem;
        }
    }
`