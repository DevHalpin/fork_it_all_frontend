import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import copy from "copy-to-clipboard";

const TwistShareModal = (props) => {
  const {show, onHide, url} = props;

  const message = `Your share link is: ${url}`;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function copyToClipboard() {
    copy(url);
    onHide();
  }
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header onClick={onHide} closeButton>
          <Modal.Title>Share a Twist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>{message}</Form.Label>
            </Form.Group>
            <Button
              onClick={copyToClipboard}
              bsPrefix
              type="submit"
              className="gen-button login-buttons"
            >
              Copy Link
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default TwistShareModal;