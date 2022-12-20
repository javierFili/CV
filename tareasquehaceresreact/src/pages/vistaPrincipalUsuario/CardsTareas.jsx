export default function CardsTareas(
  tituloDeTarea,
  descripcionTarea,
  fechaInicioTarea,
  fechaFinalTarea
) {
  return (
    <div className="col-sm-12 col-md-6	col-lg-4	col-xl-3	col-xxl-3" id="javie20">
      <div className="card text-center" id="javir2.0">
        <div className="card-header numTarea">Tarea#1</div>
        <div className="card-body cuerpoTarea" id="javie2.10">
          <h4 className="card-title">{tituloDeTarea}</h4>
          <p className="card-text">{descripcionTarea}</p>
        </div>
        <div className="card-footer footerCard" id="javie2.1.10">
          <div className="row">
            <p className="col-md-6">{fechaInicioTarea}</p>
            <p className="col-md-6">{fechaFinalTarea}</p>
          </div>
        </div>
        <div className="card-footer pieTarea" id="javie2.20">
          <button className="btn btn-success boton" id="Este nuevo titulo">
            Borrar
          </button>
          <button
            className="btn btn-success boton"
            id="Este nuevo titulo"
            data-bs-toggle="modal"
            data-bs-target="#dialogo1"
          >
            Modificar
          </button>
          <button className="btn btn-success boton" id="Este nuevo titulo">
            Terminar
          </button>
        </div>
      </div>
    </div>
  );
}
