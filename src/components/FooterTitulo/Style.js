import styled from "styled-components";

export const FooterTituloStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        color: #F9F9F9;
        font-size: 1rem; /* 20px - Mobile */
        font-style: normal;
        font-weight: 700;
        line-height: 164.723%;
        margin: 0;
    }

    .linha {
        background-color: #415AC5;
        width: 5.125rem; /* 82px - Mobile */
        height: 0.125rem; /* 2px */
        margin-top: 0.5rem;
    }

    /* Tablets */
    @media (min-width: 768px) {
        h1 {
            font-size: 1.5rem; /* 24px */
        }

        .linha {
            width: 6rem; /* 96px */
        }
    }

    /* Desktop */
    @media (min-width: 1024px) {
        h1 {
            font-size: 1.5rem; /* 28px */
        }

        .linha {
            width: 7rem; /* 112px */
        }
    }

    /* Telas grandes */
    @media (min-width: 1440px) {
        h1 {
            font-size: 1.5rem; /* 32px */
        }

        .linha {
            width: 8rem; /* 128px */
        }
    }
`