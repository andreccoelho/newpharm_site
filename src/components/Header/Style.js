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
    
    @media (max-width: 1200px) {
        padding: .5em 5em;

        &.scrolled {
            padding: 15px 5em;
        }
    }

    @media (max-width: 768px) {
        padding: .5em 2em;

        &.scrolled {
            padding: 15px 2em;
        }

        .menu-itens {
            gap: 1em;
        }

        a {
            font-size: 0.9rem;
        }
    }
`

export { Top }