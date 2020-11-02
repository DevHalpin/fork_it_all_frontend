import React, {useState, useEffect} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import axios from "axios";

const TwistEditModal = (props) => {
  const {show, onHide, twist, getSpecifcTwist} = props;
  const [editState, setEditState] = useState({
    content: twist.content,
    private: false,
    category: "Ingredient Replacement",
  });

  useEffect(() => {
    setEditState({content: twist.content});
  }, [twist]);

  const handleEditChange = (event) => {
    const {type, checked} = event.target;
    const eventValue = event.target.value;
    setEditState({
      ...editState,
      [event.target.name]: eventValue,
      [event.target.name]: type === "checkbox" ? checked : eventValue,
    });
  };

  const handleEditSubmit = (event) => {
    axios
      .put(`https://stark-shelf-20245.herokuapp.com/api/twists/${twist.id}`, {
        content: editState.content,
        recipe_id: twist,
        is_private: editState.private,
      })
      .then(() => {
        getSpecifcTwist();
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
            <Modal.Title>Edit your Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditSubmit}>
              <Form.Group>
                <Form.Label>
                  Found a better change for this recipe? Enter it here!
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit your twist"
                  value={editState.content}
                  onChange={handleEditChange}
                  name={"content"}
                />
              </Form.Group>
              <Button
                onClick={onHide}
                bsPrefix
                type="submit"
                className="gen-button login-buttons"
              >
                Submit Twist
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default TwistEditModal;