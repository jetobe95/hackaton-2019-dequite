import React from 'react';
import { NavLink } from 'react-router-dom'
export default function PageNotFound(params: any) {
    return (
        <div className='page-not-found'>
            <h1>Pagina no encontrada</h1>
            <NavLink to='/'>
                Volver al inicio
            </NavLink>
        </div>
    )
}