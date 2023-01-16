/* eslint-disable jsx-a11y/img-redundant-alt */
  import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import "../../styles/inicioDeSesion.css";

export default function InicioDeSesion() {
  const [datos, setDatos] = useState({
    correo: "",
    contrasenia: "",
  });
  const [datosUsuarios, setDatosUsuarios] = useState(null);
  const [mensajeError, setMensajeError] = useState("");
  const URL = `http://localhost:3001/tareas`;
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(URL, {
        signal: controller.signal,
      })
      .then((response) => {
        setDatosUsuarios(response.data);
        console.log(response.data);
      })
      .catch(console.log("error"));
    return () => {
      controller.abort();
    };
  }, [URL]);

  function inicioDeSesion(usuario, clave) {
    localStorage.setItem("usuario", usuario);
    window.location.href = "/vistaprincipal";
  }
  function validarClaveUsuario(usuario, clave) {
    var us = datosUsuarios.filter((tareas) => tareas._id === usuario);
    if (us.length > 0) {
      if (us[0].clave === clave) {
        inicioDeSesion(usuario, clave);
      }
    } else {
      setMensajeError("El usuario o contrasenia no existen");
    }
  }

  function envioDeFormulario(e) {
    e.preventDefault();
    validarClaveUsuario(datos.correo, datos.contrasenia);
  }
  function entradaCambio(e) {
    e.persist();
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <h4 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Inicio de sesion
              </h4>
              <form onSubmit={envioDeFormulario}>
                <MDBInput
                  onChange={entradaCambio}
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  size="lg"
                  name="correo"
                />
                <MDBInput
                  onChange={entradaCambio}
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="contrasenia"
                >
                  <span className="text-danger">{mensajeError}</span>
                </MDBInput>

                <MDBBtn type="submit" className="mb-4 w-100" size="lg">
                  Iniciar sesion
                </MDBBtn>
              </form>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="/registroUsuario">Desea registrarse</a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
