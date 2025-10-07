import styled from "styled-components"

export const SobreNosStyle = styled.div`
    width: 100%;
    padding: 5rem 0;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),    url("imagens/fundo.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 15rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: clamp(2rem, 5vw, 6rem);
    }

    .imagem {
        flex: 0 1 45%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: auto;
            max-width: 550px;
            object-fit: contain;
            border-radius: 1rem;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }
    }

    .conteudo {
        flex: 0 1 55%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .texto1 {
        color: #737373;
        font-size: clamp(1.5rem, 2.5vw, 2.25rem);
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 0.5rem;
        text-align: left;


        p {
            margin: 0;
        }
    }

    .texto2 {
        color: #737373;
        text-align: justify;
        font-size: clamp(1rem, 1.5vw, 1.25rem);
        font-weight: 500;
        line-height: 1.7;
        margin-bottom: 1rem;

        p {
            margin: 0;
        }
    }

    /* Desktop grande - ajuste fino */
    @media (min-width: 1600px) {
        padding: 6rem 0;

        .container {
            gap: 8rem;
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
            gap: 4rem;
        }

        .imagem {
            flex: 0 1 42%;

            img {
                max-width: 450px;
            }
        }

        .conteudo {
            flex: 0 1 58%;
        }
    }

    /* Tablet landscape */
    @media (max-width: 1024px) {
        padding: 3.5rem 0;

        .container {
            padding: 0 2.5rem;
            gap: 3rem;
        }

        .imagem {
            flex: 0 1 40%;

            img {
                max-width: 380px;
            }
        }
    }

    /* Tablet portrait */
    @media (max-width: 900px) {
        padding: 3rem 0;

        .container {
            flex-direction: column;
            padding: 0 2rem;
            gap: 2.5rem;
            text-align: center;
        }

        .imagem {
            flex: none;
            width: 100%;
            max-width: 450px;

            img {
                max-width: 100%;
            }
        }

        .conteudo {
            flex: none;
            width: 100%;
            max-width: 650px;
            align-items: center;
        }

        .texto2 {
            text-align: center;
        }
    }

    /* Mobile landscape */
    @media (max-width: 768px) {
        padding: 2.5rem 0;

        .container {
            padding: 0 1.5rem;
            gap: 2rem;
        }

        .imagem {
            display: none;
        }

        .conteudo {
            max-width: 550px;
            gap: 1.25rem;
        }
    }

    /* Mobile portrait */
    @media (max-width: 576px) {
        padding: 2rem 0;

        .container {
            padding: 0 1.25rem;
            gap: 1.75rem;
        }

        .imagem {
            max-width: 320px;

            img {
                border-radius: 0.75rem;
            }
        }

        .conteudo {
            max-width: 100%;
            gap: 1rem;
            align-items: flex-start;
        }

        .texto2 {
            text-align: left;
        }
    }

    /* Mobile pequeno */
    @media (max-width: 400px) {
        padding: 1.5rem 0;

        .container {
            padding: 0 1rem;
            gap: 1.5rem;
        }

        .imagem {
            max-width: 280px;
        }

        .conteudo {
            gap: 0.875rem;
        }
    }
`