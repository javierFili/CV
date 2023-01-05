import "../styles/navbar.css";
import CrearTareaNueva from "../components/CrearTareaNueva";

import { AiFillShopping } from "react-icons/ai";

export default function NavBar({ datosDeTareas }) {
  let id = localStorage.getItem("usId");
  function salirDeLaSesion() {
    alert("se salbra de la sesion");
  }

  if (id === null) {
    return (
      <div className="main">
        <div className="row navbar centrarElementosNavbar ">
          <div className="col-2">
            <CrearTareaNueva datosDeTareas={datosDeTareas} />
          </div>
          <div className="col-8">
            <h1 className="centrarElementosNavbar ">
              <b> TAREAS Y QUE HACERES</b>
            </h1>
          </div>
          <div className="col-1">
            <button className="btn-15" onClick={salirDeLaSesion}>
              <span>salir</span>
            </button>
          </div>
        </div>
        <div>          
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="row navbar centrarElementosNavbar ">
          <div className="col-3">
            <AiFillShopping />
            <button className="btn btn-primary ">Crear tarea </button>
          </div>
          <div className="col-6">
            <h1>
              <b>TAREAS Y QUE HACERES</b>
            </h1>
          </div>
          <div className="col-3">
            <button className="btn btn-primary">salir</button>
            <AiFillShopping />
          </div>
        </div>
      </div>
    );
  }
}
