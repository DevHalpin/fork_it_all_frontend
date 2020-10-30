import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/App.scss';
import {Alert} from "react-bootstrap";

function Error() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          This page doesn't exist. Check again!
        </p>
      </Alert>
    );
  }
}

export default Error;