import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function RegistroDeUsuario() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    contrasenia: "",
    contrasenia1: "",
  });
  const [nombreEr, setNombreEr] = useState("");
  const [correoEr, setCorreoEr] = useState("");
  const [contraseniaEr, setContraseniaEr] = useState("");
  const [contrasenia1Er, setContrasenia1Er] = useState("");

  function validarNombre(nombre) {
    nombre = nombre.trim();
    if (nombre === "") {
      setNombreEr("No puede ser vacio!");
      return false;
    }
  }

  function validarCorreo(correo) {
    correo = correo.trim();
    if (correo.length === 0) {
      setCorreoEr("No puede ser vacio!");
      return false;
    }
  }
  function validarContrasenia(contrasenia, contrasenia1) {
    contrasenia = contrasenia.trim();
    contrasenia1 = contrasenia1.trim();
    if (contrasenia.length === 0) {
      setContraseniaEr("No puede ser vacia!");
      return false;
    }
    if (contrasenia1 === 0) {
      setContrasenia1Er("No puede ser vacia");
      return false;
    }
    if (contrasenia.length > 7) {
      setContraseniaEr("debe tener almenos 8 caracteres.");
      return false;
    }
  }

  function envioDeFormulario(e) {
    e.preventDefault();
    var val1 = validarNombre(datos.nombre);
    var val2 = validarCorreo(datos.correo);
    var val3 = validarContrasenia(datos.contrasenia, datos.contrasenia1);
    if (val1 && val2 && val2 && val3) {
      console.log("Datos validados.");
    }
  }
  function entradaCambio(e) {
    e.persist();
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  onChange={entradaCambio}
                  label="Tu nombre completo"
                  id="form1"
                  type="text"
                  className="w-100"
                  name="nombre"
                />
                <span className="alert">{nombreEr}</span>
              </div>
              <form onSubmit={envioDeFormulario}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    onChange={entradaCambio}
                    label="Tu correo"
                    id="form2"
                    type="email"
                    name="correo"
                  />
                  <span className="alert">{correoEr}</span>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    onChange={entradaCambio}
                    label="Constraseña"
                    id="form3"
                    type="password"
                    name="contrasenia"
                  />
                  <span className="alert">{contraseniaEr}</span>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    onChange={entradaCambio}
                    label="Repita su contraseña"
                    id="form4"
                    type="password"
                    name="contrasenia1"
                  />
                  <span className="alert">{contrasenia1Er}</span>
                </div>

                <div className="mb-4">
                  <a href="/iniciodesesion"> ya tiene una cuenta?</a>
                </div>

                <MDBBtn type="submit" className="mb-4" size="lg">
                  Register
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
