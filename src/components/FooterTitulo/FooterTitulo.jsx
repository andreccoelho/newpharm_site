import React from 'react';
import { FooterTituloStyle } from './Style';

const FooterTitulo = ({ texto }) => {
    return (
        <FooterTituloStyle>
            <h1>{texto}</h1>
            <div className={"linha"}></div>
        </FooterTituloStyle>
    );
};

export default FooterTitulo;