import React from 'react';
import styled from 'styled-components';

// Styled Components
export const TituloWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin: ${props => props.margin || '1rem 0'};
`;

export const Decoracao = styled.span`
  color: #415AC5;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  }
`;

export const TituloText = styled.h1`
    color: ${props => props.color || '#333'};
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    font-weight: 700;
    line-height: 1.65;
    text-transform: uppercase;
    margin: 0;
    word-break: break-word;

    @media (max-width: 768px) {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: clamp(0.875rem, 4vw, 1.125rem);
    }
`;