import React from 'react';
import { Botao2Style } from './Style';
const Botao2 = ({ link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <Botao2Style>
            <button onClick={handleClick}>
                <a>Entenda Melhor ———➤</a>
            </button>
        </Botao2Style>
    );
};

export default Botao2;