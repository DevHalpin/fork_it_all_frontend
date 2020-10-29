import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import "../styles/Modal.scss";


// Create twist modal
const TwistModal = ({show, onClose}) => {

  return (
    <>
      <Modal show={show}>
        <Modal.Dialog>
          <Modal.Header onClick={onClose} closeButton>
            <Modal.Title>Create a New Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Do you have an idea to make this recipe better? Enter your personal twist here to share it!</Form.Label>
                <Form.Control type="text" placeholder="Enter twist" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Twist
                </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default TwistModal;