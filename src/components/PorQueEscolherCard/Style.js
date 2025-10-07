import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
export const PorQueEscolherCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: #fff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* Animação de entrada */
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  /* Efeito de brilho ao hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(65, 90, 197, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    /*box-shadow: 0 12px 24px rgba(65, 90, 197, 0.15);*/
    
    &::before {
      left: 100%;
    }
    
    .icone {
      animation: ${float} 2s ease-in-out infinite;
    }
    
    h3 {
      color: #415AC5;
    }
  }
  
  &:active {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    padding: clamp(1rem, 3vw, 1.5rem);
  }
  
  .icone {
    width: clamp(4rem, 12vw, 6.25rem);
    height: clamp(4rem, 12vw, 6.25rem);
    flex-shrink: 0;
    aspect-ratio: 1/1;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg, img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
  
  .conteudo {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  h3 {
    color: #333;
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    transition: color 0.3s ease;
    
    @media (max-width: 480px) {
      font-size: clamp(0.875rem, 4vw, 1.125rem);
    }
  }
  
  p {
    max-width: 100%;
    color: #737373;
    text-align: center;
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-weight: 400;
    line-height: 1.65;
    margin: 0;
    transition: color 0.3s ease;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;