import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import axios from "axios";

const TwistDeleteModal = (props) => {
  const {show, onHide, twist, random} = props;

  const handleDeleteSubmit = (event) => {
    axios
      .delete(`/api/twists/${twist.id}`, {}, {
        headers: {
          authorization: `Token token=${localStorage.getItem('access_token')}`,
        },
      })
      .then(() => {
        random();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Delete your Twist?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleDeleteSubmit}>
              <Form.Group>
                <Form.Label>
                  Are you sure you want to delete this twist?
                </Form.Label>
              </Form.Group>
              <Button
                className="gen-button logout-button"
                bsPrefix
                type="submit"
                onClick={onHide}
              >
                Delete
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default TwistDeleteModal;