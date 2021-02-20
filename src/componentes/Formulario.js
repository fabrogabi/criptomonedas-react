import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';
import Error from './Error'
import useCriptomoneda from '../Hooks/useCriptomoneda';
import axios from 'axios';

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

const Formaulario = ({guardarMoneda,guardarCriptomoneda}) => {
    //state listado de criptomonedas
    const [listaCripto,guardarCripto]=useState([]);
    const [error,guardarError]=useState(false);

    
    const MONEDAS = [
        { codigo:'USD', nombre:'Dolar de Estados Unidos'},
        { codigo:'MXN', nombre:'Pesos Mexicano'},
        { codigo:'EUR', nombre:'Euros'},
        { codigo:'GBP', nombre:'Libra Esterlina'}
    ]
 
    //utilizar usemoneda
    const [moneda, SelecMonedas ] = useMoneda('elige tu moneda','',MONEDAS);
    //utilizar usecriptomoneda
    const [criptomoneda,SelectCripto]=useCriptomoneda('elige la cripto','',listaCripto)




    //consultar la api
    useEffect(() => {
        const consultarApi =async () => {
            const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const resultado = await axios.get(url);
            guardarCripto(resultado.data.Data); 
            
        }
        
        consultarApi();
        
        
    },[])
     
    
    //cuando el usuario hace submit
    const cotizarMoneda= e=>{
        e.preventDefault();
        //validar los campos
        if(moneda===""||criptomoneda===""){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);

    }
    

    return ( 
        <form
        onSubmit={cotizarMoneda}
        >
            { error ? <Error mensaje="Completar los dos Campos"/> : null}

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