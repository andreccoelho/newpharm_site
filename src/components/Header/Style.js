import styled from "styled-components"

const Top = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: .5em 15em;
    background-color: var(--fundo);
    backdrop-filter: blur(10px);
    margin: 0;
    border-bottom: 4px solid var(--azul);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    overflow-x: clip;

    &.scrolled {
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 15px 15em;

        .logo img {
            width: 11rem;
        }
    }

    .logo img {
        width: 13rem;
        flex-shrink: 0;
        aspect-ratio: 8/3;
        transition: all 0.3s ease;
    }

    .menu-itens {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
    }

    a {
        color: var(--fonte1);
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        text-decoration: none;
        position: relative;
        padding: 10px 0;
        transition: all 0.3s ease;
    }

    .menu-itens a:hover {
        color: var(--azul);
        transform: scale(1.1);
    }

    .menu-itens a.active {
        color: var(--azul);
        font-weight: 700;
    }

    .menu-itens a.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--azul);
        animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
        from {
            width: 0;
            left: 50%;
        }
        to {
            width: 100%;
            left: 0;
        }
    }

    /* Botão Hambúrguer - Escondido por padrão */
    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 24px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1001;
        position: relative;

        span {
            width: 100%;
            height: 3px;
            background-color: var(--azul);
            border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;
        }

        &.active span:nth-child(1) {
            transform: translateY(10.5px) rotate(45deg);
        }

        &.active span:nth-child(2) {
            opacity: 0;
            transform: translateX(-20px);
        }

        &.active span:nth-child(3) {
            transform: translateY(-10.5px) rotate(-45deg);
        }
    }

    /* Overlay escuro */
    .menu-overlay {
        display: none;
    }

    @media (max-width: 1200px) {
        padding: .5em 5em;

        &.scrolled {
            padding: 15px 5em;
        }
    }

    @media (max-width: 768px) {
        padding: 1em 2em;

        &.scrolled {
            padding: 1em 2em;
        }

        /* Mostrar botão hambúrguer */
        .hamburger {
            display: flex;
        }

        /* Menu mobile */
        .menu-itens {
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            max-width: 300px;
            height: 100vh;
            background: linear-gradient(135deg, var(--fundo) 0%, rgba(255, 255, 255, 0.95) 100%);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2.5em;
            transform: translateX(100%);
            transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
            z-index: 999;

            &.open {
                transform: translateX(0);

                a {
                    animation: slideInItem 0.5s ease forwards;
                    opacity: 0;
                }

                a:nth-child(1) { animation-delay: 0.1s; }
                a:nth-child(2) { animation-delay: 0.2s; }
                a:nth-child(3) { animation-delay: 0.3s; }
                a:nth-child(4) { animation-delay: 0.4s; }
            }
        }

        @keyframes slideInItem {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Overlay quando menu está aberto */
        .menu-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 998;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Ajustes nos links do menu mobile */
        .menu-itens a {
            font-size: 1.1rem;
            padding: 15px 20px;
            width: 80%;
            text-align: center;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .menu-itens a:hover {
            transform: translateX(-5px) scale(1.05);
            background-color: rgba(65, 90, 197, 0.1);
            box-shadow: 0 4px 12px rgba(65, 90, 197, 0.2);
        }

        .menu-itens a.active::after {
            display: none;
        }

        .menu-itens a.active {
            background: linear-gradient(135deg, rgba(65, 90, 197, 0.15), rgba(104, 70, 184, 0.15));
            font-weight: 700;
            box-shadow: 0 2px 8px rgba(65, 90, 197, 0.15);
        }
    }

    @media (max-width: 480px) {
        padding: 1em 1.5em;

        &.scrolled {
            padding: 1em 1.5em;
        }

        .logo img {
            width: 10rem;
        }

        &.scrolled .logo img {
            width: 9rem;
        }

        .menu-itens {
            width: 80%;
        }
    }
`

export { Top }