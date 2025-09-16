import styled from "styled-components"

export const ComoFuncionaStyle = styled.div`
    padding: 5rem 15rem 0 15rem;
    background: #F9F9F9;
    
    p {
        max-width: 57.4375rem;
        color: #737373;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 164.723%; /* 2.47088rem */
        margin-top: 3rem;
    }
    
    .cards {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 3.5rem;
    }
    `