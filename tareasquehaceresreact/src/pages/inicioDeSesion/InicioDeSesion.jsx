/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "../../styles/inicioDeSesion.css";

export default function InicioDeSesion() {
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
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="/registroUsuario">Desea registrarse</a>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
