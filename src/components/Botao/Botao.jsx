import React from 'react';
import { BotaoStyle } from './Style'; // Importa o estilo do arquivo Style.js

/**
 * Componente de botão reutilizável que abre um link em uma nova aba.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.texto - O texto a ser exibido no botão.
 * @param {string} props.link - O URL que o botão deve abrir.
 */
const Botao = ({ texto, link }) => {
    // Função para abrir o link em uma nova aba
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <BotaoStyle>
            <button onClick={handleClick}>
                {/* O texto do botão agora vem da prop 'texto' */}
                <a>{texto}</a>
            </button>
        </BotaoStyle>
    );
};

export default Botao;