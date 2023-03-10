import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModificarTarea({ datosDeTareas }) {
  const [show, setShow] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState({
    titulo: "",
    descripcion: "",
    fechaIni: "",
    fechaFin: "",
  });

  function envioDeFormulario(e) {
    e.preventDefault();
    // aqui rescatamos el id.
    const URL = "http://localhost:3001/tareas/javier2";
    var nuevaActualizacion = datosDeTareas[0].tareas;
    nuevaActualizacion.push(nuevaTarea);
    var sera = datosDeTareas[0];
    console.log(sera);
    let req = new Request(URL, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(sera),
    });
    fetch(req).then((res) => res.json());
  }

  function entradaCambio(e) {
    e.persist();
    setNuevaTarea({ ...nuevaTarea, [e.target.name]: e.target.value });
  }
  return (
    <>
      <button className="btn-15" onClick={() => setShow(true)}>
        <span>Modificar</span>
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container-fluid">
            <form onSubmit={envioDeFormulario}>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Titulo de la tarea:
                </label>
                <div class="col-sm-9">
                  <input
                    onChange={entradaCambio}
                    type="text"
                    class="form-control"
                    name="titulo"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Descripcion:
                </label>
                <div class="col-sm-9">
                  <textarea
                    onChange={entradaCambio}
                    name="descripcion"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Fecha de inicio:
                </label>
                <div class="col-sm-9">
                  <input
                    onChange={entradaCambio}
                    name="fechaIni"
                    type="date"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Fecha de fin
                </label>
                <div class="col-sm-9">
                  <input
                    onChange={entradaCambio}
                    name="fechaFin"
                    type="date"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <div class="offset-sm-3 col-sm-9">
                  <button type="submit" class="btn btn-primary boton">
                    Confirmar
                  </button>
                  <button
                    onclick=""
                    type="button"
                    class="btn btn-primary boton"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
