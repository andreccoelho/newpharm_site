import styled from "styled-components"

export const ProdutosCardStyle = styled.div`
    width: 24.3125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: 0 4px 17.1px 0 rgba(0, 0, 0, 0.06);
    padding: 0 2rem 2.5rem;


    .imagem {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .imagem img {
        height: 16rem;
        padding: 2.5rem 0;
    }

    h3 {
        color: #333;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 164.723%; /* 3.2945rem */
    }

    p {
        max-width: 20.8125rem;
        color: #737373;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
    }

    button {
        width: 14.4375rem;
        height: 4.6875rem;
        color: #FFF;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 164.723%; /* 2.47088rem */
    }
`