import styled from "styled-components";

const FooterStyle = styled.footer`
    padding: 3rem 0 3rem 15rem;
    background: #333;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    a {
        color: #F5F5F5;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        text-decoration: none !important;
        transition: all 0.3s ease;

        &:hover {
            color: #415AC5;
            transform: translateX(5px);
        }
    }

    .menu {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        flex: 1;
    }

    .esquerda {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .menu-itens {
        display: flex;
        flex-direction: column;
        gap: 3.3rem;
    }

    .direita {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .svgs {
        display: flex;
        gap: 1.5rem;

        a {
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-5px) scale(1.1);
            }

            svg {
                display: block;
            }
        }
    }

    .imagem {
        flex-shrink: 0;
        max-width: 300px;

        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }

    /* Tablets grandes e Desktop pequeno */
    @media (max-width: 1200px) {
        padding: 3rem 3rem 3rem 6rem;

        .menu {
            gap: 2.5rem;
        }

        .imagem {
            max-width: 250px;
        }
    }

    /* Tablets */
    @media (max-width: 1024px) {
        padding: 2.5rem 2rem;

        .menu {
            gap: 2rem;
        }

        .imagem {
            max-width: 200px;
        }

        a {
            font-size: 0.95rem;
        }
    }

    /* Tablets pequenos */
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1.5rem;

        .menu {
            flex-direction: column;
            gap: 2.5rem;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .esquerda,
        .direita {
            gap: 1.5rem;
        }

        .menu-itens {
            gap: 2.75rem;
        }

        .svgs {
            gap: 1.25rem;

            svg {
                width: 28px;
                height: 28px;
            }
        }

        /* Oculta imagem em tablets pequenos e mobile */
        .imagem {
            display: none;
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        padding: 2rem 2rem;

        .menu {
            gap: 2rem;

        }

        .esquerda,
        .direita {
            gap: 1.25rem;
        }

        .menu-itens {
            gap: 2rem;
        }

        a {
            font-size: 0.9rem;
        }

        .svgs {
            gap: 1rem;

            svg {
                width: 26px;
                height: 26px;
            }
        }
    }

    /* Mobile extra pequeno */
    @media (max-width: 360px) {
        padding: 1.5rem 0.75rem;

        a {
            font-size: 0.85rem;
        }

        .svgs {
            svg {
                width: 24px;
                height: 24px;
            }
        }
    }
`;

export { FooterStyle };