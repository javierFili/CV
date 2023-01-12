import "../styles/navbar.css";
import CrearTareaNueva from "../components/CrearTareaNueva";

export default function NavBar({ datosDeTareas }) {
  let id = localStorage.getItem("usuario");
  function salirDeLaSesion() {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  }

  if (id !== null) {
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
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="row navbar ">
          <div className="col-5" style={{ marginLeft: "20em" }}>
            <h1>
              <b>TAREAS Y QUE HACERES</b>
            </h1>
          </div>
          <div className="col-2" style={{ marginLeft: "1em" }}>
            <button onClick={salirDeLaSesion} className="btn-15">
              <span>iniciar sesion</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
