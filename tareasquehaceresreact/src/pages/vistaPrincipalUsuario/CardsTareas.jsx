import "../../styles/vistaPrincipalUsuario.css";
import ModificarTarea from "../../components/ModificarTarea";

export default function CardsTareas({
  idTarea,
  tituloDeTarea,
  descripcionTarea,
  fechaInicioTarea,
  fechaFinalTarea,
}) {
  return (
    <div className="cardPrincipal col-sm-12 col-md-6	col-lg-4	col-xl-3	col-xxl-3" id={idTarea}>
      <div className="card text-center" id="">
        <div className="card-header numTarea">Tarea</div>
        <div className="card-body cuerpoTarea" id="">
          <h4 className="card-title">{tituloDeTarea}</h4>
          <p className="card-text">{descripcionTarea}</p>
        </div>
        <div className="card-footer footerCard" id="">
          <div className="row">
            <p className="col-md-6">{fechaInicioTarea}</p>
            <p className="col-md-6">{fechaFinalTarea}</p>
          </div>
        </div>
        <div className="card-footer pieTarea" id="">
          <button
            className="btn btn-success boton"
            id=""
            data-bs-toggle="modal"
            data-bs-target="#dialogo1"
          >
            Borrar
          </button>
          <ModificarTarea />
          <button className="btn btn-success boton" id="">
            Terminar
          </button>
        </div>
      </div>
    </div>
  );
}
