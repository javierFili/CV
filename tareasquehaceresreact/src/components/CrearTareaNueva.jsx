export default function CrearTareaNueva() {
  return (
    <div>
      <div class="modal fade" id="dialogo2">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Creando una nueva tarea</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <div class="container-fluid">
                <form>
                  <div class="mb-3 row">
                    <label for="usuario" class="col-sm-3 col-form-label">
                      Titulo de la tarea:
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="tituloNombre"
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="usuario" class="col-sm-3 col-form-label">
                      Descripcion:
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        id="descripcion"
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
                        id="fechaInicio"
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
            </div>

            <div class="modal-footer">
              <p>Entrada al sitio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
