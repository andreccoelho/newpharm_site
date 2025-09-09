import styled from "styled-components"

const Top = styled.header`
  padding: .5em 10em;
  background-color: var(--fundo);
  display: flex;
  flex-direction: row;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid var(--azul);
  a {
      color: var(--fonte1);
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      text-decoration: none;
  }
    
  .logo img {
      width: 13rem;
      flex-shrink: 0;
      aspect-ratio: 8/3;
  }
    
   .menu-itens{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
    }
`

export {Top}