import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalAvisos({ titulo, cuerpo, activo, funcion }) {
  const [show, setShow] = useState(activo);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cuerpo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={funcion}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
