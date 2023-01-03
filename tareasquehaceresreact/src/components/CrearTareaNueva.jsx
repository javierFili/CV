import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function CrearTareaNueva() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn-15" onClick={() => setShow(true)}>
        <span>Crear tarea</span>
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
            <form>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Titulo de la tarea:
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="tituloNombre" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Descripcion:
                </label>
                <div class="col-sm-9">
                  <textarea id="descripcion" class="form-control"></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Fecha de inicio:
                </label>
                <div class="col-sm-9">
                  <input id="fechaInicio" type="date" class="form-control" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="usuario" class="col-sm-3 col-form-label">
                  Fecha de fin
                </label>
                <div class="col-sm-9">
                  <input id="fechaFin" type="date" class="form-control" />
                </div>
              </div>

              <div class="mb-3 row">
                <div class="offset-sm-3 col-sm-9">
                  <div
                    onclick="crearObtenerDatos()"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Confirmar
                  </div>
                  <button
                    onclick=""
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
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
