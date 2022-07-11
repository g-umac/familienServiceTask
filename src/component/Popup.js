import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Styles/_Popup.scss";

const Popup = ({
  setEmailOnUI,
  setCurrentEmail,
  currentEmail,
  show,
  setShow,
}) => {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [position, setPosition] = useState("bottom-center");

  const saveHandler = () => {
    setShow(false);
    if (newEmail == confirmEmail) {
      setCurrentEmail(newEmail);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Bitte gib deine Repeate E-Mail-Adresse zweimal an. Deine alte
            E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten
            oder Fragen werden wir dich künftig über die Repeate E-Mail-Adresse
            kontaktieren. Um wieder alle Funktionen des Portals nutzen zu
            können, musst du deine Repeate E-Mail-Adresse bestätigen.
          </p>

          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Label
              className="col-12 font-weight-bolder"
              htmlFor="email"
            ></Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              required
              placeholder="Neue E-Mail-Adresse"
              className="border border-dark rounded-top w-100"
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
            />

            <br></br>
            <Form.Label
              className="col-12 d-flex justify-content-center font-weight-bolder"
              htmlFor="emailConfirm"
            ></Form.Label>
            <Form.Control
              id="emailConfirm"
              placeholder="Neue E-Mail-Adresse wiederholen"
              name="emailConfirm"
              type="email"
              className="border border-dark rounded-top w-100"
              onChange={(e) => setConfirmEmail(e.target.value)}
              value={confirmEmail}
              required
            />
            <Button
              type="submit"
              disabled={confirmEmail !== newEmail}
              className="w-100 d-flex justify-content-center save-button mt-3"
              onClick={saveHandler}
            >
              Speichern
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Popup;
