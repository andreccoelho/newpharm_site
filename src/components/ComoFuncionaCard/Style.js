import styled from "styled-components"

export const ComoFuncionaCardStyle = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    max-width: 60rem;
    padding: 1rem 1.5rem;
    
    .icone {
        display: flex;
        align-items: center;
        margin: 0 2rem 0 1rem;
    }
    
    h3 {
        color: #333;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 164.723%; /* 2.05906rem */
    }
    
    p {
        max-width: 23.5rem;
        flex-shrink: 0;
        color: #737373;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 164.723%; 
        margin: 1.5rem 0 0 0;
    }
    
    .conteudo {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    `