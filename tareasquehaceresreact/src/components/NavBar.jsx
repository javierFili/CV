import "../styles/navbar.css";
import { AiFillShopping } from "react-icons/ai";

export default function NavBar() {
  let id = localStorage.getItem("usId");
  function crearTareaNueva() {
    alert("se creara una tarea nueva");
  }
  function salirDeLaSesion() {
    alert("se salbra de la sesion");
  }

  if (id === null) {
    return (
      <div className="main">
        <div className="row navbar centrarElementosNavbar ">
          <div className="col-2">
            <button className="btn btn-primary " onClick={crearTareaNueva}>
              Crear tarea{" "}
            </button>
          </div>
          <div className="col-6">
            <h1>
              <b>TAREAS Y QUE HACERES</b>
            </h1>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={salirDeLaSesion}>
              salir
            </button>
          </div>
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
