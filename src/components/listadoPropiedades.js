import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import * as listadoPropiedades from '../css/listadoPropiedades.module.css';
import usePropiedades from './../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import useFiltro from './../hooks/useFiltro';


const ListadoPropiedades = () => {
    
    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);
    const [filtradas, guardarFiltradas] = useState([]);

    //Filtrado de propiedades
    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        if (categoria) {
            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria);
            guardarFiltradas(filtro);
        }
        else {
            guardarFiltradas(propiedades)
        }
    }, [categoria, propiedades])


    return (
        <>
            <h2 css={css`margin-top: 5rem;`}>Nuestras Propiedades</h2>
            {FiltroUI()}
            <ul className={listadoPropiedades.propiedades}>
                {filtradas.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
                </ul>
        </>
     );
}
 
export default ListadoPropiedades;