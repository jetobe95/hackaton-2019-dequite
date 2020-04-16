import React from 'react'
import UserContext, { IUserContext } from '../../../core/user-context';

export default function ShowSearchResults(props:any) {
    const userContext: IUserContext = React.useContext(UserContext);

    return (
    <h1>Resultados de busqueda {userContext.searchQuery}</h1>
    )
}