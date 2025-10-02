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


    .conteudo-banner {
        max-width: 1440px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding-left: 15rem;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
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
        font-size: 3rem;
        font-style: normal;
        font-weight: 600;
        line-height: 164.723%; /* 4.94169rem */
        text-transform: capitalize;
        min-width: 37.4375rem;
        margin: 1.5rem 0;
        background: linear-gradient(180deg, #415AC5 0%, #7241B4 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

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
    }

    .Subtitulo {
        color: var(--fonte2);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 164.723%; /* 2.47088rem */
        min-width: 40.4375rem;
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
    }
    
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`

export const Texto = styled.div`
    max-width: 450px;
    
    @media (max-width: 768px){
        max-width: 100%;
        text-align: center;
    }
`
