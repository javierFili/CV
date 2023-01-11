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

  function envioDeFormulario(e) {
    e.preventDefault();
    console.log(datos);
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
