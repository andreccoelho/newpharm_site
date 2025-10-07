import React from 'react';
import { TituloStyle } from './Style';

const Titulo = ({ texto }) => {
    return (
        <TituloStyle>
            <h1>{texto}</h1>
            <div className={"linha"}></div>
        </TituloStyle>
    );
};

export default Titulo;