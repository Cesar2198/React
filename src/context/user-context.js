import React, { useState, useMemo, useEffect } from 'react';
import usuarios from '../resources/usuarios';

const usuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [users, setUsers] = useState(usuarios);


    function agregarUsuario(data) {
        const currentUsers = [...users];
        currentUsers.push(data);
        setUsers(currentUsers);
    }

    function eliminarusuario(cod) {
        const Usuarios = [...users];
        const user = Usuarios.filter(usuario => usuario.cod != cod);
        setUsers(Usuarios);
    }

    const values = useMemo(() => {
        return (
            {
                users,
                agregarUsuario,
                eliminarusuario,
            }
        )
    }, [users])

    return <usuarioContext.Provider value={values} {...props} />
}

export function useUsuario() {
    const context = React.useContext(usuarioContext);
    if (!context) {
        throw new Error("El hook debe estar dentro del Contexto User");
    }
    return context;
}



