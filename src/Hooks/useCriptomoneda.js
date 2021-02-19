import React,{Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCriptomoneda = (label,stateInicial,opciones) => {
    // state del custom hook
    const [state, actualizarState]=useState(stateInicial);
        const SelectCripto= () => (
            <Fragment>
                <Label>{label}</Label>
                <select
                onChange={ e=>actualizarState (e.target.value) }
                value={state}
                >
                    <option value="">-- Seleccione Opcion --</option>
                    {/*opciones.map(opcion=>(
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.codigo}</option>
                    ))*/} 
                </select>
            </Fragment>
        )
         
        
    //retornar state , la interfas que es seleccionar, y la func que modifica el state
    return  [state, SelectCripto, actualizarState]
}
 
export default useCriptomoneda;