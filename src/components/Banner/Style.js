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
    animation: fadeIn 1.5s ease-in-out;
    padding: 4rem 0;

    /* Remove background em mobile */
    @media (max-width: 768px) {
        background: none;
        padding: 2rem 0;
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
            padding: 0;
            gap: 2rem;
        }
    }

    .img_mobile {
        background: url("imagens/banner_mobile.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 85vw;
        height: 250px;
        margin-top: 2rem;
        display: none;
        border-radius: 8px;

        @media (max-width: 768px) {
            display: block;
        }
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