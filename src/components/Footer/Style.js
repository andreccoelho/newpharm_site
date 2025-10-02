import styled from "styled-components"

const FooterStyle = styled.header`
    padding: 3rem 0 3rem 15rem;
    background: #333;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
        color: #F5F5F5;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        text-decoration: none !important;
    }
    
    .menu {
        display: flex;
        flex-direction: row;
        gap: 5rem;
    }
    
    .esquerda {
        display: flex;
        flex-direction: column;
        gap: 2rem;

    }
    
    .menu-itens {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .direita {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .svgs {
        display: flex;
        gap: 2rem;
    }
    }
    

`

export {FooterStyle}