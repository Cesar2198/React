import React, { useState } from 'react'
import { UseUsuarios } from '../context/usuario-context';



const ModalAddUser = (props) => {

    
    const [cod, setCod] = useState(props.usuario ? props.usuario.cod : "");
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0);

    const { agregarUsuario } = UseUsuarios();


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            cod: cod,
            nombre: nombre,
            apellido: apellido,
            edad: edad
        }


        agregarUsuario(data);

        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <header>INFORMACION DEL ESTUDIANTE</header>
            <hr></hr>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Codigo</label>
                <div className="col-sm-12">
                    <input required onChange={(e) => {setCod(e.target.value) }}
                        type="text"
                        className="form-control"
                        value={cod} />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <input required onChange={(e) => { setNombre(e.target.value) }}
                        placeholder="NOMBRES"
                        type="text" className="form-control"
                        value={props.usuario ? props.usuario.nombre : nombre} />
                </div>
                <div className="col-sm-6">
                    <input required onChange={(e) => { setApellido(e.target.value) }} placeholder="APELLIDOS"
                        type="text"
                        className="form-control"
                        value={props.usuario ? props.usuario.apellido : apellido} />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <input required onChange={(e) => { setEdad(parseInt(e.target.value)) }}
                        type="number"
                        max={50}
                        placeholder="EDAD"
                        className="form-control"
                        value={props.usuario ? props.usuario.edad : edad} />
                </div>
            </div>
            <input type="submit" class="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
                value={props.usuario ? "EDITAR USUARIO" : "AGREGAR USUARIO"} />
        </form>
    )
}

export default ModalAddUser;