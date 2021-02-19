import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';
import useCriptomonedas from '../Hooks/useCriptomoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Formaulario = () => {
    
    const MONEDAS = [
        { codigo:'USD', nombre:'Dolar de Estados Unidos'},
        { codigo:'MXN', nombre:'Pesos Mexicano'},
        { codigo:'EUR', nombre:'Euros'},
        { codigo:'GBP', nombre:'Libra Esterlina'}
    ]
 
    //utilizar usemoneda
    const [moneda, SelecMonedas ] = useMoneda('elige tu moneda','',MONEDAS);
    //utilizar usecriptomoneda
    const [criptomoneda,SelectCripto]=useCriptomoneda('elige la cripto','',[])


    //consultar la api

    

    return ( 
        <form>
            <SelecMonedas/> 

            <SelectCripto/>

             


            <Boton
            type="submit"
            value="Calcular"
            />

        </form>
     );
}
 
export default Formaulario;