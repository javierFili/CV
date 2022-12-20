import "../styles/navbar.css";

export default function NavBar() {
  return (
    <div className="main">
      <div className="row justify-content-md-center">
        <div className="col-3">
          <button className="btn btn-primary ">Crear tarea </button>
        </div>
        <div className="col-6">
          <h1>
            <b>TAREAS Y QUE HACERES</b>
          </h1>
        </div>
        <div className="col-3">
          <button className="btn btn-primary">salir</button>
        </div>
      </div>
    </div>
  );
}
