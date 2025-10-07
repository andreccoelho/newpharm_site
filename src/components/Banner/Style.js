// noinspection CssUnknownTarget

import styled from "styled-components"

export const BannerStyle = styled.div`
    background: url("imagens/banner_dktp.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;

    /* Remove background em mobile */
    @media (max-width: 768px) {
        background: none;
        padding:0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .conteudo-banner {
        max-width: 1440px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding-left: 15rem;
        padding-right: 2rem;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            gap: 2rem;
            position: relative;
            background: url("imagens/banner_mobile.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            min-height: 400px;
            width: 85vw;
            justify-content: center;

            /* Overlay escuro com blur */
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5); /* Overlay escuro */
                backdrop-filter: blur(2px); /* Blur sutil */
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                z-index: 1;
            }

            /* Garante que o conteúdo fique acima do overlay */
            & > * {
                position: relative;
                z-index: 2;
            }
        }
    }

    .img_mobile {
        display: none; /* Não é mais necessário */
    }

    a {
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        min-width: 5em;
        text-decoration: none;
        font-weight: bold;
    }

    .Titulo {
        font-style: normal;
        line-height: 164.723%;
        max-width: 40rem;
        margin: 1.5rem 0;
        background: linear-gradient(180deg, #415AC5 0%, #7241B4 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: slideIn 1.5s ease-out;
        font-size: 3rem;
        font-weight: 700;
        line-height: 164.723%;
        text-transform: capitalize;

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @media (max-width: 768px) {
            font-size: 2.25rem;
            margin: 1rem 0;
            min-width: auto;
            /* Texto branco em mobile */
            background: none;
            -webkit-text-fill-color: white;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            max-width: 350px;
        }
    }

    .Subtitulo {
        color: var(--fonte2);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 164.723%;
        max-width: 40.4375rem;
        margin-bottom: 6rem;
        animation: slideIn 1.5s ease-out;

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @media (max-width: 768px) {
            font-size: 1.125rem;
            line-height: 150%;
            margin-bottom: 2rem;
            min-width: auto;
            /* Texto branco em mobile */
            color: white;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            max-width: 350px;
        }
    }
`

export const Texto = styled.div`
    width: 100%;

    @media (max-width: 768px){
        text-align: center;
    }
`