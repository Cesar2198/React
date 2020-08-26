import React, { useState } from 'react'
import DetalleUsuario from './components/detalleUsuario';
import { UsuarioProvider, UseUsuarios } from './context/usuario-context';
import ModalAddUser from './components/addUser';
import NavBar from './components/navBar';

///componente p[adre]
const App = () => {
  return (
    <UsuarioProvider>
      <App1>
      </App1>
    </UsuarioProvider>
  )
}



///comnponete hijo

function App1() {

  const { usuarios } = UseUsuarios();
  const { eliminarusuario } = UseUsuarios();

  console.log(eliminarusuario);

  const [Usuario, SetUsuario] = useState({});


  const SetearInformacion = (data) => {
    SetUsuario(data);
  }


  return (
    <div className="container mt-5 ">
      <NavBar></NavBar>
      <div className="row mb-5">
        <div className="col-lg-3 mt-2">
          <button type="button" onClick={() => { SetUsuario(null) }} className="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal">
            Agregar Usuarios
      </button>
        </div>
        <div className="col-lg-9">
          <ul class="list-group">
            <h3 className="text-info">{usuarios.length}</h3>
            {usuarios.map(x => {
              return (
                <li key={x.cod} class="list-group-item ">
                  <div className="row">
                    <div className="col-7">  <span className="text-info">{x.nombre} {x.apellido}  </span></div>

                    <div className="col-5">
                      <button type="button" onClick={() => {
                        SetearInformacion(x)
                      }} value={x.cod} className="btn btn-primary ml-5 mr-3 mb-3 px-4" data-toggle="modal" data-target="#exampleModal">
                        Editar
                </button>
                      <button type="button" onClick={() => { eliminarusuario(x.cod)}} value={x.cod} className="btn btn-primary ml-5 mb-3 px-3">
                        Eliminar
                  </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Operación Usuario</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ModalAddUser usuario={Usuario}>

              </ModalAddUser>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
