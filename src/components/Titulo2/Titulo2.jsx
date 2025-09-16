import React from 'react';
import { Titulo2Style } from './Style';

const Titulo2 = ({ texto }) => {
    return (
        <Titulo2Style>
            <h1>{texto}</h1>
            <div className={"linha"}></div>
        </Titulo2Style>
    );
};

export default Titulo2;