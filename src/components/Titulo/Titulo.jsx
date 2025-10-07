import React from 'react';
import {Decoracao, TituloText, TituloWrapper} from './Style'; // Importando o estilo

const Titulo = ({
                    texto,
                    color,
                    margin,
                    showDecoration = true,
                    decorationChar = '———'
                }) => {
    return (
        <TituloWrapper margin={margin}>
            {showDecoration && (
                <Decoracao aria-hidden="true">
                    {decorationChar}&nbsp;&nbsp;
                </Decoracao>
            )}
            <TituloText color={color}>
                {texto}
            </TituloText>
        </TituloWrapper>
    );
};
export default Titulo;