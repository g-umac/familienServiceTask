import React from "react";
import Alert from "react-bootstrap/Alert";


const Alert = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>Ihre E-Mail-Adresse wurde erfolgreich geändert!</p>
      <hr />
      <i className="fas fa-check-circle fs-1 mt-md-2 mt-0"></i>
    </Alert>
  );
};

export default Alert;
