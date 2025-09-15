import React from 'react';
import { TituloStyle } from './Style'; // Importando o estilo

const Titulo = ({ texto }) => {
    return (
        <TituloStyle>
            <a>———&nbsp;&nbsp; </a>
            <h1>{texto}</h1>
        </TituloStyle>
    );
};

export default Titulo;