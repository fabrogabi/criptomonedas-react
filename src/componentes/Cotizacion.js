import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion=({cotizado}) => {
    if(Object.keys(cotizado).length === 0) return null;
    
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{cotizado.PRICE}</span> </Precio>
            <Info>Precio más alto del día: <span>{cotizado.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{cotizado.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{cotizado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{cotizado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;